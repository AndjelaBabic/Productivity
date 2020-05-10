import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../css/Todo.css';

library.add(faTrash)

class List extends React.Component {

  drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card_value = e.dataTransfer.getData('card_value');
    // card will contain list item key, date now 
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    e.target.appendChild(card);
    this.setState({
      currentItem: {
        text: card_value,
        key: card_id
      },
    }, () => {
      console.log('On drop - list');
      console.log(this.state);
      this.addItem(e)
    });
  }

  dragOver = e => {
    e.preventDefault();
    console.log('Drag over list');
  }

  onDragStart = e => {
    const card_id = e.dataTransfer.getData('card_id');
    // card will contain list item key, date now 
    const list_name = e.dataTransfer.getData('list_name');
    // do delete for the appropriate list 
    console.log('On drag start - list');
    console.log(this.state);

    if (list_name === this.props.title) {
      console.log('Deleting item ' + card_id);
      this.deleteItem(card_id);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      title: props.title, 
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.drop = this.drop.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""  &&  !(this.state.items.filter(item => item.key === newItem.key).length > 0)){
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      
      <div className="listOfTodos" onDragStart={this.onDragStart} onDrop={this.drop} onDragOver={this.dragOver} id={this.props.title}>
        <header>
          <form className="to-do-form" onSubmit={this.addItem}>
            <h4> {this.props.title}  </h4>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} listName={this.props.title}/>
        </header>

      </div>
    );
  }
}

export default List;
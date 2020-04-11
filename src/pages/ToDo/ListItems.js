import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const [modalShow, setModalShow] = React.useState(false);
    const items = props.items;
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id); 
        e.dataTransfer.setData('card_value', target.title); 
        e.dataTransfer.setData('list_name', props.listName);

        setTimeout( () => {
            target.style.display = "none";
        }, 0);
        console.log('Drag start list item');
    }

    const dragOver = e => {
        console.log('Drag over list item');
        e.stopPropagation();
    }
    const listItems = items.map(item =>{
       return <div className="list" key={item.key} title={item.text} onDragStart={dragStart} onDragOver={dragOver} draggable="true" id={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
                <FontAwesomeIcon className="faicons" onClick={() => {
            setModalShow(true)
        }} icon="edit" /> }
         {/* { <NewCard show={modalShow} onHide={() => setModalShow(false)} />} */}
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;
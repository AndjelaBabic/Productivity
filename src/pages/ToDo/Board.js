import React from 'react';
import List from "./List";
import { LIST_TODO, LIST_DOING, LIST_DONE } from '../../constants/constants';
import '../../css/Todo.css';


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row_board">
                <List title={LIST_TODO} />
                <List title={LIST_DOING} />
                <List title={LIST_DONE} />
            </div>
        );
    }

}

export default Board;
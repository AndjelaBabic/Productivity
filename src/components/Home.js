import React, { useState } from "react"; 
import HomeContainer from "./styled/HomeContainer"; 
import { addBoard } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ boards, boardOrder, dispatch }) => {
    const [boardTitle, setBoardTitle] = useState(""); 

    const handleSubmit = e => {
       e.preventDefault(); 
       dispatch(addBoard(boardTitle)); 
    }

    const handleChange = e => {
        setBoardTitle(e.target.value); 
    }
    
    const renderCreateBoard = () => {
        return (
          <form onSubmit={handleSubmit}>
            <h3>Create a new Board</h3>
            <input
              onChange={handleChange}
              value={boardTitle}
              placeholder="Your boards title..."
              type="text"
            />
          </form>
        );
    };

    const renderBoards = () => {
      return boardOrder.map(boardID => {
        const board = boards[boardID];
  
        return (
          <Link key={boardID} to={`home/${board.id}` }>
            {board.title}
          </Link>
        );
      });
    };  

    return (
    <HomeContainer>
        {renderBoards()}
        {renderCreateBoard()}
    </HomeContainer>
    );
}; 

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);

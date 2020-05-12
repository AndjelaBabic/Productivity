import React, { useState } from "react"; 
import HomeContainer from "./styled/HomeContainer"; 
import { addBoard } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ boards, dispatch }) => {
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
      console.log(boards); 
      return boards.map(board => {
        return (
          // <Link key={board.id} to={`/${board.id}`}>
            console.log(board)
        //  </Link>
        );
      });
    };

    return (
    <HomeContainer>
        {renderCreateBoard()}
        {renderBoards()}
    </HomeContainer>
    );
}; 

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps)(Home);

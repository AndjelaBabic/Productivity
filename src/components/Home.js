import React, { useState } from "react"; 
import BoardThumbnail from "./styled/BoardThumbnail";
import styled from "styled-components";

import { addBoard } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

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
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <CreateTitle>Create a new Board</CreateTitle>
            <CreateInput
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
          <Link key={boardID} to={`home/${board.id}` } style={{ textDecoration: "none" }}>
             <BoardThumbnail {...board} />
          </Link>
        );
      });
    };  

    return (
    <HomeContainer>
        <Thumbnails>{renderBoards()}</Thumbnails>
        {renderCreateBoard()}
    </HomeContainer>
    );
}; 

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);

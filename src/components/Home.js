import React, { useState, useEffect } from "react"; 
import BoardThumbnail from "./styled/BoardThumbnail";
import styled from "styled-components";

import { addBoard, fetchBoards, fetchLists, fetchBoardOrder, fetchCards } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadBoards, loadLists, loadCards, loadBoardOrder } from "../util/APIUtil";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
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

const Home = ({ boards, boardOrder, user, dispatch }) => {
    const [boardTitle, setBoardTitle] = useState(""); 

    // TODO refactor this, all this api calls 
    useEffect( () => {
         let newBoardsState = {}; 
         (async() => { 
            await loadBoards().then(function (result) {
                result.forEach(element => {
                  let newBoard = {};
                  newBoard.id = element.boardId;
                  newBoard.lists = element.listIds;
                  newBoard.title = element.title;
                  newBoardsState = { ...newBoardsState, [`${newBoard.id}`]: newBoard };
                });
                console.log(newBoardsState);
                dispatch(fetchBoards(newBoardsState)); 
              });
        })();
        let newListsState = {}; 
         (async() => { 
            await loadLists().then(function (result) {
              result.forEach(element => {
                let newList = {};
                newList.id = element.listid; 
                newList.title = element.title; 
                newList.cards = element.cardids;
                newList.board = element.boardid;
                newListsState = { ...newListsState, [ `${newList.id}`]: newList };
              });
              console.log(newListsState);
              dispatch(fetchLists(newListsState)); 
            });
        })();
        let newCardsState = {}; 
         (async() => { 
            await loadCards().then(function (result) {
              result.forEach(element => {
                let newCard = {};
                newCard.id = element.cardid; 
                newCard.text = element.title; 
                newCard.list = element.listid;
                newCardsState = { ...newCardsState, [ `${newCard.id}`]: newCard };
              });
              console.log(newCardsState);
              dispatch(fetchCards(newCardsState)); 
            });
        })();
         (async() => { 
            await loadBoardOrder().then(async function (result) {
              dispatch(fetchBoardOrder(result))  
          });
        })();  
    }, []);
    
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
        {(user && user.isAuthenticated === true) ? "LOGGED IN!" :  "NOT LOGGED IN!" }
        <Thumbnails>{
                (boardOrder && boardOrder.length>0)  ? 
                renderBoards() :
                <div> loading </div> 
          }
        </Thumbnails>
        {renderCreateBoard()}
    </HomeContainer>
    );
}; 

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder, 
  user: state.user
});


export default connect(mapStateToProps)(Home);

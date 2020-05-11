import React, { useState } from "react"; 
import HomeContainer from "./styled/HomeContainer"; 

const Home = ({ boards }) => {
    const [boardTitle, setBoardTitle] = useState(""); 

    const handleSubmit = e => {
       
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

    return (
    <HomeContainer>
        {renderCreateBoard()}
    </HomeContainer>
    );
}; 

export default Home; 
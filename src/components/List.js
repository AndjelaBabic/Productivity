import React from "react"; 
import CardComponent from "./CardComponent";

const List = ({title, cards}) => {
    return (
        <div style={styles.container}> 
            <h4> {title} </h4>
            { cards.map(card => (
            <CardComponent text={card.text}/> 
            ))}
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc", 
        borderRadius: 3, 
        width: 300, 
        padding: 8 
    }
}

export default List; 
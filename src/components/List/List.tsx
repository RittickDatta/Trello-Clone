import React from 'react'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Card from '../Card/Card'

import { uuid } from "uuidv4";
interface Props {
    title: string;
    cards: CardInterface[];
    addCardHandler: Function;
    showCardDetails: Function;
    listId: string,
    handleCardTitleChange: Function,
    boardId: string
}

function List({title, cards, addCardHandler, showCardDetails, listId, handleCardTitleChange, boardId}: Props) {

    const renderCards = (cards: CardInterface[]) => {
        return cards.map((card, index) => {
            return <Card 
                card = {card}
                showCardDetails={showCardDetails}
                handleCardTitleChange={handleCardTitleChange}
                listId={listId}
                boardId={boardId}
            />
        })
    }

    return (
        <div>
            <h2>{title}</h2>
            <span onClick={(e) => addCardHandler(e, listId, {id: uuid(), title: '', listName: title})}>+Add Card</span>
            {renderCards(cards)}
        </div>
    )
}

export default List

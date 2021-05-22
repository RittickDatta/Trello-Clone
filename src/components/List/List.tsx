import React from 'react'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Card from '../Card/Card'

import { uuid } from "uuidv4";
interface Props {
    title: string;
    cards: CardInterface[];
    addCardHandler: Function;
    showCardDetails: Function;
    listId: string
}

function List({title, cards, addCardHandler, showCardDetails, listId}: Props) {

    const renderCards = (cards: CardInterface[]) => {
        return cards.map((card, index) => {
            return <Card 
                card = {card}
                showCardDetails={showCardDetails}
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

import React from 'react'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Card from '../Card/Card'

interface Props {
    title: string;
    cards: CardInterface[];
    addCardHandler: Function;
    showCardDetails: Function;
    listSequence: number
}

function List({title, cards, addCardHandler, showCardDetails, listSequence}: Props) {

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
            <span onClick={() => addCardHandler(listSequence)}>+Add Card</span>
            {renderCards(cards)}
        </div>
    )
}

export default List

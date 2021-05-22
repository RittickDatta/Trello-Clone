import React from 'react'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Card from '../Card/Card'

interface Props {
    title: string;
    cards: CardInterface[];
    addCardHandler: Function;
    showCardDetails: Function
}

function List({title, cards, addCardHandler, showCardDetails}: Props) {

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
            <span onClick={() => addCardHandler()}>+Add Card</span>
            {renderCards(cards)}
        </div>
    )
}

export default List

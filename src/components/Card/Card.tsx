import React from 'react'

import { Comment } from '../../common/interfaces/Comment'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Button from "../../common/ui/Button/Button";

// title = {card.title}
// listName = {card.listName}
// members = {card.members || []}
// description = {card.description || ''}
// toDoLists = {card.toDoLists || []}
// comments = {card.comments || []}

interface Props {
    card: CardInterface,
    showCardDetails: Function,
    handleCardTitleChange: Function,
    listId: string,
    boardId: string
 }
function Card(
    {
        card,
        showCardDetails,
        handleCardTitleChange,
        listId,
        boardId
    } : Props
) {
    const { title, listName} = card;
    return (
        <div>
            {/* <h3>{title}</h3> */}
            <h3><form>
                <input type="text" name="" onChange={(e) => handleCardTitleChange(e, card, listId, boardId)} />
                </form></h3>
            <h5>{listName}</h5>
            <Button 
                btnText='Edit'
                onClickHandler={() => showCardDetails(card)}
            />
        </div>
    )
}

export default Card

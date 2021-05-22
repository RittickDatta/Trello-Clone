import React, {useState} from 'react'

import { Comment } from '../../common/interfaces/Comment'
import { Card as CardInterface } from '../../common/interfaces/Card'
import Button from "../../common/ui/Button/Button";
import CardDetails from '../CardDetails/CardDetails';

interface Props {
    card: CardInterface,
    // showCardDetails: Function,
    handleCardTitleChange: Function,
    listId: string,
    boardId: string,
    handleEditCard:Function
 }
function Card(
    {
        card,
        // showCardDetails,
        handleCardTitleChange,
        listId,
        boardId,
        handleEditCard
    } : Props
) {
    const { title, listName} = card;
    const [show, setShow] = useState(false)

    const showCardDetails = () => {
        setShow(true)
    }

    return (
        <div>
            {/* <h3>{title}</h3> */}
            <h3><form>
                <input type="text" name="" onChange={(e) => handleCardTitleChange(e, card, listId, boardId)} placeholder='card title'/>
                </form></h3>
            <h5>{listName}</h5>
            <Button 
                btnText='Edit'
                onClickHandler={() => showCardDetails()}
            />

            
           {  show && <CardDetails
                    title={card.title || ''}
                    listName={card.listName || ''}
                    members={card.members || []}
                    description={card.description || ''}
                    toDoLists={card.toDoLists || []}
                    comments={card.comments || []}
                    handleEditCard={handleEditCard}
                    card={card}
                    listId={listId}
                    boardId={boardId}
                /> }
            
        </div>
    )
}

export default Card

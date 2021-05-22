import React from 'react'
import { CheckList } from '../../../common/interfaces/CheckList'
import { Member } from '../../../common/interfaces/Member'
import { Comment } from '../../../common/interfaces/Comment'
import { Card } from '../../../common/interfaces/Card'

interface Props {
    title: string,
    listName: string,
    // members: Member[],
    description: string,
    // toDoLists: CheckList[],
    // comments: Comment[],
    handleEditCard: Function,
    card: Card,
    listId: string,
    boardId: string,
    handleChange: Function
}

function CardMain({
    title,
    listName,
    // members,
    description,
    // toDoLists,
    // comments,
    handleEditCard,
    handleChange,
    listId,
    boardId
}: Props) {
    return (
        <div>
            <form onSubmit={(e) => handleEditCard(e, {title:title, description:description}, listId, boardId)} >
            <label htmlFor="title">
                Title
                <input type="text" name="title" value={title} onChange={(e) => handleChange(e, 'title')} />
            </label><br></br>
            <label htmlFor="description">
                Description
                <input type="text" name="description" value={description} onChange={(e) => handleChange(e, 'description')} />
            </label><br></br>
            <input type="submit" value="Done" />
            </form>
        </div>
    )
}

export default CardMain

import React, { Component } from 'react'

import { CheckList } from '../../common/interfaces/CheckList'
import { Member } from '../../common/interfaces/Member'
import { Comment } from '../../common/interfaces/Comment'
import CardMain from './CardMain/CardMain'
import CardAside from './CardAside/CardAside'
import { Card } from '../../common/interfaces/Card'
interface Props {
    title: string,
    listName: string,
    members: Member[],
    description: string,
    toDoLists: CheckList[],
    comments:  Comment[],
    handleEditCard: Function,
    card:Card,
    listId:string,
    boardId: string
}
export class CardDetails extends Component<Props> {

    state = {
       cardData: { 
           title: this.props.title,
            description: this.props.description
        }
    }

    handleChange = (e:any, type:string) => {
        const { name, value } = e;
        console.log({name, value}, type);
        const updatedCardData = {...this.state.cardData}
        switch(type){
            case 'title': updatedCardData.title = value; break;
            case 'description': updatedCardData.description = value; break;
            default:
        }
        this.setState({
            cardData: updatedCardData
        })
    }

    render() {
        const {
            title,
            listName,
            members,
            description,
            toDoLists,
            comments,
            handleEditCard,
            card,
            listId,
            boardId,
        } = this.props;

        return (
            <div>
                <CardMain 
                    title={this.state.cardData.title}
                    listName={listName}
                    // members={members}
                    description={this.state.cardData.description}
                    // toDoLists={toDoLists}
                    // comments={comments}
                    handleEditCard={handleEditCard}
                    card={card}
                    listId={listId}
                    boardId={boardId}
                    handleChange={this.handleChange}
                />
                <CardAside />
            </div>
        )
    }
}

export default CardDetails

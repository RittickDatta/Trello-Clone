import React, { Component } from 'react'

import { Board as BoardInterface} from "../../common/interfaces/Board";
import { Card } from '../../common/interfaces/Card';
import { List } from '../../common/interfaces/List';
import { addCardToList, addListToBoard, loadData, moveCard } from '../../common/utility/dataService';

import ListContainer from "../../components/ListContainer/ListContainer";

interface Props {
    board: BoardInterface,
    boardId: string
}
export class Board extends Component<Props> {

    state = {
        board: {},
    }

    componentDidMount(){
        const loadedData = loadData();
        this.setState({
            board: loadedData
        })
    }

    addListHandler = (e:any, list: List) => {
        e.preventDefault();
        console.log(list);

        const { boardId } = this.props;
        
        addListToBoard(list, boardId)
    }

    addCardHandler = (e:any, listId: string, card: Card) => {
        e.preventDefault();
        console.log(listId);

        const { boardId } = this.props;

        addCardToList(card, boardId, listId)

    }

    handleCardTitleChange = (e:any, card: Card, listId: string, boardId: string) => {
        // Handle title
    }

    handleEditCard = (e:any, card: Card, listId: string, boardId: string) => {
        console.log({card, listId, boardId});
    }

    moveCardHandler = (e:any, card: Card, cardId: string, listId: string, boardId: string) => {
        console.log(cardId, listId, boardId);
        moveCard(card, cardId, listId, boardId)
    }

    showCardDetails = (card: Card) => {
        console.log(card);
        // CardDetails
    }

    render() {
        const {
            board,
            boardId
        } = this.props;
        return (
            <div>
                Board

                <ListContainer
                    lists={board.lists || []}
                    boardId={boardId}
                    addListHandler={this.addListHandler}
                    addCardHandler={this.addCardHandler}
                    // showCardDetails={this.showCardDetails}
                    handleCardTitleChange={this.handleCardTitleChange}
                    handleEditCard={this.handleEditCard}
                    moveCardHandler={this.moveCardHandler}
                />
            </div>
        )
    }
}

export default Board

import React, { Component } from 'react'

import { Board as BoardInterface} from "../../common/interfaces/Board";
import { Card } from '../../common/interfaces/Card';
import { List } from '../../common/interfaces/List';
import { addCardToList, addListToBoard, loadData } from '../../common/utility/dataService';

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
                    addListHandler={this.addListHandler}
                    addCardHandler={this.addCardHandler}
                    showCardDetails={this.showCardDetails}
                />
            </div>
        )
    }
}

export default Board

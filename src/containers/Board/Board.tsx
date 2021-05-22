import React, { Component } from 'react'

import { Board as BoardInterface} from "../../common/interfaces/Board";
import { Card } from '../../common/interfaces/Card';
import { loadData } from '../../common/utility/dataService';

import ListContainer from "../../components/ListContainer/ListContainer";

interface Props {
    board: BoardInterface,
    boardSequence: number
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

    addCardHandler = (card: Card) => {

    }

    showCardDetails = (card: Card) => {
        console.log(card);
    }

    render() {
        const {
            board,
            boardSequence
        } = this.props;
        return (
            <div>
                Board

                <ListContainer
                    lists={board.lists || []}
                    addCardHandler={this.addCardHandler}
                    showCardDetails={this.showCardDetails}
                />
            </div>
        )
    }
}

export default Board

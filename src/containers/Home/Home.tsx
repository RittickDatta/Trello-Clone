import React, { Component } from 'react'
import { loadData, saveData } from '../../common/utility/dataService'
import {Board as BoardInterface} from '../../common/interfaces/Board';
import CreateBoard from '../../components/CreateBoard/CreateBoard';

export class Home extends Component {

    addBoard = (e:any, board: BoardInterface) => {
        e.preventDefault()
        console.log(board);
        saveData(board)
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <CreateBoard 
                    createBoardHandler={this.addBoard}
                />
            </div>
        )
    }
}

export default Home

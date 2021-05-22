import React, { Component } from 'react'

import { Board as BoardInterface} from "../../common/interfaces/Board";
import { loadData } from '../../common/utility/dataService';
interface State {
    board: BoardInterface ;
}
export class Board extends Component<State> {

    state = {
        board: [],
    }

    componentDidMount(){
        const loadedData = loadData();
        this.setState({
            board: loadedData
        })
    }

    render() {
        return (
            <div>
                Board
            </div>
        )
    }
}

export default Board

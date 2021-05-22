import React, { Component } from 'react'
import { Board as BoardsInterface } from "../../common/interfaces/Board";

import { loadData } from "../../common/utility/dataService";
interface State {
    boards: BoardsInterface[]
}
export class Boards extends Component<State> {
    state = {
        boards: []
    }

    componentDidMount(){
        loadData();
    }

    render() {
        return (
            <div>
                Boards
            </div>
        )
    }
}

export default Boards

import React, { Component } from 'react'
import { Boards as BoardsInterface } from "../../common/interfaces/Boards";
interface State {
    boards: BoardsInterface[]
}
export class Boards extends Component<State> {
    state = {
        boards: []
    }

    componentDidMount(){
        
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

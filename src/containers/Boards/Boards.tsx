import React, { Component } from 'react';
import { Board as BoardsInterface } from '../../common/interfaces/Board';

import { loadData } from '../../common/utility/dataService';
import Board from '../Board/Board';
interface State {
  boards: BoardsInterface[];
}
export class Boards extends Component<State> {
  state = {
    boards: [],
  };

  componentDidMount() {
    const loadedData = loadData();
    this.setState(
      {
        boards: loadedData,
      },
      () => console.log(this.state.boards)
    );
  }

  renderBoards = (boards: BoardsInterface[]) => {
    return boards.map((board, index) => {
      return <Board key={board.id} board={board} boardId={board.id} />;
    });
  };

  render() {
    const { boards } = this.state;
    return <>{this.renderBoards(boards)}</>;
  }
}

export default Boards;

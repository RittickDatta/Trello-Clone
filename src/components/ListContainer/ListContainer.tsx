import React from 'react';
import AddList from '../AddList/AddList';
import { List as ListInterface } from '../../common/interfaces/List';
import List from '../List/List';

interface Props {
  lists: ListInterface[];
  addCardHandler: Function;
  // showCardDetails: Function,
  addListHandler: Function;
  handleCardTitleChange: Function;
  boardId: string;
  handleEditCard: Function;
  moveCardHandler: Function;
}

function ListContainer({
  lists,
  addCardHandler,
  // showCardDetails,
  addListHandler,
  handleCardTitleChange,
  boardId,
  handleEditCard,
  moveCardHandler,
}: Props) {
  const renderLists = (lists: ListInterface[]) => {
    return (
      lists &&
      lists.map((list, index) => {
        return (
          <List
            title={list.title}
            cards={list.cards || []}
            addCardHandler={addCardHandler}
            // showCardDetails={showCardDetails}
            listId={list.id}
            boardId={boardId}
            handleCardTitleChange={handleCardTitleChange}
            handleEditCard={handleEditCard}
            moveCardHandler={moveCardHandler}
          />
        );
      })
    );
  };

  return (
    <div>
      {renderLists(lists)}
      <AddList addListHandler={addListHandler} />
    </div>
  );
}

export default ListContainer;

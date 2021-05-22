import React from 'react'
import AddList from '../AddList/AddList'
import { List as ListInterface} from "../../common/interfaces/List";
import List from '../List/List';

interface Props {
    lists: ListInterface[],
    addCardHandler: Function,
    showCardDetails: Function,
    addListHandler: Function
}

function ListContainer({lists, addCardHandler, showCardDetails, addListHandler}:Props) {

    const renderLists = (lists: ListInterface[]) => {
        return lists && lists.map((list, index) => {
            return <List 
                title={list.title}
                cards={list.cards || []}
                addCardHandler={addCardHandler}
                showCardDetails={showCardDetails}
                listId={list.id}
            />
        })
    }

    return (
        <div>
            {renderLists(lists)}
            <AddList 
                addListHandler={addListHandler}
            />
        </div>
    )
}

export default ListContainer

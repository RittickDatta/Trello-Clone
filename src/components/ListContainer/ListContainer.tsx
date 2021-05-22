import React from 'react'
import AddList from '../AddList/AddList'
import { List as ListInterface} from "../../common/interfaces/List";
import List from '../List/List';

interface Props {
    lists: ListInterface[],
    addCardHandler: Function,
    showCardDetails: Function

}

function ListContainer({lists, addCardHandler, showCardDetails}:Props) {

    const renderLists = (lists: ListInterface[]) => {
        return lists.map((list, index) => {
            return <List 
                title={list.title}
                cards={list.cards || []}
                addCardHandler={addCardHandler}
                showCardDetails={showCardDetails}
            />
        })
    }

    return (
        <div>
            {renderLists(lists)}
            <AddList />
        </div>
    )
}

export default ListContainer

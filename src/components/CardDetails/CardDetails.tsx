import React, { Component } from 'react'

import { CheckList } from '../../common/interfaces/CheckList'
import { Member } from '../../common/interfaces/Member'
interface Props {
    title: string,
    listName: string,
    members: Member[],
    description: string,
    toDoLists: CheckList[],
    comments:  Comment[],
}
export class CardDetails extends Component<Props> {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CardDetails

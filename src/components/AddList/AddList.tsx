import React, { Component } from 'react'
import {uuid} from 'uuidv4'
interface Props {
    addListHandler: Function
}
interface State {
    title?: string
}
export class AddList extends Component<Props, State> {

    state = {
        title : ''
    }
    
    handleChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            title: value
        })
    }

    render() {
        const  { addListHandler } = this.props;
        const { title } = this.state;

        return (
            <div>
                <form onClick={(e) => addListHandler(e, {id:uuid(), title})}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={this.handleChange}/>
                    <input type="submit" value="Add List" />
                </form>
            </div>
        )
    }
}

export default AddList

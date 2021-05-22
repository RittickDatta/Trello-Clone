import React, { Component } from 'react'

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
                <form onClick={() => addListHandler(title)}>
                    <input type="text" name="title" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddList

import React, { Component } from 'react'
import { uuid } from 'uuidv4';
interface Props {
    createBoardHandler: Function;
}

interface State {
    title: string
}
export class CreateBoard extends Component<Props, State> {

    state = {
        title: ''
    }

    constructor(props: Props){
        super(props)
    }

    handleChange = (e: any) => {
        const {value} = e.target;
        this.setState({
            title: value
        })
    }

    render() {
        const { createBoardHandler } = this.props;
        return (
            <div>
                <form onSubmit={(e) => createBoardHandler(e, {
                    id: uuid(),
                    title: this.state.title
                    })}>
                    <input type="text" name="title" onChange={e => this.handleChange(e)}/>
                    <input type="submit" value="Create Board" />
                </form>
            </div>
        )
    }
}

export default CreateBoard


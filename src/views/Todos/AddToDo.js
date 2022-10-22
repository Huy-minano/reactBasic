import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        title: '',
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        if(!this.state.title){
            toast.error("a ngu lon!");
            return;
        }
        this.props.addNewToDo(todo)
        this.setState({
            title: ''
        })

    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input onChange={(event) => this.handleOnChangeTitle(event)}
                    type="text"
                    value={title}
                     />
                <button type="button"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }

}

export default AddToDo;
import React from "react";
//import './ListToDos.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';


class ListToDo extends React.Component {

    state = {
        listToDos: [
            {
                id: 'todo1',
                title: 'Doing homework'
            },
            {
                id: 'todo2',
                title: 'Making video'
            },
            {
                id: 'todo3',
                title: 'Watch movie'
            }
        ],
        editTodo: {

        }
    }

    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Wow nhu cac!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listToDos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listToDos: currentTodo
        })
        toast.success("Wow nhu cac!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listToDosCopy = [...listToDos];        
            //Find index of specific object using findIndex method.    
            let objIndex = listToDosCopy.findIndex((item => item.id == todo.id))

            //Update object's name property.
            listToDosCopy[objIndex].title = editTodo.title

            this.setState({
                listToDos: listToDosCopy,
                editTodo:[]
            })
            toast.success("Wow vai ca lion!");
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }



    render() {
        let { listToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>> check empty object', isEmptyObj);
        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>
                                            {index + 1} - {item.title}
                                        </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={(editTodo.title)}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}>
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ListToDo;
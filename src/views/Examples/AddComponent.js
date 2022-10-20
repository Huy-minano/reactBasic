import React from "react";

class AddComponent extends React.Component {

    state = {
        id:'',
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert("Missing required parameter")
            return;
        }
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (

            <div>
                <form>
                    <label htmlfor="fname">Job's Title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlfor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input type="submit" value="Click me"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>      
            </div>
        )
    }
}
export default AddComponent;

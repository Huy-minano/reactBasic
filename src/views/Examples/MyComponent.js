import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs:[
            {
                id: "11",
                title: "developer",
                salary: '500'
            },
            {
                id: "12",
                title: "manager",
                salary: '500'
            },
            {
                id: "13",
                title: "tester",
                salary: '300'
            }
        ]
    }


    addNewJob = (job) => {
        let current = this.state.arrJobs;
        current.push(job)
        this.setState({
            arrJobs: current
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        return (
            <React.Fragment>
                <AddComponent
                    addNewJob= {this.addNewJob}
                    
                />
                <ChildComponent
                    abc = {this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </React.Fragment>        
        )
    }

}

export default MyComponent;
import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { abc } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log(check)
        return (
            <>
                {showJob === true ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                abc.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> 
                                            <span onClick={()=>this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }

}

// const ChildComponent = (props) => {
//     let { name, age, adress, abc } = props
//         return (
//             <>
//                 <div className="job-list">{
//                     abc.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }

//                 </div>
//             </>
//         )
// }

export default ChildComponent;
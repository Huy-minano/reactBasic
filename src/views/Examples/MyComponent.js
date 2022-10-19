import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "trinh",
        age: 24
    }

    handleOnChangeName = (event) => {
        this.setState ({
            name: event.target.value
        }) 
    }

    handleClickButton = (a) =>{
        console.log ("hit the button")
        alert("aaaa")
    }

    render() {

        return(
            <React.Fragment>
            <div className="first">
                <input value={this.state.name} type="text"
                    onChange={ (event) => this.handleOnChangeName(event) }/>
                Hello {this.state['name']}
            </div>
            <div className="second">age: {this.state.age}</div>
            <div className="third">
                <button onClick={ () => this.handleClickButton() }>Click me!</button>
            </div>
            </React.Fragment> 
        )
    }

}

export default MyComponent;
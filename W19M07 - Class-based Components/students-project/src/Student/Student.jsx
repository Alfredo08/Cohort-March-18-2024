import { Component } from "react";

class Student extends Component{
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <>
                <h2> Full name: {this.props.firstName} {this.props.lastName} </h2>
                <p> Age: {this.props.age} </p>
            </>
        );
    }
}

export default Student;
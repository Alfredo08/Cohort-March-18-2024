import { Component } from "react";

class StudentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0
        }
    }

    processAddStudent = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: 0
        });
    }

    render = () => {
        return(<>
            <form onSubmit={this.processAddStudent}>
                <div>
                    <label htmlFor="firstName">
                        First name:
                    </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           value={this.state.firstName}
                           onChange={(e) => this.setState({firstName: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last name:
                    </label>
                    <input type="text"
                           id="lastName"
                           name="lastName"
                           value={this.state.lastName}
                           onChange={(e) => this.setState({lastName: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="age">
                        Age:
                    </label>
                    <input type="number"
                           id="age"
                           name="age"
                           value={this.state.age}
                           onChange={(e) => this.setState({age: e.target.value})} />
                </div>
                <button>
                    Add student
                </button>
            </form>
        </>
        );
    }
}

export default StudentForm;
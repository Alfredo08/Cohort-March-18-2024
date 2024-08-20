import { Component } from 'react';
import axios from 'axios';
import Student from './Student/Student';
import StudentForm from './StudentForm/StudentForm';
import Cat from './Cat/Cat';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      students: [{
        firstName: "Alex",
        lastName: "Miller",
        age: 25
      },
      {
        firstName: "Martha",
        lastName: "Smith",
        age: 27
      },
      {
        firstName: "Roger",
        lastName: "Anderson",
        age: 26
      }],
      counter: 1,
      cats: []
    }
  }

  addOneToCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentDidMount = async () => {
    const newStudent = {
      firstName: "Brianna",
      lastName: "Winstone",
      age: 23
    };

    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
    this.setState({
      students: [...this.state.students, newStudent],
      cats: response.data
    });

    /*
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const data = await response.json();
    this.setState({
      students: [...this.state.students, newStudent],
      cats: data
    });
    */

  }

  addStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    });
  }

  render = () => {
    return(
      <>
        <h1> Add Student </h1>
        <StudentForm addStudent={this.addStudent}/>
        <h1> Students list </h1>
          {this.state.students.map((student, index) => {
            return(<Student firstName={student.firstName}
                            lastName={student.lastName}
                            age={student.age}
                            key={index}/>)
          })}
        
        <h3> Counter: {this.state.counter} </h3>
        <button onClick={this.addOneToCounter}> Add to counter </button>
        <h2> Cat images </h2>
        {this.state.cats.map((cat, index) => {
          return ( <Cat url={cat.url}
                        key={index}/>);
        })}
      </>
    );
  }
}


export default App

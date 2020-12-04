import React from 'react';
import './App.css';
import {ToDoContextConsumer} from './UserContext'

class App extends React.Component {
  state = {
    toDo: {title: "", image: "", description: ""}
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return(
      <div>
        <h2 className="title">Ugly Things </h2>
        <ToDoContextConsumer>
          {({toDos, addToDo}) => (
        <main>
        <input
          className="input"
          type="text"
          name="image"
          placeholder="Image"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br></br>
        <button onClick={() => {
          console.log(this.state)
          this.setState(prevState => ({
          title: "",
          image: "",
          description: ""
        }))
      addToDo({
          title: this.state.title,
          image: this.state.image,
          description: this.state.description
      })}}>Add!</button>
          <br></br>
          <div>

          <ul>
            {toDos.map(toDo => 
            (<li style={{listStyle: "none"}}>
            <h2>{toDo.title}</h2>
            <p>{toDo.description}</p>
  
            <img src={toDo.image} />
            </li>))}
          </ul>
                {/* )} */}
          </div>
          </main>
          )}
        </ToDoContextConsumer>
      </div>
    )
  }
}

export default App;
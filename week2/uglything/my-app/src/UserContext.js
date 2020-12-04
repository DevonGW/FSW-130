import React from 'react'

const {Provider, Consumer} = React.createContext()

class ToDoContextProvider extends React.Component {
    state = {
        toDos: [
            {title: "BarksALot",
            description: "Dog",
            image:"https://www.shutterstock.com/image-photo/close-hairless-mixedbreed-dog-mix-between-129930416"},
            {title: "MeowsALot",
            description: "Cat",
            
            image: "https://www.shutterstock.com/image-photo/funny-face-wet-cat-after-bathing-716173900"},
            {title: "HopsALot",
            description: "rabbit",
            
            image: "https://www.shutterstock.com/image-photo/man-image-sorcerer-hat-rabbit-ears-1794588568"},
        ]
      }

    addToDo = (toDo) => {
        this.setState({toDos: [...this.state.toDos, toDo]})
    }

    render() {
        const {toDos} = this.state
        return (
            <Provider value={{toDos,addToDo: this.addToDo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ToDoContextProvider, Consumer as ToDoContextConsumer}
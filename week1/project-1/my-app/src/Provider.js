import React from 'react'
import ThemeContext from './ThemeContext'
import App from './App'

class Provider extends React.Component {
    constructor () {
        super()
        this.state = {theme: "dark"}
    }
    changeTheme = () => {
        if (this.state.theme === "dark") {
        this.setState({theme:"light"})
        } else {this.setState({theme:"dark"})}
    }
    render() {
        return(
            <ThemeContext.Provider value = {{theme: this.state.theme, changeTheme: this.changeTheme}}>
            <App />
            </ThemeContext.Provider>
        )
    }
}

export default Provider
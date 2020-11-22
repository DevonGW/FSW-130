import React from "react"

import Header from "./Header"
import Button from "./button"
import Footer from "./Footer"

function App(props) {
    return (
        <div>
            <p>{props.data}</p>
            <Header data={props.headerData}/>
            <Button />
            <Footer />
        </div>
    )
}

export default App
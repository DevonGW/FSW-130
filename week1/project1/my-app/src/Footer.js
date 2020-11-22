import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`} id="footer">
                    <p> About </p>
                    <p>Locations</p>
                    <p> Contact Us</p>
                </footer>
            )}
        </ThemeContextConsumer>

    )    
}

export default Footer
  

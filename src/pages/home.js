import React, { Component } from "react";
import Mynavbar from "../components/navbar"
import Intro from "../components/intro"

class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Mynavbar/>
                <Intro/>
            </React.Fragment>
        )
    }
}

export default Home
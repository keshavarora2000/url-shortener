import React, { Component } from 'react'
import './App.css'
import Found from './Found'

class Main extends Component {
  
    constructor() {
        super()
        this.state = {
            bigLink: "",
            shortLink: "",
            start: false
        }
    }

    handleChange = (event) => {
            event.preventDefault()

            const {name, value} = event.target

            this.setState({
                [name]: value
            })      
        
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            found: false,
            start: true
        })

        fetch('https://api.shrtco.de/v2/shorten?url=' + this.state.bigLink)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    found: true,
                    shortLink: data.result.full_short_link
                })

            })
    }

    render() {
        return (
            <div className="main">
                <h1>Create Short Links</h1>
                <p>It is a personalisation tool that enables you to target, engage and drive more customers. Get started for free.</p>
                <form className="short-link" onSubmit={(event) => this.handleSubmit(event)}>
                    <input 
                            type="text"
                            name="bigLink"
                            className="big-link-input"
                            placeholder="Enter the link here to be shorten"
                            onChange={(event) => this.handleChange(event)}
                    /> 
                    <button className="shorten-btn">Shorten!</button>
                </form>
                { this.state.start ? 
                    <Found 
                        found={this.state.found} 
                        shortLink={this.state.shortLink} 
                        start={this.state.start}
                    /> : 
                "" }
            </div>
        )
    }
}

export default Main

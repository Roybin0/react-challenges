import React, { Component } from 'react'
import NavBarChild from './NavBarChild'
import css from "./css/NavBarForm.module.css"

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false,
            buttonText: 'Log in', 
        }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return {
                isLoggedIn: prevState.isLoggedIn === false ? true : false,
                buttonText: prevState.buttonText === 'Log in' ? 'Submit' : 'Log in',
            }
        })
        console.log('Logged In:', this.state.isLoggedIn)
    }
    
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? (
                    <NavBarChild 
                        isLoggedIn={this.state.isLoggedIn}
                        buttonText={this.state.buttonText}
                        handleClick={this.handleClick} 
                    />
                ) : (
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                )}
            </div>
        )
    }
}

export default NavBarForm
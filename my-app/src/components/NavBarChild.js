import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label> 
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <button onClick={props.handleClick}>{props.buttonText}</button>
            </form>
        </div>
    )
}

export default NavBarChild
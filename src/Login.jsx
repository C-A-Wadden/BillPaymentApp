import React from 'react';

function Login(props) {

    return props.loggedIn ? props.username : (
        <div className='login'>
            <form>
                <input 
                    type="text" 
                    value={props.username}
                    name="username" 
                    placeholder="Username"
                    onChange={props.onFormChange}
                />
                <input 
                    type="text" 
                    value={props.password}
                    name="password" 
                    placeholder="Password"
                    onChange={props.onFormChange}
                />
            </form>
        </div>
    );
}

export default Login
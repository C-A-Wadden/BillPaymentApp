import React, { useEffect, useState } from 'react';
import Login from './Login.jsx';
import Bills from './Bills.jsx'

function App () {

    const bill = {
        name: 'Default',
        owing: '0',
        dueDate: new Date()
    };

    // Object to store bill history (list of bill objects), indexed by bill name
    const [bills, setBills] = useState({'Default': [bill], 'Default 2': [bill, bill]});
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onFormChange(event) {
        const {name, value} = event.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    };

    return (
        <div>
            <Login loggedIn={loggedIn} onFormChange={onFormChange} 
                   username={username} password={password} 
            /> 
            <Bills bills={bills} />
        </div>
    )
}
export default App
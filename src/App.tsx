import React, {useCallback, useState} from 'react';
import './App.css';

import {Button} from "./components/Button/Button";
import {UserInfo} from "./components/UserInfo/UserInfo";

import {IUser} from "./types/IUser";

import {useThrottle} from "./hooks/useThrottle";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
    const [users, setUsers] = useState<Record<number, IUser>>({});
    const [showUserId, setShowUserId] = useState(0);

    const receiveRandomUser = useCallback(async () => {

    const id = (Math.ceil(Math.random() * 9));

    if(users[id]){
        setShowUserId(id)
        return
    }

    await fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(user => {
            if(Object.keys(user).length){
                setUsers(prevState => ({...prevState, [id]: user }));
                setShowUserId(id)
            }
        })
        .catch(error => {
            console.error("Error fetching random user:", error)
        })
  }, [users]);

    const throttledReceiveRandomUser = useCallback(useThrottle(receiveRandomUser, 3000), [])

    const handleButtonClick = useCallback(() => {
        const ignore = throttledReceiveRandomUser()
    }, [users])

    return (
        <div className="App">
            <header>Get a random user</header>
            <Button onClick={handleButtonClick} />
            <UserInfo user={users[showUserId]} />
        </div>
    );
}

export default App;

import React, {useCallback, useState, useRef} from 'react';
import './App.css';

import {Button} from "./components/Button/Button";
import {UserInfo} from "./components/UserInfo/UserInfo";

import {IUser} from "./types/IUser";

import {useThrottle} from "./hooks/useThrottle";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const receiveRandomUserRef = useRef<(() => Promise<void>) | null>(null);

  const [item, setItem] = useState<Record<number, IUser>>({});

  const [currentId, setCurrentId] = useState(0);

  receiveRandomUserRef.current = useCallback(async () => {
    const id = (Math.floor(Math.random() * (10 - 1)) + 1);

    if(item && item[id]){
      setCurrentId(id)
    } else {
      try {
        const response = await fetch(`${URL}/${id}`);
        const _user = (await response.json()) as IUser;
        setItem(prevState => ({...prevState, [id]: _user }));
        setCurrentId(id)
      } catch (error) {
        console.error("Error fetching random user:", error);
      }
    }

  }, [item]);


  const throttledReceiveRandomUser = useThrottle(receiveRandomUserRef.current, 1000)

  const handleButtonClick = useCallback(() => {
    const ignore = throttledReceiveRandomUser()
  }, [item])

  return (
    <div className="App">
      <h1>{currentId}</h1>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      <UserInfo user={item[currentId]} />
    </div>
  );
}

export default App;

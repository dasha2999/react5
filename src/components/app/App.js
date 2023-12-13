import { useEffect, useState } from 'react';

import { UserForm } from '../UserForm/UserForm';
import { SearchBar } from '../SearchBar/SearchBar';
import { UserList } from '../UserList/UserList';
import './app.scss';

function App() {

  const [users, setUsers] = useState([])

  const API_URL = 'https://reqres.in/api/users?page=1'


// two way binding

  useEffect(() => {
    fetch(API_URL)
    .then((resp) => resp.json())
    .then(({data}) => setUsers(data))
  }, [])

  // console.log(users)

  function handleClick(searchName) {
    const filteredUsers = users.filter(({first_name, last_name}) => {
      return first_name.toLowerCase().includes(searchName) || last_name.toLowerCase().includes(searchName)
    })
    setUsers(filteredUsers)
    console.log(filteredUsers)
  }

  return (
    <div className="App">
      <UserForm />
      <SearchBar whenClick={handleClick}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

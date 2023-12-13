import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import { UserList} from "../UserList/UserList"


export const SearchUserPage = () => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const API_URL = 'https://reqres.in/api/users?page=1'

    useEffect(() => {
        fetch(API_URL)
        .then((resp) => resp.json())
        .then(({data}) => {
            setUsers(data)
            setFilteredUsers(data)
        })
      }, [])

    function handleClick(searchName) {
        const filteredUsers = users.filter(({first_name, last_name}) => {
          return first_name.toLowerCase().includes(searchName) || last_name.toLowerCase().includes(searchName)
        })
        setFilteredUsers(filteredUsers)
        console.log(filteredUsers)
      }


    return (
       <>
            <SearchBar whenClick={handleClick}/>
            <Link to='/'> Go to main page</Link>
            <UserList users={filteredUsers}/>
       </>
    )
}
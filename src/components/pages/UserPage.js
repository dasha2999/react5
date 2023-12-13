import { useState, useEffect, userId } from "react"
import { Link, useParams } from "react-router-dom"

import { User } from "../User/User"
import preloader from '../../images/preloader.gif'


export const UserPage = () => {
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const { userId } = useParams()

    console.log(userId)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((resp) => resp.json())
        .then(({data}) => setUserData(data))
        .finally(() => setIsLoading(false))
    },[])

    // console.log(window.location.pathname)

    return (
        <>
        {!isLoading
        ? <User {...userData} />
        : <img src={preloader}/>
        }
        <Link to='/'> Go to main page </Link>
        </>
    )
}
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const { Wrapper, CustomLink, UserHeader, UserWrapper, UserInput } = {
    Wrapper: styled.div`
    margin: 50px auto;
    width: 80%;
    border: 2px solid black rgba(0,0,0,.2);
    box-shadow: 4px 4px 6px rgba(0,0,0,.3);
    text-align: center;
    padding: 20px;
    `,
    CustomLink: styled(Link)`
    color: white;
    text-transform: uppercase;
    display: block;
    padding: 10px;
    text-decoration: none;
    font-weight: 400;
    font-size: 22px;
    border: 1px solid #2f2f2f;
    transition: all .5s ease;
    width: 250px;
    margin: 20px auto;
    text-align: center;
    background: #2f2f2f;
        &:hover {
            background: #fff;
            color: #000;
        }
    `,
    UserWrapper: styled.div`
    border: 1px solid orange;
    padding: 10px;
    width: 90%;
    margin: 20px auto;
    `,
    UserHeader: styled.h2`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    `,
    UserInput: styled.input`
    display: block;
    outline: none;
    border: 1px solid #2f2f2f;
    font-style: 20px;
    margin: 10px auto;
    padding: 10px;
    `
}

export const MainPage = () => {
    const [userId, setUserId] = useState('')

    function changeHandler({target: {value}}) {
        setUserId(value)
    }

    // console.log(userId)

    return (
    <Wrapper>
        <h2> Main page </h2>
        <CustomLink to='/search'> Search user </CustomLink>
        <UserWrapper>
        <UserHeader> Enter user ID</UserHeader>
        <UserInput 
        value={userId}
        placeholder='Enter user ID'
        onChange={changeHandler}
        />
        <CustomLink to={`user/${userId}`}> Go to user </CustomLink>
        </UserWrapper>

    </Wrapper>
    )
}
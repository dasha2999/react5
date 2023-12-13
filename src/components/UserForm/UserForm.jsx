import { useRef, useEffect } from "react"

export const UserForm = () => {
    const inputElem = useRef(null)

    console.log(inputElem)

    const focus = () => {
        inputElem.current.focus()
    }

    useEffect(() => {
        inputElem.current.focus()
    }, [])

    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={focus}>Focus</button>
        </>
    )
}
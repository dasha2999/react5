import { User } from '../User/User'

import './user-list.scss'

export const UserList = ({ users }) => {
    return (
        <ul className="user-list">
            {users.map(({ id, ...otherProps }) => {
                return <User key={id} {...otherProps} />
            })}
            {/* {users.map(({ id, first_name, last_name, avatar }) => {
                return <User key={id} first_name={first_name} last_name={last_name} avatar={avatar}/>
            })} */}
        </ul>
    )
}
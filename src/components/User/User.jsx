import './user.scss'

export const User = ({first_name, last_name, avatar}) => {
    return (
        <li className="user">
            <div>
                <img className="avatar" src={avatar} alt="" />
            </div>
            <div>
                {`${first_name} ${last_name}`}
            </div>
        </li>
    )
}
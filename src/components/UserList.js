import UserItem from "./UserItem"

const UserList = ({ users }) => {
    return (

        <ol className="list-group list-group-numbered">
            {
                users.map(val => (
                    <UserItem key={val.id} val={val}/>
                ))
            }
            
        </ol>
    )
}
export default UserList
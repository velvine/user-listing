const UserItem = ({val}) => {
    return (

        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {val.name}
                </div>
                    {val.phone}<br />
                    {val.email}
                </div>
        </li>
    )
}
export default UserItem
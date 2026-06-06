import React from 'react'

const ContactListItem = ({data, handleGetUpdateContactData}) => {
    const handleEdit = () => {
        handleGetUpdateContactData(data)
    }
    return (
        <li>
            <div>
                <h4>{data.name} - <span>{data.type}</span></h4>
                <p>{data.mobile} - {data?.email ?? ''}</p>
            </div>
            <div>
                <button type="button" onClick={handleEdit}>Edit</button>
                <button type="button">Delete</button>
            </div>
            <hr />
        </li>
    )
}

export default ContactListItem

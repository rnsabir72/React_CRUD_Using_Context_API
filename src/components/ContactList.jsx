import React from 'react'
import ContactListItem from './ContactListItem'

const ContactList = ({data, handleGetUpdateContactData}) => {
    return (
       <>
       <h3>Contact Listing</h3>
        <ul>
            {data && data?.length ? data?.map((contact) => <ContactListItem key={contact.id} data={contact} handleGetUpdateContactData={handleGetUpdateContactData} />) : <h3>No Data Found!</h3>}
        </ul>
       </>
    )
}

export default ContactList

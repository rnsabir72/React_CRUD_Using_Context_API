import React, { useContext } from 'react'
import ContactContext from '../context/contactContext/contactContext'
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contact = () => {
    const { isLoading, data, handleAddContact, handleGetUpdateContactData, updateContactData, handleUpdateContact } = useContext(ContactContext);

    console.log({ isLoading, data });

    if (isLoading) {
        return 'Loading'
    }

    return (
        <>
            {/* Form */}
            <ContactForm handleAddContact={handleAddContact} updateContactData={updateContactData} handleUpdateContact={handleUpdateContact} />

            {/* Filter */}

            {/* Listing */}
            <ContactList data={data} handleGetUpdateContactData={handleGetUpdateContactData} />
        </>
    )
}

export default Contact

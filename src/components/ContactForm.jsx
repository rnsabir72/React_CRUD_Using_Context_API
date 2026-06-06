import React, { useEffect, useState } from 'react'

const ContactForm = ({ handleAddContact, updateContactData, handleUpdateContact }) => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        mobile: '',
        type: 'personal'
    })

    useEffect(() => {
        if (updateContactData != null) {
            setContactData({
                name: updateContactData?.name ?? '',
                email: updateContactData?.email ?? '',
                mobile: updateContactData?.mobile ?? '',
                type: updateContactData?.type ?? 'personal'
            })
        }

    }, [updateContactData])

    const handleChange = (e) => {
        setContactData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(updateContactData?.id) {
            handleUpdateContact({...contactData, id: updateContactData.id})
        } else {
            handleAddContact({...contactData, id: Math.floor(Math.random() * 9999)});
        }

        setContactData({
            name: '',
            email: '',
            mobile: '',
            type: 'personal'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Full Name' value={contactData.name} onChange={handleChange} />
            <br />
            <input type="text" name="mobile" id="" placeholder='Mobile #' value={contactData.mobile} onChange={handleChange} />
            <br />
            <input type="email" name="email" id="" placeholder='Email' value={contactData.email} onChange={handleChange} />
            <br />
            <input type="radio" name="type" id="personal" value="personal" onChange={handleChange} />
            <label htmlFor="personal">Personal</label>
            <input type="radio" name="type" id="business" value="business" onChange={handleChange} />
            <label htmlFor="business">Business</label>
            <br />
            <button type="submit">{updateContactData != null ? 'Update' : 'Add'} Contact</button>
        </form>
    )
}

export default ContactForm

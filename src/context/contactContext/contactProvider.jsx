import React, { useReducer } from 'react'
import ContactContext from './contactContext';
import reducerMethod from './contactState';
import { ADD_CONTACT, UPDATE_CONTACT, UPDATE_CONTACT_DATA } from '../constant';

const contacts = [
  {
    id: "CNT001",
    name: "Ali Khan",
    mobile: "03001234567",
    email: "ali.khan@example.com",
    type: "personal",
  },
  {
    id: "CNT002",
    name: "Sara Ahmed",
    mobile: "03111234567",
    email: "sara.ahmed@example.com",
    type: "business",
  },
  {
    id: "CNT003",
    name: "Usman Tariq",
    mobile: "03221234567",
    email: "usman.tariq@example.com",
    type: "personal",
  },
  {
    id: "CNT004",
    name: "Fatima Noor",
    mobile: "03331234567",
    email: "fatima.noor@example.com",
    type: "business",
  },
  {
    id: "CNT005",
    name: "Hassan Raza",
    mobile: "03441234567",
    email: "hassan.raza@example.com",
    type: "personal",
  },
];

const initialState = {
  isLoading: false,
  data: contacts,
  updateContactData: null
}

const ContactProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducerMethod, initialState);

  const handleAddContact = (data) => {
    dispatch({type: ADD_CONTACT, payload: data})
  }

  const handleGetUpdateContactData = (data) => {
    dispatch({type: UPDATE_CONTACT_DATA, payload: data})
  }

  const handleUpdateContact = (data) => {
    dispatch({type: UPDATE_CONTACT, payload: data})
  }

  return (
    <ContactContext.Provider value={{
       ...state,
       handleAddContact,
       handleGetUpdateContactData,
       handleUpdateContact
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactProvider

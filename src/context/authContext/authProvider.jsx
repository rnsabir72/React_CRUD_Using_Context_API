import React from 'react'
import AuthContext from './authContex'

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{
        isAuthenticated: false,
        isLoading: false
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

import React, {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, confirmPasswordReset } from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    setCurrentUser(user ? user : null)
  })
  return () => {
    unsubscribe()
  }
}, [])

useEffect(() => {
  console.log('The user is', currentUser)
}, [currentUser])

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

function forgotPassword(oobCode, newPassword) {
  return sendPasswordResetEmail(auth, oobCode, newPassword)
}

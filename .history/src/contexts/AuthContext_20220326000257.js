import React, {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, confirmPasswordReset } from 'firebase/auth'

context
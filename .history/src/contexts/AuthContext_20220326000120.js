import React, {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, send } from 'firebase/auth'
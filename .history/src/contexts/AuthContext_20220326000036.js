import React, {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
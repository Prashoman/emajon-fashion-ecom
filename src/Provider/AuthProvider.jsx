import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContextProvider = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loding,setLoding] = useState(true);

    const sinUpUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInUser = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) =>{
            setUser(currentUser)
            setLoding(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[])

    const logOut = () =>{
       return signOut(auth);
    }
    const authInfo = {
        user,
        sinUpUser,
        logInUser,
        logOut,
        loding
    }
    return (
        <AuthContextProvider.Provider value={authInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthProvider;
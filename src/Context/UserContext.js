
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setloading] = useState(true);

    const createUser = (email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password); 
    }

    const signIn = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    const logOut = () =>{
        setloading(true);
        return signOut(auth);
    }


    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
       console.log('current User inside state change',currentUser)
       setUser(currentUser);
       setloading(false);
             });

             return () => unsubscribe();

    },[])

    const authinfo ={user,loading,createUser,signIn,logOut}
    return (
        <div>
            <AuthContext.Provider value = {authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
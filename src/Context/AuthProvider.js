import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // user der ke observed korar jonno eikhane onAuthStateChanged use korbo, ar tai ekta useState nite hobe__
    const [user, setUser] = useState(null);


    // loading__________________________________________________________________________
    const [loading, setLoading] = useState(true);




    // For Register______________________________________________________________________
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    // for Login ______________________________________________________________________________________
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }




    // for logOut_____________________________________________________________________________________
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }





    // updateProfile for getting user name and user photo_________________________________________________
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }





    // for onAuthStateChangerd_____________________________________________________________________
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    },[])





    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
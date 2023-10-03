import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user',currentUser);
            setUser(currentUser)
        });
        ()=>{
            unSubscribe();
        }
    }, [])

    const logOut =() =>{
    return signOut(auth);}

    const authinfo = {
        user,
        createUser,
        logIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
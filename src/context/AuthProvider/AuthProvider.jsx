import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from "../../config/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const logoutUser = () => {
        return signOut(auth);
    }

    const authInfo = { 
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleLogin,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
import React from 'react'
import { signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { appAuth } from './appconfig'

const Authorization = React.createContext()

function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider()
    const [user] = useAuthState(appAuth)

    const SignOut = () => signOut(appAuth)

    const SignIn = () => {
        signInWithPopup(appAuth, googleProvider)
    }

    return (
        <Authorization.Provider value={{ appAuth, SignOut, SignIn, user }}>
            {children}
        </Authorization.Provider >
    )
}
export { Authorization }
export default AuthProvider

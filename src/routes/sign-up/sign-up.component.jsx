import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';


const SignUp = ()=>{
    
    useEffect(async ()=> {
        const { user } = getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(user);
        }
    }, [])

    const logGoogleUser = async ()=> {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 

    const logGoogleRedirectUser = async ()=>{
        const { user } = await signInWithGoogleRedirect();
    }

    return (
        <>
            <h1>
                this is the signup page
            </h1>
            <button onClick={logGoogleUser}>
                Sign in with google pop up
            </button>
            <button onClick={logGoogleRedirectUser}>
                Sign in with google redirect
            </button>
        </>
    )
}

export default SignUp;
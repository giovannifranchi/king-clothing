import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignUp = ()=>{
    const logGoogleUser = async ()=> {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 
    return (
        <>
            <h1>
                this is the signup page
            </h1>
            <button onClick={logGoogleUser}>
                Sign in with google pop up
            </button>
        </>
    )
}

export default SignUp;
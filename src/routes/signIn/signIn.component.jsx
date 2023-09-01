import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/singUp/signUpForm.component';


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='container'>
            <h1>
                this is the signup page
            </h1>
            <button onClick={logGoogleUser}>
                Sign in with google pop up
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;
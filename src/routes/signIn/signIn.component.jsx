import { signInWithGooglePopup, createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/singUp/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='container'>
            <div className='row justify-content-center gap-3'>
                <div className='col-sm-6 col-md-5'>
                    <SignInForm />
                </div>
                <div className='col-sm-6 col-md-5'>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn;
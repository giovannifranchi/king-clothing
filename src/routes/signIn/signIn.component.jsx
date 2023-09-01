import { signInWithGooglePopup, createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/singUp/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='container pt-5'>
            <div className='row justify-content-center gap-5'>
                <div className='col-sm-12 col-md-5'>
                    <SignInForm />
                </div>
                <div className='col-sm-12 col-md-5'>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn;
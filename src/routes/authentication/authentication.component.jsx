import SignUpForm from '../../components/singUp/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';


const Authentication = () => {

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

export default Authentication;
import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth,  } from '../../utils/firebase/firebase.utils';
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";


const defaultFormField = {
    email: '',
    password:''
}

const SignInForm = ()=> {
    const [formField, setFormField] = useState(defaultFormField);

    const {email, password} = formField;

    const handleChange = (event)=>{
        const {value, name} = event.target;
        setFormField({...formField, [name]:value});
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    

    return (
        <div>
            <h2 className="mb-3">I already have an account</h2>
            <span className="mb-3">Sing In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='email' name="email" id="email2" type="email" value={email} onChange={handleChange} />
                <FormInput label='password' name="password" id="password2" type="password" value={password} onChange={handleChange} />
                <div className="d-flex justify-content-between">
                    <Button type="submit" text="SIGN IN" />
                    <Button type="button" text="SIGN IN WITH GOOGLE" buttonType="google" onClick={logGoogleUser}/>
                </div>
            </form>
        </div>
    )

}

export default SignInForm;
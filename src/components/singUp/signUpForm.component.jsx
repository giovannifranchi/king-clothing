import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/formInput.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = ()=> {

    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    const handleChange = (event)=> {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();
        const { password, confirmPassword, email, displayName } = formField;
        if(password !== confirmPassword) return;
        const response = await createAuthUserWithEmailAndPassword(email, password, displayName);
        setFormField(defaultFormFields);
    }
    

    return (
        <>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>

                
                <FormInput label='Name' type="text" id="name" name="displayName" onChange={handleChange} value={displayName} required/>

                <FormInput label='Email' type="email" id="email" name="email" onChange={handleChange} value={email} required/>

                <FormInput label='Password' type="password" id="password" name="password" onChange={handleChange} value={password} required/>

                <FormInput label='Confirm Password' type="password" id="confirm" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>

                <button type="submit">SIGN UP</button>
            </form>
        </>
    )
}

export default SignUpForm;


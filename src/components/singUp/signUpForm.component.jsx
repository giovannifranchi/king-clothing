import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="displayName" onChange={handleChange} value={displayName} required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={email} required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={password} required/>

                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" id="confirm" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>

                <button type="submit">SIGN UP</button>
            </form>
        </>
    )
}

export default SignUpForm;


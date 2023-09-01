const SignUpForm = ()=> {
    return (
        <>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={()=>{}}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" required/>

                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" id="confirm" required/>
                
                <button type="submit">SIGN UP</button>
            </form>
        </>
    )
}

export default SignUpForm;


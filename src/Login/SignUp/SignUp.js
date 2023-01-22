import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error , setError] = useState(null);
    const{createUser}=useContext(AuthContext)


    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
    

if(password ==! confirm){
    setError("your password didn't match");
    return;
}
if(password.length < 6){
    setError("your password must be long");
    return;
}


createUser(email,password)
.then(result =>{
    const user = result.user;
    console.log(user);
    form.reset();

})
.catch(error =>console.log(error));




}
    return (
        <div className="form-container">
        <h2 className="form-title"></h2>
        <form  onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
            <label htmlFor="email">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input className='btn-submit' type="submit" ></input>
        </form>
        <p>Already have an account <Link to='/login'>please login</Link></p>
        <p>{error}</p>
      </div>
      
    );
};


export default SignUp;
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {signIn, googleLogin} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail,setloginUserEmail ] = useState('');
    const [token] = useToken(loginUserEmail);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
      navigate(from, {replace: true});
    }
    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setloginUserEmail(data.email)
                // navigate(from, {replace: true});

                
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message);
            });
    }
    const handleGoogle = (data) =>{
      googleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
        const name = user.displayName;
                const email = user.email;
                const role = 'Buyer';

                const loginUser ={
                  name,
                  email,
                  role,
                }
                fetch('http://localhost:5000/login',{
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(loginUser)
                })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if(data.modifiedCount > 0){
                    toast.success("Your are login login successfully");
                  }
                })
      })
      .catch(error => console.log(error));

    }
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="text"
                 {...register("email", {required: "Email is required"})}
                  className="input input-bordered w-full max-w-xs"/>
                  {errors.email && <p className="text-red-600 font-semibold">{errors.email?.message}</p>}
            </div>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password"
                    {...register("password", {
                    required: "Password is required",
                    minLength:{value: 6, message: 'Password must be 6 charecter or more'}
                })}
                 className="input input-bordered w-full max-w-xs"/>
                <label className="label"><span className="label-text">Forget Password</span></label>
                {errors.password && <p className="text-red-600 font-semibold">{errors.password?.message}</p>}
            </div>
          <input className="btn btn-primary w-full mt-5" value="Login" type="submit" />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>New to Phone Resale? <Link className="text-green-400" to='/signup'>Create an Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;

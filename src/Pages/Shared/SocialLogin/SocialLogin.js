import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
//   const [loginUserEmail, setloginUserEmail] = useState('') //11111
//   const [token] = useToken(loginUserEmail); // 222
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

//   if(token){
//     navigate(from, {replace: true});

//   }

  const handleGoogle = (data) =>{
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});

    //   setloginUserEmail(data.email)





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
        <div>
            <p>New to Phone Resale? <Link className="text-green-400" to='/signup'>Create an Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
        
    );
};

export default SocialLogin;
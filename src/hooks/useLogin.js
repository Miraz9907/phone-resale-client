// import { useEffect, useState } from "react"

const useLogin = email =>{
    const currentUser = {
        
    }
    // const [loginToken, setLoginToken] = useState('');
    fetch(`http://localhost:5000/user/${email}`,{
        method: 'PUT',
        headers:{
            'content-type': 'application/json',

        },
        body: JSON.stringify()

    })
        
}
import { useEffect, useState } from "react";
// import { useParams } from 'react-router';

const Auth = () => {

  
  useEffect(() => {
    postDataLogin();
  }, [])

  const postDataLogin = async () => {
    return await fetch('https://dummyjson.com/auth/login'
    , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
        })
      }
      )
      .then(res => res.json())
      .then(console.log);

  }


  return (
    <div className="Auth">
     <h1>Login</h1>
    </div>
  )
}
export default Auth;
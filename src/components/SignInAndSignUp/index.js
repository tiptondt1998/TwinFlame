import React, { useState } from 'react'
import { signUpWithEmail, signInWithEmail } from '../../firebase'

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signup = (e) => {
        e.preventDefault()
        console.log('SUBMITTING')
        try {
          signInWithEmail(email, password).then(data => {

               console.log('DATA:::', data)
               if (data.success) {
                   alert('Singed up successfully')
               } else {
                   alert('signing up failed')
               }
           })
        } catch (error) {
            console.log('error signing up')
        }

    }
    
    return(
        <div>
            <form>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="button" onClick={signup}  value="Submit" />
            </form>
        </div>
    )
}

export default Auth
import React from "react"
import { signupEmail, loginGoogle, getIdToken } from "../services/authservice"
import axios from "axios"

function Auth(){
    const handleEmailSignup = async() => {
        const email = "test@example.com"
        const password = "123456"
        const user = await signupEmail(email, password);
        const token = await getIdToken(user)

        //send token +profile info to the backend
        await axios.post("http://localhost:8000/api/users/firebase-register", {
            idToken: token,
            email: user.email,
            username: user.email.split("@")[0],
            country: "Kenya",
            languages_spoken: "English, Swahili",
            culture_description: "Sharing Kenyan culture"
        });
    };

    const handleGoogleLogin = async () => {
        const user = await loginGoogle()
        const token = await getIdToken(user)

        //send token to backend
        await axios.post("http://localhost:8000/api/users/firebase-register", {
            idToken: token,
            email: user.email,
            username: user.displayName.replace(/\s+/g, "").toLowerCase(),
            country: "Kenya",
            languages_spoken: "English",
            culture_description: "Google user"
        });
    };

    return(
        <div>
            <button onClick={handleEmailSignup}>Sign up with Email</button>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );    
};

export default Auth

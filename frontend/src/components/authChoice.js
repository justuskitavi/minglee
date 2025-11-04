import React from "react"
import { useNavigate } from "react-router-dom"
import { loginGoogle } from "../services/authservice"


function AuthChoice(){
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try{
            await loginGoogle();
            navigate("/");
        } catch (error){
            console.error(error);
            alert("Google sign in failed");
        }
    };

    return (
        <div style = {{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "20px" }}>
            <button onClick={() => navigate("/auth-form")} style={{ padding: "10px 20px" }}>Continue with email</button>
            <button onClick={handleGoogleLogin} style={{ padding: "10px 20px", backgroundColor: "#4285F4", color: "white" }}>Continue with Google</button>
        </div>
    )

}

export default AuthChoice
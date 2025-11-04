import React, { useState } from "react"
import { signupEmail, loginGoogle, getIdToken } from "../services/authservice"
import axios from "axios"

function AuthForm(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        country: "",
        languages_spoken: "",
        culture_description: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    //update form fields
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    //email/password signup
    const handleEmailSignup = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const { email, password, country,languages_spoken, culture_description } = formData
            const user = await signupEmail(email, password);
            const token = await getIdToken(user);

            await axios.post("http://localhost:8000/api/users/firebase-register", {
                idToken: token,
                email, username: email.split("@")[0],
                country,
                languages_spoken,
                culture_description, 
            });

            setMessage("Signup successful!");            
        } catch (error){
            console.error(error);
            setMessage("Sign up failed: " + (error.response?.detail || error.message));
        };
        setLoading(false);
    };

    //google signup/login
    const handleGoogleLogin = async () => {
        setLoading(true);
        try{
            const user = await loginGoogle();
            const token = await getIdToken(user);

            await axios.post("http://localhost:8000/api/users/firebase-register", {
                idToken: token,
                email: user.email,
                username: user.displayName.replace(/\s+/g, "").toLowerCase(),
                languages_spoken: "",
                culture_description:"",
            });
            setMessage("Google sign in successful!");

        } catch (error){
            console.error(error);
            setMessage("Google login failed " + (error.response?.detail || error.message));
        };
        setLoading(false);
    };

    return (
        <div style = {{ maxWidth: "400px", margin: "auto", padding: "20px"}}>
            <h2>Mingle Registration / Profile</h2>
            <form onSubmit={handleEmailSignup}>
                <div>
                    <label>Email:</label>
                    <input
                    type = "email"
                    name = "email"
                    value = {formData.email}
                    onChange={handleChange}
                    required
                    style = {{ width: "100%", marginBottom: "10px"}}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: "10px" }}/>
                </div>
                <div>
                    <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "10px" }}/>
                </div>
                <div>
                    <label>Languages:(coma-separated)</label>
                    <input
                        type="text"
                        name="languages_spoken"
                        value={formData.languages_spoken}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: "10px" }}/>
                </div>
                <div>
                    <label>Culture description:</label>
                    <textarea
                        type="text"
                        name="culture_description"
                        value={formData.culture_description}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: "10px" }}/>
                </div>

                <button type = "submit" disabled={loading} style={{ width: "100%", padding: "10px" }}>
                    {loading ? "Signing up..." : "Sign up with Email"}
                </button>
            </form>

            <hr style = {{ margin: "20px 0" }}/>

            <button
            onClick={handleGoogleLogin}
            disabled = {loading}
            style = {{ width: "100%", padding: "10px", backgroundColor: "#4285F4", colour: "white" }} >
                {loading ? "Processing..." : "Sign in with Google"}
            </button>
            {message && <p style = {{ marginTop: "10px"}}>{message}</p>}
        </div>
    );
};

export default AuthForm
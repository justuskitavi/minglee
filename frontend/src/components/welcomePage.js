import React from "react";
import { useNavigate } from "react-router-dom";


function WelcomePage(){
    const navigate = useNavigate();
    
    return (
        <div style = {{ minHeight: "100vh", display: "flex", 
            flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center", padding: "20px"
        }}>
            <header style = {{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={() => navigate("/auth-choice")} style={{ padding: "10px 20px" }}>Sign up</button>
                <button onClick={() => navigate("/auth-choice")} style={{ padding: "10px 20px" }}>Login</button>
            </header>
            <main>
                <h1>Welcome to Minglee</h1>
                <p>
                    Connect with people around the world, share cultures, and build unity through conversation.
                </p>
            </main>
            <footer style={{ marginBottom: "10px", fontSize: "14px" }}>
                <a href="/about" style={{ marginRight: "15px" }}>About</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </footer>

        </div>
    )
};

export default WelcomePage
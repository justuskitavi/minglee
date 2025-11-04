import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    return(
        <div style = {{ minHeight: "100vh", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <header>
                <button onClick={() => navigate("/")} style = {{ marginBottom: "20px" }}>Back</button>
                <h1>About Minglee</h1>

                <main style = {{ maxWidth: "700px", margin: "0 auto" }}>
                    <p>
                        Minglee is a cultural exchange and connection platform built to promote unity among people across
                        the world. Through authentic conversations, shared stories, and meaningful interactions, Minglee
                        reminds us that humanity thrives when we understand and appreciate our differences.
                    </p>

                    <p>
                        Whether you're meeting someone from a different culture, learning a new language, or just making
                        a friend — Minglee helps you connect, grow, and celebrate diversity in the digital age.
                    </p>
                </main>

                <footer style = {{ marginTop: "40px" }}>
                    <p style = {{ fontSize: "14px", color: "#777" }}>{new Date().getFullYear()} Minglee</p>
                </footer>                
            </header>
        </div>
    );
};

export default About
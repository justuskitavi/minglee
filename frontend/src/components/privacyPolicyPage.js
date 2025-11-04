import React from "react";
import { useNavigate } from "react-router-dom";


function PrivacyPolicy(){
    const navigate = useNavigate();

    return(
        <div style = {{ minHeight: "100vh", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <button onClick={() => navigate("/")} style = {{ marginBottom: "20px" }}>Back</button>
            <header>
                <h1>Privacy policy</h1>
            </header>
            <main style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
                <p>
                    At Minglee, your privacy and trust are very important to us. We collect minimal personal
                    information — such as your name, email address, and optional profile details — to help
                    you connect and communicate safely with other users.
                </p>

                <p>
                    We never sell your data to third parties. Information shared through Minglee (like messages or
                    posts) is only used to provide the services you request. You control what you share and can delete
                    your data at any time.
                </p>

                <p>
                    By using Minglee, you agree to this policy and our community guidelines. If you have questions,
                    feel free to reach out to our support team.
                </p>
            </main>

            <footer style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "14px", color: "#777" }}>© {new Date().getFullYear()} Minglee</p>
            </footer>
        </div>
    )
};

export default PrivacyPolicy
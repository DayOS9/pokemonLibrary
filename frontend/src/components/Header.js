import React from "react";

function Header() {

    return (
        <header >
            <br />
            <h1 style={{
                fontFamily: "'Press Start 2P', cursive",
                color: "#0A285F",
                fontSize: "1.3rem",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                letterSpacing: "2px", 
                margin: "0"
            }}>
                Pokémon Library
            </h1>
            <br />
            <p style={{
                fontFamily: "'Sour Gummy', normal",
                color: "#CE2211",
                fontSize: "1.0rem"
            }}>
                Daois Sanchez Mora
            </p>
            <p style={{
                fontFamily: "'Sour Gummy', normal",
                color: "#CE2211",
                fontSize: "1.0rem"
            }}>
                Justine Sanchez Mora
            </p>
            <p style={{
                fontFamily: "'Sour Gummy', normal",
                color: "#CE2211",
                fontSize: "1.0rem"
            }}>
                Alvin Wang
            </p>
            <p style={{
                fontFamily: "'Sour Gummy', normal",
                color: "#CE2211",
                fontSize: "1.0rem"
            }}>
                Ryan Fernandes
            </p>
        </header>
    )
}

export default Header

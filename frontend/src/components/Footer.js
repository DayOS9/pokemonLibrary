import React from "react";
import footerLogo from "./images/footerLogo.png"

function Footer() {
    return (
        <footer>
            <div>
                <img
                    src={footerLogo}
                    alt="Pokémon Footer Logo"
                    style={{width: "200px", marginBottom: "10px"}}
                />
            </div>
            <p>Pokémon Library Final Project © 2024</p>
            <nav>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                    <li><a href="https://docs.google.com/document/d/1z0yB0QR7TbjIHSRQN4iudeUDyjkOXLtiZftuDmv1GXY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontWeight: 'normal'}}>Assignment Details</a></li>
                    <li><a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontWeight: 'normal'}}>Pokémon API</a></li>
                    <li><a href="https://github.com/DayOS9/pokemonLibrary" target="_blank" rel="noopener noreferrer" style={{color: '#FFF', fontWeight: 'normal'}} >Github Link</a></li>
                    <li><a href="https://docs.google.com/document/d/1xw23eNMznudguenz-clG8soGOxGYiNCTnWinzhHwpFw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontWeight: 'normal'}}>Contact Us</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer

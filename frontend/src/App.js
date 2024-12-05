import React from "react";
import { useState } from "react";

import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from './components/SearchBar';
import Footer from "./components/Footer"

import defpokemon from "./components/images/defpokemon.png"

function App() {
    const [displayPokemon, setDisplayPokemon] = useState();

    return (
        <>
            <div className='App'>
                <div className="SearchBoxContainer">
                    <div className='Header'>
                        <Logo />
                        <Header />
                    </div>
                    <SearchBar setDisplayPokemon={setDisplayPokemon} />
                </div>
                <div className="DisplayContainer">
                    <div className="displayimg">
                        {displayPokemon ? (
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${displayPokemon.id}.png`} alt={`${displayPokemon.name}`} height={400} width={400} />
                        ) : (
                            <img src={defpokemon} alt="Default Pokemon img" height={400} width={400} />
                        )}
                    </div>

                    <div className="displaystats">
                        {displayPokemon ? (
                            <>
                                {displayPokemon.nickname ? 
                                    (<h1>{`${displayPokemon.id}: ${displayPokemon.name} (${displayPokemon.nickname})`}</h1>) :
                                    (<h1>{`${displayPokemon.id}: ${displayPokemon.name}`}</h1>)
                                }
                                <h2>Stats:</h2>
                                <h3>{`HP: ${displayPokemon.stats.hp}`}</h3>
                                <h3>{`ATT: ${displayPokemon.stats.att}`}</h3>
                                <h3>{`DEF: ${displayPokemon.stats.def}`}</h3>
                                <h3>{`SP-ATT: ${displayPokemon.stats.spatt}`}</h3>
                                <h3>{`SP-DEF: ${displayPokemon.stats.spdef}`}</h3>
                                <h3>{`SPEED: ${displayPokemon.stats.spd}`}</h3>
                                <h3>{`WEIGHT: ${displayPokemon.stats.weight}`}</h3>
                                <h3>{`HEIGHT: ${displayPokemon.stats.height}`}</h3>
                                <h2>{`Type: ${displayPokemon.type}`}</h2>
                                <h2>{`Color: ${displayPokemon.color}`}</h2>
                                <h2>{`Generation: ${displayPokemon.generation}`}</h2>
                                <h2>{`Ability: ${displayPokemon.ability}`}</h2>
                            </>
                        ) : (
                            <h1>Search for a Pokemon<br/>to learn more about it!</h1>
                        )}
                    </div>
                </div>
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </>
    );
}

export default App;

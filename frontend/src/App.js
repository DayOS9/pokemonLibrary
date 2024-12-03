import React from "react";
import { useState } from "react";

import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from './components/SearchBar';
import Footer from "./components/Footer"

import defpokemon from "./components/images/defpokemon.png"

function App() {
    const TEMPSTATS = {
        hp: 1,
        att: 2,
        def: 3,
        spatt: 4,
        spdef: 5,
        spd: 6
    };

    const [displayPokemon, setDisplayPokemon] = useState({id:0, name:"sample-display", nickname:"", stats:TEMPSTATS, type:"normal", color:"white", generation:"gen1", ability:"run-away"});

    return (
        <>
            <div className='App'>
                <div className="SearchBoxContainer">
                    <div className='Header'>
                        <Logo />
                        <Header />
                    </div>
                    <SearchBar />
                </div>
                <div className="DisplayContainer">
                    <div className="displayimg">
                        <img src={defpokemon} alt="Default Pokemon img" height={400} width={400} />
                    </div>

                    <div className="displaystats">
                        {displayPokemon.nickname ? 
                            (<h1>{`${displayPokemon.id}: ${displayPokemon.name} (${displayPokemon.nickname})`}</h1>) :
                            (<h1>{`${displayPokemon.id}: ${displayPokemon.name}`}</h1>)
                        }
                        <h1>Stats</h1>
                        <h2>{`HP: ${displayPokemon.stats.hp}`}</h2>
                        <h2>{`ATT: ${displayPokemon.stats.att}`}</h2>
                        <h2>{`DEF: ${displayPokemon.stats.def}`}</h2>
                        <h2>{`SP-ATT: ${displayPokemon.stats.spatt}`}</h2>
                        <h2>{`SP-DEF: ${displayPokemon.stats.spdef}`}</h2>
                        <h2>{`SPEED: ${displayPokemon.stats.spd}`}</h2>
                        <h1>{`Type: ${displayPokemon.type}`}</h1>
                        <h1>{`Color: ${displayPokemon.color}`}</h1>
                        <h1>{`Generation: ${displayPokemon.generation}`}</h1>
                        <h1>{`Ability: ${displayPokemon.ability}`}</h1>
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

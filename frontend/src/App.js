import React from "react";
import { useState, useEffect } from "react";

import './App.css';
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from './components/SearchBar';
import Footer from "./components/Footer"

/*import defpokemon from "./components/images/defpokemon.png" */
import loadinggif from "./components/images/loading.gif"
import favmedal from "./components/images/favorite.png"
import defpokemon from "./components/images/defpokemon1.gif"

function App() {
    const [displayPokemon, setDisplayPokemon] = useState({
            id:-1, 
            name:"sample-name", 
            nickname:"sample-nickname", 
            stats:{
                hp: 0,
                att: 0,
                def: 0,
                spatt: 0,
                spdef: 0,
                spd: 0,
                weight: 0,
                height: 0
            }, 
            type:"sample-type", 
            color:"sample-color", 
            generation:"sample-generation", 
            ability:"sample-ability"
        });

    const [myRadio, setMyRadio] = useState("all");
    const [myDropdown, setMyDropdown] = useState("");
    
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [nickname, setNickname] = useState("");

    const [feedback, setFeedback] = useState("");

    const [loading, setLoading] = useState(true);
    const [dontload, setDontload] = useState(false);

    useEffect(() => {
        console.log("displayPokemon changed");
        if (!dontload) {
            setLoading(true);
        }
        setDontload(false);
        updateFavorites();
    }, [displayPokemon]);

    useEffect(() => {
        if (favorites && favorites.length > 0 && displayPokemon.id.toString() === favorites[0].dexid.toString() && displayPokemon.nickname !== favorites[0].nickname) {
            setDisplayPokemon(prev => ({...prev, nickname: favorites[0].nickname}));
            setDontload(true);
        }
    }, [favorites]);

    const updateFavorites = (e) => {
        fetch("/api/pokemon/all/favorites")
        .then((response) => response.json())
        .then((json) => {
            const favorites = json.filter((user) => {
                return (
                    user &&
                    (user.dexid &&
                    user.dexid.toString() === displayPokemon.id.toString())
                );
            });
            setFavorites(favorites);
            console.log(favorites);
        });
    }

    const handleFavorite = (e) => {
        console.log(displayPokemon);
        fetch(`/api/pokemon/id/${displayPokemon.id}/add/favorites`, {
            method: "POST",
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setFeedback(json.message);
            setInput("");
            setResults([]);
            updateFavorites();
            setDisplayPokemon(prev => ({...prev, nickname: ""}));
            setDontload(true);
        });
    }

    const handleUnfavorite = (e) => {
        console.log(displayPokemon);
        fetch(`/api/pokemon/id/${displayPokemon.id}/delete/favorites`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setFeedback(json.message);
            setInput("");
            setResults([]);
            updateFavorites();
            setDisplayPokemon(prev => ({...prev, nickname: ""}));
            setDontload(true);
        });
    }

    const handleNickname = (e) => {
        console.log(nickname);
        fetch(`/api/pokemon/id/${displayPokemon.id}/nickname`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname: nickname })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setDisplayPokemon({
                id:json.dexid, 
                name:json.dexname, 
                nickname:json.nickname, 
                stats:{
                    hp: json.dexhp,
                    att: json.dexattack,
                    def: json.dexdefense,
                    spatt: json.dexspecialattack,
                    spdef: json.dexspecialdefense,
                    spd: json.dexspeed,
                    weight: json.dexweight,
                    height: json.dexheight
                }, 
                type:json.t_primarytype, 
                color:json.c_colorname, 
                generation:json.g_generationname, 
                ability:json.a_primaryability
            });
            setDontload(true);
            setNickname("");
        });
    }

    return (
        <>
            <div className='App'>
                <div className="SearchBoxContainer">
                    <div className='Header'>
                        <Logo />
                        <Header />
                    </div>
                    <SearchBar 
                        displayid={displayPokemon.id}
                        setDisplayPokemon={setDisplayPokemon} 
                        myRadio={myRadio} myDropdown={myDropdown} 
                        input={input} results={results} 
                        setMyRadio={setMyRadio} 
                        setMyDropdown={setMyDropdown} 
                        setInput={setInput} 
                        setResults={setResults} 
                        setFeedback={setFeedback}
                    />
                </div>
                <div className="DisplayContainer">
                    <div className="displayimg">
                        {displayPokemon && displayPokemon.id >= 0 ? (
                            <>
                            <div style={{display: loading ? "block" : "none"}}>
                                <img src={loadinggif} alt={`Loading Image`} height={400} width={400} />
                            </div>
                            <div style={{display: loading ? "none" : "block"}}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${displayPokemon.id}.png`} alt={`${displayPokemon.name}`} height={400} width={400} onLoad={(e) => {setLoading(false)}} />
                            </div>
                            </>
                        ) : (
                            <img src={defpokemon} alt="Default Pokemon img" height={400} width={400} />
                        )}
                    </div>

                    <div className="displaystats">
                        {displayPokemon && displayPokemon.id >= 0 ? (
                            <>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                {favorites && favorites.length > 0 ? (
                                    <img src={favmedal} height={64} width={64}/>
                                ) : (
                                    <div></div>
                                )}
                                {displayPokemon.nickname ? (
                                    <h1>{`${displayPokemon.id}: ${displayPokemon.name} (${displayPokemon.nickname})`}</h1>
                                ) : (
                                    <h1>{`${displayPokemon.id}: ${displayPokemon.name}`}</h1>
                                )}
                                </div>
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

                {displayPokemon && displayPokemon.id >= 0 ? (
                    <>
                        <div className="FavoritesOptions">
                            {favorites && favorites.length > 0 ? (
                                <>
                                    <button onClick={handleUnfavorite}>Unfavorite Pokemon</button>
                                    <input 
                                        placeholder="Enter a New Nickname!"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value.toString())}
                                    />
                                    <button onClick={handleNickname}>Set Nickname</button>
                                </>
                            ) : (
                                <button onClick={handleFavorite}>Favorite Pokemon</button>
                            )}
                        </div>
                        <h3 style={{textAlign: "center"}}>{feedback}</h3>
                    </>
                ) : (<div></div>)}
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </>
    );
}

export default App;

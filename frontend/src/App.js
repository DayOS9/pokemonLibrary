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
            setFeedback("Nickname Changed!");
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
                                <div style={{fontFamily: "'Press Start 2P', cursive", color: "#0A285F", fontSize: "1.0rem", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", letterSpacing: "0px", margin: "0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                {favorites && favorites.length > 0 ? (
                                    <img src={favmedal} height={64} width={64}/>
                                ) : (
                                    <div></div>
                                )}
                                {displayPokemon.nickname ? (
                                    <h1> {`${displayPokemon.id}: ${displayPokemon.name.toUpperCase()} (${displayPokemon.nickname})`}</h1>
                                ) : (
                                    <h1>{`${displayPokemon.id}: ${displayPokemon.name.toUpperCase()}`}</h1>
                                )}
                                </div>
                                <div className="stats-chart">
                                {Object.entries(displayPokemon.stats).map(([key, value]) => {
                                    const widthOfBar = Math.min((value/ 255) * 100, 100);
                                    return (
                                        <div key={key} className="stat-row">
                                            <div className="stat-name">{key.toUpperCase()}:</div>
                                            <div className="stat-container">
                                            <div className="stat-bar" style={{ width: `${widthOfBar}%` }}></div>
                                            </div>
                                            <div className="stat-value">{value}</div>
                                        </div>
                                    );
                                })}
                                </div>
                                <div className="display-details">
                                <div className="detail-item">
                                    <h3>Type:</h3>
                                    <span className="detail-value">{displayPokemon.type}</span>
                                </div>
                                <div className="detail-item">
                                    <h3>Color:</h3>
                                    <span className="detail-value">{displayPokemon.color}</span>
                                </div>
                                <div className="detail-item">
                                    <h3>Generation:</h3>
                                    <span className="detail-value">{displayPokemon.generation}</span>
                                </div>
                                <div className="detail-item">
                                    <h3>Ability:</h3>
                                    <span className="detail-value">{displayPokemon.ability}</span>
                                </div>
                                </div>
                            </>
                        ) : (
                            <h1 style={{fontFamily: "'Press Start 2P', cursive", color: "#0A285F", fontSize: "1.3rem", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", letterSpacing: "1px", margin: "0"}}> Search for a Pokemon<br/>to learn more about it!</h1>
                        )}
                    </div>
                </div> 

                {displayPokemon && displayPokemon.id >= 0 ? (
                    <>
                        <div className="FavoritesOptions">
                            {favorites && favorites.length > 0 ? (
                                <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <button style={{backgroundColor: "#FFCC00", color: "#FFFFFF", border: "6px solid #0A285F"}} onClick={handleUnfavorite}>Unfavorite Pokemon</button>
                                    <div style={{backgroundColor: "#CE2211", color: "#FFFFFF", border: "6px solid #000000", marginTop: "6px", borderRadius: "12px", width: "300px"}}>
                                        <input 
                                            placeholder="Enter a New Nickname!"
                                            value={nickname}
                                            style={{marginTop: "6px"}}
                                            onChange={(e) => {e.target.value.toString().length <= 18 ? setNickname(e.target.value.toString()) : setNickname(nickname)}}
                                        />
                                        <button style={{marginTop: "8px", marginBottom: "6px"}} onClick={handleNickname}>Set Nickname</button>
                                    </div>
                                </div>
                            ) : (
                                <button style={{backgroundColor: "#CE2211", color: "#FFFFFF", border: "6px solid #000000"}} onClick={handleFavorite}>Favorite Pokemon</button>
                            )}
                        </div>
                        <br />
                        <h3 style={{textAlign: "center", fontFamily: "'Sour Gummy', normal", fontSize: "1.3rem"}}>{feedback.toUpperCase()}</h3>
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

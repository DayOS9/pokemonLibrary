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

    const [feedback, setFeedback] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("displayPokemon changed");
        setLoading(true);
        updateFavorites();
    }, [displayPokemon]);

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
                                <button style={{backgroundColor: "#FFCC00", color: "#FFFFFF", border: "6px solid #0A285F"}} onClick={handleUnfavorite}>Unfavorite Pokemon</button>
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

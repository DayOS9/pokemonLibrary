import React from "react";
import { useState } from "react";
import { SearchResultsList } from "./SearchResultsList";

import "./SearchBar.css"

function SearchBar() {
    const TYPES = [
        {value: "normal", label: "Normal"},
        {value: "fighting", label: "Fighting"},
        {value: "flying", label: "Flying"},
        {value: "poison", label: "Poison"},
        {value: "ground", label: "Ground"},
        {value: "rock", label: "Rock"},
        {value: "bug", label: "Bug"},
        {value: "ghost", label: "Ghost"},
        {value: "steel", label: "Steel"},
        {value: "fire", label: "Fire"},
        {value: "water", label: "Water"},
        {value: "grass", label: "Grass"},
        {value: "electric", label: "Electric"},
        {value: "psychic", label: "Psychic"},
        {value: "ice", label: "Ice"},
        {value: "dragon", label: "Dragon"},
        {value: "dark", label: "Dark"},
    ];
    const COLORS = [
        {value: "red", label: "Red"},
        {value: "yellow", label: "Yellow"},
        {value: "green", label: "Green"},
        {value: "blue", label: "Blue"},
        {value: "purple", label: "Purple"},
        {value: "pink", label: "Pink"},
        {value: "brown", label: "Brown"},
        {value: "black", label: "Black"},
        {value: "gray", label: "Gray"},
        {value: "white", label: "White"},
    ];
    const GENERATIONS = [
        {value: "gen1", label: "Generation I"},
        {value: "gen2", label: "Generation II"},
        {value: "gen3", label: "Generation III"},
    ];
    const ABILITIES = [
        {value: "blaze", label: "Blaze"},
        {value: "torrent", label: "Torrent"},
        {value: "overgrow", label: "Overgrow"},
    ];

    const [myRadio, setMyRadio] = useState("all");
    const [myType, setMyType] = useState("all");
    const [myColor, setMyColor] = useState("all");
    const [myGeneration, setMyGeneration] = useState("all");
    const [myAbility, setMyAbility] = useState("all");

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const handleRadio = (e) => {
        setMyRadio(e.target.value);
    }

    const handleType = (e) => {
        setMyType(e.target.value);
    }

    const handleColor = (e) => {
        setMyColor(e.target.value);
    }
    
    const handleGeneration = (e) => {
        setMyGeneration(e.target.value);
    }
    
    const handleAbility = (e) => {
        setMyAbility(e.target.value);
    }
    
    return (
        <div className="searchbarcontainer">
            <div className="dbtoggles">
                <label htmlFor="toggleall" className="toggle-radio">All Pokemon</label>
                <input type="radio" className="toggle-radio" name="toggle-radio" id="toggleall" value="all" onChange={handleRadio} defaultChecked/>

                <label htmlFor="togglefavorites" className="toggle-radio">Only Favorites</label>
                <input type="radio" className="toggle-radio" name="toggle-radio" id="togglefavorites" value="favorites" onChange={handleRadio}/>

                <select className="toggle-dropdown" id="toggletype" defaultValue={"all"} onChange={handleType}>
                    <option value="all" disabled hidden>Filter By Type</option>
                    <option value="all">All Types</option>
                    {TYPES.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>

                <select className="toggle-dropdown" id="togglecolor" defaultValue={"all"} onChange={handleColor}>
                    <option value="all" disabled hidden>Filter By Color</option>
                    <option value="all">All Colors</option>
                    {COLORS.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>

                <select className="toggle-dropdown" id="togglegeneration" defaultValue={"all"} onChange={handleGeneration}>
                    <option value="all" disabled hidden>Filter By Generation</option>
                    <option value="all">All Generations</option>
                    {GENERATIONS.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>

                <select className="toggle-dropdown" id="toggleability" defaultValue={"all"} onChange={handleAbility}>
                    <option value="all" disabled hidden>Filter By Ability</option>
                    <option value="all">All Abilities</option>
                    {ABILITIES.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>
            </div>

            <div className="input-wrapper">
                <input placeholder="Search for a Pokemon name or Pokedex ID!" value={input} onChange={(e) => handleChange(e.target.value)}/>
            </div>

            {results && results.length > 0 && <SearchResultsList results={results} />}

            {myRadio && <h1>{myRadio}</h1>}
            {myType && <h1>{myType}</h1>}
            {myColor && <h1>{myColor}</h1>}
            {myGeneration && <h1>{myGeneration}</h1>}
            {myAbility && <h1>{myAbility}</h1>}
        </div>
    )
};

export default SearchBar;

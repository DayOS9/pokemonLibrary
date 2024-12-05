import React from "react";
import { useState } from "react";
import { SearchResultsList } from "./SearchResultsList";

import "./SearchBar.css"

function SearchBar({ setDisplayPokemon }) {
    const [TYPES, setTYPES] = useState([
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
    ]);
    const [COLORS, setCOLORS] = useState([
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
    ]);
    const [GENERATIONS, setGENERATIONS] = useState([
        {value: "gen1", label: "Generation I"},
        {value: "gen2", label: "Generation II"},
        {value: "gen3", label: "Generation III"},
    ]);
    const [ABILITIES, setABILITIES] = useState([
        {value: "blaze", label: "Blaze"},
        {value: "torrent", label: "Torrent"},
        {value: "overgrow", label: "Overgrow"},
    ]);

    const [myRadio, setMyRadio] = useState("all");
    const [myDropdown, setMyDropdown] = useState("");

    const [myType, setMyType] = useState("all");
    const [myColor, setMyColor] = useState("all");
    const [myGeneration, setMyGeneration] = useState("all");
    const [myAbility, setMyAbility] = useState("all");

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch("/api/pokemon/all")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    ((user.dexname &&
                    user.dexname.toLowerCase().includes(value)) ||
                    (user.dexid &&
                    user.dexid.toString().includes(value)))
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

    const handleDropdown = (e) => {
        setMyDropdown(e.target.value);
        setMyType("all");
        setMyColor("all");
        setMyGeneration("all");
        setMyAbility("all");
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

                <label htmlFor="togglenone" className="toggle-radio" style={{paddingLeft: "64px"}}>No Filters</label>
                <input type="radio" className="toggle-radio" name="toggle-dropdown" id="togglenone" value="" onChange={handleDropdown} defaultChecked/>

                <label htmlFor="toggletype" className="toggle-radio">Type Filter</label>
                <input type="radio" className="toggle-radio" name="toggle-dropdown" id="toggletype" value="type" onChange={handleDropdown}/>

                <label htmlFor="togglecolor" className="toggle-radio">Color Filter</label>
                <input type="radio" className="toggle-radio" name="toggle-dropdown" id="togglecolor" value="color" onChange={handleDropdown}/>

                <label htmlFor="togglegeneration" className="toggle-radio">Generation Filter</label>
                <input type="radio" className="toggle-radio" name="toggle-dropdown" id="togglegeneration" value="generation" onChange={handleDropdown}/>

                <label htmlFor="toggleability" className="toggle-radio">Ability Filter</label>
                <input type="radio" className="toggle-radio" name="toggle-dropdown" id="toggleability" value="ability" onChange={handleDropdown}/>

                {myDropdown === "type" && (
                <select className="toggle-dropdown" id="toggledropdown" defaultValue={"all"} onChange={handleType}>
                    <option value="all">All Types</option>
                    {TYPES.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>)}

                {myDropdown === "color" && (
                <select className="toggle-dropdown" id="toggledropdown" defaultValue={"all"} onChange={handleColor}>
                    <option value="all">All Colors</option>
                    {COLORS.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>)}

                {myDropdown === "generation" && (
                <select className="toggle-dropdown" id="toggledropdown" defaultValue={"all"} onChange={handleGeneration}>
                    <option value="all">All Generations</option>
                    {GENERATIONS.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>)}

                {myDropdown === "ability" && (
                <select className="toggle-dropdown" id="toggledropdown" defaultValue={"all"} onChange={handleAbility}>
                    <option value="all">All Abilities</option>
                    {ABILITIES.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>)}
            </div>

            <div className="input-wrapper">
                <input placeholder="Search for a Pokemon name or Pokedex ID!" value={input} onChange={(e) => handleChange(e.target.value)}/>
            </div>

            {results && results.length > 0 && <SearchResultsList results={results} setDisplayPokemon={setDisplayPokemon} />}

            {myRadio && <h1>{myRadio}</h1>}
            {myDropdown && <h1>{myDropdown}</h1>}

            {!myDropdown && <h1>myDropdown is null</h1>}
            {myDropdown === "type" && myType && <h1>{myType}</h1>}
            {myDropdown === "color" && myColor && <h1>{myColor}</h1>}
            {myDropdown === "generation" && myGeneration && <h1>{myGeneration}</h1>}
            {myDropdown === "ability" && myAbility && <h1>{myAbility}</h1>}
        </div>
    )
};

export default SearchBar;

import React from "react";
import { useState, useEffect } from "react";
import { SearchResultsList } from "./SearchResultsList";

import "./SearchBar.css"

function SearchBar({ setDisplayPokemon, myRadio, myDropdown, input, results, setMyRadio, setMyDropdown, setInput, setResults }) {
    const [TYPES, setTYPES] = useState([]);
    const [COLORS, setCOLORS] = useState([]);
    const [GENERATIONS, setGENERATIONS] = useState([]);
    const [ABILITIES, setABILITIES] = useState([]);

    /*const [TYPES, setTYPES] = useState([
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
    ]); */

    const [myType, setMyType] = useState("all");
    const [myColor, setMyColor] = useState("all");
    const [myGeneration, setMyGeneration] = useState("all");
    const [myAbility, setMyAbility] = useState("all");

    useEffect(() => {
        fetch("/api/pokemon/type")
            .then((response) => response.json())
            .then((data) => setTYPES(data.map((type) => ({value: type.t_primarytype, label: type.t_primarytype}))));
        fetch("/api/pokemon/color")
            .then((response) => response.json())
            .then((data) => setCOLORS(data.map((color) => ({value: color.c_colorname, label: color.c_colorname}))));
        fetch("/api/pokemon/generation")
            .then((response) => response.json())
            .then((data) => setGENERATIONS(data.map((gen) => ({value: gen.g_generationname, label: gen.g_generationname}))));
        fetch("/api/pokemon/ability")
            .then((response) => response.json())
            .then((data) => setABILITIES(data.map((ability) => ({value: ability.a_primaryability, label: ability.a_primaryability}))));
    }, []);

    const fetchData = (value) => {
        if (myRadio === "all") { 
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
        } else if (myRadio === "favorites") {
            fetch("/api/pokemon/all/favorites")
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
        } else {
            setResults([]);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const handleRadio = (e) => {
        setMyRadio(e.target.value);
        setInput("");
        setResults([]);
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
            {results && input && results.length === 0 && <h1>Pokemon Not Found</h1>}
        </div>
    )
};

export default SearchBar;

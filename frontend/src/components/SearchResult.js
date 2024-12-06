import "./SearchResult.css";

export const SearchResult = ({ result, setResults, setInput, displayid, setDisplayPokemon, setFeedback }) => {
    const handleClick = (e) => {
        if (displayid.toString() !== result.dexid.toString()) {
            setDisplayPokemon({
                id:result.dexid, 
                name:result.dexname, 
                nickname:result.nickname, 
                stats:{
                    hp: result.dexhp,
                    att: result.dexattack,
                    def: result.dexdefense,
                    spatt: result.dexspecialattack,
                    spdef: result.dexspecialdefense,
                    spd: result.dexspeed,
                    weight: result.dexweight,
                    height: result.dexheight
                }, 
                type:result.t_primarytype, 
                color:result.c_colorname, 
                generation:result.g_generationname, 
                ability:result.a_primaryability
            });
            setFeedback(`You chose ${result.dexname}!`);
        }
        setInput("");
        setResults([]);
    }

    return (
        <div className="search-result" onClick={handleClick}>
            {`${result.dexid}: ${result.dexname}`}
        </div>
    );
};
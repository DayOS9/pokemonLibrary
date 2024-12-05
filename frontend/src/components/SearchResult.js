import "./SearchResult.css";

export const SearchResult = ({ result, setDisplayPokemon }) => {
    const handleClick = (e) => {
        setDisplayPokemon({
            id:result.id, 
            name:result.name, 
            nickname:result.username, 
            stats:{hp: 200,att: 21,def: 345,spatt: 423,spdef: 511,spd: 622}, 
            type:result.email, 
            color:result.phone, 
            generation:result.website, 
            ability:result.company.catchPhrase
        });
    }

    return (
        <div className="search-result" onClick={handleClick}>
            {`${result.id}: ${result.name}`}
        </div>
    );
};
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setResults, setInput, displayid, setDisplayPokemon, setFeedback }) => {
    return (
        <div className="results-list">
            {results.map((result) => {
                return <SearchResult key={result.dexid} result={result} setResults={setResults} setInput={setInput} displayid={displayid} setDisplayPokemon={setDisplayPokemon} setFeedback={setFeedback} />;
            })}
        </div>
    );
};
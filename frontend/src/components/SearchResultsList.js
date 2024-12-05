import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setDisplayPokemon }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult key={result.dexid} result={result} setDisplayPokemon={setDisplayPokemon} />;
      })}
    </div>
  );
};
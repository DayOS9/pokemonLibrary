import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setDisplayPokemon }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult key={result.id} result={result} setDisplayPokemon={setDisplayPokemon} />;
      })}
    </div>
  );
};
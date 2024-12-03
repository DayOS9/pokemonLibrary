import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult key={result.id} rid={result.id} rname={result.name} />;
      })}
    </div>
  );
};
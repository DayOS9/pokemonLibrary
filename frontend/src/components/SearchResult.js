import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    const handleClick = (e) => {
        alert(`You selected ${result.id} , ${result.name}!`);
    }

    return (
        <div className="search-result" onClick={handleClick}>
            {`${result.id}: ${result.name}`}
        </div>
    );
};
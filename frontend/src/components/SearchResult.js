import "./SearchResult.css";

export const SearchResult = ({ rid, rname }) => {
    const handleClick = (e) => {
        alert(`You selected ${rid} , ${rname}!`);
    }

    return (
        <div className="search-result" onClick={handleClick}>
            {`${rid}: ${rname}`}
        </div>
    );
};
import './SearchBox.css'

function SearchBar({ city, setCity, onSearch}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(city)
    }

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn" >
                View
            </button>
        </form>
    )
} 


export default SearchBar
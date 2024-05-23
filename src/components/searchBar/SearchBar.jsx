import { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];
export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Location"></input>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Min Price"
        ></input>
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="Max Price"
        ></input>
        <button>
          <img src="/search.png"></img>
        </button>
      </form>
    </div>
  );
}

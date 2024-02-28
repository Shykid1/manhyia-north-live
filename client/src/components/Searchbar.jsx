import { IoSearch } from "react-icons/io5";


const Searchbar = () => {
  return (
    <div className="search-container sticky flex-container">
      <div className="search flex-container">
        <input type="text" name="query" placeholder="Search" />
        <button ><IoSearch/></button>
      </div>
    </div>
  )
}

export default Searchbar

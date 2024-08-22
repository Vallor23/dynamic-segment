import { Link } from "react-router-dom";

export default function Bookshop() {
    return (
      <div className="px-4">
      <h1>list of book shops</h1>
      <ul>
          <li>Book Shop & Stationery</li>
          <li>Simon books</li>
          <li>Dynamic Book home</li>
      </ul>
  
    👉 <Link to="/" className="text-blue-600 inline-block px-4 underline">Names of Books</Link>
  </div>
    )
  }
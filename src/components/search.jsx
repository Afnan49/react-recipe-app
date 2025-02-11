import { useEffect, useState } from "react";
import style from "./search.module.css";
export default function Search({ SetListOfFood }) {
  // const BaseUrl = "https://dummyjson.com/recipes/search";
  const BaseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  const api_key = "219cc29d10314e1ea8941758ce2d633a";
  let [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch((search = e.target.value));
  };

  useEffect(() => {
    async function featchFood() {
      const res = await fetch(`${BaseUrl}?query=${search}&apiKey=${api_key}`);
      const data = await res.json();
      SetListOfFood(data.results);
    }
    featchFood();
  }, [search]);

  return (
    <div className={style.serach_container}>
      <input
        className={style.input}
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
        name="search"
        placeholder="Search For Any Kind Of Food"
      />
    </div>
  );
}

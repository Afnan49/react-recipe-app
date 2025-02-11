import { useEffect, useState } from "react";
import style from "./search.module.css";
export default function Search({ SetListOfFood }) {
  const BaseUrl = "https://dummyjson.com/recipes/search";
  let [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch((search = e.target.value));
  };

  useEffect(() => {
    async function featchFood() {
      const res = await fetch(`${BaseUrl}?q=${search}&select=name,image`);
      const data = await res.json();
      SetListOfFood(data.recipes);
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

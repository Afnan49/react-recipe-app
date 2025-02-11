import { useEffect, useState } from "react";

export default function FoodDetails({ id }) {
  const url = "https://dummyjson.com/recipes";
  const [recpiedet, setRecpiedet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function featchdetails() {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setRecpiedet(data);
      setIsLoading(false);
    }
    featchdetails();
  }, [id]);
  console.log(recpiedet);
  return (
    <div>
      <div>
        <h1>{recpiedet.name}</h1>
        <img src={recpiedet.image} alt="recpie image" />
        <div>
          <span>
            <strong>
              ⏱ {recpiedet.cookTimeMinutes + recpiedet.prepTimeMinutes} Minutes
            </strong>
          </span>
          <span>
            <strong>👨‍👨‍👧‍👦 serves {recpiedet.servings}</strong>
          </span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        <ul>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            recpiedet.instructions.map((inst) => <li key={inst}>{inst}</li>)
          )}
        </ul>
      </div>
    </div>
  );
}

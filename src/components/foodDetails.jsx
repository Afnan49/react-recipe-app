import { useEffect, useState } from "react";
import style from "./foodDetails.module.css";
import ListItem from "./listItem";

export default function FoodDetails({ id }) {
  // const url = "https://dummyjson.com/recipes";
  const url = `https://api.spoonacular.com/recipes/${id}/information`;
  const api_key = "219cc29d10314e1ea8941758ce2d633a";

  const [recpiedet, setRecpiedet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function featchdetails() {
      const res = await fetch(`${url}?apiKey=${api_key}`);
      const data = await res.json();
      setRecpiedet(data);
      setIsLoading(false);
    }
    featchdetails();
  }, [id]);
  console.log(recpiedet);
  return (
    <div>
      <div className={style.recipe_card}>
        <h1 className={style.recipe_name}>{recpiedet.title}</h1>
        <img
          className={style.recipe_image}
          src={recpiedet.image}
          alt="recpie image"
        />
        <div className={style.recipe_details}>
          <span>
            <strong>⏱ {recpiedet.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👧‍👦 serves {recpiedet.servings}</strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ListItem recpiedet={recpiedet} isLoading={isLoading} />
          <h2>Instructions</h2>
          <div className={style.recipe_instructions}>
            <ol>
              {isLoading ? (
                <p>loading.....</p>
              ) : (
                recpiedet.analyzedInstructions[0].steps.map((inst) => (
                  <li key={inst.number}>{inst.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
      {/* {isLoading ? (
        <p>loading.....</p>
      ) : (
        <>
          <div className={style.recipe_card}>
            <h1 className={style.recipe_name}>{recpiedet.name}</h1>
            <img
              className={style.recipe_image}
              src={recpiedet.image}
              alt="recpie image"
            />
            <div className={style.recipe_details}>
              <span>
                <strong>
                  ⏱ {recpiedet.cookTimeMinutes + recpiedet.prepTimeMinutes}{" "}
                  Minutes
                </strong>
              </span>
              <span>
                <strong>👨‍👨‍👧‍👦 serves {recpiedet.servings}</strong>
              </span>
            </div>
            <div>
              <div>
                <h2>Ingredients</h2>
                {recpiedet.ingredients.map((ing) => (
                  <div>
                    <p>{ing}</p>
                  </div>
                ))}
              </div>
              <h2>Instructions</h2>
              <div className={style.recipe_instructions}>
                <ol>
                  {recpiedet.instructions.map((inst) => (
                    <li key={inst}>{inst}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}

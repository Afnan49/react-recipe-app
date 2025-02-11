import style from "./foodItem.module.css";
export default function FoodItem({ food, setId }) {
  const getRecipeByID = (id) => {
    setId(id);
  };

  return (
    // <div className={style.item_container}>
    //   <img className={style.item_image} src={food.image} alt="food" />
    //   <div className={style.item_content}>
    //     <p className={style.item_name}>{food.name}</p>
    //   </div>
    //   <button
    //     className={style.item_button}
    //     onClick={() => {
    //       getRecipeByID(food.id);
    //     }}
    //   >
    //     View Recipe
    //   </button>
    // </div>

    <div className={style.item_container}>
      <img className={style.item_image} src={food.image} alt="food" />
      <div className={style.item_content}>
        <p className={style.item_name}>{food.title}</p>
      </div>
      <button
        className={style.item_button}
        onClick={() => {
          getRecipeByID(food.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}

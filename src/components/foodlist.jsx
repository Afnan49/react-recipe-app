import FoodItem from "./foodItem";

export default function Foodlist({ listOfFood, setId }) {
  return (
    <div>
      {listOfFood.map((food) => (
        <FoodItem food={food} key={food.id} setId={setId} />
      ))}
    </div>
  );
}

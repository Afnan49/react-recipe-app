import style from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={style.item_container}>
        <div className={style.image_container}>
          <img
            className={style.image}
            src={`https://img.spoonacular.com/ingredients_100x100/${item.image}`}
            alt="ing image"
          />
        </div>
        <div className={style.name_container}>
          <div className={style.name}>{item.name}</div>
          <div className={style.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

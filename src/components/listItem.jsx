import Item from "./item";

export default function ListItem({ recpiedet, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>loading.....</p>
      ) : (
        recpiedet.extendedIngredients.map((item) => (
          <Item item={item} key={item.id} />
        ))
      )}
    </div>
  );
}

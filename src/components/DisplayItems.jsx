import Item from "./Item";

export default function DisplayItems({ list, type, handleSave, handleDelete }) {
  const listItems = list.map((item) => (
    <Item
      key={item.id}
      type={type}
      item={item}
      handleSave={handleSave}
      handleDelete={handleDelete}
    />
  ));

  return <div>{listItems}</div>;
}

import Item from "./Item";

export default function DisplayItems({
  list,
  type,
  handleSaveEducation,
  handleDeleteEducation,
}) {
  const listItems = list.map((item) => (
    <Item
      key={item.id}
      item={item}
      type={type}
      handleSaveEducation={handleSaveEducation}
      handleDeleteEducation={handleDeleteEducation}
    />
  ));

  return <div>{listItems}</div>;
}

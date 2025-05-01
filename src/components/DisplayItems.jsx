import Item from "./Item";

export default function DisplayItems({ list, type, handleSaveEducation }) {
  const listItems = list.map((item) => (
    <Item
      key={item.id}
      item={item}
      text={item.name}
      type={type}
      handleSaveEducation={handleSaveEducation}
    />
  ));

  return <div>{listItems}</div>;
}

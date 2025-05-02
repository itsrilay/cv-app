import Item from "./Item";

export default function DisplayItems({ list, type, handleSaveEducation }) {
  const listItems = list.map((item) => (
    <Item
      key={item.id}
      item={item}
      type={type}
      handleSaveEducation={handleSaveEducation}
    />
  ));

  return <div>{listItems}</div>;
}

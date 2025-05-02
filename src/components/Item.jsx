import { useState } from "react";
import EducationForm from "./Education/EducationForm";
import WorkForm from "./Work/WorkForm";

export default function Item({ item, type, handleSave, handleDelete }) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <>
      <div className='item-container'>
        <button className='expand-item' onClick={handleToggle}>
          <h3>
            {type === "Education"
              ? item.schoolName
              : type === "Work"
              ? item.company
              : null}
          </h3>
          <span className='material-symbols-outlined'>keyboard_arrow_down</span>
        </button>
        <div className={hide ? "item-body hide" : "item-body"}>
          {type === "Education" ? (
            <EducationForm
              item={item}
              handleSaveEducation={handleSave}
              handleDeleteEducation={handleDelete}
            />
          ) : type === "Work" ? (
            <WorkForm
              item={item}
              handleSaveWork={handleSave}
              handleDeleteWork={handleDelete}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

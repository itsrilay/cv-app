import { useState } from "react";
import DisplayItems from "../DisplayItems";

export default function EducationSection({
  educationList,
  handleNew,
  handleSaveEducation,
}) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <div className='form-section'>
      <button className='expand-button' onClick={handleToggle}>
        <h2>Education</h2>
        <span className='material-symbols-outlined'>keyboard_arrow_down</span>
      </button>
      <div className={hide ? "form-section-body hide" : "form-section-body"}>
        <>
          <DisplayItems
            type='Education'
            list={educationList}
            handleSaveEducation={handleSaveEducation}
          />
          <button className='new' onClick={handleNew}>
            New
          </button>
        </>
      </div>
    </div>
  );
}

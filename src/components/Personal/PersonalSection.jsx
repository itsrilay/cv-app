import { useState } from "react";
import PersonalForm from "./PersonalForm";

export default function PersonalSection({ personalInfo, handleSavePersonal }) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <div className='form-section'>
      <button className='expand-button' onClick={handleToggle}>
        <h2>Personal</h2>
        <span className='material-symbols-outlined'>keyboard_arrow_down</span>
      </button>
      <div className={hide ? "form-section-body hide" : "form-section-body"}>
        <>
          <PersonalForm
            personalInfo={personalInfo}
            handleSavePersonal={handleSavePersonal}
          />
        </>
      </div>
    </div>
  );
}

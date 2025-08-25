import { useState } from 'react';
import DisplayItems from '../DisplayItems';

export default function EducationSection({
  educationList,
  handleNewEducation,
  handleSaveEducation,
  handleDeleteEducation,
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
      <div className={hide ? 'form-section-body hide' : 'form-section-body'}>
        <>
          <DisplayItems
            list={educationList}
            type='Education'
            handleSave={handleSaveEducation}
            handleDelete={handleDeleteEducation}
          />
          <button className='btn new' onClick={handleNewEducation}>
            New
          </button>
        </>
      </div>
    </div>
  );
}

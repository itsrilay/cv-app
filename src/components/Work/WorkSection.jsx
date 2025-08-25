import { useState } from 'react';
import DisplayItems from '../DisplayItems';

export default function WorkSection({
  workList,
  handleNewWork,
  handleSaveWork,
  handleDeleteWork,
}) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <div className='form-section'>
      <button className='expand-button' onClick={handleToggle}>
        <h2>Work</h2>
        <span className='material-symbols-outlined'>keyboard_arrow_down</span>
      </button>
      <div className={hide ? 'form-section-body hide' : 'form-section-body'}>
        <>
          <DisplayItems
            list={workList}
            type='Work'
            handleSave={handleSaveWork}
            handleDelete={handleDeleteWork}
          />
          <button className='btn new' onClick={handleNewWork}>
            New
          </button>
        </>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function WorkForm({ item, handleSaveWork, handleDeleteWork }) {
  const [formData, setFormData] = useState({
    company: item.company,
    position: item.position,
    responsibilities: item.responsibilities,
    dateFrom: item.dateFrom,
    dateTo: item.dateTo,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveWork(item.id, formData);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleDeleteWork(item.id);
  };

  return (
    <form className='work' onSubmit={handleSubmit}>
      <label htmlFor='company'>Company Name</label>
      <input
        id='company'
        name='company'
        type='text'
        value={formData.company}
        onChange={handleChange}
      />

      <label htmlFor='position'>Position Title</label>
      <input
        id='position'
        name='position'
        type='text'
        value={formData.position}
        onChange={handleChange}
      />

      <label htmlFor='responsibilities'>Main Responsibilities</label>
      <input
        id='responsibilities'
        name='responsibilities'
        type='text'
        value={formData.responsibilities}
        onChange={handleChange}
      />

      <label htmlFor='dateFrom'>Date From</label>
      <input
        id='dateFrom'
        name='dateFrom'
        type='text'
        value={formData.dateFrom}
        onChange={handleChange}
      />

      <label htmlFor='dateTo'>Date To</label>
      <input
        id='dateTo'
        name='dateTo'
        type='text'
        value={formData.dateTo}
        onChange={handleChange}
      />

      <div className='buttons'>
        <button className='save'>Save</button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
}

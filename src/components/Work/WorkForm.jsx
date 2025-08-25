import { useState } from 'react';

export default function WorkForm({ item, handleSaveWork, handleDeleteWork }) {
  const [formData, setFormData] = useState({
    company: item.company,
    position: item.position,
    responsibilities: item.responsibilities,
    date: item.date,
    companyAddress: item.companyAddress,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <textarea
        cols={4}
        rows={10}
        id='responsibilities'
        name='responsibilities'
        type='text'
        value={formData.responsibilities}
        onChange={handleChange}
      />

      <label htmlFor='date'>Date</label>
      <input
        id='date'
        name='date'
        type='text'
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor='companyAddress'>Company Address</label>
      <input
        id='companyAddress'
        name='companyAddress'
        type='text'
        value={formData.companyAddress}
        onChange={handleChange}
      />

      <div className='buttons'>
        <button className='btn save'>Save</button>
        <button className='btn delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
}

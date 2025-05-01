import { useState } from "react";

export default function EducationForm({ item, handleSaveEducation }) {
  const [formData, setFormData] = useState({
    schoolName: item.schoolName,
    studyTitle: item.studyTitle,
    studyDate: item.studyDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEducation(item.id, formData);
  };
  return (
    <form className='education' onSubmit={handleSubmit}>
      <label htmlFor='schoolName'>School Name</label>
      <input
        id='schoolName'
        name='schoolName'
        type='text'
        value={formData.schoolName}
        onChange={handleChange}
      />

      <label htmlFor='studyTitle'>Title of Study</label>
      <input
        id='studyTitle'
        name='studyTitle'
        type='text'
        value={formData.studyTitle}
        onChange={handleChange}
      />

      <label htmlFor='studyDate'>Date of Study</label>
      <input
        id='studyDate'
        name='studyDate'
        type='text'
        value={formData.studyDate}
        onChange={handleChange}
      />

      <button className='save'>Save</button>
    </form>
  );
}

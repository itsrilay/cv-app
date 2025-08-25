import { useState } from 'react';

export default function PersonalForm({ personalInfo, handleSavePersonal }) {
  const [formData, setFormData] = useState({
    name: personalInfo.name,
    email: personalInfo.email,
    phone: personalInfo.phone,
    address: personalInfo.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSavePersonal(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor='phone'>Phone Number</label>
      <input
        id='phone'
        name='phone'
        type='tel'
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor='address'>Address</label>
      <input
        type='text'
        name='address'
        id='address'
        value={formData.address}
        onChange={handleChange}
      />

      <button className='btn save'>Save</button>
    </form>
  );
}

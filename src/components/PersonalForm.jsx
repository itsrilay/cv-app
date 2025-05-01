export default function PersonalForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        // value={data.name}
        // onChange={onChange}
      />

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        name='email'
        type='email'
        // onChange={onChange}
        // value={data.email}
      />

      <label htmlFor='phone'>Phone Number</label>
      <input
        id='phone'
        name='phone'
        type='tel'
        // onChange={onChange}
        // value={data.phone}
      />

      <button className='save'>Save</button>
    </form>
  );
}

export default function WorkForm({ data, onChange }) {
  return (
    <form className='work' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='company'>Company Name</label>
      <input
        id='company'
        name='company'
        type='text'
        onChange={onChange}
        value={data.company}
      />

      <label htmlFor='position'>Position Title</label>
      <input
        id='position'
        name='position'
        type='text'
        onChange={onChange}
        value={data.position}
      />

      <label htmlFor='responsibilities'>Main Responsibilities</label>
      <input
        id='responsibilities'
        name='responsibilities'
        type='text'
        onChange={onChange}
        value={data.responsibilities}
      />

      <label htmlFor='dateFrom'>Date From</label>
      <input
        id='dateFrom'
        name='dateFrom'
        type='text'
        onChange={onChange}
        value={data.dateFrom}
      />

      <label htmlFor='dateTo'>Date To</label>
      <input
        id='dateTo'
        name='dateTo'
        type='text'
        onChange={onChange}
        value={data.dateTo}
      />

      <button className='save'>Save</button>
    </form>
  );
}

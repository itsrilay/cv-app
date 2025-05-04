export default function DisplayWorks({ works }) {
  const listWorks = works.map((works) => (
    <div className='work-info' key={works.id}>
      <div className='info-container'>
        <p>{works.date}</p>
        <p>{works.companyAddress}</p>
      </div>
      <div className='info-container'>
        <p>
          <b>{works.company}</b>
        </p>
        <p>{works.position}</p>
        <p className='allow-new-line'>{works.responsibilities}</p>
      </div>
    </div>
  ));

  return <>{listWorks}</>;
}

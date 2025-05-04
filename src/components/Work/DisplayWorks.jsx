export default function DisplayWorks({ works }) {
  const listWorks = works.map((work) => (
    <div className='work-info' key={work.id}>
      <div className='info-container'>
        <p>{work.date}</p>
        <p>{work.companyAddress}</p>
      </div>
      <div className='info-container'>
        <p>
          <b>{work.company}</b>
        </p>
        <p>{work.position}</p>
        <p className='allow-new-line'>{work.responsibilities}</p>
      </div>
    </div>
  ));

  return <>{listWorks}</>;
}

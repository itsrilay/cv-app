export default function DisplayWorks({ works }) {
  const listWorks = works.map((works) => (
    <div className='work-info' key={works.id}>
      <h3>{works.company}</h3>
      <p>{works.position}</p>
      <p>{works.responsibilities}</p>
      <p>{works.dateFrom}</p>
      <p>{works.dateTo}</p>
    </div>
  ));

  return <>{listWorks}</>;
}

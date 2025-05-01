export default function DisplayEducations({ educations }) {
  const listEducations = educations.map((education) => (
    <div className='education-info' key={education.id}>
      <h3>{education.schoolName}</h3>
      <p>{education.studyTitle}</p>
      <p>{education.studyDate}</p>
    </div>
  ));

  return <>{listEducations}</>;
}

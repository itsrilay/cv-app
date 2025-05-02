import EducationSection from "./Education/EducationSection";

export default function FormContainer({
  educationList,
  handleNewEducation,
  handleSaveEducation,
  handleDeleteEducation,
}) {
  return (
    <section className='form-container'>
      {/* <FormSection name='Personal' /> */}
      <EducationSection
        handleNewEducation={handleNewEducation}
        educationList={educationList}
        handleSaveEducation={handleSaveEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      {/* <FormSection
        name='Education'
        list={educationList}
        onChange={handleChange}
      /> */}
      {/* <FormSection name='Work' list={workList} /> */}
    </section>
  );
}

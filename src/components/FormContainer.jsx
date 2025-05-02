import PersonalSection from "./Personal/PersonalSection";
import EducationSection from "./Education/EducationSection";
import WorkSection from "./Work/WorkSection";

export default function FormContainer({
  personalInfo,
  handleSavePersonal,
  educationList,
  handleNewEducation,
  handleSaveEducation,
  handleDeleteEducation,
  workList,
  handleNewWork,
  handleSaveWork,
  handleDeleteWork,
}) {
  return (
    <section className='form-container'>
      <PersonalSection
        personalInfo={personalInfo}
        handleSavePersonal={handleSavePersonal}
      />
      <EducationSection
        handleNewEducation={handleNewEducation}
        educationList={educationList}
        handleSaveEducation={handleSaveEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <WorkSection
        handleNewWork={handleNewWork}
        workList={workList}
        handleSaveWork={handleSaveWork}
        handleDeleteWork={handleDeleteWork}
      />
    </section>
  );
}

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
      <div className='template-disclaimer'>
        <b>
          The example demo is fictional and based on the character from the{" "}
          <i>Breaking Bad</i>.
        </b>
      </div>
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

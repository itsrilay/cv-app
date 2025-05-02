// import { useState } from "react";
import EducationSection from "./Education/EducationSection";

export default function FormContainer({
  educationList,
  handleNew,
  handleSaveEducation,
}) {
  // const [workList, setWorkList] = useState([]);

  return (
    <section className='form-container'>
      {/* <FormSection name='Personal' /> */}
      <EducationSection
        handleNew={handleNew}
        educationList={educationList}
        handleSaveEducation={handleSaveEducation}
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

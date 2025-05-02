import FormContainer from "./FormContainer";
import { Result } from "./Result";
import { useState } from "react";

let id = 0;

export default function App() {
  const [educationList, setEducationList] = useState([]);

  const handleSaveEducation = (id, updatedData) => {
    setEducationList(
      educationList.map((education) =>
        education.id === id ? { ...education, ...updatedData } : education
      )
    );
  };

  const handleNewEducation = () => {
    console.log(educationList);
    setEducationList([
      ...educationList,
      { id: id++, schoolName: "New Item", studyTitle: "", studyDate: "" },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter((education) => education.id !== id));
  };

  return (
    <>
      <FormContainer
        educationList={educationList}
        handleNewEducation={handleNewEducation}
        handleSaveEducation={handleSaveEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <Result educations={educationList} />
    </>
  );
}

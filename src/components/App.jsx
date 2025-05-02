import FormContainer from "./FormContainer";
import { Result } from "./Result";
import { useState } from "react";

let id = 0;

export default function App() {
  const [educationList, setEducationList] = useState([]);
  const [workList, setWorkList] = useState([]);

  // Education
  const handleSaveEducation = (id, updatedData) => {
    setEducationList(
      educationList.map((education) =>
        education.id === id ? { ...education, ...updatedData } : education
      )
    );
  };

  const handleNewEducation = () => {
    setEducationList([
      ...educationList,
      { id: id++, schoolName: "New Item", studyTitle: "", studyDate: "" },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter((education) => education.id !== id));
  };

  // Work
  const handleSaveWork = (id, updatedData) => {
    setWorkList(
      workList.map((work) =>
        work.id === id ? { ...work, ...updatedData } : work
      )
    );
  };

  const handleNewWork = () => {
    setWorkList([
      ...workList,
      {
        id: id++,
        company: "New Item",
        position: "",
        responsibilities: "",
        dateFrom: "",
        dateTo: "",
      },
    ]);
  };

  const handleDeleteWork = (id) => {
    setWorkList(workList.filter((work) => work.id !== id));
  };

  return (
    <>
      <FormContainer
        educationList={educationList}
        handleNewEducation={handleNewEducation}
        handleSaveEducation={handleSaveEducation}
        handleDeleteEducation={handleDeleteEducation}
        workList={workList}
        handleNewWork={handleNewWork}
        handleSaveWork={handleSaveWork}
        handleDeleteWork={handleDeleteWork}
      />
      <Result educations={educationList} works={workList} />
    </>
  );
}

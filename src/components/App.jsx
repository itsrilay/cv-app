import FormContainer from "./FormContainer";
import { Result } from "./Result";
import { useState } from "react";

let id = 0;

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Walter White",
    email: "heisenberg.chemist@manufacturing.com",
    phone: "007091958",
    address: "New Mexico, US",
  });
  const [educationList, setEducationList] = useState([]);
  const [workList, setWorkList] = useState([]);

  // Personal
  const handleSavePersonal = (updatedData) => {
    setPersonalInfo(updatedData);
  };

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
        personalInfo={personalInfo}
        handleSavePersonal={handleSavePersonal}
        educationList={educationList}
        handleNewEducation={handleNewEducation}
        handleSaveEducation={handleSaveEducation}
        handleDeleteEducation={handleDeleteEducation}
        workList={workList}
        handleNewWork={handleNewWork}
        handleSaveWork={handleSaveWork}
        handleDeleteWork={handleDeleteWork}
      />
      <Result
        personal={personalInfo}
        educations={educationList}
        works={workList}
      />
    </>
  );
}

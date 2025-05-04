import FormContainer from "./FormContainer";
import { Result } from "./Result";
import { useState } from "react";

let id = 0;

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Walter White",
    email: "walter.white@abqmail.com",
    phone: "(505) 555-0199",
    address: "Albuquerque, New Mexico",
  });
  const [educationList, setEducationList] = useState([
    {
      schoolName: "California Institute of Technology (Caltech)",
      studyTitle: "Ph.D. in Chemistry",
      studyDate: "1985",
      location: "Pasadena, CA",
    },
    {
      schoolName: "University of New Mexico",
      studyTitle: "B.S. in Chemistry, Summa Cum Laude",
      studyDate: "1978",
      location: "Albuquerque, NM",
    },
  ]);

  const [workList, setWorkList] = useState([
    {
      company: "J. P. Wynne High School",
      position: "Chemistry Teacher",
      responsibilities:
        "- Taught high school chemistry with a focus on organic chemistry and lab safety.\n" +
        "- Developed innovative, engaging lab experiments to promote student interest in science.\n" +
        "- Known for strict discipline and high academic standards.",
      date: "1995 – 2008",
      companyAddress: "Albuquerque, NM",
    },
    {
      company: "Sandia Laboratories",
      position: "Research Chemist",
      responsibilities:
        "- Contributed to scientific research in crystallography and chemical analysis.\n" +
        "- Co-authored several papers on advanced chemical processes.\n" +
        "- Left to pursue teaching and family stability.",
      date: "Early Career",
      companyAddress: "Albuquerque, NM",
    },
    {
      company: "Gray Matter Technologies",
      position: "Research Scientist / Co-Founder",
      responsibilities:
        "- Co-founded biotech company focusing on cutting-edge chemical technologies.\n" +
        "- Played a major role in research and intellectual development.\n" +
        "- Departed early in company’s history before major growth phase.",
      date: "Early Career",
      companyAddress: "Pasadena, CA",
    },
  ]);

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
      {
        id: id++,
        schoolName: "New Item",
        studyTitle: "",
        studyDate: "",
        location: "",
      },
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
        date: "",
        companyAddress: "",
      },
    ]);
  };

  const handleDeleteWork = (id) => {
    setWorkList(workList.filter((work) => work.id !== id));
  };

  return (
    <main>
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
    </main>
  );
}

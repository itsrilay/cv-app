import FormContainer from "./FormContainer";
import { Result } from "./Result";
import { useState } from "react";

let id = 0;

export default function App() {
  // const [formData, setFormData] = useState({
  //   name: "Walter White",
  //   email: "walter.white@gmail.com",
  //   phone: "123456789",
  //   schoolName: "Chemistry School",
  //   studyTitle: "Chemistry",
  //   studyDate: "04/2000",
  //   company: "Chemistry Company",
  //   position: "Manufacturer",
  //   responsibilities: "Making the good stuff.",
  //   dateFrom: "06/2010",
  //   dateTo: "Present",
  // });

  // const [isFormSent, setIsFormSent] = useState(false);

  // const [isFormEdit, setIsFormEdit] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsFormSent(true);
  //   setIsFormEdit(false);
  // }

  // function handleEdit() {
  //   setIsFormEdit(true);
  // }

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // }

  const [educationList, setEducationList] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEducationFields([...educationFields, { [name]: value }]);
  // };

  const handleSaveEducation = (id, updatedData) => {
    setEducationList(
      educationList.map((education) =>
        education.id === id ? { ...education, ...updatedData } : education
      )
    );
  };

  const handleNew = () => {
    console.log(educationList);
    setEducationList([
      ...educationList,
      { id: id++, schoolName: "New Item", studyTitle: "", studyDate: "" },
    ]);
  };

  return (
    <>
      <FormContainer
        educationList={educationList}
        handleNew={handleNew}
        handleSaveEducation={handleSaveEducation}
      />
      <Result educations={educationList} />
    </>
  );
}

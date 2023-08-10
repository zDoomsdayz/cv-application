import { useState } from "react";
import "./styles/App.css";
import GeneralInformation from "./components/General";
import PreviewCV from "./components/Preview";
import Work from "./components/Work";
import Education from "./components/Education";

function App() {
  const generalTemp = { fullName: "Meow", email: "12@1asads.com", phone: "123456789", country: "Singapore" };
  const educationTemp = [
    { key: 0, school: "adsdkljas", degree: "afdadfs", startDate: "12", endDate: "54", location: "a" },
    { key: 1, school: "efdssdfafsf", degree: "weqeqewq", startDate: "32", endDate: "55", location: "b" },
    { key: 2, school: "bvnnbvnbv", degree: "zxczxczc", startDate: "43", endDate: "23", location: "c" },
  ];

  const experienceTemp = [
    { key: 0, companyName: "ABC", positionTitle: "afdadfs", startDate: "12", endDate: "54", location: "a", description: "njkjnds jnka" },
    { key: 1, companyName: "DEF", positionTitle: "weqeqewq", startDate: "32", endDate: "55", location: "b", description: "jnkjknjknas d" },
    { key: 2, companyName: "GHI", positionTitle: "zxczxczc", startDate: "43", endDate: "23", location: "c", description: "njiklnwqklwq" },
  ];
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function handleReset() {
    setGeneral({});
    setEducation([]);
    setExperience([]);
  }

  function handleExample() {
    setGeneral(generalTemp);
    setEducation(educationTemp);
    setExperience(experienceTemp);
  }

  return (
    <>
      <h1>CV Builder</h1>
      <div className="container">
        <div>
          <GeneralInformation general={general} setGeneral={setGeneral} />
          <Education education={education} setEducation={setEducation} />
          <Work experience={experience} setExperience={setExperience} />
        </div>
        <PreviewCV general={general} education={education} experience={experience} />
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <button className="example" onClick={handleExample}>
        Example
      </button>
    </>
  );
}

export default App;

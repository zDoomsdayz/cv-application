import { useState } from "react";
import "./styles/App.css";
import GeneralInformation from "./components/General";
import PreviewCV from "./components/Preview";
import Work from "./components/Work";
import Education from "./components/Education";

function App() {
  const generalTemp = { fullName: "Whiskers McFluffy", email: "whiskers@meowmail.com", phone: "(+65) 12345678", country: "Singapore" };
  const educationTemp = [
    { key: 0, school: "Whisker Academy", degree: "Master's in Feline Fine Arts", startDate: "May 2018", endDate: "Dec 2021", location: "Singapore", description: `Attended advanced classes in synchronized stretching, interpretive cardboard boxing, and the history of ancient Egyptian cat worship. Completed a thesis on "The Aesthetics of Knocking Things Off Counters: A Study in Gravity and Acoustics."` },
    { key: 1, school: "Kitty University", degree: "Bachelor's in Purr-formance Arts", startDate: "Jan 2014", endDate: "Apr 2018", location: "Singapore", description: `Enthusiastic participant in interpretive tail-flicking classes, aerial mouse chasing, and advanced sunbeam basking studies. Completed a thesis on "The Melodic Effects of Midnight Serenades."` },
  ];

  const experienceTemp = [
    { key: 0, companyName: "Feline Delights Inc.", positionTitle: "Chief Napping Officer (CNO)", startDate: "Sept 2022", endDate: "Present", location: "Singapore", description: "Led a team of fellow feline employees in perfecting the art of power napping. Demonstrated exceptional skills in finding the sunniest spots for snoozing, expertly kneading blankets, and mastering the art of the 180-degree flip while napping." },
    { key: 1, companyName: "TunaTreats Co.", positionTitle: "Snack Quality Control Specialist", startDate: "Jan 2022", endDate: "Aug 2022", location: "Singapore", description: "Meticulously tasted and evaluated a wide range of tuna-flavored treats for optimal taste and crunchiness. Provided valuable feedback to humans about the treat's paw-liciousness. Expert in detecting the subtle nuances of tuna aroma." },
  ];
  const [general, setGeneral] = useState(generalTemp);
  const [education, setEducation] = useState(educationTemp);
  const [experience, setExperience] = useState(experienceTemp);

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
        <div className="userInput">
          <div className="qol">
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
            <button className="example" onClick={handleExample}>
              Example
            </button>
          </div>
          <GeneralInformation general={general} setGeneral={setGeneral} />
          <Work experience={experience} setExperience={setExperience} />
          <Education education={education} setEducation={setEducation} />
        </div>
        <PreviewCV general={general} education={education} experience={experience} />
      </div>
    </>
  );
}

export default App;

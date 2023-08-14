import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png";

export default function PreviewCV({ general, education, experience }) {
  return (
    <div className="a4-box">
      <h1>{general["fullName"]}</h1>
      <div className="personalDetails">
        <p>
          <img src={emailIcon} alt="emailIcon" />
          {general["email"]}
        </p>
        <p>
          <img src={phoneIcon} alt="phoneIcon" />
          {general["phone"]}
        </p>
        <p>
          <img src={locationIcon} alt="locationIcon" />
          {general["country"]}
        </p>
      </div>
      <hr />
      <h3>PROFESSIONAL EXPERIENCE</h3>
      {experience.map((o) => {
        return (
          <>
            <div className="education">
              <div className="previewTitle">
                <h4>{o["positionTitle"]}</h4>
                <p>{o["companyName"]}</p>
              </div>
              <div className="previewDate">
                <h4>
                  {o["startDate"]} - {o["endDate"]}
                </h4>
                <p>{o["location"]}</p>
              </div>
            </div>
            <div className="description">
              <p>{o["description"]}</p>
            </div>
          </>
        );
      })}
      <hr />
      <h3>EDUCATION & CERTIFICATIONS</h3>
      {education.map((o) => {
        return (
          <>
            <div className="education">
              <div className="previewTitle">
                <h4>{o["degree"]}</h4>
                <p>{o["school"]}</p>
              </div>
              <div className="previewDate">
                <h4>
                  {o["startDate"]} - {o["endDate"]}
                </h4>
                <p>{o["location"]}</p>
              </div>
            </div>
            <div className="description">
              <p>{o["description"]}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

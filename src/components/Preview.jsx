export default function PreviewCV({ general, education, experience }) {
  return (
    <div className="a4-box">
      <h1>{general["fullName"]}</h1>
      <p>{general["email"]}</p>
      <p>{general["phone"]}</p>
      <p>{general["country"]}</p>

      {education.map((o) => {
        return Object.keys(o).map(
          (key) =>
            key != "key" && (
              <div key={key}>
                <label htmlFor={key}>{o[key]}</label>
              </div>
            )
        );
      })}

      {experience.map((o) => {
        return Object.keys(o).map(
          (key) =>
            key != "key" && (
              <div key={key}>
                <label htmlFor={key}>{o[key]}</label>
              </div>
            )
        );
      })}
    </div>
  );
}

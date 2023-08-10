import { useState } from "react";
import ItemList from "./ItemList";

export default function Education({ education, setEducation }) {
  const [showMenu, setShowMenu] = useState(false);

  const data = [
    { key: 0, name: "school", label: "School", placeholder: "Enter School", required: true },
    { key: 1, name: "degree", label: "Degree", placeholder: "Enter Degree", required: true },
    { key: 2, name: "startDate", label: "Start Date", placeholder: "Enter Start Date", required: true },
    { key: 3, name: "endDate", label: "End Date", placeholder: "Enter End Date", required: true },
    { key: 4, name: "location", label: "Location", placeholder: "Enter Location", required: true },
  ];

  function handleAdd(e) {
    e.preventDefault();
    setEducation([
      ...education,
      {
        key: education.length > 0 ? education[education.length - 1].key + 1 : 0,
        school: e.target.school.value,
        degree: e.target.degree.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
        location: e.target.location.value,
      },
    ]);
    setShowMenu(false);
  }

  function handleEdit(nextItem) {
    setEducation(
      education.map((t) => {
        if (t.key === nextItem.key) {
          return nextItem;
        } else {
          return t;
        }
      })
    );
  }

  function handleDelete(key) {
    setEducation(education.filter((t) => t.key !== key));
  }

  return (
    <>
      <h3>Education</h3>
      {showMenu ? (
        <form onSubmit={handleAdd}>
          {data.map((o) => {
            return (
              <div key={o.key}>
                <div>
                  <label htmlFor={o.name}>{o.label}</label>
                </div>
                <input id={o.name} name={o.name} placeholder={o.placeholder} required={o.required} />
              </div>
            );
          })}

          <button type="submit">Save</button>
          <button type="button" onClick={(e) => setShowMenu(false)}>
            Back
          </button>
        </form>
      ) : (
        <>
          <ItemList itemList={education} handleEdit={handleEdit} handleDelete={handleDelete} />
          <button type="button" onClick={(e) => setShowMenu(true)}>
            Add
          </button>
        </>
      )}
    </>
  );
}

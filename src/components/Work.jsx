import { useState } from "react";
import ItemList from "./ItemList";

export default function Work({ experience, setExperience }) {
  const [showMenu, setShowMenu] = useState(false);

  const data = [
    { key: 0, name: "companyName", label: "Company Name", placeholder: "Enter Company Name", required: true },
    { key: 1, name: "positionTitle", label: "Position Title", placeholder: "Enter Position Title", required: true },
    { key: 2, name: "startDate", label: "Start Date", placeholder: "Enter Start Date", required: true },
    { key: 3, name: "endDate", label: "End Date", placeholder: "Enter End Date", required: true },
    { key: 4, name: "location", label: "Location", placeholder: "Enter Location", required: true },
    { key: 5, name: "description", label: "Description", placeholder: "Enter Description", required: false },
  ];

  function handleAdd(e) {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        key: experience.length > 0 ? experience[experience.length - 1].key + 1 : 0,
        companyName: e.target.companyName.value,
        positionTitle: e.target.positionTitle.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
        location: e.target.location.value,
        description: e.target.description.value,
      },
    ]);
    setShowMenu(false);
  }

  function handleEdit(nextItem) {
    setExperience(
      experience.map((t) => {
        if (t.key === nextItem.key) {
          return nextItem;
        } else {
          return t;
        }
      })
    );
  }

  function handleDelete(key) {
    setExperience(experience.filter((t) => t.key !== key));
  }

  return (
    <>
      <h3>Experience</h3>
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
          <ItemList itemList={experience} handleEdit={handleEdit} handleDelete={handleDelete} />
          <button type="button" onClick={(e) => setShowMenu(true)}>
            Add
          </button>
        </>
      )}
    </>
  );
}

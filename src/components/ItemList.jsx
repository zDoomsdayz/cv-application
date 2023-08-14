import { useState } from "react";
import saveIcon from "../assets/save.png";
import addIcon from "../assets/add.png";
import cancelIcon from "../assets/cancel.png";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

export default function ItemList({ itemList, handleEdit, handleDelete }) {
  return (
    <div className="itemContainer">
      {itemList.map((item) => (
        <div key={item.key}>
          <Item item={item} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

function Item({ item, handleEdit, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);

  function handleInputChange(key, value) {
    setUpdatedItem({
      ...updatedItem,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleEdit(updatedItem);
    setIsEditing(false);
  }

  function camelToTitleCase(camel) {
    const result = camel.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div className="item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {Object.keys(updatedItem).map(
            (key) =>
              key != "key" && (
                <div key={key}>
                  <label htmlFor={key}>{camelToTitleCase(key)}</label>
                  <div>{key == "description" ? <textarea rows="10" id={key} value={updatedItem[key]} onChange={(e) => handleInputChange(key, e.target.value)} /> : <input id={key} value={updatedItem[key]} onChange={(e) => handleInputChange(key, e.target.value)} />}</div>
                </div>
              )
          )}
          <div className="buttonContainer">
            <button type="button" onClick={() => setIsEditing(false)}>
              <img src={cancelIcon} alt="cancelIcon" />
            </button>
            <button type="submit">
              <img src={saveIcon} alt="saveIcon" />
            </button>
            <button type="button" onClick={() => handleDelete(item.key)}>
              <img src={deleteIcon} alt="deleteIcon" />
            </button>
          </div>
        </form>
      ) : (
        <>
          {Object.values(item)[1]}
          <button type="button" onClick={() => setIsEditing(true)}>
            <img src={editIcon} alt="editIcon" />
          </button>
        </>
      )}
    </div>
  );
}

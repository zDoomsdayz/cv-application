import { useState } from "react";

export default function ItemList({ itemList, handleEdit, handleDelete }) {
  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.key}>
          <Item item={item} handleEdit={handleEdit} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
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
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {Object.keys(updatedItem).map(
            (key) =>
              key != "key" && (
                <div key={key}>
                  <label htmlFor={key}>{camelToTitleCase(key)}</label>
                  <div>
                    <input id={key} value={updatedItem[key]} onChange={(e) => handleInputChange(key, e.target.value)} />
                  </div>
                </div>
              )
          )}
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
          <button type="submit">Save</button>
          <button type="button" onClick={() => handleDelete(item.key)}>
            Delete
          </button>
        </form>
      ) : (
        <>
          {Object.values(item)[1]}
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

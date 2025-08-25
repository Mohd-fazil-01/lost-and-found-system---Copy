import React from "react";

function ItemList({ items, onEdit, onDelete }) {
  return (
    <div>
      <h2>📋 Reported Items</h2>
      {items.length === 0 ? (
        <p>No items reported yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <h3>{item.title} ({item.status})</h3>
              <p>{item.description}</p>
              <p><b>Location:</b> {item.location}</p>
              <p><b>Contact:</b> {item.contact}</p>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;

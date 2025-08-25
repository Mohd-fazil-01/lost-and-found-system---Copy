import React, { useState, useEffect } from "react";

function ItemForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "lost",
    location: "",
    contact: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", status: "lost", location: "", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="title"
        placeholder="Item Title"
        value={formData.title}
        onChange={handleChange}
      /><br/>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      /><br/>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select><br/>
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      /><br/>
      <input
        name="contact"
        placeholder="Contact Info"
        value={formData.contact}
        onChange={handleChange}
      /><br/>
      <button type="submit">Save</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ItemForm;

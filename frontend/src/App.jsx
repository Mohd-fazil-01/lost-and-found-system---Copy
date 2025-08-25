import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:7000/api/items");
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (itemData) => {
    if (editingItem) {
      await axios.put(`http://localhost:7000/api/items/${editingItem._id}`, itemData);
      setEditingItem(null);
    } else {
      await axios.post("http://localhost:7000/api/items", itemData);
    }
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:7000/api/items/${id}`);
    fetchItems();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lost & Found System</h1>
      
      <h2>{editingItem ? "Edit Item" : "Report Item"}</h2>
      <ItemForm 
        onSubmit={addItem} 
        initialData={editingItem} 
        onCancel={() => setEditingItem(null)} 
      />

      <ItemList 
        items={items} 
        onEdit={(item) => setEditingItem(item)} 
        onDelete={deleteItem} 
      />
    </div>
  );
}

export default App;

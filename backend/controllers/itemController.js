import Item from "../models/Item.js";


export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const getItem = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};


export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const saved = await newItem.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};


export const updateItem = async (req, res) => {
  try {
    const updated = await Item.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Item not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findOneAndDelete({ _id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};

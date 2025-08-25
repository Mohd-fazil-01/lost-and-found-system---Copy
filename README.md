# Lost & Found System

A simple **Lost & Found web application** built with **React** (frontend) and **Node.js + Express + MongoDB** (backend).  
This app allows users to **report lost or found items**, view the list of items, **edit** and **delete** items.

---

## Features
- Add a new item (Lost / Found) with details:
  - Title
  - Description
  - Status (Lost / Found)
  - Location
  - Contact info
- View all reported items in a list
- Edit or Delete any item
- Simple and clean UI with CSS styling

---

## Project Structure

### Backend
backend/
┣ models/
┃ ┗ Item.js
┣ routes/
┃ ┗ itemRoutes.js
┣ server.js

### Frontend
frontend/
┣ src/
┃ ┣ components/
┃ ┃ ┣ ItemForm.jsx
┃ ┃ ┣ ItemList.jsx
┃ ┃ ┗ App.css
┃ ┣ App.jsx
┃ ┗ main.jsx

---

## Installation & Running

### Backend
```bash
cd backend
npm install
node server.js
Frontend
cd frontend
npm install
npm run dev
Tech Stack
Frontend: React, CSS

Backend: Node.js, Express

Database: MongoDB (Atlas)

HTTP Requests: Axios

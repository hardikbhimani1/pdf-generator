// src/App.js
import React, { useState } from 'react';
import { generatePdfTemplate1 } from './component/PdfTemplate1';
import { Template2DownloadLink } from './component/PdfTemplate2';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="container">
      <h1>PDF Generator Demo</h1>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={data.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={data.age} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={data.email} onChange={handleChange} />
        </label>
      </div>
      <button onClick={() => generatePdfTemplate1(data)}>Download Template 1</button>
      <Template2DownloadLink data={data} />
    </div>
  );
}

export default App;

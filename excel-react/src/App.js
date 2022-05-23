import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as XLSX from "xlsx";
import CardList from './CardList';


function App() {
  const [cardsList, setCardsList] = useState([]);



  const readExcel = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;

      const wb = XLSX.read(bufferArray, { type: "buffer" });

      const wsname = wb.SheetNames[0];

      const ws = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
      setCardsList(data);
    };
  }
  
  return (
    <div className="App">
      <h1>hello</h1>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <div className="container">
        <CardList cardList={cardsList}/>
      </div>

    </div>
  );
}

export default App;

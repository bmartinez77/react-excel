import React, { useState, useRef} from 'react';
import './App.css';
import * as XLSX from "xlsx";
import CardList from './CardList';
import { useReactToPrint } from "react-to-print";


function App() {
  const [cardsList, setCardsList] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
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
  

    // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };


  return (
    <div className="App">
      <br/>
    <button className="btn shadow-none" onClick={handleClick}>
      Kalamazoo Materials: Superior
    </button>
    <button onClick={handlePrint} className="btn shadow-none">  Print </button> 

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
        
        style={{display: 'none'}}
      />

      <div className="container" style={{width: '100%'}} ref={componentRef}>
        <CardList cardList={cardsList}/>
      </div>

    </div>
  );
}

export default App;

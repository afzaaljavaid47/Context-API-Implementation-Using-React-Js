import {useState} from 'react';
import PDFFile from './PDFFile';
import {PDFDownloadLink} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Barcode from 'react-barcode';
import QRCode from "react-qr-code";
import QR from 'qrcode-base64'
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
// function App() {
//   const [qr,setQR]=useState();
//   const [name,setName]=useState();
//   const [mr,setMr]=useState();
//   const [phone,setPhone]=useState();
//   const [age,setAge]=useState();
//   const [date,setDate]=useState();
//   const [lab,setLab]=useState();
//   const [reportdate,setReportDate]=useState();
//   const formSubmit=(e)=>{
//     e.preventDefault();
    
//     var imgData = QR.drawImg("this.data.codeText", {
//       typeNumber: 4,
//       errorCorrectLevel: 'M',
//       size: 500
//     })
//     var splitStr = imgData.substring(imgData.indexOf(';') + 1);
//     splitStr="data:image/png;"+splitStr;
//     console.log(splitStr);
//     setQR(splitStr); 
//     console.log("Original Data : ",imgData);
//     console.log("trancated Data : ",splitStr);
//   }
//   return (
//     <div className="App">
//      <h3>React PDF Practice</h3>
//      <canvas>
//      <Barcode value="Afzaal Javaid"/>
//      </canvas>
//      <img src={qr}/>
//      <QRCode size={100} value="Afzaal Javaid"/>
//      <form onSubmit={formSubmit}>
//       <input onChange={(e)=>setName(e.target.value)} type="text"/>
//       <input onChange={(e)=>setMr(e.target.value)} type="text"/>
//       <input onChange={(e)=>setPhone(e.target.value)} type="text"/>
//       <input onChange={(e)=>setAge(e.target.value)} type="text"/>
//       <input onChange={(e)=>setDate(e.target.value)} type="date"/>
//       <input onChange={(e)=>setLab(e.target.value)} type="text"/>
//       <inpu onChange={(e)=>setReportDate(e.target.value)} type="date"/>
//       <button>Get PDF</button>
//      </form>
//      <PDFDownloadLink document={<PDFFile qr={qr} name={name} mr={mr} phone={phone} age={age} date={date} lab={lab} reportdate={reportdate}/>} fileName="Document">
//        {({loading,error})=>(loading?'Loading Document':'Download')}
//      </PDFDownloadLink>
//      <PDFViewer showToolbar="true" width="900px" height="600px">
//       <PDFFile qr={qr} name={name} mr={mr} phone={phone} age={age} date={date} lab={lab} reportdate={reportdate}/>
//     </PDFViewer>
//     </div>
//   );
// }

export default App;
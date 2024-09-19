import React, {useState} from 'react'

export default function TextForm(props) {
    const[text , setText]=useState('Enter text here')
    
 const handleOnClick=()=>{
  console.log("Convert Uppercase")
  const newText=text.toLocaleUpperCase();
  setText(newText);
 }
     
 const handleLoClick=()=>{
  console.log("Convert Lowercase")
  const newText=text.toLocaleLowerCase();
  setText(newText);
 }
      
 const copyToClipboard = () => {
  console.log("Copying text to clipboard");
  navigator.clipboard.writeText(text).then(() => {
    console.log("Text copied to clipboard");
  }).catch((error) => {
    console.error("Failed to copy text: ", error);
  });
}



  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
 }
  return (
    <>
      <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>  

<button disabled={text.length===0} className='btn btn-primary my-3' onClick={handleOnClick}>Convert to Uppercase</button>
  <button disabled={text.length===0}  className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert to Lovercase</button>
  <button disabled={text.length===0} className='btn btn-primary ' onClick={copyToClipboard}>coppy text</button>
  {/* <button className='btn btn-primary ' ></button> */}



  </div>
  <div className="container my-3">
      <h2>your text summry</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words,  {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length } minut to read</p>
      <h1>Priview</h1>
      <p>{text}</p>
    </div>
   
  </>
  )
}

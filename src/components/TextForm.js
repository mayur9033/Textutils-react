import React,{useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success")
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was Clicked" +text);
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("converted to lowercase!", "success")
  }
  const handleCapital=( )=>{
    const arr = text.split(" ")
    for(var i =0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    let newtext = arr.join(" ")
    setText(newtext)
    props.showAlert("converted to Capitalize!", "success")
  }
  const handlefirstLetterCapital=()=>{
    const newText =text.charAt(0).toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert("converted to first letter Capitalize!", "success")
  }
  const handleClearClick = () =>{
    // console.log("Uppercase was Clicked" +text);
    let newText = '';
    setText(newText)
    props.showAlert("Text cleard!", "success")
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success")
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra spaces!", "success")
}
  const handleOnChange = (event) =>{
    // console.log("Uppercase was Clicked");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container py-4' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <textarea className="form-control" id="myBox" rows="6" value={text}
  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#042743': 'white', color:props.mode=== 'dark'?'white': 'black'}}
  ></textarea>
  
  <button disabled ={text.length===0}  className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
  <button  disabled ={text.length===0} className='btn btn-primary my-3 ms-3' onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled ={text.length===0}  className='btn btn-primary my-3 ms-3' onClick={handleClearClick}>Clear</button>
  <button  disabled ={text.length===0} className="btn btn-primary my-3 ms-2" onClick={handleCopy}>Copy Text</button>
  <button  disabled ={text.length===0} className="btn btn-primary my-3 ms-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
  <button  disabled ={text.length===0} className="btn btn-primary my-3 ms-2" onClick={ handleCapital}>Capitalize</button>
  <button  disabled ={text.length===0} className="btn btn-primary my-3 ms-2" onClick={handlefirstLetterCapital}>FirstLetterCapital</button>
    </div>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
      <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
      
    </>
  )
}

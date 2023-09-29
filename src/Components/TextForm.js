import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
      props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick= ()=>{
      // console.log("Uppercase was clicked"+ text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase", "success")
    }
    const handleClear= ()=>{
      setText("")
      props.showAlert("Cleared All Text", "success")
  }
    const handleCopy= ()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
    props.showAlert("Copied To Clipboard", "success")
  }
    const handleOnChange= (event)=>{
        // console.log("Uppercase was clicked")
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter the text'); //react-hooks
    // text="xyz"//wrong way to update variable
    // setText("xyz")//correct way to update the variable
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}  id="myBox" rows="10"></textarea>
</div>
<button type="button" className="btn btn-dark mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
<button type="button" className="btn btn-dark mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
<button type="button" className="btn btn-dark mx-3" onClick={handleClear}>Clear All</button>
<button type="button" className="btn btn-dark mx-3" onClick={handleCopy}>Copy To Clipboard</button>

    </div>
    <div className="container my-4 "  style={{color:props.mode==='dark'?'white':'black'}}>
        <h3 className="text-center">Your Text Summary:</h3>
      <div className="box d-flex flex-row justify-content-evenly">
      <p className="border border-2 rounded  w-33 p-4">{text.split(" ").length-1} Words and {text.length} Characters</p> 
      <p className="border border-2 rounded  w-33 p-4">Will take {0.008*(text.split(" ").length-1)} Minutes to Read</p>
      <p className="border border-2 rounded  w-33 p-4">Will Take {0.004*(text.split(" ").length-1)} Minutes to Speak</p>
      </div>
      <h4>Preview</h4>
       <p>{text}</p>
    </div>
    </>
  )
}

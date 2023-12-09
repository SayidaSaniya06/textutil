// here importing the useState from react
//every prop has some set of state as they get updated

import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        // console.log("Upper Case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into upper case","success");
    }
    const lowerTextClick=()=>{
        let lowerText=text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted into lower case","success");
    }
    const clearClick=()=>{
        let clearAll=" ";
        setText(clearAll);
        props.showAlert("Cleared text","success");
    }
    const handleCopy=()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Coppied to click board!","success");
    }
    const fontChangeClick=()=>{
        let fontFamilySet=['Arial','sans-serif','Times New Roman','Monospace,sans-serif','cursive,sans-serif','fantasy,sans-serif','script,sans-serif','Display,sans-serif','Helvetica,sans-serif','Georgia,sans-serif','serif,sans-serif','Verdana,sans-serif','Tahoma,sans-serif','Lucidan Console,monospace'];
        
        function getRandomFontFamily(){
            let randomGenerateFont= Math.floor(Math.random()*fontFamilySet.length);
            return fontFamilySet[randomGenerateFont];
        }
        setFontFamily(getRandomFontFamily)
        props.showAlert("Changes font style","success");
    }
    //setting default font family
    const [fontFamily,setFontFamily]=useState('Arial,sans-serif');
   
    // here const [('text is the text that you want to keep and the default value will be 'Enter the text here'),(setText will be the function that holds the updated text value)]
    //now whenevri change text here it will get updated
    const [text,setText]=useState(' ');
    //setText("setting new Text with the help of declared setText fun");

 
   const [find, setFind] = useState('');
   const [userReplaceValue, setUserReplaceValue] = useState('');
 
   const replaceClick = () => {
    // Replace the find text with userReplaceValue
    const updatedText = text.replace(new RegExp(find, 'g'), userReplaceValue);
    setText(updatedText);
    props.showAlert("Replacement has done!","success");
  };
  return (
    <>
    <div className='container' style={{ color:props.mode === 'dark'?'white':'black'}}>       
     <h1 className='mb-3'>{props.heading} </h1>

    <div className="mb-3">
    <div className="input-group">
  <span className="input-group-text"><button className="btn btn-primary" onClick={replaceClick}>Find and Replace</button></span>
  <input type="text" aria-label="First name" id='findInput' placeholder='Word to be find' className="form-control" onChange={(event) => setFind(event.target.value)}/>
  <input type="text" aria-label="Last name"  id='replaceInput' placeholder='word to be replace' className="form-control" onChange={(event) => setUserReplaceValue(event.target.value)} />
</div>
    <label htmlFor="myBox" className="form-label"></label>
    {/* in textarea you have listened to onclik event because of this you can type anything on text box */}
    <textarea className="form-control"  value={text} onChange={handleOnChange}  id="myBox" rows="8" style={{fontFamily: fontFamily, backgroundColor:props.mode === 'light'?'white':'#134b5f', color:props.mode === 'dark'?'white':'black' }}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowerTextClick}>Convert to lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={fontChangeClick}>Change font</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear text</button>
    </div>
    <div className="container my-4" style={{ backgroundColor:props.mode === 'light'?'white':'light gray'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} charecters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

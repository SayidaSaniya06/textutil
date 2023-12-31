import React from 'react'

export default function About(props) {
   
    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(28 57 74)':'white'
    }
    
     return (
        <div className='container' >
            <h1 className='my-3'style={{ color: props.mode==='dark'?'white':'#0f3c4c'}}>About us</h1>
        <div className="accordion" id="accordionExample">
       <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          <strong>Analyze your text.</strong>  
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently.
            Be it word count , charecter count or
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
           <strong>Free to use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           TextUtils is a free chrecter count tool that provides instant charecter count &
           word count statistics for a given text. TextUtils reports the number of words and charecters.
           Thus it is suitable for writing text with word / charecter limit.
        
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
         <strong>Browser compatible.</strong>  
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           This word count software works in any web browsers such as Chrome, firfox, Internet Explorer,
           Safari, Opera. It suits to count charecters in facebook,blog,books,excel document, pdf document,
           essays, etc.
        </div>
        </div>
    </div>
    </div>
     </div>
  )
}

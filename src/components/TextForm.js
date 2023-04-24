import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnClick = ()=>{
        console.log('handleUpClick function called');
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleCopyText = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnlow = ()=>{
        console.log('handleUpClick function called');
        const newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        console.log('Handle on click function called');
        setText(event.target.value);
    }
    const [text, setText] = useState(''); 

  return (

    <>
        <div className='container'>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <label htmlFor="myText" className="form-label">Enter Message</label>
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'grey':'white'}} value={text} id="myBox" onChange={handleOnChange} rows="6"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleOnClick}>Convert Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleOnlow}>Convert LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className='container'>
            <h1>Text Summary</h1>
            <p>{text.split(' ').length} Words, {text.length} Charectors</p>
            <p>Read time: {0.008 * text.split(' ').length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}

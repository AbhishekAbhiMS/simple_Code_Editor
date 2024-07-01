// import React, { useState } from 'react';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-javascript';
// import * as esprima from 'esprima'; // Import everything from esprima

// const CodeEditor = () => {
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const [codechange, setCodechange] = useState('');


//   const handleChange = () => {
//     console.log("click1");
//     setCode(codechange);

//     // Check for syntax errors
//     try {

//       esprima.parseScript(code);
//       setError(''); // Clear any previous errors
//     } catch (err) {
//        setError(err.message); // Set the error message

//     }
//   };

//   return (
//     <div className="code-editor">
//       <textarea
//         value={codechange}
//         onChange={(e)=>{setCodechange(e.target.value)}}
//         spellCheck="false"
//         autoComplete="off"
//         autoCorrect="off"
//       />
//       <button onClick={handleChange} style={{padding:'9px 19px',borderRadius:'6px',backgroundColor:"green",color:'white',fontWeight:600}}> RUN</button>
//        {error && <div className="error-message">{error}</div>}
//       <pre>
//         <code
//           className="language-js"
//           dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.js, 'js') }}
//         />
//       </pre>
//     </div>
//   );
// };

// export default CodeEditor;

import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import * as esprima from 'esprima';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [codechange, setCodechange] = useState('');
  

  const [error, setError] = useState('');
  const handleChange = (e) => {
    setCode(codechange);
    try {
      esprima.parseScript(codechange);
      setError(''); 
    } catch (err) {
      console.error('Syntax Error:', err); 
      setError(err.description || err.message); 
    }
   
  };

  return (
    <div className="code-editor">
      <textarea
        value={codechange}
        onChange={e=>setCodechange(e.target.value)}
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        style={{ borderColor: error ? 'red' : '#ddd' }} // Highlight the textarea border if there's an error
      />
    <button onClick={()=>{
        handleChange()
        handleChange()
    }} style={{padding:'9px 19px',borderRadius:'6px',backgroundColor:"green",color:'white',fontWeight:600}}> RUN</button>

      {error && <div className="error-message">{error}</div>}
      <pre>
        <code
          className="language-js"
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;

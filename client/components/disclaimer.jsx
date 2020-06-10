import React from 'react';

function Disclaimer(props) {
  return (
    <div className="modal">
      <div className="text-center modal-box p-5">
        <h1><span className="font-style">Quarantine Succs</span><br></br> is a full-stack e-commerce application built for demonstration purposes only.</h1>
        <hr></hr>
        <p className="modal-p">By clicking, &quot;I accept&quot; and using this site you are acknowledging that personal information shall not be used,
          and that real purchases cannot be made.</p>
        <button onClick={() => props.handleDisclaimer()}
          type="button" className="btn btn-color">I accept</button>
      </div>
    </div>
  );
}

export default Disclaimer;

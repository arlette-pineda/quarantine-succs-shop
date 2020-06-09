import React from 'react';

function Disclaimer(props) {
  return (
    <div className="d-flex vh-100 align-items-center modal">
      <div className="text-center justify-content-center modal-box">
        Quarantine Succs is a full-stack e-commerce application built for demonstration purposes only.
        <p>By clicking, &quot;I accept&quot; you are acknowledging that personal information shall not be used,
          and that real purchases cannot be made.</p>
        <button type="button" className="btn btn-success">I accept</button>
      </div>
    </div>
  );
}

export default Disclaimer;

import React from 'react';
import './Resume.css';
// import Button from 'react-bootstrap/Button';



const Resume = () => {

    return (
        <div className="container App">
            <div className="download-buuton-holder">
                <button className="btn btn-success"><a href="https://drive.google.com/file/d/1Pu5vLsYi1AHyHDpySZBR3WiVIFqv2kIn/view?usp=sharing">Download Resume</a></button>
            </div>
            {/* <PdfViewer pdf={pdf}
                onCancel={() => setShowPdf(false)}
                visible={showPdf}
            />
            <Button onClick={() => setShowPdf(!showPdf)}>Show PdfViewer</Button> */}
        </div>
    );
};

export default Resume;
import React from 'react'

export default function Education() {
  return (
    <div className='container-fluid edu text-white pt-2 ps-4 pt-5' id="education">
        <div className='pb-3 fs-1 d-flex justify-content-center text-decoration-underline fw-bold text-warning'>Education 🎓</div>
        <div className="row">
            <div className="box">
                <div className="img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c2/Motilal_Nehru_National_Institute_of_Technology_Allahabad_logo.png" alt="" />
                </div>
                <div className="content">
                    <h2>Motilal Nehru National Institute of Technology Allahabad</h2>
                    <p>(MNNIT or NIT Allahabad), formerly Motilal Nehru Regional Engineering College (MNREC)</p>
                    <h6>November 2022 - June 2026</h6>
                    <h4>Bachelor of Technology [B.Tech] in Biotechnology</h4>
                    <p>CGPA : 7.5 (Till 2023)</p>
                </div>
                <hr />
            </div> 
            </div>
            <div className='row'> 
            <div className="box">
                <div className="img">
                    <img src="https://www.stbasilbasti.online/edu/images/sps.png" alt="" />
                </div>
                <div className="content">
                    <h2>St.Basil's School</h2>
                    <p>Basti,Uttar Pradesh</p>
                    <h6>Till January 2021</h6>
                    <h5>Science And Mathematics</h5>
                    <h5>Class 10 :- 90.80%</h5>
                    <h5>Class 12 :- 94.25%</h5>
                </div>
                <hr />
            </div>  
        </div>
    </div>
  )
}

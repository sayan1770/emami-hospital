'use client';
import React, { useEffect } from 'react'

import Script from 'next/script';
import Tabs from '../components/Tabs';

export default function Patient() {




  return (
<>
  {/* [ Pre-loader ] start */}
  {/* <div className="loader-bg">
    <div className="loader-track">
      <div className="loader-fill" />
    </div>
  </div> */}
  {/* [ Pre-loader ] End */}
  {/* [ Sidebar Menu ] start */}
  

  {/* [ Sidebar Menu ] end */}
  {/* [ Header Topbar ] start */}

  {/* [ Header ] end */}
  {/* [ Main Content ] start */}
  <section className="pc-container">
    {/* <div className="pc-content"> */}
    <div className="">
      {/* [ breadcrumb ] start */}
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="../dashboard/index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0)">Patient Registration</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                Patient Registration
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <div className="page-header-title">
                {/* <h3 className="mb-0">Patient Info</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* [ breadcrumb ] end */}
      {/* [ Main Content ] start */}
      <div className="row">
        <div className="col-md-12">
        <form>
          <div className="card">
    
            <div className="card-header">
              <h5>Patient Registration</h5>
            </div>
        
            <div className="card-body">
              <div className="row">
              <Tabs />
             
            
                {/* <button type="submit" className="btn btn-primary mb-4">
                      Submit
                    </button> */}
              </div>
            </div>
       
          </div>
          </form>
        
        </div>
     
        {/* [ form-element ] end */}
      </div>
    </div>
    {/* [ Main Content ] end */}
  </section>
  {/* [ Main Content ] end */}


  

</>

  )
}

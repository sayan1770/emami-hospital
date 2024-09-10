'use client';
import React from 'react'
import Script from 'next/script';
import Head from 'next/head';
import Tabs from '../components/Tabs';
export default function index() {
  return (
    <>


<div
  data-pc-direction="ltr"
  data-pc-layout="vertical"
  data-pc-preset="preset-1"
  data-pc-sidebar-caption="true"
  data-pc-theme="light"
  data-pc-theme_contrast=""
>
  {/* <div className="loader-bg">
    <div className="loader-track">
      <div className="loader-fill" />
    </div>
  </div> */}


  <div className="auth-main">
    <div className="auth-wrapper v2">
      <div className="auth-sidecontent">
        <img
          alt="images"
          className="img-fluid img-auth-side"
          src="../images/indian-doctor-with-patient-hospital-clinic_466689-96541.avif"
        />
      </div>


      <div className="auth-form">
        <div className="card my-5">
          <div className="card-body">
            <div className="text-center">
              <a href="#">
                <img
                  alt="img"
                  src="../images/emami.jpg" style={{ width: 'auto', height: '90px' }}
                />
              </a>
       
            </div>
            {/* <h5 className="text-center f-w-500 mb-3">
              Login with your email
            </h5> */}
            <div className="mb-3 mt-5">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                id="floatingInput1"
                placeholder="Password"
                type="password"
              />
            </div>
            {/* <div className="d-flex mt-1 justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input input-primary"
                  defaultChecked
                  id="customCheckc1"
                  type="checkbox"
                />
                {' '}
                <label
                  className="form-check-label text-muted"
                  htmlFor="customCheckc1"
                >
                  Remember me?
                </label>
              </div>
              <h6 className="text-secondary f-w-400 mb-0">
                <a href="forgot-password-v2.html">
                  Forgot Password?
                </a>
              </h6>
            </div> */}
            <div className="d-grid mt-4">
              <button
                className="btn btn-primary"
                type="button"
              >
                Login
              </button>
            </div>
            {/* <div className="d-flex justify-content-between align-items-end mt-4">
              <h6 className="f-w-500 mb-0">
                Don't have an Account?
              </h6>
              <a
                className="link-primary"
                href="register-v2.html"
              >
                Create Account
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <script src="../js/plugins/popper.min.js" />
  <script src="../js/plugins/simplebar.min.js" />
  <script src="../js/plugins/bootstrap.min.js" />
  <script src="../js/fonts/custom-font.js" />
  <script src="../js/pcoded.js" />
  <script src="../js/plugins/feather.min.js" /> */}



  <div
    className="offcanvas border-0 pct-offcanvas offcanvas-end"
    id="offcanvas_pc_layout"
    tabIndex="-1"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title">
        Settings
      </h5>
      <button
        aria-label="Close"
        className="btn btn-icon btn-link-danger ms-auto"
        data-bs-dismiss="offcanvas"
        type="button"
      >
        <i className="ti ti-x" />
      </button>
    </div>
    <div className="pct-body customizer-body">
      <div className="offcanvas-body py-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="pc-dark">
              <h6 className="mb-1">
                Theme Mode
              </h6>
              <p className="text-muted text-sm">
                Choose light or dark mode or Auto
              </p>
              <div className="row theme-color theme-layout">
                <div className="col-4">
                  <div className="d-grid">
                    <button
                      className="preset-btn btn active"
                      data-bs-toggle="tooltip"
                      data-value="true"
                     
                      title="Light"
                    >
                      <svg className="pc-icon text-warning">
                        <use xlinkHref="#custom-sun-1" />
                      </svg>
                    </button>
                  </div>
                </div>
         
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <h6 className="mb-1">
              Theme Contrast
            </h6>
            <p className="text-muted text-sm">
              Choose theme contrast
            </p>
     
          </li>
          <li className="list-group-item">
            <h6 className="mb-1">
              Custom Theme
            </h6>
            <p className="text-muted text-sm">
              Choose your primary theme color
            </p>
            <div className="theme-color preset-color">
              <a
                className="active"
                data-bs-toggle="tooltip"
                data-value="preset-1"
                href="#!"
                title="Blue"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-2"
                href="#!"
                title="Indigo"
              >
                <i className="ti ti-checks" />
              </a>
              <a
                data-bs-toggle="tooltip"
                data-value="preset-3"
                href="#!"
                title="Purple"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-4"
                href="#!"
                title="Pink"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-5"
                href="#!"
                title="Red"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-6"
                href="#!"
                title="Orange"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-7"
                href="#!"
                title="Yellow"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-8"
                href="#!"
                title="Green"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-9"
                href="#!"
                title="Teal"
              >
                <i className="ti ti-checks" />
              </a>
              {' '}
              <a
                data-bs-toggle="tooltip"
                data-value="preset-10"
                href="#!"
                title="Cyan"
              >
                <i className="ti ti-checks" />
              </a>
            </div>
          </li>
          <li className="list-group-item">
            <h6 className="mb-1">
              Theme layout
            </h6>
            <p className="text-muted text-sm">
              Choose your layout
            </p>
            <div className="theme-main-layout d-flex align-center gap-1 w-100">
              <a
                className="active"
                data-bs-toggle="tooltip"
                data-value="vertical"
                href="#!"
                title="Vertical"
              >
                <img
                  alt="img"
                  className="img-fluid"
                  src="../images/customizer/caption-on.svg"
                />
                {' '}
              </a>
              <a
                data-bs-toggle="tooltip"
                data-value="horizontal"
                href="#!"
                title="Horizontal"
              >
                <img
                  alt="img"
                  className="img-fluid"
                  src="../images/customizer/horizontal.svg"
                />
                {' '}
              </a>
              <a
                data-bs-toggle="tooltip"
                data-value="color-header"
                href="#!"
                title="Color Header"
              >
                <img
                  alt="img"
                  className="img-fluid"
                  src="../images/customizer/color-header.svg"
                />
                {' '}
              </a>
              <a
                data-bs-toggle="tooltip"
                data-value="compact"
                href="#!"
                title="Compact"
              >
                <img
                  alt="img"
                  className="img-fluid"
                  src="../images/customizer/compact.svg"
                />
                {' '}
              </a>
              <a
                data-bs-toggle="tooltip"
                data-value="tab"
                href="#!"
                title="Tab"
              >
                <img
                  alt="img"
                  className="img-fluid"
                  src="../images/customizer/tab.svg"
                />
              </a>
            </div>
          </li>
          <li className="list-group-item">
            <h6 className="mb-1">
              Sidebar Caption
            </h6>
            <p className="text-muted text-sm">
              Sidebar Caption Hide/Show
            </p>
     
          </li>
          <li className="list-group-item">
            <div className="pc-rtl">
              <h6 className="mb-1">
                Theme Layout
              </h6>
              <p className="text-muted text-sm">
                LTR/RTL
              </p>
          
            </div>
          </li>
          <li className="list-group-item pc-box-width">
            <div className="pc-container-width">
              <h6 className="mb-1">
                Layout Width
              </h6>
              <p className="text-muted text-sm">
                Choose Full or Container Layout
              </p>
            
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-grid">
              <button
                className="btn btn-light-danger"
                id="layoutreset"
              >
                Reset Layout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <Script  src="./js/plugins/popper.min.js" onLoad={()=>console.log("loaded")} />
      <Script  src="./js/plugins/simplebar.min.js" onLoad={()=>console.log("loaded")} />
      <Script  src="./js/plugins/bootstrap.min.js"  onLoad={()=>console.log("loaded")}/>
      <Script  src="./js/fonts/custom-font.js"  onLoad={()=>console.log("loaded")}/>
      <Script  src="./js/pcoded.js"  onLoad={()=>console.log("loaded")}/>
      <Script  src="./js/plugins/feather.min.js" onLoad={()=>console.log("loaded")}/>
  </>
  
  )
}

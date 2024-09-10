// import TextArea from 'antd/es/input/TextArea';
import React, { useState,useEffect } from 'react';
// import { useEffect } from 'react/cjs/react.production.min';
// import '../../styles/choices.min.css';
import MedicineTable from '../MedicineTable';
const Step1 = () => {
  const [activeSubTab, setActiveSubTab] = useState('personal-info');

  const handleSubTabChange = (subTab) => {
    setActiveSubTab(subTab);
  };

  const handleMobileNumberChange = (event) => {
    const { value } = event.target;
    event.target.value = value.replace(/[^0-9]/g, '');
  };

  useEffect(() => {
    // Initialize the Choices.js dropdown after the component mounts
    if(activeSubTab==='medical-info'|| activeSubTab==='visit-details'){
      const element = document.getElementById('choices-multiple-remove-button');
      if (element) {
        new Choices(element, {
          removeItemButton: true
        });
      }
    }

  
  }, [activeSubTab]);


  useEffect(() => {
    // Self-invoking function to initialize the Datepicker
    if (activeSubTab === 'visit-details') {
    (function() {
      const today = new Date(); 
      const formattedToday = today.toISOString().split('T')[0];
      const datepickerElement = document.querySelector('#pc-datepicker-1');

      const d_week = new Datepicker(datepickerElement, {
        buttonClass: 'btn',
       
        format: 'dd-mm-yyyy',
        // startDate: today,
        // minDate: today,
        // Set the minimum selectable date to today
        autoclose: true, // Automatically close the datepicker when a date is selected
    
      });
      datepickerElement.addEventListener('changeDate', () => {
        d_week.hide(); // Manually close the datepicker
      });
    })();

    }
  }, [activeSubTab]);

  return (
    <div>
      {/* Sub-Tab Navigation for Step 1 */}
      <ul className="nav nav-tabs mt-3 " id="step1Tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'personal-info' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('personal-info')}
          >
            Page 1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'medical-info' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('medical-info')}
          >
            Page 2
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'visit-details' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('visit-details')}
          >
           Visit Details
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'general-exam' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('general-exam')}
          >
         General Exam Page
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'general-exam-2' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('general-exam-2')}
          >
         General Exam Page 2
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'follow-up' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('follow-up')}
          >
       Follow Up
          </button>
        </li>
        
      </ul>

      {/* Sub-Tab Content for Step 1 */}
      <div className="tab-content " id="step1TabsContent">
        {activeSubTab === 'personal-info' && (
          <div className="tab-pane fade show active">
             <div className="row mt-5">

<div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="reg_number">
      Registration Number
      </label>
      <input
        type="text"
        className="form-control"
        id="reg_number" value="11254544554"
        // placeholder="Enter Height"
      />
    </div>
  </div>

  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="name">
       Patient Name
      </label>
      <input
        type="text"  className="form-control" id="name" value="AVIK GHOSH"
      />
    </div>
  </div>

  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="age">
        Age
      </label>
      <input
        type="text" onInput={handleMobileNumberChange} className="form-control" id="age" value="40"
      />
    </div>
  </div>
  <div className="col-md-4">
                                    <div className="mb-3">
                                
                    <label className="form-label">Sex</label>
                    <div className="col-sm-12">
                        <div className="form-check form-check-inline d-inline-block">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="group6"
                            defaultValue=""
                            id="customCheckinlhstate1"
                                 defaultChecked="checked"
                        />
                        <label className="form-check-label" htmlFor="customCheckinlhstate1">
                            Male
                        </label>
                        </div>
                        <div className="form-check form-check-inline d-inline-block">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="group6"
                            defaultValue=""
                            id="customCheckinlhstate2"
                            
                        />
                        <label className="form-check-label" htmlFor="customCheckinlhstate2">
                         Female
                        </label>
                        </div>
                        <div className="form-check form-check-inline d-inline-block">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="group6"
                            defaultValue=""
                            id="customCheckinlhstate3"
                       
                        />
                        <label className="form-check-label" htmlFor="customCheckinlhstate3">
                          Others
                        </label>
                        </div>
        

                    </div>


                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="diabetes">
                   Diabetes
                  </label>
                  <select class="form-select">
                    <option>Kn</option>
                    <option>UK</option>
                    <option>New</option>
                    <option selected>None</option>
                    </select>
                </div>
              </div>
  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="height">
   Height (cm)
      </label>
      <input
        type="text"  className="form-control" id="height" value='169' 
      />
    </div>
  </div>
  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="mobile">
    Mobile No
      </label>
      <input type="text"  className="form-control" id="mobile"  onInput={handleMobileNumberChange}
      />
</div>
  </div>

  <hr/>

  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="dm">
    Family H/O DM
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
</div>
                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="htn">
             HTN
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="ihd">
           IHD/MI
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="stroke">
          Stroke
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="premature">
          Premature Death
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="premature">
          Asthamal Atopy
      </label>
      <div className="row">
      <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                    Past H/O DM (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_htn">
                    HTN (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_ihd">
                   IHD/MI (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_stroke">
                  Stroke (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="angioplasty">
                  Angioplasty (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="bypass">
                  Bypass (YRS)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="illness">
                 Any Other Major Illness
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="surgery">
                 Any Surgery
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="pvd">
                 PVD/Gangrene
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>


                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="hypothyroidism">
                 Hypothyroidism
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="glaucoma">
                 Glaucoma
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-8">
                <div className="mb-3">
                <label className="form-label" htmlFor="d_preg">
                Diabetes During Pregnancy / Birth of baby Weighing 3.5kg or more 
                </label>
                <div className="row">
                <div className="col-md-4">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-8">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="renal_disease">
                Renal Diseases -H/O Dialysis (Yrs)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    {/* <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="eye_disease">
               Eye Diseases
                </label>
            <input type="text"  className="form-control" id="eye_disease"/>
                    </div>
                    </div> */}
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="eye_disease">
               Eye Diseases H/O Laser (Yrs)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="eye_disease">
             H/O Cataract Operation (Yrs)
                </label>
                <div className="row">
                <div className="col-md-3">
           <select class="form-select" id="dm">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
                    </div>
                    <div className="col-md-9">
            <input type="text"  className="form-control" id="p_dm"/>
            </div>
                    </div>
                    </div>
                    </div>
                </div>
          </div>
        )}
        {activeSubTab === 'medical-info' && (
             <div className="tab-pane fade show active">
             <div className="row mt-5">

             <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="habit">
                    Eating Habit
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="life-cycle">
                    Life Cycle
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="tobacco">
                  Tobacco
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                Alcohol
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>
              <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="amount">
        Amount
      </label>
      <input
        type="text"  className="form-control" id="amount" 
      />
    </div>
  </div>
            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                Physical Activities
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
            Adherence to Balanced Diet
                  </label>
                  <select class="form-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    {/* <option>None</option> */}
                    </select>
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                 Medicine
                  </label>
                  <select className="form-control" name="choices-multiple-remove-button"
                   id="choices-multiple-remove-button" multiple="multiple">
                    <option value="Choice 1" >Choice 1</option>
                    <option value="Choice 2">Choice 2</option>
                    <option value="Choice 3">Choice 3</option>
                    <option value="Choice 4">Choice 4</option>
                    </select>
                </div>
              </div>


       <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="dm">
    Intake of Green Veg & Fruits
      </label>
      <select class="form-select" id="dm">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="htn">
            SMBG
      </label>
      <select class="form-select" id="htn">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="ihd">
          H/O Hypoglycemia (Low Blood Sugar)
      </label>
      <div className='row'>
      <div className='col-md-3'>
      <select class="form-select" id="ihd">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
      </div>
      <div className='col-md-9'>
      <select class="form-select" id="ihd">
                    <option>Yes</option>
                    <option>No</option>
              
                    </select>
      </div>
      </div>
    
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="stroke">
        H/O DKA
      </label>
      
      <div className='row'>
      <div className='col-md-3'>
      <select class="form-select" id="ihd">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
      </div>
      <div className='col-md-9'>
      <input
        type="text"  className="form-control" id="amount" 
      />
      </div>
      </div>
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="premature">
         Hyperglycemic Coma
      </label>
      <div className='row'>
      <div className='col-md-3'>
      <select class="form-select" id="ihd">
                    <option>Y</option>
                    <option>N</option>
              
                    </select>
      </div>
      <div className='col-md-9'>
      <input
        type="text"  className="form-control" id="amount" 
      />
      </div>
      </div>
                    </div>
                    </div>
                    
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="asthmal">
                   Menstrual History Regular
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                  Menopause
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_htn">
                  History of Allergy
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
        

                    <div className="col-md-6">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_stroke">
              Drugs Presently Receiving
                </label>
                <textarea className="form-control"></textarea>
                    </div>
                    </div>

                    <div className="col-md-6">
                <div className="mb-3">
                <label className="form-label" htmlFor="angioplasty">
                 Chief Complaints
                </label>
                <textarea className="form-control"></textarea>
                    </div>
                    </div>

                </div>
          </div>
        )}

{activeSubTab === 'visit-details' && (
             <div className="tab-pane fade show active">
             <div className="row mt-5">

                            <div className="col-md-4">
                      <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                      Patient Name
                      </label>
                      <input
                        type="text"  className="form-control" id="name" 
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="pc-datepicker-1">
                  Visit Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pc-datepicker-1"
                    placeholder="Select date"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="tobacco">
                Present Complaints
                  </label>
           <textarea  className="form-control"></textarea>
                </div>
              </div>
              <hr/>

              <h5 className='mb-5'>Physical Examination</h5>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                    Pulse
                  </label>
                  <input
                        type="text"  className="form-control" id="name" 
                      />
                </div>
              </div>
              <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="amount">
       Temperature (F)
      </label>
      <input
        type="text"  className="form-control" id="amount" 
      />
    </div>
  </div>
            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                B.P
                  </label>
                  <div className='row'>
                    <div className='col-md-5'>
                    <input type="text"  className="form-control" id="amount" />
                    </div>
                    <div className='col-md-2'>
                      <h1>/</h1>
                      
                      </div>
                    <div className='col-md-5'>
                    <input type="text"  className="form-control" id="amount" />
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
              Weight
                  </label>
             <input type="text"  className="form-control" id="amount" />
                    </div>
                 
                </div>
         
                <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                B.P
                  </label>
                  <div className='row'>
                    <div className='col-md-5'>
                    <input type="text"  className="form-control" id="amount" />
                    </div>
                    <div className='col-md-2'>
                      <h1>/</h1>
                      
                      </div>
                    <div className='col-md-5'>
                    <input type="text"  className="form-control" id="amount" />
                    </div>
                  </div>
                 
                </div>
              </div>


       <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="dm">
        Waist
      </label>
      <input
        type="text"  className="form-control" id="amount" 
      />
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="htn">
            Hip
      </label>
      <input
        type="text"  className="form-control" id="amount" 
      />
                    </div>
                    </div>

                    <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="ihd">
       Physical Examination
      </label>
    <textarea className='form-control'></textarea>
    
                    </div>
                    </div>

                    <hr/>
                    <h5 className='mb-5'>Diagnosis</h5>

                    <div className="col-md-4">
                 <div className="mb-3">
      <label className="form-label" htmlFor="stroke">
      Provisional
      </label>
      <select class="form-select" id="ihd">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
      </div>
                    </div>
                
                   <div className="col-md-4">
                 <div className="mb-3">
      <label className="form-label" htmlFor="stroke">
      Final
      </label>
      <select class="form-select" id="ihd">
                    <option>1</option>
                    <option>2</option>
              
                    </select>
      </div>
                    </div>
                    
               <hr/>
               <h5 className='mb-5'>Advice</h5>
               <div className="col-md-8">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                 Advice
                  </label>
                  <select className="form-control" name="choices-multiple-remove-button"
                   id="choices-multiple-remove-button" multiple="multiple" placeholder='Choose Options'>
                    <option value="Choice 1" >Choice 1</option>
                    <option value="Choice 2">Choice 2</option>
                    <option value="Choice 3">Choice 3</option>
                    <option value="Choice 4">Choice 4</option>
                    </select>
                </div>
              </div>
              <MedicineTable/>
        

                </div>
          </div>
        )}

{activeSubTab === 'general-exam' && (
             <div className="tab-pane fade show active">
             <div className="row mt-5">

             <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                  Anemia
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
              Lymphsdinopathy
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
              jaundice
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
             Swelling Feet
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
           Cyanosis
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
          Elavated JVP
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <hr/>
          <h5 className='mb-5'>FOOT EXAMINATION</h5>

          <div className="col-md-6">
            <h5 className="mb-3">RIGHT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Deformity
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

          <div className="col-md-6">
                    <h5 className="mb-3">LEFT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Deformity
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Callus
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

          <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
              Callus
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
           Corn
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>


                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
           Corn
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
            Ulcer
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
            Ulcer
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
           Gangrene
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
           Gangrene
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    
                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
              Amputation
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
              Amputation
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
              <hr/>

              <h5 className='mb-5'>SKIN EXAMINATION</h5>

              <div className="col-md-6">
            <h5 className="mb-3">RIGHT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Cracking
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

          <div className="col-md-6">
                    <h5 className="mb-3">LEFT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Cracking
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-12">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
             Colour
                </label>
          
                <div className='col-md-6'>
                <select class="form-select" id="ihd">
                              <option>1</option>
                              <option>2</option>
                        
                              </select>
                </div>
              
             
                    </div>
                    </div>

                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Temp
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Temp
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
               Infection
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
               Infection
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                Touch Sensation
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                 <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
               Touch Sensation
                </label>
                <div className='row'>
                <div className='col-md-3'>
                <select class="form-select" id="ihd">
                              <option>Y</option>
                              <option>N</option>
                        
                              </select>
                </div>
                <div className='col-md-9'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>
                        
                    <div className='col-md-5 mt-3'>
                    <div className='row'>
                        
                            <h5 className='mt-2 mb-5'>Monofilament</h5>
                            <div className="col-md-6">
                      <h5 className="mb-3">Right Foot</h5>
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    Great Toe
                          </label>
                          <div className='row'>
                      
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
          
                    <div className="col-md-6">
                              <h5 className="mb-3">Left Foot</h5>
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                          Great Toe
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                    <div className="col-md-6">
                             
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                        1st MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                    <div className="col-md-6">
                          
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                      1st MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                              
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                     3rd Mt
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>   
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                     3rd Mt
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>   
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    5th MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    5th MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
               In Step
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                     <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                   In Step
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                   <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                 Heel
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                        </div> 
                        <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                 Heel
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                        </div> 
                            </div>
                    </div>

                    <div className="col-md-2 mt-3 vertical-line-container">
      <div className="vertical-line"></div>

      {/* Inline CSS with styled-jsx */}
      <style jsx>{`
        .vertical-line-container {
        display: flex; /* Use flexbox for alignment */
          justify-content: center; /* Center horizontally */
          position: relative; /* Set relative positioning for absolute positioning of the line */
          height: auto; /* Adjust height as needed */
        }

        .vertical-line {
        border-left: 1px solid black; /* Line style */
          height: 645px; /* Initial line height */
          position: absolute; /* Position absolutely to control from top */
          top: 0; /* Start from the top */
          margin-top: 15px; /* Margin to control the start position */
        }
      `}</style>
    </div>
                    <div className='col-md-5 mt-3'>
                    <div className='row'>
                        
                            <h5 className='mt-2 mb-5'>Vibrometer</h5>
                            <div className="col-md-6">
                      <h5 className="mb-3">Right Foot</h5>
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    Great Toe
                          </label>
                          <div className='row'>
                      
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
          
                    <div className="col-md-6">
                              <h5 className="mb-3">Left Foot</h5>
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                          Great Toe
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                    <div className="col-md-6">
                             
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                        1st MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                    <div className="col-md-6">
                          
                          <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                      1st MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>
                              
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                     3rd Mt
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>   
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                     3rd Mt
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div>   
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    5th MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                    5th MT
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                    <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
               In Step
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                     <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                   In Step
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                              </div> 
                   <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                 Heel
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                        </div> 
                        <div className="col-md-6">
                    <div className="mb-3">
                          <label className="form-label" htmlFor="p_dm">
                 Heel
                          </label>
                          <div className='row'>
                    
                          <div className='col-md-12'>
                          <input
                            type="text"  className="form-control" id="amount" 
                          />
                          </div>
                          </div>
                              </div>
                        </div> 
                        
              
                        
        
                            </div>
                    </div>
                    
     
                    

                </div>
          </div>
        )}


{activeSubTab === 'general-exam-2' && (
             <div className="tab-pane fade show active">
             <div className="row mt-5">

          
  

          <div className="col-md-6">
            <h5 className="mb-3">RIGHT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                DP
                </label>
                <div className='row'>
             
                <div className='col-md-9'>
                <select class="form-select" id="ihd">
                              <option>1</option>
                              <option>2</option>
                        
                              </select>
                </div>
                </div>
                    </div>
                    </div>

          <div className="col-md-6">
                    <h5 className="mb-3">LEFT</h5>
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                DP
                </label>
                <div className='row'>
                <div className='col-md-9'>
                <select class="form-select" id="ihd">
                              <option>1</option>
                              <option>2</option>
                        
                              </select>
                </div>
                </div>
                    </div>
                    </div>
          <div className="col-md-6">
                  
                <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                PT
                </label>
                <div className='row'>
                <div className='col-md-9'>
                <select class="form-select" id="ihd">
                              <option>1</option>
                              <option>2</option>
                        
                              </select>
                </div>
                </div>
                    </div>
                    </div>

          <div className="col-md-6">
                  
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
                  PT
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>
          <div className="col-md-6">
                  
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
                  POP
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

          <div className="col-md-6">
                  
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
                  POP
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>


                    <div className="col-md-11">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
                ABI
                </label>
                <div className='row'>
                <div className='col-md-12'>
                <input
                  type="text"  className="form-control" id="amount" 
                />
                </div>
                </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                  
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
              ANKLE JERK
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

                      <div className="col-md-6">
                  
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
              ANKLE JERK
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

                      <div className="col-md-6">
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
            128Hz TUNING JERK
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                  <div className="mb-3">
                  <label className="form-label" htmlFor="p_dm">
            128Hz TUNING JERK
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

                      <hr/>

                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
               Footwear
                </label>
                <textarea className='form-control'> </textarea>
             
                </div>
                    </div>
                   
                    
                    <div className="col-md-6">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
             Impression
                </label>
                <textarea className='form-control'> </textarea>
             
                </div>
                    </div>
                    <hr/>

                    <h5 className='mb-5'>Diagnosis</h5>
                    <div className="col-md-12">
                  <div className="mb-3">
                <label className="form-label" htmlFor="p_dm">
             Diabetic Mellitus
                </label>
                <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
             
              
                    </div>
                    </div>

                    <div className="col-md-3">
                          <div className="mb-3 mt-4">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Hyper Tension
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-4">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="hd" />
                                <label className="form-check-label" htmlFor="hd">
                                  IHD
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-4">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="ptca" />
                                <label className="form-check-label" htmlFor="ptca">
                                  PTCA
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-4">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="cabg" />
                                <label className="form-check-label" htmlFor="cabg">
                                CABG
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="pvd" />
                                <label className="form-check-label" htmlFor="pvd">
                                 PVD
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="ckd" />
                                <label className="form-check-label" htmlFor="ckd">
                                 CKD
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="angina" />
                                <label className="form-check-label" htmlFor="angina">
                                  Angina
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="mi" />
                                <label className="form-check-label" htmlFor="mi">
                                  MI
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="lvf" />
                                <label className="form-check-label" htmlFor="lvf">
                                 LVF
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="dpn" />
                                <label className="form-check-label" htmlFor="dpn">
                                  DPN
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="dan" />
                                <label className="form-check-label" htmlFor="dan">
                                  DAN
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="diabetic" />
                                <label className="form-check-label" htmlFor="diabetic">
                                  Diabetic Foot
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="retino" />
                                <label className="form-check-label" htmlFor="retino">
                                 RETINOPATHY
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="ed" />
                                <label className="form-check-label" htmlFor="ed">
                                 ED
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        <div className="col-md-3">
                          <div className="mb-3 mt-2">
                            <div className="col-sm-9">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="other" />
                                <label className="form-check-label" htmlFor="other">
                                Others
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col-md-4">
                  
                  <div className="mb-3 mt-4">
                  <label className="form-label" htmlFor="p_dm">
                Follow Up
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

                      <div className="col-md-4">
                  
                  <div className="mb-3 mt-4">
                  <label className="form-label" htmlFor="p_dm">
               General Awareness
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>

                      <div className="col-md-4">
                  
                  <div className="mb-3 mt-4">
                  <label className="form-label" htmlFor="p_dm">
               Next Appointment
                  </label>
                  <div className='row'>
                  <div className='col-md-9'>
                  <select class="form-select" id="ihd">
                                <option>1</option>
                                <option>2</option>
                          
                                </select>
                  </div>
                  </div>
                      </div>
                      </div>


                </div>
          </div>
        )}

{activeSubTab === 'follow-up' && (
             <div className="tab-pane fade show active">
             <div className="row mt-5">

          
  

             <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
                Visit Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
               B.P
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
               Weight
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             OED FEET
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
         HbA1C
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
       FBS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>


            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             PPBS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             RBS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           HB %
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             RBA
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           UREA
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           CREATININE
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           Na+
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
                   
                    
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           K+
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
         ALK. PHOS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
       Uric Acid
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
       TOT CHOL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
              TRY GLY
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             LDL-CH
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             HDL-CH
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             VLDL-CH
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
            TOT BILIRUBIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           SGOT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           SGPT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           S.ALBUMIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           S.GLOB
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           T3
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           T4
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
           TSH
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
          C-PEP (F/PP)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <hr/>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
          URINE (R/E)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             a:SUGAR
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             b:ALBUMIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label" htmlFor="reg_number">
             c:KETONES
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reg_number" 
                  // placeholder="Enter Height"
                />
              </div>
            </div>
                 

                   


                </div>
          </div>
        )}


      </div>
    </div>
  );
};


export default Step1;

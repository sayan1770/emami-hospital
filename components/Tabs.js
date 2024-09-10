import React, { useState,useEffect } from 'react';
const tabs = ['personal-info', 'medical-info', 'personal-history', 'duration-disease1','complaints/treatment','examination-finding'];
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Initialize with the first tab

  const handleTabChange = (tab) => {
    if (tabs.includes(tab)) {
      setActiveTab(tab);
    }
  };

  const handleMobileNumberChange = (event) => {
    const { value } = event.target;
    event.target.value = value.replace(/[^0-9]/g, '');
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form submitted!');
  };

  // Handle back button click
  const handleBack = (e) => {
    e.preventDefault();
    if (activeTab !== 'personal-info') {
      const previousTab = getPreviousTab(activeTab);
      handleTabChange(previousTab);
    }
  };

  // Get the previous tab based on the current tab
  const getPreviousTab = (currentTab) => {
    const tabOrder = ['personal-info', 'medical-info', 'personal-history', 'duration-disease1', 'complaints/treatment','examination-finding'];
    const currentIndex = tabOrder.indexOf(currentTab);
    return currentIndex > 0 ? tabOrder[currentIndex - 1] : 'personal-info';
  };

  // Get the next tab based on the current tab
  const getNextTab = (currentTab) => {
    const tabOrder = ['personal-info', 'medical-info', 'personal-history', 'duration-disease1','complaints/treatment','examination-finding'];
    const currentIndex = tabOrder.indexOf(currentTab);
    return currentIndex < tabOrder.length - 1 ? tabOrder[currentIndex + 1] : 'examination-finding';
  };
  useEffect(() => {
    // Self-invoking function to initialize the Datepicker
    if (activeTab === 'personal-info') {
    (function() {
      const today = new Date(); 
      const formattedToday = today.toISOString().split('T')[0];
      const datepickerElement = document.querySelector('#pc-datepicker-1');

      const d_week = new Datepicker(datepickerElement, {
        buttonClass: 'btn',
       
        format: 'dd-mm-yyyy',
        // startDate: today,
        minDate: today,
        // Set the minimum selectable date to today
        autoclose: true, // Automatically close the datepicker when a date is selected
    
      });
      datepickerElement.addEventListener('changeDate', () => {
        d_week.hide(); // Manually close the datepicker
      });
    })();

    }
  }, [activeTab]);


  const isLastTab = activeTab === 'examination-finding'; 
  const isFirstTab = activeTab === 'personal-info';
  return (
    <div className="container mt-4">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs" id="formTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'personal-info' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="personal-info"
            aria-selected={activeTab === 'personal-info'}
            onClick={() => handleTabChange('personal-info')}
          >
            Personal Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'medical-info' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="medical-info"
            aria-selected={activeTab === 'medical-info'}
            onClick={() => handleTabChange('medical-info')}
          >
            Medical Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'personal-history' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="personal-history"
            aria-selected={activeTab === 'personal-history'}
            onClick={() => handleTabChange('personal-history')}
          >
            Personal History
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'duration-disease1' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="duration-disease1"
            aria-selected={activeTab === 'duration-disease1'}
            onClick={() => handleTabChange('duration-disease1')}
          >
            Duration of Diseases 1
          </button>
        </li>
      
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'complaints/treatment' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="complaints/treatment"
            aria-selected={activeTab === 'complaints/treatment'}
            onClick={() => handleTabChange('complaints/treatment')}
          >
           Complaints/Treatment
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'examination-finding' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-controls="examination-finding"
            aria-selected={activeTab === 'examination-finding'}
            onClick={() => handleTabChange('examination-finding')}
          >
           Examination Findings
          </button>
        </li>

        
        {/* Add more tabs as needed */}
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="formTabsContent">
        {/* Personal Info Form */}
        {activeTab === 'personal-info' && (
          <div
            className="tab-pane fade show active"
            id="personal-info"
            role="tabpanel"
            aria-labelledby="personal-info-tab"
          >
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="patientFullName">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientFullName"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
           
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="pc-datepicker-1">
                    Date
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
                                
                    <label className="form-label">Sex</label>
                    <div className="col-sm-12">
                        <div className="form-check form-check-inline d-inline-block">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="group6"
                            defaultValue=""
                            id="customCheckinlhstate1"
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
                            defaultChecked="checked"
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
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    type="number" min="1"
                    className="form-control"
                    id="age" 
                    placeholder="Enter Age"
                    autoComplete="off"
                    onInput={(e) => {
                        if (e.target.value < 1) {
                          e.target.value = ""; 
                        }
                      }}
                  />
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
                    <option>None</option>
                    </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="mobile">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onInput={handleMobileNumberChange}
                    maxLength="10"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="refer">
                    Referred From
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="refer"
                    placeholder="Enter Referred From"
                    autoComplete="off"
                  />
                </div>
              </div>
        



            </div>
          </div>
        )}

        {/* medical Info Form */}
        {activeTab === 'medical-info' && (
          <div
            className="tab-pane fade show active"
            id="medical-info"
            role="tabpanel"
            aria-labelledby="medical-info-tab"
          >
            <div className="row mt-5">

            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="height">
                    Height (cm)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="height" onInput={handleMobileNumberChange}
                    placeholder="Enter Height"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="weight">
                    Weight (kg) 
                  </label>
                  <input
                    type="text" onInput={handleMobileNumberChange} className="form-control" id="weight" placeholder="Enter Weight"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    BMI (kg/m2) 
                  </label>
                  <input
                    type="text" onInput={handleMobileNumberChange} className="form-control" id="hip" placeholder="Enter BMI"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    HIP (cm)
                  </label>
                  <input
                    type="text" onInput={handleMobileNumberChange} className="form-control" id="hip" placeholder="Enter HIP"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="whip">
                   Waist HIP Ratio
                  </label>
                  <input
                    type="text" onInput={handleMobileNumberChange} className="form-control" id="whip" placeholder="Enter HIP"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="allergy">
                 Allergy (if any)
                  </label>
              <textarea  className="form-control" id="allergy"  placeholder="If Any"/>
            </div>
              </div>
    
            </div>
          </div>
        )}

{activeTab === 'personal-history' && (
          <div
            className="tab-pane fade show active"
            id="personal-history"
            role="tabpanel"
            aria-labelledby="personal-history-tab"
          >
         
            <div className="row mt-5">

            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="tobacco">
                   Tobacco
                  </label>
                  <select class="form-select">
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="alcohol">
                    Alcohol
                  </label>
                  <select class="form-select">
                    <option>Yes</option>
                    <option>No</option>
                      </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="sedentary">
                   Sedentary
                  </label>
                  <select class="form-select">
                    <option>Yes</option>
                    <option>No</option>
                      </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="active">
                   Active
                  </label>
                  <select class="form-select">
                    <option>Yes</option>
                    <option>No</option>
                      </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="whip">
                  Post Menopause
                  </label>
                  <select class="form-select">
                    <option>Yes</option>
                    <option>No</option>
                      </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="surgery">
                Any Surgery/Allergy
                  </label>
                  <textarea  className="form-control" id="surgery"  />
            </div>
              </div>
    
            </div>
          </div>
        )}

{activeTab === 'duration-disease1' && (
          <div
            className="tab-pane fade show active"
            id="duration-disease1"
            role="tabpanel"
            aria-labelledby="duration-disease1-tab"
          >
               <h4 class='mt-4'>Duration of Diseases 1</h4>
            <div className="row mt-5">

            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="dm">
                   DM
                  </label>
                  <input type="text" className="form-control" id="dm"
                  placeholder="Enter DM"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="htn">
                    HTN
                  </label>
                  <input type="text" className="form-control" id="htn"
                  placeholder="Enter HTN"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="ihd">
                   IHD/CVD/PVD
                  </label>
                  <input type="text" className="form-control" id="ihd"
                  placeholder="Enter IHD"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="dysilpidemia">
                 Dysilpidemia
                  </label>
                  <input type="text" className="form-control" id="dysilpidemia"
                  placeholder="Enter Dysilpidemia"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="whip">
                 Thyroid Disease
                  </label>
                  <input type="text" className="form-control" id="thyroid"
                  placeholder="Enter Thyroid Disease"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="allergy">
                Dr.Asthma
                  </label>
                  <input type="text" className="form-control" id="asthma"
                  placeholder="Enter Asthma"
                  />
            </div>
              </div>
    
            </div>
            <h4 class='mt-4'>Duration of Diseases 2</h4>
            <div className="row mt-5">

<div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="dm2">
       DM
      </label>
      <input type="text" className="form-control" id="dm2"
      placeholder="Enter DM"
      />
    </div>
  </div>

  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="htn2">
        HTN
      </label>
      <input type="text" className="form-control" id="htn2"
      placeholder="Enter HTN"
      />
    </div>
  </div>

  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="ihd2">
       IHD/CVD/PVD
      </label>
      <input type="text" className="form-control" id="ihd2"
      placeholder="Enter IHD"
      />
    </div>
  </div>
  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="dysilpidemia2">
     Dysilpidemia
      </label>
      <input type="text" className="form-control" id="dysilpidemia2"
      placeholder="Enter Dysilpidemia"
      />
    </div>
  </div>
  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="thyroid2">
     Thyroid Disease
      </label>
      <input type="text" className="form-control" id="thyroid2"
      placeholder="Enter Thyroid Disease"
      />
    </div>
  </div>
  <div className="col-md-4">
    <div className="mb-3">
      <label className="form-label" htmlFor="pd">
   Premature CV death
      </label>
      <input type="text" className="form-control" id="pd"
      placeholder="Enter Remature CV death"
      />
</div>
  </div>

</div>
          </div>
        )}



{activeTab === 'complaints/treatment' && (
          <div
            className="tab-pane fade show active"
            id="complaints/treatment"
            role="tabpanel"
            aria-labelledby="complaints/treatment-tab"
          >
            <div className="row mt-5">

            <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="complaints">
               Chief Complaints
                  </label>
                  <textarea  className="form-control" id="complaints"  />
            </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="treatment">
               Ongoing Treatment
                  </label>
                  <textarea  className="form-control" id="treatment"  />
            </div>
              </div>
    
            </div>
          </div>
        )}
        

        {activeTab === 'examination-finding' && (
          <div
            className="tab-pane fade show active"
            id="examination-finding"
            role="tabpanel"
            aria-labelledby="examination-finding-tab"
          >
            <div className="row mt-5">

            <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="pr/min">
            PR/Min
                  </label>
                  <input type="text" className="form-control" id="pr/min"
                  placeholder="Enter PR/Min"
                  />
            </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="regular">
               Regular/Irregular  
                  </label>
                  <input type="text" className="form-control" id="regular"
                  placeholder="Enter Regular"
                  />
            </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="bp">
              BP mm of Hg
                  </label>
                  <input type="text" className="form-control" id="bp"
                  placeholder="Enter BP"
                  />
            </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="edma">
             EDEMA FEET
                  </label>
                  <input type="text" className="form-control" id="edma"
                  placeholder="Enter BP"
                  />
            </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="goiter">
             Goitre
                  </label>
                  <input type="text" className="form-control" id="goiter"
                  placeholder="Enter Goiter"
                  />
            </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="others">
             Others
                  </label>
                  <input type="text" className="form-control" id="others"
                  placeholder="Enter Others"
                  />
            </div>
              </div>
    
            </div>
          </div>
        )}
      </div>

      {/* Next Button */}
      <div className="mt-3">
      <button
            className="btn btn-secondary me-2"
            onClick={handleBack}
     disabled={isFirstTab}
          >
            Back
          </button>
          {isLastTab ? (
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              const nextTab = getNextTab(activeTab);
              handleTabChange(nextTab);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Tabs;

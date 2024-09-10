import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const StepTabs = () => {
  const [activeStep, setActiveStep] = useState('step1');

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container mt-3">
      {/* Main Tab Navigation */}
      <ul className="nav nav-tabs" id="mainTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeStep === 'step1' ? 'active' : ''}`}
            type="button"
            onClick={() => handleStepChange('step1')}
          >
            Patient Information
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeStep === 'step2' ? 'active' : ''}`}
            type="button"
            onClick={() => handleStepChange('step2')}
          >
            Step 2
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeStep === 'step3' ? 'active' : ''}`}
            type="button"
            onClick={() => handleStepChange('step3')}
          >
            Step 3
          </button>
        </li> */}
      </ul>

      {/* Main Tab Content */}
      <div className="tab-content" id="mainTabsContent">
        {activeStep === 'step1' && <Step1 />}
        {/* {activeStep === 'step2' && <Step2 />}
        {activeStep === 'step3' && <Step3 />} */}
      </div>
    </div>
  );
};

export default StepTabs;

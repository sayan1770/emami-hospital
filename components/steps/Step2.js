import React, { useState } from 'react';

const Step2 = () => {
  const [activeSubTab, setActiveSubTab] = useState('personal-history');

  const handleSubTabChange = (subTab) => {
    setActiveSubTab(subTab);
  };

  return (
    <div>
      {/* Sub-Tab Navigation for Step 2 */}
      <ul className="nav nav-tabs" id="step2Tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'personal-history' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('personal-history')}
          >
            Personal History
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeSubTab === 'disease-duration' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSubTabChange('disease-duration')}
          >
            Disease Duration
          </button>
        </li>
      </ul>

      {/* Sub-Tab Content for Step 2 */}
      <div className="tab-content" id="step2TabsContent">
        {activeSubTab === 'personal-history' && (
          <div className="tab-pane fade show active">
            {/* Personal History Form Content */}
            <h4>Personal History</h4>
            {/* Your Form Fields */}
          </div>
        )}
        {activeSubTab === 'disease-duration' && (
          <div className="tab-pane fade show active">
            {/* Disease Duration Form Content */}
            <h4>Disease Duration</h4>
            {/* Your Form Fields */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2;

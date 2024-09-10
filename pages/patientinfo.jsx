
import StepTabs from '../components/StepTabs';
export default function Patientinfo() {

    const handleSubmit = (e) => {
        // Implement your form submission logic here
        e.preventDefault();
        console.log('Form submitted!');
        router.push('/patientinfo');
      };
  return (
    <>

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
                    <a href="javascript: void(0)">Patient Details</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                  Patient Details
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
          <form onSubmit={handleSubmit}>
            <div className="card">
      
              <div className="card-header">
                <h5>Patient Details</h5>
              </div>
          
              <div className="card-body">
                
                <div className="row">

               <StepTabs/>
             
               
              {/* <div className="mt-3">
                  <button type="submit" className="btn btn-primary mb-4" onclick={handleSubmit}>
                        Submit
                      </button>
                      </div> */}
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

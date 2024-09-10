import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Sidebar() {
  const router = useRouter();
  useEffect(() => {
    // Function to handle the click event for arrows
    const handleArrowClick = (e) => {
      let arrowParent = e.target.parentElement.parentElement; // Selecting the main parent of arrow
      arrowParent.classList.toggle("showMenu");
    };

    // Function to handle the sidebar toggle event
    const handleSidebarToggle = () => {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    };

    // Adding event listeners for arrows
    let arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });

    // Adding event listener for the sidebar button
    let sidebarBtn = document.querySelector(".ti-menu-2");
    if (sidebarBtn) {
      sidebarBtn.addEventListener("click", handleSidebarToggle);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", handleArrowClick);
      });
      if (sidebarBtn) {
        sidebarBtn.removeEventListener("click", handleSidebarToggle);
      }
    };
  }, [router.pathname]);

  return (
    <>
      <link rel="stylesheet" href="style1.css"></link>
      <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
      {/* <nav className="pc-sidebar"> */}
        <div className="sidebar close">
          {/* <div className="logo-details">
            <i className="bx bxl-c-plus-plus" />
            <span className="logo_name">Emami Founation</span>
          </div> */}
          <ul className="nav-links">
            {/* Dashboard */}
            <li>
              <a href="#">
                <i className="bx bx-grid-alt" />
                <span className="link_name">Dashboard</span>
              </a>
              {/* <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Category
                  </a>
                </li>
              </ul> */}
            </li>
            {/* Category */}
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-collection" />
                  <span className="link_name">Patient</span>
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#"> Patient List</a>
                </li>
                <li>
                  <a href="#">Patient Details</a>
                </li>
                <li>
                  <a href="#">Existing Patient</a>
                </li>
              
              </ul>
            </li>
            
            {/* Other menu items... */}
            {/* <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-collection" />
                  <span className="link_name">Category</span>
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Category
                  </a>
                </li>
                <li>
                  <a href="#">HTML &amp; CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">PHP &amp; MySQL</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        {/* <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu" />
            <span className="text">Drop Down Sidebar</span>
          </div>
        </section> */}
        {/* <div className="one" /> */}
      {/* </nav> */}
    </>
  );
}

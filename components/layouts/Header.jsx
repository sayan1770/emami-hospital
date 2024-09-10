import React from 'react'

export default function Header() {
  return (
  <>
    <header className="pc-header">
    <div className="header-wrapper">
      {/* [Mobile Media Block] start */}
      <div className="me-auto pc-mob-drp">
        <ul className="list-unstyled">
          {/* ======= Menu collapse Icon ===== */}
          <li className="pc-h-item pc-sidebar-collapse">
            {/* <a href="#" className="pc-head-link ms-0" id="sidebar-hide"> */}
              <i className="ti ti-menu-2" style={{fontSize:'31px' ,cursor:'pointer'}}/>
            {/* </a> */}
          </li>
          <li className="pc-h-item pc-sidebar-popup">
            {/* <a href="#" className="pc-head-link ms-0" id="mobile-collapse"> */}
              <i className="ti ti-menu-2" />
            {/* </a> */}
          </li>
          {/* <li className="pc-h-item d-none d-md-inline-flex">
            <form className="form-search">
              <i className="search-icon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-search-normal-1" />
                </svg>{" "}
              </i>
              <input
                type="search"
                className="form-control"
                placeholder="Ctrl + K"
              />
            </form>
          </li> */}
        </ul>
      </div>
      {/* [Mobile Media Block end] */}
      {/* <div className="ms-auto">
        <ul className="list-unstyled">
          <li className="dropdown pc-h-item">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <svg className="pc-icon">
                <use xlinkHref="#custom-sun-1" />
              </svg>
            </a>
         
          </li>
          <li className="dropdown pc-h-item">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <svg className="pc-icon">
                <use xlinkHref="#custom-setting-2" />
              </svg>
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <a href="#!" className="dropdown-item">
                <i className="ti ti-user" /> <span>My Account</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ti ti-settings" /> <span>Settings</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ti ti-headset" /> <span>Support</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ti ti-lock" /> <span>Lock Screen</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ti ti-power" /> <span>Logout</span>
              </a>
            </div>
          </li>
          <li className="pc-h-item">
            <a
              href="#"
              className="pc-head-link me-0"
              data-bs-toggle="offcanvas"
              data-bs-target="#announcement"
              aria-controls="announcement"
            >
              <svg className="pc-icon">
                <use xlinkHref="#custom-flash" />
              </svg>
            </a>
          </li>
          <li className="dropdown pc-h-item">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <svg className="pc-icon">
                <use xlinkHref="#custom-notification" />
              </svg>{" "}
              <span className="badge bg-success pc-h-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
              <div className="dropdown-header d-flex align-items-center justify-content-between">
                <h5 className="m-0">Notifications</h5>
                <a href="#!" className="btn btn-link btn-sm">
                  Mark all read
                </a>
              </div>
              <div
                className="dropdown-body text-wrap header-notification-scroll position-relative"
                style={{ maxHeight: "calc(100vh - 215px)" }}
              >
                <p className="text-span">Today</p>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <svg className="pc-icon text-primary">
                          <use xlinkHref="#custom-layer" />
                        </svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="float-end text-sm text-muted">
                          2 min ago
                        </span>
                        <h5 className="text-body mb-2">UI/UX Design</h5>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <svg className="pc-icon text-primary">
                          <use xlinkHref="#custom-sms" />
                        </svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="float-end text-sm text-muted">
                          1 hour ago
                        </span>
                        <h5 className="text-body mb-2">Message</h5>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-span">Yesterday</p>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <svg className="pc-icon text-primary">
                          <use xlinkHref="#custom-document-text" />
                        </svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="float-end text-sm text-muted">
                          2 hour ago
                        </span>
                        <h5 className="text-body mb-2">Forms</h5>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <svg className="pc-icon text-primary">
                          <use xlinkHref="#custom-user-bold" />
                        </svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="float-end text-sm text-muted">
                          12 hour ago
                        </span>
                        <h5 className="text-body mb-2">Challenge invitation</h5>
                        <p className="mb-2">
                          <span className="text-dark">Jonny aber</span> invites
                          to join the challenge
                        </p>
                        <button className="btn btn-sm btn-outline-secondary me-2">
                          Decline
                        </button>
                        <button className="btn btn-sm btn-primary">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <svg className="pc-icon text-primary">
                          <use xlinkHref="#custom-security-safe" />
                        </svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="float-end text-sm text-muted">
                          5 hour ago
                        </span>
                        <h5 className="text-body mb-2">Security</h5>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-2">
                <a href="#!" className="link-danger">
                  Clear all Notifications
                </a>
              </div>
            </div>
          </li>
          <li className="dropdown pc-h-item header-user-profile">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <img
                src="../images/user/avatar-2.jpg"
                alt="user-image"
                className="user-avtar"
              />
            </a>
            <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
              <div className="dropdown-header d-flex align-items-center justify-content-between">
                <h5 className="m-0">Profile</h5>
              </div>
              <div className="dropdown-body">
                <div
                  className="profile-notification-scroll position-relative"
                  style={{ maxHeight: "calc(100vh - 225px)" }}
                >
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0">
                      <img
                        src="../images/user/avatar-2.jpg"
                        alt="user-image"
                        className="user-avtar wid-35"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Carson Darrin 🖖</h6>
                      <span>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="4b282a39382425652f2a393922250b2824263b2a2532652224"
                        >
                          [email&nbsp;protected]
                        </a>
                      </span>
                    </div>
                  </div>
                  <hr className="border-secondary border-opacity-50" />
                  <div className="card">
                    <div className="card-body py-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-inline-flex align-items-center">
                          <svg className="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-notification-outline" />
                          </svg>
                          Notification
                        </h5>
                        <div className="form-check form-switch form-check-reverse m-0">
                          <input
                            className="form-check-input f-18"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-span">Manage</p>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-setting-outline" />
                      </svg>{" "}
                      <span>Settings</span>{" "}
                    </span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-share-bold" />
                      </svg>{" "}
                      <span>Share</span>{" "}
                    </span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-lock-outline" />
                      </svg>{" "}
                      <span>Change Password</span>
                    </span>
                  </a>
                  <hr className="border-secondary border-opacity-50" />
                  <p className="text-span">Team</p>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-profile-2user-outline" />
                      </svg>{" "}
                      <span>UI Design team</span>
                    </span>
                    <div className="user-group">
                      <img
                        src="../images/user/avatar-1.jpg"
                        alt="user-image"
                        className="avtar"
                      />{" "}
                      <span className="avtar bg-danger text-white">K</span>{" "}
                      <span className="avtar bg-success text-white">
                        <svg className="pc-icon m-0">
                          <use xlinkHref="#custom-user" />
                        </svg>{" "}
                      </span>
                      <span className="avtar bg-light-primary text-primary">
                        +2
                      </span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-profile-2user-outline" />
                      </svg>{" "}
                      <span>Friends Groups</span>
                    </span>
                    <div className="user-group">
                      <img
                        src="../images/user/avatar-1.jpg"
                        alt="user-image"
                        className="avtar"
                      />{" "}
                      <span className="avtar bg-danger text-white">K</span>{" "}
                      <span className="avtar bg-success text-white">
                        <svg className="pc-icon m-0">
                          <use xlinkHref="#custom-user" />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <span>
                      <svg className="pc-icon text-muted me-2">
                        <use xlinkHref="#custom-add-outline" />
                      </svg>{" "}
                      <span>Add new</span>
                    </span>
                    <div className="user-group">
                      <span className="avtar bg-primary text-white">
                        <svg className="pc-icon m-0">
                          <use xlinkHref="#custom-add-outline" />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <hr className="border-secondary border-opacity-50" />
                  <div className="d-grid mb-3">
                    <button className="btn btn-primary">
                      <svg className="pc-icon me-2">
                        <use xlinkHref="#custom-logout-1-outline" />
                      </svg>
                      Logout
                    </button>
                  </div>
                  <div
                    className="card border-0 shadow-none drp-upgrade-card mb-0"
                    style={{
                      backgroundImage:
                        "url(../images/layout/img-profile-card.jpg)"
                    }}
                  >
                    <div className="card-body">
                      <div className="user-group">
                        <img
                          src="../images/user/avatar-1.jpg"
                          alt="user-image"
                          className="avtar"
                        />{" "}
                        <img
                          src="../images/user/avatar-2.jpg"
                          alt="user-image"
                          className="avtar"
                        />{" "}
                        <img
                          src="../images/user/avatar-3.jpg"
                          alt="user-image"
                          className="avtar"
                        />{" "}
                        <img
                          src="../images/user/avatar-4.jpg"
                          alt="user-image"
                          className="avtar"
                        />{" "}
                        <img
                          src="../images/user/avatar-5.jpg"
                          alt="user-image"
                          className="avtar"
                        />
                        <span className="avtar bg-light-primary text-primary">
                          +20
                        </span>
                      </div>
                      <h3 className="my-3 text-dark">
                        245.3k <small className="text-muted">Followers</small>
                      </h3>
                      <a href="#" className="btn btn btn-warning buynowlinks">
                        <svg className="pc-icon me-2">
                          <use xlinkHref="#custom-logout-1-outline" />
                        </svg>{" "}
                        Upgrade to Business
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  </header>
  {/* <div
    className="offcanvas pc-announcement-offcanvas offcanvas-end"
    tabIndex={-1}
    id="announcement"
    aria-labelledby="announcementLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="announcementLabel">
        What's new announcement?
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p className="text-span">Today</p>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-success f-12">Big News</div>
            <p className="mb-0 text-muted">2 min ago</p>
            <span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Able Pro is Redesigned</h5>
          <p className="text-muted">
            Able Pro is completely renowed with high aesthetics User Interface.
          </p>
          <img
            src="../images/layout/img-announcement-1.png"
            alt="img"
            className="img-fluid mb-3"
          />
          <div className="row">
            <div className="col-12">
              <div className="d-grid">
                <a
                  className="btn btn-outline-secondary"
                  href="https://1.envato.market/zNkqj6"
                  target="_blank"
                >
                  Check Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-warning f-12">Offer</div>
            <p className="mb-0 text-muted">2 hour ago</p>
            <span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Able Pro is in best offer price</h5>
          <p className="text-muted">
            Download Able Pro exclusive on themeforest with best price.
          </p>
          <a href="https://1.envato.market/zNkqj6" target="_blank">
            <img
              src="../images/layout/img-announcement-2.png"
              alt="img"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
      <p className="text-span mt-4">Yesterday</p>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-primary f-12">Blog</div>
            <p className="mb-0 text-muted">12 hour ago</p>
            <span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Featured Dashboard Template</h5>
          <p className="text-muted">
            Do you know Able Pro is one of the featured dashboard template
            selected by Themeforest team.?
          </p>
          <img
            src="../images/layout/img-announcement-3.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-primary f-12">Announcement</div>
            <p className="mb-0 text-muted">12 hour ago</p>
            <span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Buy Once - Get Free Updated lifetime</h5>
          <p className="text-muted">
            Get the lifetime free updates once you purchase the Able Pro.
          </p>
          <img
            src="../images/layout/img-announcement-4.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </div> */}
  </>
  )
}

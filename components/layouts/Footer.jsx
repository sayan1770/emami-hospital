import React from 'react'

export default function Footer() {
  return (
    <footer className="pc-footer">
    <div className="footer-wrapper container-fluid">
      <div className="row">
        <div className="col my-1">
        <p>&copy; {new Date().getFullYear()} Emami Foundation. All rights reserved.</p>
        </div>
        {/* <div className="col-auto my-1">
          <ul className="list-inline footer-link mb-0">
            <li className="list-inline-item">
              <a href="../index.html">Home</a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://phoenixcoded.gitbook.io/able-pro/"
                target="_blank"
              >
                Documentation
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://phoenixcoded.authordesk.app/" target="_blank">
                Support
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  </footer>
  )
}

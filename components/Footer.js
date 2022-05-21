import Link from "next/link";
import styles from "../styles/Footer.module.css";
export const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Toys</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Baby</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Specials</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Contact us</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
        © 2022 Copyright-
        <a
          target="_blank"
          rel="noreferrer"
          className="text-dark text-decoration-none"
          href="https://www.teeela.com/en/"
        >
          teeela.com
        </a>
      </div>
    </footer>
  );
};

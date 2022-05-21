import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 sticky-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <Image src="/logo.svg" width="40" height="40" alt="logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
          <div className="input-group ms-3 me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light bg-light"
              type="button"
              id="button-addon2"
            >
              <Image src="/search.svg" width="20" height="20" alt="search" />
            </button>
          </div>
          <ul className="navbar-nav  me-3">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

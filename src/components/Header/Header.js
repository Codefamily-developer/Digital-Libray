import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content">
          <div className="main">
            <h2 className="header-title">Find Your <span>Literary Match :</span></h2>
            <br />
            <p className="header-text">
              CodeFamily's Digital Library is an all-in-one platform that lets you search for your favorite books with ease. Our library features a user-friendly interface that allows you to browse through a vast collection of books. Whether you're a student, professional, or just an avid reader, our digital library is the perfect tool for expanding your knowledge and discovering new literary treasures.
            </p>
            <SearchForm />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

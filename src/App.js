import React from "react";
// ---------------------------------------------------
//   components---------------------------------------------------
import Header from "./components/Header";
import Home from "./components/Home";
import NewArrivals from "./components/NewArrivals";
import Booksbar from "./components/Booksbar";
import Footer from "./components/Footer";
 import   Contactus  from "./components/Contactus"








// ---------------------------------------------------
//  styles ---------------------------------------------------

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/home.scss";
import "./styles/newarrivais.scss";
import "./styles/bookbar.scss";
import "./styles/footer.scss";
import "./styles/contactus.scss";



import "./styles/mediaquerry.scss";



import "./App.scss";



function App() {
  return (
    <>
      <Header />
      <Home />
      <NewArrivals />
      <Booksbar />
      {/* <Contactus />/ */}
      <Footer />
    </>
  );
  
}

export default App;

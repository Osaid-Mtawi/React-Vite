import logo2 from "../../assets/Banner  Background.png";
import './Head.css';
import Search from "./Search";

const Head = () => {
  return (
    <div className="position-relative">
      <div className="header-bg"></div>
      <img src={logo2} alt="banner" className="w-100" style={{ height: '840px', objectFit: 'cover' }} />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 id="ss" className="display-4 fw-bold mb-3">Let's explore & travel the world</h1>
        <p id='ss' className="fs-5">Find the best destinations and the most popular stays!</p>
        <Search/>
      </div>
    </div>
  );
};

export default Head;
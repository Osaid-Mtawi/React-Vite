import Stays from "./Stays";
import logo from "../../assets/Matterhorn Suites Image.png";
import logo1 from "../../assets/Discovery Shores Image.png";
import logo2 from "../../assets/Arctic Hut Image.png";
import logo3 from "../../assets/Lake Louise Image.png";

const StaysAll = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Popular Stays</h2>
        <a href="#" className="text-primary fw-bold text-decoration-none">View all stays →</a>
      </div>
      <div className="row g-4">
        <Stays 
                  image={logo}
                  des="Entire bungalow"
                  des1="Matterhorn Suites"
                  des2="$575/night"
                  des3="4.9 " des4="(60 reviews)"        />
        <Stays 
                  image={logo1}
                  des="2-Story beachfront suite"
                  des1="Discovery Shores"
                  des2="$360/night"
                  des3="4.8 " des4="(116 reviews)"        />
        <Stays 
                  image={logo2}
                  des="Single deluxe hut"
                  des1="Arctic Hut"
                  des2="$420/night"
                  des3="4.7 " des4="(78 reviews)"        />
        <Stays 
                  image={logo3}
                  des="Deluxe King Room"
                  des1="Lake Louise Inn"
                  des2="$244/night"
                  des3="4.6 " des4="(63 reviews)"        />
      </div>
    </div>
  );
};

export default StaysAll;
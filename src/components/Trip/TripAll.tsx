import "./Trip.css";
import Trip from "./Trip";
import logo from '../../assets/ParisImage.png'
import logo1 from '../../assets/GreeceImage.png'
import logo2 from '../../assets/NorwayImage.png'
import logo3 from '../../assets/TuscanyImage.png'

const TripAll = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h6 className="text-primary fw-bold">PLAN YOUR NEXT TRIP</h6>
          <h2 className="fw-bold mb-0">Most Popular Destinations</h2>
        </div>
        <a href="#" className="text-primary fw-bold text-decoration-none">View all destinations →</a>
      </div>
      <div className="row g-4">
        <Trip image={logo} des="Paris" des1="$699" />
        <Trip image={logo1} des="Greece" des1="$1079" />
        <Trip image={logo2} des="Norway" des1="$895" />
        <Trip image={logo3} des="Tuscany" des1="$1245" />
      </div>
    </div>
  );
};

export default TripAll;

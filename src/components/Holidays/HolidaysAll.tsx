import Holidays from "./Holidays";
import logo from "../../assets/image.png"
import logo1 from "../../assets/SwitzerlandImage.png"
import logo2 from "../../assets/BoracayImage.png"
import logo3 from "../../assets/PalawanImage.png"


const HolidaysAll = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Recommended Holidays</h2>
        <a href="#" className="text-primary fw-bold text-decoration-none">View all holidays →</a>
      </div>
      <div className="row g-4">
        <Holidays image={logo} des="Bali" des1="4D3N" des2="$899" />
        <Holidays image={logo1} des="Swiss" des1="6D5N" des2="$900" />
        <Holidays image={logo2} des="Boracay" des1="5D4N" des2="$699" />
        <Holidays image={logo3} des="Palawan" des1="4D3N" des2="$789" />
      </div>
    </div>
  );
};

export default HolidaysAll;
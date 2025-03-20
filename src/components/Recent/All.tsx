import Prepare from "./Prepare";
import Recent from "./Recent";
import './All.css'

const All = () => {
  return (
    <div className="container mt-4">
      <h2 className="osaid">RECENT SEARCHES</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center mb-4">
          <Recent des="SIN" des1="LAX" des2=" 7 Sep 2021" />
        </div>
        <div className="col-md-6 d-flex justify-content-center mb-4">
          <Recent des="MY" des1="DUB" des2=" 9 Sep 2021" />
        </div>
      </div>
      <Prepare />
    </div>
  );
};

export default All;
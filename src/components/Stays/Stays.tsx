

interface StaysProps {
  image: string;
  des: string;
  des1: string;
  des2: string;
  des3: string;
  des4: string;
}

const Stays: React.FC<StaysProps> = (props) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 rounded-3">
        <img 
          src={props.image} 
          className="card-img-top rounded-top-3" 
          style={{ height: '200px', objectFit: 'cover' }} 
          alt={props.des} 
        />
        <div className="card-body">
          <p className="text-muted small mb-1">{props.des}</p>
          <h5 className="card-title mb-2">{props.des1}</h5>
          <p className="fw-bold mb-2">{props.des2}</p>
          <div className="d-flex align-items-center">
            <span className="text-warning me-1">★</span>
            <span className="me-1">{props.des3}</span>
            <span className="text-primary">{props.des4}</span>
          </div>
          <button className="btn btn-outline-primary w-100 mt-3">MORE DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default Stays;
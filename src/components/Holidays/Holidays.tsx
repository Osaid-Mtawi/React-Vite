interface HolidaysProps {
    des?: string;
    des1?: string;
    des2?: string;
    image: string;
}

const Holidays: React.FC<HolidaysProps> = (props) => {
  return (
    <div className="col-sm-6 col-md-3 mb-4">
      <div className="card h-100 rounded-3"> 
        <img 
          src={props.image} 
          className="card-img-top rounded-top-3" 
          style={{ height: '250px', objectFit: 'cover' }} 
          alt={props.des} 
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-2">{props.des}</h5>
              <p className="card-text text-muted mb-2">{props.des1}</p>
            </div>
            <p className="card-text text-primary fw-bold fs-5 mb-0">{props.des2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
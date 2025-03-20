import "./Trip.css"; 

interface TripProps {
    des?: string;
    des1?: string;
    image: string;
}

const Trip: React.FC<TripProps> = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="destination-card position-relative">
        <img src={props.image} alt="Destination" className="destination-image" />
        <div className="destination-text position-absolute top-0 start-0 m-2">
          {props.des}
        </div>
        <div className="price-tag position-absolute top-0 end-0 m-2">
          FROM
          <br /> <strong>{props.des1}</strong>
        </div>
      </div>
    </div>
  );
};

export default Trip;

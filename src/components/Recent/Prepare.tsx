import { FaBed, FaTicketAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from 'react-icons/fa';

const Prepare = () => {
  const props = [
    { icon: <FaBed />, label: 'Hotel', color: '#FF6B6B' },
    { icon: <FaTicketAlt />, label: 'Attractions', color: '#FF9F43' },
    { icon: <FaUtensils />, label: 'Eats', color: '#2ED573' },
    { icon: <FaBus />, label: 'Commute', color: '#FFC312' },
    { icon: <FaTaxi />, label: 'Taxi', color: '#54A0FF' },
    { icon: <FaFilm />, label: 'Movies', color: '#2ED573' },
  ];

  return (
    <div className="container mt-4">
      <h3 id='lol' className="text-muted mb-4">PREPARE FOR YOUR TRIP</h3>
      <div className="row justify-content-center">
        {props.map((item, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 text-center mb-4">
            <div
              id='lol2'
              className="d-flex align-items-center justify-content-center  mb-2 mx-auto"
              style={{ width: '70px', height: '70px', backgroundColor: item.color }}
            >
              <span className="text-white">{item.icon}</span>
            </div>
            <span className="text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prepare;
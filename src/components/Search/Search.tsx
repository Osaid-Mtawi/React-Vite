import { Form, Button } from 'react-bootstrap';
import './Head.css';

const Search = () => {
  return (
    <div className="search-container bg-white rounded-4 p-4 shadow">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 id='sr' className="fw-bold m-0">SEARCH FLIGHTS</h5>
        <div id='sr'>
          <Form.Check
            inline
            type="radio"
            name="tripType"
            label="Return"
            id="return"
          />
          <Form.Check
            inline
            type="radio"
            name="tripType"
            label="One-way"
            id="oneway"
            defaultChecked
          />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md">
          <Form.Group>
            <Form.Label className="text-muted small">Departure</Form.Label>
            <Form.Control
              type="text"
              placeholder="Singapore (SIN)"
              className="form-control-lg"
            />
          </Form.Group>
        </div>
        <div className="col-md">
          <Form.Group>
            <Form.Label className="text-muted small">Arrival</Form.Label>
            <Form.Control
              type="text"
              placeholder="Los Angeles (LA)"
              className="form-control-lg"
            />
          </Form.Group>
        </div>
        <div className="col-md">
          <Form.Group>
            <Form.Label className="text-muted small">Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue="2022-05-01"
              className="form-control-lg"
            />
          </Form.Group>
        </div>
        <div className="col-md d-flex align-items-end">
          <Button 
            variant="warning" 
            size="lg" 
            className="w-100 text-white search-btn"
          >
            SEARCH FLIGHTS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
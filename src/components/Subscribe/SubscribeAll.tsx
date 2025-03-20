import logo from '../../assets/Subscribe section background.png'
import Subscribe from './Subscribe';

const SubscribeAll = () => {
    return(
        <div className="position-relative">
            <img src={logo} alt="banner" className="w-100" style={{ height: '700px'}} />
            <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                <h6 className="text-primary text-uppercase mb-2">Subscribe to our newsletter</h6>
                <h2 className="fw-bold mb-4">Get weekly updates</h2>
                <Subscribe/>
            </div>
        </div>
    )
}

export default SubscribeAll;

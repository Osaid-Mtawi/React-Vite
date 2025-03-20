
const Subscribe = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow rounded-4 border-0">
                        <div className="card-body p-4">
                            <p className="mb-4 fs-5">Fill in your details to join the party!</p>
                            <form>
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg rounded-3 border" 
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg rounded-3 border" 
                                        placeholder="Email address"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn p-20 w-50 py-2 text-white fw-bold"
                                    style={{ backgroundColor: '#FF8C00' }}
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

import bgImg from '../assets/bg.png';

function Home() {
    return (
        <div className="bg">
            <img className='bg-image' src={bgImg} alt="" />
            <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm px-3 py-2 rounded">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-2 mt-2 mt-md-0">
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-primary" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-primary" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary" href="#">DOCUMENTS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="content d-flex align-items-center vh-100 px-5">
                <div className='d-grid gap-3'>
                    <div className="heading text-dark">
                        <p>GPAlytics</p>
                    </div>
                    <div className="text warp-text text-dark w-50">
                        <p>Optimalkan Performa Akademik Anda dengan GPAlytics - Analisis, Prediksi, dan Rekomendasi Cerdas untuk Mencapai IPK Terbaik!</p>
                    </div>
                    <div className="button d-flex gap-5">
                        <a href='/signup' className="btn px-4 btn-primary">Sign Up</a>
                        <a href='/login' className="btn px-4 btn-outline-primary">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
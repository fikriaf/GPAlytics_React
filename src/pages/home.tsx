import bgImg from '../assets/bg.png';

function Home() {
    return (
        <div className="bg">
            <img className='bg-image' src={bgImg} alt="" />
            <nav className="navbar navbar-expand-sm fixed-top my-2 mx-4">
                <div className="container-fluid">
                    <ul className="navbar-nav d-flex gap-3">
                        <li className="nav-item">
                            <a className="nav-link btn btn-outline-primary" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTAC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DOCS</a>
                        </li>
                    </ul>
                </div>

                </nav>
            <div className="content d-flex align-items-center vh-100 px-5">
                <div>
                    <div className="heading text-dark">
                        <p>GPAlytics</p>
                    </div>
                    <div className="text warp-text text-dark w-50">
                        <p>Optimalkan Performa Akademik Anda dengan GPAlytics – Analisis, Prediksi, dan Rekomendasi Cerdas untuk Mencapai IPK Terbaik!</p>
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
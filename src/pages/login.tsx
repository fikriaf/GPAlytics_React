import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/bg.png';
import googleImg from '../assets/google.png';
import './styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


function Login() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email, password, remember });
        navigate('/dashboard');
    };

    return (
        <div className="bg">
            <img className='bg-image' src={bgImg} alt="" />
            <div className='d-flex align-items-center h-100'>
                <div className='p-5 h-100 loginOverlay bg-light rounded'>
                    <div className='headLogin pb-4 d-grid'>
                        <h3>Selamat Datang Kembali</h3>
                        <span>Masukkan Email dan Password untuk mengakses</span>
                        <span> akun Anda.</span>
                    </div>
                    <div className='formnya'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="pswd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-check mb-3 mt-4">
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="remember"
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                    /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-2">Log In</button>
                        </form>

                        <div className='d-grid gap-3 align-items-center justify-content-center my-5 py-3'>
                            <div className='loginGoogle'>
                                <a href="" className='btn btn-outline-secondary d-flex gap-2 align-items-center'>
                                    <div className='logoGoogle d-flex align-items-center'>
                                        <img src={googleImg} alt="Google" style={{ width: '20px' }} />
                                    </div>
                                    <div>
                                        <span>Log In with Google</span>
                                    </div>
                                </a>
                            </div>
                            <div className='swaping d-flex gap-1'>
                                <span>Tidak punya akun?</span>
                                <a href="/signup" className='text-decoration-none'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

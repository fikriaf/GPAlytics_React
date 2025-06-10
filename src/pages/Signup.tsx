import { useState } from 'react';
import bgImg from '../assets/bg.png';
import googleImg from '../assets/google.png';
import './styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptance, setAcceptace] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, password, acceptance });
        
    };

    return (
        <div className="bg">
            <img className='bg-image' src={bgImg} alt="" />
            <div className='d-flex align-items-center h-100'>
                <div className='p-5 h-100 loginOverlay bg-light rounded'>
                    <div className='headLogin pb-4 d-flex px-5 mx-3'>
                        <h3>Mulai Sekarang !</h3>
                    </div>
                    <div className='formnya'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Name:</label>
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                />
                            </div>
                            <div className="mb-3">
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
                                    checked={acceptance}
                                    onChange={(e) => setAcceptace(e.target.checked)}
                                    required
                                    />{' '}
                                    Saya menyetujui <a href="/kebijakan" className="text-decoration-none">Kebijakan</a> dan <a href="/privasi" className="text-decoration-none">Privasi</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-2">Sign Up</button>
                        </form>

                        <div className='d-grid gap-3 align-items-center justify-content-center my-5 py-3'>
                            <div className='loginGoogle'>
                                <a href="" className='btn btn-outline-secondary d-flex gap-2 align-items-center'>
                                    <div className='logoGoogle d-flex align-items-center'>
                                        <img src={googleImg} alt="Google" style={{ width: '20px' }} />
                                    </div>
                                    <div>
                                        <span>Sign Up with Google</span>
                                    </div>
                                </a>
                            </div>
                            <div className='swaping d-flex gap-1'>
                                <span>Sudah punya akun?</span>
                                <a href="/login" className='text-decoration-none'>Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Dashboard.css'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const GPALyticsDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="container-fluid min-vh-100 bg-light">
                <div className="row">
                    <Sidebar isOpen={sidebarOpen} />
                    <div className='upper d-md-none d-flex fixed-top items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                        <h1 className='m-0 text-light'>Dashboard</h1>
                        <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <FontAwesomeIcon className='text-light' icon={faBars} />
                        </button>
                    </div>
                    <div className="bottomer col-md-10 p-2 ms-auto">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>IPK</h6>
                                    <h2 className="text-success">3.80 ↑</h2>
                                    <p className="text-muted">Increase compared to last week</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>IPS</h6>
                                    <h2>3.82</h2>
                                    <p className="text-muted">You got 3.82 out of 4</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Prediksi IPK</h6>
                                    <h2 className="text-primary">3.83</h2>
                                    <a href="#">Selengkapnya →</a>
                                </div>
                            </div>

                            {/* Mata Kuliah */}
                            <div className="col-md-6">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <div className="d-flex justify-content-between">
                                    <h6>Mata Kuliah</h6>
                                    <span>Semester ▼</span>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Komputasi Berbasis Web</li>
                                    <li className="list-group-item bg-light">Software Engineer <small className="text-muted">Oasis Organic Inc.</small></li>
                                    <li className="list-group-item">Statistika Dasar</li>
                                    <li className="list-group-item">Object Oriented Programming</li>
                                    </ul>
                                    <a href="#">Selengkapnya →</a>
                                </div>
                            </div>

                            {/* Grafik IPK */}
                            <div className="col-md-6">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <div className="d-flex justify-content-between">
                                    <h6>Grafik IPK</h6>
                                    <span>Semester ▼</span>
                                    </div>
                                    <img src="https://via.placeholder.com/300x150" alt="Grafik IPK" className="img-fluid" />
                                    <div className="d-flex justify-content-between mt-2">
                                    <small>IPK Tertinggi/Sem: 4 - 8</small>
                                    <small>IPK Tertinggi/Thn: 4 - 2023</small>
                                    </div>
                                </div>
                            </div>

                            {/* Teman */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Teman</h6>
                                    <p className="text-muted">2 pesan belum dibaca</p>
                                    <div className="d-flex">
                                    <img src="https://via.placeholder.com/40" className="rounded-circle me-2" />
                                    <img src="https://via.placeholder.com/40" className="rounded-circle me-2" />
                                    <img src="https://via.placeholder.com/40" className="rounded-circle me-2" />
                                    <img src="https://via.placeholder.com/40" className="rounded-circle me-2" />
                                    </div>
                                    <a href="#">Selengkapnya →</a>
                                </div>
                            </div>

                            {/* Nilai Tertinggi */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Mata kuliah Dengan Nilai Tertinggi</h6>
                                    <ul className="list-group">
                                    <li className="list-group-item">KOMPUTASI BERBASIS WEB - 4</li>
                                    <li className="list-group-item">SOFTWARE ENGINEERING - 3.7</li>
                                    <li className="list-group-item">STATISTIKA DASAR - 3.5</li>
                                    <li className="list-group-item">BASIS DATA - 3.3</li>
                                    </ul>
                                    <a href="#">Selengkapnya →</a>
                                </div>
                            </div>

                            {/* Rekomendasi */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Rekomendasi Mata Kuliah</h6>
                                    <span className="badge bg-primary me-2">Sistem digital</span>
                                    <span className="badge bg-secondary">Psikologi</span>
                                    <br />
                                    <a href="#">Selengkapnya →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GPALyticsDashboard;


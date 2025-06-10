import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Mahasiswa.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import tesImg from '../assets/logo.png'

const Mahasiswa = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container-fluid min-vh-100 bg-light">
            <div className="row">
                <Sidebar isOpen={sidebarOpen} />
                <div className='upper d-md-none d-flex fixed-top items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                    <h1 className='m-0 text-light'>Mahasiswa</h1>
                    <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon className='text-light' icon={faBars} />
                    </button>
                </div>
                <div className="bottomer col-md-10 p-2 ms-auto">
                    <div className="detailProfile bg-white d-flex gap-3 rounded shadow-sm p-4 mb-2">
                        <div className="columnLeft d-grid align-items-center">
                            <img src={tesImg} alt="Foto Mahasiswa" className="rounded-circle me-4" />
                            <div>
                                <h4 className="mb-1">Doni Priyanto</h4>
                                <p className="mb-2 text-muted">Donipriyanto@gmail.com</p>
                                <button className="btn btn-outline-primary btn-sm">Edit Profile</button>
                            </div>
                        </div>
                        <div className="vr mx-3"></div>
                        <div className="ColumnRight row mt-3">
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">Gender</span>
                                <strong className="d-block">Pria</strong>
                            </div>
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">Umur</span>
                                <strong className="d-block">20</strong>
                            </div>
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">Status</span>
                                <strong className="d-block">Aktif</strong>
                            </div>
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">NIM</span>
                                <strong className="d-block">2023081019</strong>
                            </div>
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">Tanggal Daftar</span>
                                <strong className="d-block">20 Jan, 2023</strong>
                            </div>
                            <div className="col-md-6 col-4 mb-3">
                                <span className="d-block mb-1">Prodi</span>
                                <strong className="d-block">Informatika</strong>
                            </div>
                        </div>
                    </div>

                    {/* Data Analisis */}
                    <div className="row g-2 mb-2">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-primary border-3">
                                <h6 className='my-1'>IPK Semester Ini</h6>
                                <h2 className="text-success my-1">3.80</h2>
                                <p className="text-muted small my-1">Berdasarkan rata-rata nilai semester 4</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-warning border-3">
                                <h6 className='my-1'>Mata Kuliah Terbaik</h6>
                                <h3 className="my-1">Sistem Digital (90)</h3>
                                <p className="text-muted my-1 small">Jumlah SKS: 3</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-success border-3">
                                <h6 className='m-1'>Jumlah SKS Saat Ini</h6>
                                <h2 className='m-1'>12 SKS</h2>
                                <p className="text-muted m-1 small">Total SKS dari 4 matkul semester 4</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-danger border-3">
                                <h6 className='m-1'>Prediksi Lulus</h6>
                                <h2 className='m-1'>2026</h2>
                                <p className="text-muted m-1 small">Berdasarkan progres SKS & IPK saat ini</p>
                            </div>
                        </div>
                    </div>

                    {/* Data Nilai */}
                    <div className="bg-white rounded shadow-sm p-4">
                        <h6>Data Nilai</h6>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mt-3">
                                <thead className="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Mata Kuliah</th>
                                    <th>SKS</th>
                                    <th>Semester</th>
                                    <th>Nilai Tugas</th>
                                    <th>Nilai UTS</th>
                                    <th>Nilai UAS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Komputasi Berbasis Web</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>80</td>
                                    <td>80</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Software Engineering</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Statistik Dasar</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>85</td>
                                    <td>90</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Sistem Digital</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>85</td>
                                    <td>90</td>
                                    <td>90</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mahasiswa;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/StatistikAkademik.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
    { semester: 1, tugas: 80, uts: 74, uas: 67 },
    { semester: 2, tugas: 75, uts: 76, uas: 80 },
    { semester: 3, tugas: 73, uts: 80, uas: 95 },
    { semester: 4, tugas: 77, uts: 86, uas: 70 },
    { semester: 5, tugas: 83, uts: 79, uas: 78 },
    { semester: 6, tugas: 88, uts: 77, uas: 84 },
    { semester: 7, tugas: 91, uts: 81, uas: 90 },
    { semester: 8, tugas: 89, uts: 80, uas: 95 },
];

const StatistikAkademik = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container-fluid min-vh-100 bg-light">
            <div className="row">
                <Sidebar isOpen={sidebarOpen} />
                <div className='upper d-md-none fixed-top d-flex items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                    <h1 className='m-0 text-light'>Statistik Akademik</h1>
                    <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon className='text-light' icon={faBars} />
                    </button>
                </div>
                <div className="bottomer col-md-10 pt-2 ms-auto">
                    <div className="bg-white rounded shadow-sm p-4 mb-4">
                        <h5 className="fw-semibold mb-3">Semua Nilai</h5>
                        <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="semester" label={{ value: "Semester", position: "insideBottom", offset: -5 }} />
                            <YAxis domain={[0, 100]} label={{ value: "Nilai", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend verticalAlign="top" align="right" />
                            <Line type="monotone" dataKey="tugas" stroke="#d1d1d1" strokeWidth={3} name="Tugas" />
                            <Line type="monotone" dataKey="uts" stroke="#007bff" strokeWidth={3} name="UTS" />
                            <Line type="monotone" dataKey="uas" stroke="#28a745" strokeWidth={3} name="UAS" />
                        </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Statistik Ringkasan */}
                    <div className="row g-4">
                    {/* Mata Kuliah */}
                    <div className="col-md-4">
                        <div className="border-start border-4 border-primary bg-white rounded shadow p-4 h-100">
                        <p className="text-uppercase text-secondary fw-semibold mb-2 small">Jumlah Mata Kuliah</p>
                        <h1 className="fw-bold text-dark display-6 mb-0">27</h1>
                        <p className="text-muted small mt-1">Total dari seluruh semester</p>
                        </div>
                    </div>

                    {/* Jumlah SKS */}
                    <div className="col-md-4">
                        <div className="border-start border-4 border-success bg-white rounded shadow p-4 h-100">
                        <p className="text-uppercase text-secondary fw-semibold mb-2 small">Jumlah SKS</p>
                        <h1 className="fw-bold text-dark display-6 mb-0">87<span className="text-muted fs-5"> / 144</span></h1>
                        <p className="text-muted small mt-1">Total SKS lulus dibanding maksimum</p>
                        </div>
                    </div>

                    {/* Rata-rata Nilai */}
                    <div className="col-md-4">
                        <div className="border-start border-4 border-warning bg-white rounded shadow p-4 h-100">
                        <p className="text-uppercase text-secondary fw-semibold mb-2 small">Rata-rata Nilai</p>
                        <h1 className="fw-bold text-dark display-6 mb-0">83.4</h1>
                        <p className="text-muted small mt-1">Skor gabungan seluruh semester</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatistikAkademik;

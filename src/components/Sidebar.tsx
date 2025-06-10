import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css'
import LogoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import tesImg from '../assets/logo.png'

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`col-md-2 sidebar position-fixed vh-100 bg-white shadow-sm p-3 d-flex flex-column ${isOpen ? 'active' : ''}`}>
            <div className='d-flex gap-3 align-items-center justify-content-center'>
                <img className='logoImg' src={LogoImg} alt="" />
                <h4 className="fw-bold m-0">GP<span className="text-primary">A</span>lytics</h4>
            </div>
            <div className="input-group search my-4">
                <span className="input-group-text bg-white border-end-0 rounded-start-pill">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input type="text" className="form-control border rounded-end border-start-0 rounded-end-pill" placeholder="Search" />
            </div>

            <ul className="nav flex-column mb-4">
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link default" end>Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/update-nilai" className="nav-link">Update Nilai</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/statistik-akademik" className="nav-link">Statistik Akademik</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/support-center" className="nav-link">Support Center</NavLink>
                </li>
            </ul>
            <div className="mt-auto miniaccount">
                <div className="d-flex align-items-center">
                    <img src={tesImg} className="rounded-circle me-2" alt="User" />
                    <div>
                        <div className="fw-semibold">Gustavo Xavier</div>
                        <span className="badge bg-warning text-dark">Admin</span>
                    </div>
                </div>
                <a href="#" className="btn btn-outline-danger btn-sm mt-3 w-100">Log out</a>
            </div>
        </div>
    );
};

export default Sidebar;

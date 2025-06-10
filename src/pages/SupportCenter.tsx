import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/SupportCenter.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SupportCenter = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState('panduan');

    return (
        <div className="container-fluid min-vh-100 bg-light">
            <div className="row">
                <Sidebar isOpen={sidebarOpen} />
                <div className='upper d-md-none fixed-top d-flex items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                    <h1 className='m-0 text-light'>Support Center</h1>
                    <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon className='text-light' icon={faBars} />
                    </button>
                </div>
                <div className="bottomerss col-md-10 d-flex p-2 pe-3 ms-auto gap-2">
                    {/* Content */}
                    <div className='col-md-6 px-3 bg-white rounded rounded-3'>
                        <div className='p-2 border border-secondary my-3 rounded'>
                        {/* Panduan */}
                        { activePage === 'panduan' && (
                            <div className='default panduan'>
                                <h1 className='text-center'>Panduan Penggunaan GPAlytics</h1>
                                <hr />
                                <p>
                                    <strong>Login/Registrasi:</strong><br />
                                    Mahasiswa masuk ke sistem GPAlytics dengan akun yang sudah terdaftar atau membuat akun baru.
                                </p>

                                <ol className="ps-3">
                                    <li className="mb-2">
                                        <strong>Input Nilai:</strong><br />
                                        Masukkan data nilai mata kuliah beserta SKS-nya melalui menu input nilai. Pastikan format nilai benar agar sistem dapat memprosesnya.
                                    </li>
                                    <li className="mb-2">
                                    <strong>Lihat IPK dan Grafik:</strong><br />
                                    Setelah nilai dimasukkan, sistem secara otomatis menghitung IPK dan menampilkan grafik perkembangan nilai per semester.
                                    </li>
                                    <li className="mb-2">
                                    <strong>Prediksi Akademik:</strong><br />
                                    Sistem akan menampilkan prediksi IPK masa depan berdasarkan tren nilai sebelumnya.
                                    </li>
                                    <li className="mb-2">
                                    <strong>Rekomendasi Perbaikan:</strong><br />
                                    GPAlytics memberikan saran strategis untuk membantu mahasiswa meningkatkan performa akademik.
                                    </li>
                                </ol>

                                <p className="mt-3">
                                    <strong>Catatan:</strong> Semua data hanya dapat diakses oleh pengguna masing-masing dan tidak tersinkronisasi dengan sistem akademik kampus.
                                </p>
                            </div>
                        )}

                        {/* FAQ */}
                        { activePage === 'faq' && (
                            <div className='faq'>
                                <h1 className='text-center'>FAQ GPAlytics</h1>
                                <hr />
                                <ol className="ps-3">
                                    <li className="mb-2">
                                        <strong>Apa itu GPAlytics?</strong><br />
                                        GPAlytics adalah platform web yang membantu mahasiswa memantau nilai, menghitung IPK, memprediksi IPK masa depan, dan mendapatkan rekomendasi akademik.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Apakah data saya aman di GPAlytics?</strong><br />
                                        Ya. Semua data disimpan secara terenkripsi dan hanya dapat diakses oleh pemilik akun.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Apakah GPAlytics terhubung dengan sistem akademik kampus?</strong><br />
                                        Tidak. GPAlytics bersifat mandiri dan tidak terintegrasi langsung dengan sistem kampus.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Bagaimana cara menghitung IPK di sistem ini?</strong><br />
                                        Cukup inputkan nilai dan SKS setiap mata kuliah. Sistem akan menghitung IPK berdasarkan bobot nilai dan SKS secara otomatis.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Apa yang dimaksud dengan prediksi IPK?</strong><br />
                                        Prediksi IPK adalah estimasi nilai IPK di masa depan berdasarkan data dan tren nilai sebelumnya.
                                    </li>
                                </ol>

                                <p className="mt-3">
                                    <strong>Catatan:</strong> Semua data hanya dapat diakses oleh pengguna masing-masing dan tidak tersinkronisasi dengan sistem akademik kampus.
                                </p>
                            </div>
                        )}

                        {/* Kebijakan */}
                        { activePage === 'kebijakan' && (
                            <div className='kebijakan'>
                                <h1 className='text-center'>Kebijakan Privasi</h1>
                                <hr />
                                <p className="mt-3" style={{ textAlign: 'justify' }}>
                                    Kami berkomitmen penuh untuk melindungi data pribadi Anda dengan standar keamanan yang tinggi. Semua informasi yang Anda masukkan, seperti nilai dan data akun, hanya digunakan untuk keperluan analisis pribadi dan tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.
<br />Keamanan data adalah prioritas kami. Dengan enkripsi yang kuat, Anda adalah satu-satunya yang memiliki akses ke akun Anda. Kami tidak terhubung dengan sistem kampus atau aplikasi eksternal, sehingga privasi Anda tetap terjaga tanpa ada pelacakan atau pengumpulan data yang tidak diinginkan.
<br />Anda juga memiliki kendali penuh atas data yang telah Anda masukkan. Setiap saat, Anda bisa mengubah atau menghapus data tersebut sesuai kebutuhan melalui pengaturan akun.
<br />Jika terjadi pembaruan dalam kebijakan ini, kami akan memberikan pemberitahuan secara transparan agar Anda tetap mendapatkan informasi yang terbaru. Perubahan apapun akan dikomunikasikan melalui notifikasi langsung kepada Anda, sehingga Anda selalu terinformasi.
                                </p>
                                <div>
                                    <p>Best Regard,</p>
                                    <em>GPAlytics Team</em>
                                </div>
                            </div>
                        )}

                        {/* Kontak Kami */}
                        { activePage === 'kontak' && (
                            <div className='kontak'>
                                <h1 className='text-center'>Hubungi</h1>
                            </div>
                        )}
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='col-md-6'>
                        <div className='buttonMenu d-grid gap-2'>
                            <div className='btnPanduan'>
                                <button className='btn py-3 btn-secondary w-100' onClick={() => setActivePage('panduan')} style={{ backgroundColor: activePage === 'panduan' ? 'rgb(209, 207, 207)' : '' }}>Panduan</button>
                            </div>
                            <div className='btnFAQ'>
                                <button className='btn py-3 btn-secondary w-100' onClick={() => setActivePage('faq')} style={{ backgroundColor: activePage === 'faq' ? 'rgb(209, 207, 207)' : '' }}>FAQ</button>
                            </div>
                            <div className='btnKebijakan'>
                                <button className='btn py-3 btn-secondary w-100' onClick={() => setActivePage('kebijakan')} style={{ backgroundColor: activePage === 'kebijakan' ? 'rgb(209, 207, 207)' : '' }}>Kebijakan Privasi</button>
                            </div>
                            <div className='btnKontak'>
                                <button className='btn py-3 btn-secondary w-100' onClick={() => setActivePage('kontak')} style={{ backgroundColor: activePage === 'kontak' ? 'rgb(209, 207, 207)' : '' }}>Kontak Kami</button>
                            </div>
                        </div>
                        <div className='d-flex flex-column text-center justify-content-center justify-content-between'>
                            <div className='garis3 d-flex my-4 align-items-center justify-content-center' style={{ height: '10rem' }}>
                                <div className="vr mx-5" style={{ width: '1rem', height: '7rem', alignSelf: 'center' }}></div>
                                <div className="vr mx-5" style={{ width: '1rem', height: '9rem', alignSelf: 'center' }}></div>
                                <div className="vr mx-5" style={{ width: '1rem', height: '7rem', alignSelf: 'center' }}></div>
                            </div>
                            <div className='textpenutup'>
                                <p className='w-75 mx-auto'>
                                Versi 1.2 — Dibangun dengan ❤️ di Indonesia untuk mendampingi perjalanan akademikmu. Privasi kamu adalah prioritas kami. GPAlytics tidak terhubung ke sistem akademik mana pun.
                                </p>
                                <p>© 2025 GPAlytics. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomerss-mobile d-none col-md-10 d-flex p-2 pe-3 ms-auto gap-2">
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header">
                            <a className="collapsed btn w-100 d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseOne">
                                <span>Panduan</span>
                                <span className='dropdown-toggle'></span>
                            </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <h1 className='text-center'>Panduan Penggunaan GPAlytics</h1>
                                    <hr />
                                    <p>
                                        <strong>Login/Registrasi:</strong><br />
                                        Mahasiswa masuk ke sistem GPAlytics dengan akun yang sudah terdaftar atau membuat akun baru.
                                    </p>

                                    <ol className="ps-3">
                                        <li className="mb-2">
                                            <strong>Input Nilai:</strong><br />
                                            Masukkan data nilai mata kuliah beserta SKS-nya melalui menu input nilai. Pastikan format nilai benar agar sistem dapat memprosesnya.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Lihat IPK dan Grafik:</strong><br />
                                            Setelah nilai dimasukkan, sistem secara otomatis menghitung IPK dan menampilkan grafik perkembangan nilai per semester.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Prediksi Akademik:</strong><br />
                                            Sistem akan menampilkan prediksi IPK masa depan berdasarkan tren nilai sebelumnya.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Rekomendasi Perbaikan:</strong><br />
                                            GPAlytics memberikan saran strategis untuk membantu mahasiswa meningkatkan performa akademik.
                                        </li>
                                    </ol>

                                    <p className="mt-3">
                                        <strong>Catatan:</strong> Semua data hanya dapat diakses oleh pengguna masing-masing dan tidak tersinkronisasi dengan sistem akademik kampus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn w-100 d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseTwo">
                                    <span>FAQ</span>
                                    <span className='dropdown-toggle'></span>
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <h1 className='text-center'>FAQ GPAlytics</h1>
                                    <hr />
                                    <ol className="ps-3">
                                        <li className="mb-2">
                                            <strong>Apa itu GPAlytics?</strong><br />
                                            GPAlytics adalah platform web yang membantu mahasiswa memantau nilai, menghitung IPK, memprediksi IPK masa depan, dan mendapatkan rekomendasi akademik.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Apakah data saya aman di GPAlytics?</strong><br />
                                            Ya. Semua data disimpan secara terenkripsi dan hanya dapat diakses oleh pemilik akun.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Apakah GPAlytics terhubung dengan sistem akademik kampus?</strong><br />
                                            Tidak. GPAlytics bersifat mandiri dan tidak terintegrasi langsung dengan sistem kampus.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Bagaimana cara menghitung IPK di sistem ini?</strong><br />
                                            Cukup inputkan nilai dan SKS setiap mata kuliah. Sistem akan menghitung IPK berdasarkan bobot nilai dan SKS secara otomatis.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Apa yang dimaksud dengan prediksi IPK?</strong><br />
                                            Prediksi IPK adalah estimasi nilai IPK di masa depan berdasarkan data dan tren nilai sebelumnya.
                                        </li>
                                    </ol>

                                    <p className="mt-3">
                                        <strong>Catatan:</strong> Semua data hanya dapat diakses oleh pengguna masing-masing dan tidak tersinkronisasi dengan sistem akademik kampus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn w-100 d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseThree">
                                    <span>Kebijakan</span>
                                    <span className='dropdown-toggle'></span>
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <h1 className='text-center'>Kebijakan Privasi</h1>
                                    <hr />
                                    <p className="mt-3" style={{ textAlign: 'justify' }}>
                                        Kami berkomitmen penuh untuk melindungi data pribadi Anda dengan standar keamanan yang tinggi. Semua informasi yang Anda masukkan, seperti nilai dan data akun, hanya digunakan untuk keperluan analisis pribadi dan tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.
    <br />Keamanan data adalah prioritas kami. Dengan enkripsi yang kuat, Anda adalah satu-satunya yang memiliki akses ke akun Anda. Kami tidak terhubung dengan sistem kampus atau aplikasi eksternal, sehingga privasi Anda tetap terjaga tanpa ada pelacakan atau pengumpulan data yang tidak diinginkan.
    <br />Anda juga memiliki kendali penuh atas data yang telah Anda masukkan. Setiap saat, Anda bisa mengubah atau menghapus data tersebut sesuai kebutuhan melalui pengaturan akun.
    <br />Jika terjadi pembaruan dalam kebijakan ini, kami akan memberikan pemberitahuan secara transparan agar Anda tetap mendapatkan informasi yang terbaru. Perubahan apapun akan dikomunikasikan melalui notifikasi langsung kepada Anda, sehingga Anda selalu terinformasi.
                                    </p>
                                    <div>
                                        <p>Best Regard,</p>
                                        <em>GPAlytics Team</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn w-100 d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseFour">
                                    <span>Kontak</span>
                                    <span className='dropdown-toggle'></span>
                                </a>
                            </div>
                            <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum..
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column text-center justify-content-center justify-content-between'>
                        <div className='garis3 d-flex my-4 align-items-center justify-content-center' style={{ height: '10rem' }}>
                            <div className="vr mx-5" style={{ width: '1rem', height: '7rem', alignSelf: 'center' }}></div>
                            <div className="vr mx-5" style={{ width: '1rem', height: '9rem', alignSelf: 'center' }}></div>
                            <div className="vr mx-5" style={{ width: '1rem', height: '7rem', alignSelf: 'center' }}></div>
                        </div>
                        <div className='textpenutup'>
                            <p className='w-75 mx-auto'>
                            Versi 1.2 — Dibangun dengan ❤️ di Indonesia untuk mendampingi perjalanan akademikmu. Privasi kamu adalah prioritas kami. GPAlytics tidak terhubung ke sistem akademik mana pun.
                            </p>
                            <p>© 2025 GPAlytics. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportCenter;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGES_TEXT, LANGUAGES_VALUE } from '../../../constants/common.contants';
import { languageContext } from '../../../context/language.context';

function Header(props) {
    const {changeLang} = useContext(languageContext);
    return (
        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <Link className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: 50 }}>
                    <i className="flaticon-043-teddy-bear" />
                    <span className="text-primary">KIDKINDER</span>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav font-weight-bold mx-auto py-0">
                        <Link to={"/"} className="nav-item nav-link active">Home</Link>
                        <Link to={"/about"} className="nav-item nav-link">About</Link>
                        <Link to="class.html" className="nav-item nav-link">Classes</Link>
                        <Link to="team.html" className="nav-item nav-link">Teachers</Link>
                        <Link to="gallery.html" className="nav-item nav-link">Gallery</Link>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="blog.html" className="dropdown-item">Blog Grid</Link>
                                <Link to="single.html" className="dropdown-item">Blog Detail</Link>
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <select onChange={(e) => changeLang(e.target.value)} defaultChecked="" className="custom-select border-0 px-4" style={{ height: 47, width: 150 }}>
                        <option value={LANGUAGES_VALUE.EN}>{LANGUAGES_TEXT.ENGLISH}</option>
                        <option value={LANGUAGES_VALUE.HI}>{LANGUAGES_TEXT.HINDI}</option>
                        <option value={LANGUAGES_VALUE.GJ}>{LANGUAGES_TEXT.GUJRATI}</option>
                    </select>

                    <Link to className="btn btn-primary px-4">Join Class</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FacilitiCard from '../../componets/client/facilities/FacilitiCard';
import { LANGUAGES_VALUE } from '../../constants/common.contants';
import { languageContext } from '../../context/language.context';

function Home(props) {
    const [facilities, setFacilities] = useState([
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Play Ground",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        },
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Music and Dance",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        },
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Arts and Crafts",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        },
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Safe Transportation",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        },
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Healthy food",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        },
        {
            id: crypto.randomUUID(),
            icon: "flaticon-050-fence",
            title: "Educational Tour",
            desc: " Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."

        }
    ]);
    const {lang} = useContext(languageContext);
    return (
        <>
            <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
                <div className="row align-items-center px-3">
                    <div className="col-lg-6 text-center text-lg-left">
                        <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
                        <h1 className="display-3 font-weight-bold text-white">
                            {LANGUAGES_VALUE.HI === lang ? "अपने बच्चे के लिए सीट बुक करें" :
                                LANGUAGES_VALUE.GJ === lang ? "તમારા બાળક માટે સીટ બુક કરો" :
                                    "Book A Seat For Your Kid"}
                        </h1>
                        <p className="text-white mb-4">
                            Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
                            sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
                            ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
                            dolore.
                        </p>
                        <Link className="btn btn-secondary mt-1 py-3 px-5">Learn More</Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <img className="img-fluid mt-5" src="/assets/images/header.png" />
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container pb-3">
                    <div className="row">
                        {
                            facilities.map((faciliti, index) => (
                                <FacilitiCard data={faciliti} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/assets/images/about-1.jpg" />
                        </div>
                        <div className="col-lg-7">
                            <p className="section-title pr-5">
                                <span className="pr-2">Learn About Us</span>
                            </p>
                            <h1 className="mb-4">Best School For Your Kids</h1>
                            <p>
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor
                            </p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-4">
                                    <img className="img-fluid rounded" src="/assets/images/about-2.jpg" />
                                </div>
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />Labore eos amet
                                            dolor amet diam
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />Etsea et sit
                                            dolor amet ipsum
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />Diam dolor diam
                                            elitripsum vero.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link className="btn btn-primary mt-2 py-2 px-4">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Popular Classes</span>
                        </p>
                        <h1 className="mb-4">Classes for Your Kids</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="/assets/images/class-1.jpg" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Drawing Class</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Age of Kids</strong>
                                        </div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Total Seats</strong>
                                        </div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Class Time</strong>
                                        </div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Tution Fee</strong>
                                        </div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div>
                                </div>
                                <Link className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="/assets/images/class-2.jpg" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Language Learning</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Age of Kids</strong>
                                        </div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Total Seats</strong>
                                        </div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Class Time</strong>
                                        </div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Tution Fee</strong>
                                        </div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div>
                                </div>
                                <Link className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="/assets/images/class-3.jpg" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Basic Science</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Age of Kids</strong>
                                        </div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Total Seats</strong>
                                        </div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Class Time</strong>
                                        </div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right">
                                            <strong>Tution Fee</strong>
                                        </div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div>
                                </div>
                                <Link className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <p className="section-title pr-5">
                                <span className="pr-2">Book A Seat</span>
                            </p>
                            <h1 className="mb-4">

                            </h1>
                            <p>
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor
                            </p>
                            <ul className="list-inline m-0">
                                <li className="py-2">
                                    <i className="fa fa-check text-success mr-3" />Labore eos amet
                                    dolor amet diam
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-success mr-3" />Etsea et sit dolor
                                    amet ipsum
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-success mr-3" />Diam dolor diam
                                    elitripsum vero.
                                </li>
                            </ul>
                            <Link className="btn btn-primary mt-4 py-2 px-4">Book Now</Link>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-secondary text-center p-4">
                                    <h1 className="text-white m-0">Book A Seat</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <select defaultChecked="" className="custom-select border-0 px-4" style={{ height: 47 }}>
                                                <option value={""}>Select A Class</option>
                                                <option value={1}>Class 1</option>
                                                <option value={2}>Class 1</option>
                                                <option value={3}>Class 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary btn-block border-0 py-3" type="submit">
                                                Book Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Our Teachers</span>
                        </p>
                        <h1 className="mb-4">Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src="/assets/images/team-1.jpg" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-twitter" /></Link>
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-facebook-f" /></Link>
                                    <Link className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }}><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                            <h4>Julia Smith</h4>
                            <i>Music Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src="/assets/images/team-2.jpg" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-twitter" /></Link>
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-facebook-f" /></Link>
                                    <Link className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }}><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                            <h4>Jhon Doe</h4>
                            <i>Language Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src="/assets/images/team-3.jpg" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-twitter" /></Link>
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-facebook-f" /></Link>
                                    <Link className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }}><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                            <h4>Mollie Ross</h4>
                            <i>Dance Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src="/assets/images/team-4.jpg" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-twitter" /></Link>
                                    <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }}><i className="fab fa-facebook-f" /></Link>
                                    <Link className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }}><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                            <h4>Donald John</h4>
                            <i>Art Teacher</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container p-0">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Testimonial</span>
                        </p>
                        <h1 className="mb-4">What Parents Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3" />
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="/assets/images/testimonial-1.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3" />
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="/assets/images/testimonial-2.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3" />
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="/assets/images/testimonial-3.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3" />
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="/assets/images/testimonial-4.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Latest Blog</span>
                        </p>
                        <h1 className="mb-4">Latest Articles From Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src="/assets/images/blog-1.jpg" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4>Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                                    </div>
                                    <p>
                                        Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                                        eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                                        lorem. Tempor ipsum justo amet stet...
                                    </p>
                                    <Link className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src="/assets/images/blog-2.jpg" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4>Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                                    </div>
                                    <p>
                                        Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                                        eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                                        lorem. Tempor ipsum justo amet stet...
                                    </p>
                                    <Link className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src="/assets/images/blog-3.jpg" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4>Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                                    </div>
                                    <p>
                                        Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                                        eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                                        lorem. Tempor ipsum justo amet stet...
                                    </p>
                                    <Link className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
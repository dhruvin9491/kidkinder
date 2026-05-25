import React, { useContext, useState } from 'react';
import FacilitiCard from '../../componets/client/facilities/FacilitiCard';
import { languageContext } from '../../context/language.context';
import { LANGUAGES_VALUE } from '../../constants/common.contants';

function About(props) {
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
    return (
        <div className="container-fluid pt-5">
            <h1 className="display-3 font-weight-bold text-center my-4">About Us</h1>
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

    );
}

export default About;
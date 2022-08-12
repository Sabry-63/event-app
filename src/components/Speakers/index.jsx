import React from 'react';
import './speakers.css';
import ImageSpeakers1 from '../../assets/amr-300-400.png';
import ImageSpeakers2 from '../../assets/naser 300-400.png';
import ImageSpeakers3 from '../../assets/omar 200-300.png';
import ImageSpeakers4 from '../../assets/zero 300-400.png';
import { Card } from 'antd';
export default function Speakers() {
    const { Meta } = Card;
    const spekersData = [
        {
            id: 1,
            name: 'Mohamed Amr',
            image: ImageSpeakers1,
            special: 'Backend',
        },
        {
            id: 2,
            name: 'Ahmed Naseer',
            image: ImageSpeakers2,
            special: 'Software Engineering & Javascript',
        },
        {
            id: 3,
            name: 'Omar Ahmed',
            image: ImageSpeakers3,
            special: 'Mobile Development',
        },
        {
            id: 4,
            name: 'Osama Elzero',
            image: ImageSpeakers4,
            special: 'Basics & Web Development',
        },
    ];
    return (
        <div className="speakers__app bg-white py-5">
            <div className="container">
                <h3 className="mb-4 border-bottom pb-2 text-center speakers__app__title">
                    Our Speakers
                </h3>
                <div className="row">
                    {spekersData.map((s) => {
                        return (
                            <div className="col-6 col-lg-3 mb-3" key={s.id}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt={s.name}
                                            src={s.image}
                                            className="speakers__app__img"
                                        />
                                    }
                                >
                                    <Meta
                                        title={s.name}
                                        description={s.special}
                                        className="bg-white"
                                    />
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

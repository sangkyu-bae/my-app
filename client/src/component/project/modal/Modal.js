import React, { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Modal.css';
import Slider from "react-slick";
import Card from '../piece/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

function Modal(props) {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const data=props.data;

    // const isMode=props.isMode;

    // const sliderRef=useRef();

    // console.log(isMode);

    // useEffect(()=>{
    //     if(isMode) sliderRef.current.slickPause();
    //     else sliderRef.current.slickPlay();
    // },[isMode])


    return (
        <div className='background'>
            <div className='modal'>
            <FontAwesomeIcon icon={faXmarkSquare}  size="2x" 
                onClick={props.changeStat}   color="#BDBDBD" className='xbox'/>
                <Slider {...settings}>
                            {data.map(item=>(
                                   <Card id={item.id} src={item.src}/>
                            ))}
                </Slider>
            </div>
        </div>
    );
}

export default Modal;
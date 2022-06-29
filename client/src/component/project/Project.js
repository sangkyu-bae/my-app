import React, {  useEffect, useRef, useState } from 'react';
import Bottom from './piece/Bottom';
import Title from './piece/Title';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Project.css';
import Slider from "react-slick";
import Modal from './modal/Modal';
import Card from './piece/Card';

function Project(props) {
    
    const [isModal,setIsModal]=useState(false);
    const [isMode,setIsMode]=useState(false);

    const [settings,setSettings]=useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    const topData=[
        {
            id:1,
            src:"img/test5.jpg"
        },
        {
            id:2,
            src:"img/test.jpg"
        },
        {
            id:3,
            src:"img/test7.jpg"
        }
    ]

    const bottomData=[
        {
            id:4,
            src:"img/test4.jpg"
        },
        {
            id:5,
            src:"img/test2.jpg"
        },
        {
            id:6,
            src:"img/test3.jpg"
        }
    ]
    

    const changeShowModal =()=> setIsModal(true);
    const changehiddenModal=()=>setIsModal(false);

    const sliderRef=useRef();
    const changeScrollMode=()=>{
        // if(isMode){
        //     sliderRef.current.slickPlay();
        //     setIsMode(false);
        // }else {
        //     sliderRef.current.slickPause();
        //     setIsMode(true);
        // }
        if(isMode) sliderRef.current.slickPlay();
        else sliderRef.current.slickPause();
        
    }

    const changeStopMode =()=>{
        setIsMode(true);
        changeScrollMode()
    }
    const changeStartMode=()=>{
        setIsMode(false);
        changeScrollMode()
    }
    return (
        <div className='containsr'>
            <div className='option_box'>
                <div className='btn_group'>
                    <div className='first_boxs'>
                        <button id='stop_btn' onClick={changeStopMode}>멈춤</button>
                        <button id='start_btn' onClick={changeStartMode}>자동 </button> 
                    </div>
                </div>
                <div className='option_checkbox'>
                    <div className='scond_boxs'>
                        <div className='mode_name'>
                            AMI Mode
                        </div>
                        <div className='check_container'>
                                <div className='select_box'>
                                    <label className='test_box' htmlFor="pet-select">Select Payload:</label>

                                    <select className='test_boxs' name="pets" id="pet-select">
                                        <option value="">AMI</option>
                                    </select>

                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        FD
                                    </label>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        ELA
                                    </label>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        LA
                                    </label>
                                </div>
                        </div>
                        <div className='text_box'>
                            <span className='span_co'><span className='blue_text'>UTC</span> 2022-06-24 06:34:54 </span>
                            <span className='span_co'><span className='blue_text'>KST</span> 2022-06-24 15:34:54</span>
                        </div>
                    </div>
                </div>
            </div>
           
     
            <div className='project_container'>
                
                <div className='project_img_box'>
                    <Title data={topData} isMode={isMode} changeModal={changeShowModal} settings={settings}></Title>
                    <Bottom data={bottomData} isMode={isMode} changeShowModal={changeShowModal} settings={settings}></Bottom>
                </div>
                <div className='project_side_box'>
                        <Slider ref={sliderRef} {...settings}>
                            {bottomData.map(item=>(
                                    <Card id={item.id} src={item.src} changeShowModal={changeShowModal}/>
                            ))}
                        </Slider>
                </div>
            </div>
            {isModal && (
                <Modal changeStat={changehiddenModal} isMode={isMode} data={bottomData} settings={settings}/>
            )}
        </div>
    );
}

export default Project;
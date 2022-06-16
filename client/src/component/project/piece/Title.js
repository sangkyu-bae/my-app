import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Title.css';
import '../Project.css';
import { jsx, css } from '@emotion/react'
import Slider from "react-slick";
import Card from './Card';

function Title(props) {
    const data=props.data;
    const settings = props.settings;

    const firstSlider=useRef();
    const scondSlider=useRef();
    const thirdSlider=useRef();
    const fourthSlider=useRef();

    const isMode=props.isMode;
    console.log(isMode);


    useEffect(()=>{
        if(isMode){
            firstSlider.current.slickPause();
            scondSlider.current.slickPause();
            thirdSlider.current.slickPause();
            fourthSlider.current.slickPause();
        }else{
             firstSlider.current.slickPlay();
             scondSlider.current.slickPlay();
             thirdSlider.current.slickPlay();
             fourthSlider.current.slickPlay();
        }
    },[isMode])

    
    return (
        <div className='img_box'>
            <div className='dispaly_flex'>

                <div className='main_img borders'>
                    <Slider ref={firstSlider} {...settings}>
                        {data.map(item=>(
                              <Card id={item.id} src={item.src} changeShowModal={props.changeModal}/>
                        ))}
                    </Slider>
                </div>       
                <div className='main_imgs'>
                    <div className='scond_img_container'>
                        <div className='scond_first_img_box first'>
                            <Slider ref={scondSlider} {...settings }>
                                {data.map(item=>(
                                     <Card id={item.id} src={item.src} changeShowModal={props.changeModal}/>
                                ))}
                            </Slider>
                        </div>   
                        <div className='scond_first_img_box scond'>
                                <Slider ref={thirdSlider} {...settings }>
                                    {data.map(item=>(
                                      <Card id={item.id} src={item.src} changeShowModal={props.changeModal}/>
                                    ))}
                                </Slider>
                        </div>
                    </div>
                    <div className='scond_bottom_img_container'>
                        <div className='scond_bottom_img_box'>
                        <Slider ref={fourthSlider} {...settings }>
                                        {data.map(item=>(
                                              <Card id={item.id} src={item.src} changeShowModal={props.changeModal}/>
                                        ))}
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className='img_box'>
        //     <div className='dispaly_flex'>
        //         <div className='main_img borders' ref={tests}>
        //             <Slider {...settings}>
        //                 {data.map(item=>(
        //                         <div className='card' key={item.id}>
        //                             <img className='project_img' alt={item.id}  src={item.src}/>
        //                         </div>
        //                 ))}
        //             </Slider>
        //         </div>       
        //         <div className='main_imgs'>
        //             <div className='scond_img_container'>
        //                 <div className='scond_first_img_box first'>
        //                     <img className='' src={`img/test.jpg`}/>
        //                 </div>
        //                 <div className='scond_first_img_box scond'>
        //                     <img className='' src={`img/test2.jpg`}/>
        //                 </div>
        //             </div>
        //             <div className='scond_bottom_img_box'>
        //                 <img src={`img/test3.jpg`}/>
        //             </div>
        //         </div>
        //     </div>
        // </div>

            
    //   <div className='img_box'>
    //       <div className='dispaly_flex'>
    //             <div className='main_img test' ref={tests} css={resultWidth}>
    //                     {data.map(item=>(
    //                                 <div className='slider' key= {item.id}>
    //                                     <img className='project_img' alt={item.id} src={item.src}/>
    //                                 </div>
    //                         ))}
    //             </div>
    //             <div className='main_img'>
    //                 <div className='scond_img_container'>
    //                     <div className='scond_first_img_box first'>
    //                         <img className='' src={`img/test.jpg`}/>
    //                     </div>
    //                     <div className='scond_first_img_box scond'>
    //                         <img className='' src={`img/test2.jpg`}/>
    //                     </div>
    //                 </div>
    //                 <div className='scond_bottom_img_box'>
    //                     <img src={`img/test3.jpg`}/>
    //                 </div>
    //             </div>  
    //      </div> 
    //  </div>
    );
}

export default Title;
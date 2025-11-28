
import img1 from '../../assets/images/14.png'
import img2 from '../../assets/images/15.png'
import img3 from '../../assets/images/16.png'
import img4 from '../../assets/images/17.png'
import img5 from '../../assets/images/18.png'
import img6 from '../../assets/images/19.png'
import img7 from '../../assets/images/20.png'
import img8 from '../../assets/images/21.png'
import img9 from '../../assets/images/22.png'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div
        id="about"
        data-color="salmon"
        ref={container}
        className="real section sm:w-full  px-8 sm:px-8 mt-32"
    >
      <div 
        className="cont h-[400vh] relative"
    >
        <div  
            className="slides w-full h-[130vh] overflow-hidden
             sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex sm:flex items-center 
                justify-center h-screen flex-shrink-0 "
            >
                
                <div
                    className="text1 font-[SansitaReg] text-[7vh] leading-[8vh]
                    sm:text-[15vh] sm:leading-[18vh]"
                >
                    <h1 className="">
                        Real Assets,
                    </h1>
                    <h1 className="">
                        Real Value
                    </h1>
                </div>
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5
                    top-1/2 sm:-translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen sm:flex flex items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] 
                    top-10 -translate-y-1/2 right-1/6"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                        className='font-[Sansita] sm:w-1/3 text-left font-semibold 
                        tracking-tight text-[2.2vh] sm:absolute top-0 left-0 z-[3]  -translate-y-2/3 
                        sm:-translate-y-1/2 -translate-x-1/3'
                    >
                        We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.
                    </h3>
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-black '>
                        $28M
                    </h1>
                    <h3 className=' text-[2vh] sm:text-[5vh] font-semibold sm:leading-[7vh]'>
                        Total Market Value across Solana and Ethereum ecosystems.
                    </h3>
                </div>
                <div 
                    className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh] top-4/5 bottom-[10vh]
                    sm:top-2/3 sm:left-1/4 -translate-x-1/2"
                >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] first-letter: 
                    sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2
                    translate-y-[20vh]"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2 
                    sm:-translate-y-1/2 sm:translate-x-1/2
                    sm:right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div
                className="slide w-full h-screen flex sm:flex items-center justify-center
                flex-shrink-0  relative"
            >
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3
                        className='font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight
                        text-[2vh]
                        sm:text-[2.5vh] absolute sm:top-0 sm:left-0 -translate-x-1/2 -translate-y-[30vh] z-[3]
                        sm:-translate-y-1/2 sm:-translate-x-1/3'
                    >
                        Our team of 16 senior developers and fintech experts accelerates innovation across blockchain and Web3.
                    </h3>
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-black'>
                        62
                    </h1>
                    <h3 className='text-[3.5vh] whitespace-nowrap sm:text-[6vh] font-semibold sm:leading-[6vh]'>
                        Completed Projects
                    </h3>
                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen flex  sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-black'>
                        87
                    </h1>
                    <h3 className='text-[3.1vh] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh]'>
                        Fintech Projects <br/> Delivered.
                    </h3>
                </div>
                <div 
                    className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5
                    sm:translate-x-2/3  sm:right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;

import Button from "../Button";
import {useRef} from 'react';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg';
import norbertWiener from '../../assets/images/norbert-wiener.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Power4} from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

 function Capsule() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".capsules",
            start: "top 60%",
            end: "bottom bottom",
            scrub: .5,
            }
        });
        tl.to(".capsule:nth-child(2)", {
            y: 0,
            marginTop:32,
            ease: Power4
        })
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: Power4
        })
    }, container);


  return (
    <div id="projects" data-color="white" ref={container} className="capsules  section w-full sm:h-[115vh]
        sm:overflow-hidden mb-32 sm:flex items-start sm:justify-between mt-32 sm:mt-60 px-8 gap-40  "
    >
        <div className="left sm:w-1/3 h-full flex flex-col sm:justify-between py-10 items-start " >
            <h1 className="w-2/3 font-[Sansita] text-[2.8vh] leading-[4vh] font-medium">
                Discover our cutting-edge
                blockchain and tokenization
                solutions across DeFi,
                infrastructure, and AI.
            </h1>
            <div className="heading">
                <h1 className="font-[SansitaReg] text-[5vh] leading-[6.5vh] sm:text-[8vh] py-5 sm:leading-[9vh]">Explore <br/> Our Projects</h1>
                <Button bgColor="bg-[#fef3dc]" text="VIEW ALL PROJECTS" />
            </div>
        </div>
        <div className=" right font-[SansitaReg] mt-10 sm:w-2/3 space-y-10 h-full sm:flex items-start justify-start sm:gap-20  ">
            {/* 1st capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-10
                rounded-full border-[1px] border-black">
                <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh]  rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap1} />
                </div>
                <div className="text text-center text-[6vw] sm:text-[3.2vh] font-semibold mt-10 leading-[4.8vh]">
                    <h3>Wiener Labs Arbitrage: <br/>
                        Advanced DeFi Trading <br/> System on Solana <br/>with High-Speed <br/> Arbitrage Execution
                    </h3>
                </div>
                <button className="bg-[#fef3dc] text-black px-4 rounded-full text-medium py-3 mb-10 mt-10 font-semibold border border-black">Thought Leadership</button>

            </div>
            {/* 2nd capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-40
                rounded-full border-[1px] border-black"
            >
                    <button className="bg-[#fef3dc] text-black px-4 rounded-full text-medium py-3 mb-6 mt-10 font-semibold border border-black">Thought Leadership</button>
                
                <div className="text text-center text-[3.2vh] flex flex-col gap-6 mb-6 font-semibold leading-[4.8vh]">
                    <h3>How to Use Digital <br/>
                        Health Interventions&apos;s <br/>to Align Employee & <br/>Organizational Goals
                    </h3>
                    <h4 className="font-[Sansita] text-[1.9vh] font-medium leading-[2.8vh] text-zinc-500">How to use personalized digital health <br/> interventions to empower employees while <br/>
                        achieving your organization&apos;s goals 
                    </h4>
                </div>
                <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh]  rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap2} />
                </div>
                

            </div>
        </div>

        {/* Name Origin Section - Norbert Wiener */}
        <div className="w-full mt-32 sm:mt-40 px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="font-[SansitaReg] text-[5vh] leading-[6.5vh] sm:text-[7vh] sm:leading-[8vh] mb-4">
                        Name Origin
                    </h2>
                    <div className="w-20 h-1 bg-[#fef3dc]"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-black shadow-2xl">
                            <img
                                src={norbertWiener}
                                alt="Norbert Wiener - Founder of Cybernetics"
                                className="w-full h-full object-cover"
                            />
                            {/* Image Overlay with Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="font-[Sansita] text-white text-[2vh] leading-[3vh]">
                                    Norbert Wiener (1894-1964)
                                </p>
                                <p className="font-[Sansita] text-white/80 text-[1.6vh] leading-[2.4vh] mt-1">
                                    Founder of Cybernetics
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="order-1 lg:order-2">
                        <div className="space-y-6">
                            {/* Title */}
                            <h3 className="font-[SansitaBold] text-[3.5vh] leading-[4.5vh] sm:text-[4.5vh] sm:leading-[5.5vh] text-black">
                                Norbert Wiener
                            </h3>

                            {/* Subtitle */}
                            <p className="font-[Sansita] text-[2.2vh] leading-[3.2vh] text-gray-700">
                                (1894-1964)
                            </p>

                            {/* Description */}
                            <div className="space-y-4">
                                <p className="font-[Sansita] text-[2.4vh] leading-[3.6vh] sm:text-[2.6vh] sm:leading-[3.8vh] text-black">
                                    Norbert Wiener was the founder of <span className="font-[SansitaBold]">cybernetics</span> and
                                    a pioneer of <span className="font-[SansitaBold]">system theory</span>. His groundbreaking work
                                    laid the foundation for understanding complex systems, automation, and information flow.
                                </p>

                                <p className="font-[Sansita] text-[2.4vh] leading-[3.6vh] sm:text-[2.6vh] sm:leading-[3.8vh] text-black">
                                    <span className="font-[SansitaBold]">Wiener Labs</span> adopted this name with a vision to
                                    automate complex systems and transfer data flow to decentralized infrastructures,
                                    continuing Wiener&apos;s legacy of innovation in the Web3 era.
                                </p>
                            </div>

                            {/* Decorative Element */}
                            <div className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#fef3dc] flex items-center justify-center">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                            <path d="M2 17l10 5 10-5"/>
                                            <path d="M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-[SansitaBold] text-[2vh] text-black">
                                            Cybernetics → Web3
                                        </p>
                                        <p className="font-[Sansita] text-[1.6vh] text-gray-600">
                                            From System Theory to Decentralized Infrastructure
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Capsule


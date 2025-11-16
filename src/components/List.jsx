
import img1 from '../assets/images/team1.png';
import img2 from '../assets/images/team2.png';
import img3 from '../assets/images/team3.png';
import img4 from '../assets/images/team4.png';
import img5 from '../assets/images/team5.png';
import img6 from '../assets/images/team6.png';
import img7 from '../assets/images/team7.png';
import img8 from '../assets/images/team8.png';
import img9 from '../assets/images/team9.png';
import img10 from '../assets/images/team10.png';
import img11 from '../assets/images/team11.png';
import img12 from '../assets/images/team12.png';
import img13 from '../assets/images/team13.png';

import {useEffect} from 'react';
import { gsap } from "gsap";
import { Power4} from 'gsap/gsap-core';

const data = [
    {key: 1, title: "Baturalp Güvenç", role: "Co-Founder & CEO", img: img1},
    {key: 2, title: "Mehmet Hayırlı", role: "Co-Founder & CTO", img: img2},
    {key: 3, title: "Samet Özetçi", role: "Co-Founder & COO", img: img3},
    {key: 4, title: "Emir Bilal Özkan", role: "Co-Founder & CFO", img: img4},
    {key: 5, title: "Muhammed Akıncı", role: "Lead Backend & AI Developer", img: img5},
    {key: 6, title: "Yiğit Balaban", role: "DevOps & Backend Engineer", img: img6},
    {key: 7, title: "Abdullah Velisoy", role: "Fullstack Developer", img: img7},
    {key: 8, title: "Osman Nuri Yıldız", role: "Blockchain Developer", img: img8},
    {key: 9, title: "Nihat Alp Onaran", role: "Security Auditor", img: img9},
    {key: 10, title: "Cemalettin Kurşun", role: "AI Researcher", img: img10},
    {key: 11, title: "Oğuz Kaan Demir", role: "Frontend Developer", img: img11},
    {key: 12, title: "Salih Eryılmaz", role: "Product Manager", img: img12},
    {key: 13, title: "Yunus Emre Yoldaş", role: "Firmware Developer", img: img13},
]


function List() {

  
  useEffect(() => {
    var rotate = 0;
    var diffrot = 0;
    const list = document.querySelectorAll('.listelem')

    list.forEach((el) => {  
      el.addEventListener('mousemove', function(dets) {
        
        var diff = dets.clientY - el.getBoundingClientRect()
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          ease: Power4,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        })
      })
      el.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: .5})
      })
      el.addEventListener('mousemove', function() {
        gsap.to(this.querySelector(".bluelayer"), {
          height: '100%', 
          ease: Power4,
          duration: .1
        })
      })
      el.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector(".bluelayer"), {
          height: '0%',  
          ease: Power4, 
          duration: .1})
      })
    })
  })

  return (
    <div className="list-container">
      {data.map((item, index) => {
        return (
          <div 
            key={index} 
            className="listelem w-full py-[3vh] sm:px-[4vh] sm:py-[6vh] 
            flex justify-between items-center
            border-b-2 border-black sm:relative"
          >
            <div 
              className="relative w-full sm:flex 
              sm:items-center justify-between z-[3]"
            >
              <div className="left sm:flex items-center gap-14 sm:text-5xl">
                <h3 className="hidden sm:inline-block opacity-25">0{item.key}</h3>
                <h1 className="text-blue-600 text-3xl sm:text-black sm:text-[6vh]">{item.title}</h1>
              </div>
              <h3 className="font-[Sansita] text-[3vh] sm:text-[2.4vh] font-medium tracking-tight">
                {item.role}
              </h3>   
            </div>
            <div 
              className='picture w-[14vh] h-[14vh] opacity-100 right-0 
              sm:opacity-0 sm:absolute z-[4] sm:top-1/2 
              sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[15rem] sm:h-[15rem] 
              overflow-hidden rounded-full'
            >
              <img src={item.img} className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className="hidden sm:inline-block bluelayer sm:absolute top-0 left-0 z-[2] w-full h-0 bg-[#cdf52a]"></div>
          </div>
        )
      })}
    </div>
  )
}

export default List

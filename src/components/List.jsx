
import {useEffect, useState} from 'react';
import { gsap } from "gsap";
import { Power4} from 'gsap/gsap-core';
import { teamData } from '../data/teamData';
import MemberProfile from './Team/MemberProfile';
import PropTypes from 'prop-types';

function List({ onMemberClick }) {
  const [selectedMember, setSelectedMember] = useState(null);

  
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    if (onMemberClick) {
      onMemberClick(member);
    }
  };

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
    <>
      <div className="list-container">
        {teamData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleMemberClick(item)}
              className="listelem w-full py-[3vh] sm:px-[4vh] sm:py-[6vh]
              flex justify-between items-center
              border-b-2 border-black sm:relative cursor-pointer
              hover:bg-[#fef3dc] transition-colors duration-300"
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
              <div className="hidden sm:inline-block bluelayer sm:absolute top-0 left-0 z-[2] w-full h-0 bg-[#fef3dc]"></div>
            </div>
          )
        })}
      </div>
      {selectedMember && (
        <MemberProfile
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}

List.propTypes = {
  onMemberClick: PropTypes.func
};

export default List

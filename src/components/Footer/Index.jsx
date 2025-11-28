import { Link } from 'react-router-dom';
import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from  '../Button'

function Footer() {
  return (
    <div id="contact" className="section w-full sm:mt-30 ">
      <div className="topfoot  bg-[#fef3dc] pt-16 pb-16 sm:flex items-center justify-between">
        <div className="left sm:w-1/2 px-8 sm:px-8  ">
          <div className="first order-1 font-[SansitaReg]  text-[6vh] leading-[7vh] sm:text-[4.2rem] w-1/3 sm:leading-[5rem] sm:mb-10 ">
            <h1>Discover Wiener Labs.</h1>
          </div>
          <Link to="/projects" className='middle order-3 sm:order-2 w-[20vh] text-center mt-6 px-4 py-4 sm:w-fit sm:px-4 sm:py-[1.6vh] bg-[--black] text-[#fef3dc] whitespace-nowrap inline-block'>
            <div 
              className= {`${styles.masker} flex items-center 
              gap-2 overflow-hidden 
              relative cursor-pointer`}
            >
              <span 
                className={`${styles.spanMask} font-[Sansita] 
                text-[2.1vh] capitalize tracking-normal 
                font-semibold `}
              >
                VIEW PROJECTS
              </span>
              <LuArrowUpRight 
                style={{
                  fontSize: "24px", 
                  color: "#f5f19c", 
                }} 
                className={`${styles.iconMask}`} 
              /> 
            </div>
          </Link>
        </div>

        <div className="right order-2 sm:order-3  flex sm:w-1/2 items-center justify-between sm:px-10">
          <div className="rght1 sm:w-2/3 flex flex-col items-end px-8 mt-6">
            <h3 className="text-[2.4vh] sm:text-[1.4rem] font-[Sansita] font-medium">
              Wiener Labs is a technology company 
              operating under a software laboratory model 
              that enables the integration of Real World Assets (RWAs) into blockchain infrastructure. 
              We develop tokenization infrastructures, decentralized finance (DeFi) protocols, and AI-powered automation tools.
            </h3>
          </div>
          <div className="hidden sm:inline-block rght2 relative w-[150px] h-[150px]  overflow: hidden;">
            <div className={`${styles.loopFoot} `}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="downfoot w-full h-fit bg-[var(--black)] px-8 py-10 sm:py-32">
        <div className='flex sm:flex-row sm:items-start justify-between space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className=' hidden sm:inline-block '>
            {[
              { name: "Home", target: null },
              { name: "Services", target: "services" },
              { name: "About", target: "about" },
              { name: "Team", target: "team" },
              { name: "Contact", target: "contact" }
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className='pb-4 cursor-pointer hover:opacity-70 transition-opacity'
                  onClick={() => {
                    if (item.target) {
                      const element = document.getElementById(item.target);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item.name}
                  </h3>
                </div>
              )
            })}
          </div>
          <div className=''>
            <h1 className='text-white pb-10 font-[SansitaReg] text-[2.8vh] font-semibold'>Join our mailing list for the latest updates.</h1>
            <div className='flex items-center gap-6'>
              <input 
                type="text" 
                placeholder="Enter your email address" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[5.9vh] px-4 text-[2vh]"
              />
              <Button text="SUBSCRIBE" bgColor="bg-[#fef3dc]" />
            </div>
          </div>
          <div className=' hidden sm:inline-block '>
            {[
              { name: "Projects", target: null, isLink: true, to: "/projects" },
              { name: "Newsroom", target: null },
              { name: "Resources", target: null },
              { name: "Careers", target: null },
              { name: "Contact", target: "contact" }
            ].map((item, index) => {
              if (item.isLink) {
                return (
                  <Link
                    key={index}
                    to={item.to}
                    className='block pb-4 cursor-pointer hover:opacity-70 transition-opacity'
                  >
                    <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                      {item.name}
                    </h3>
                  </Link>
                )
              }
              return (
                <div
                  key={index}
                  className='pb-4 cursor-pointer hover:opacity-70 transition-opacity'
                  onClick={() => {
                    if (item.target) {
                      const element = document.getElementById(item.target);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item.name}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

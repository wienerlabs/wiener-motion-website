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


import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "Decentralized", image: img1 },
        { text: "Transparent", image: img2 },
        { text: "Liquid", image: img3 },
        { text: "Accessible", image: img4 },
        { text: "Secure", image: img5 },
        { text: "Innovative", image: img6 },
        { text: "Decentralized", image: img7 },
        { text: "Transparent", image: img8 },
        { text: "Liquid", image: img9 },
        { text: "Accessible", image: img10 },
        { text: "Secure", image: img11 },
        { text: "Innovative", image: img12 },
        { text: "Decentralized", image: img13 },
        { text: "Transparent", image: img1 },
        { text: "Liquid", image: img2 },

    ]

  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div 
                    key={index} 
                    className='elem flex items-center gap-8'
                >
                    <h1 
                        className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                        leading-[6vh] sm:leading-[9vh]'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-[5vh] h-[5vh]'>
                        <img 
                            className=''
                            src={item.image} 
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row

import { video, useState, useEffect } from 'react'
import Link from 'next/link'
import useStore  from "@/data/store"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import iconSet from './iconSet.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import style from './cta.module.scss'

const CTA = props => {
  return (
    <div className={style.cta}>
      <div className="container">
        <Swiper 
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.cta__item}>
              <div className={style.cta__content}>
                <h4 className={style.cta__subhead}>Welcome!</h4>
                
                <h2 className={style.cta__head}>
                Join our tech team <br/> and innovate with us!
                </h2>
                
                <p className={style.cta__desc}>
                Experience the cutting edge of technology with our innovative team.
                </p>
                
                <div className={style.cta__btns}>
                  <Link className={style.cta__btn} href="https://xirosoft.com" target="_blank">Explore Now</Link>
                  {/* <Link className={style.cta__btn} href="https://xirosoft.com" target="_blank">Explore Now</Link> */}
                </div>
              </div>
              <div className={style.cta__image} /*style={{backgroundImage: `url(${iconSet.src})`}}*/>
                <RandomIconGrid />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> 
    </div>
  )
}


const RandomIconGrid = () => {
  const icons = useStore(state => state.iconCat).map(obj => obj.icons).flatMap(icon => icon)
  const [numbers, setNumbers] = useState([]);
  const [updatedIndex, setUpdatedIndex] = useState(-1);


  const getRandomNumberArr = n => {
    let randomNumbersArr = []
    for (let i = 0; i < n; i++) {
      randomNumbersArr.push(Math.floor(Math.random() * icons.length))
    }
    return randomNumbersArr
  }
  
  useEffect(() => {
    setNumbers(getRandomNumberArr(52))
  },[])
  
  useEffect(() => {
    const intervalId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomInteger = Math.floor(Math.random() * icons.length);
      const updatedNumbers = [
        ...numbers.slice(0, randomIndex),
        randomInteger,
        ...numbers.slice(randomIndex + 1),
      ];
      setNumbers(updatedNumbers);
      setUpdatedIndex(randomIndex);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [numbers]);
  

  return (
    <ul className={ style.randomIconGrid }>
      {numbers.map((number, index) => (
        <li key={index} className={`${style.randomIconGrid__item} ${updatedIndex === index ? style.randomIconGrid__item__selected : ''}`}>
          <i className={`xiroicon xi-${icons[number]}`}></i>
        </li>
      ))}
    </ul>
  )
}



export default CTA
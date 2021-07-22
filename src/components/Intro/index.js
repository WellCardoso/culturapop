import React, {useEffect, useRef} from 'react';
import { TweenMax, Power3} from 'gsap'

import { Slider, Text } from './style';
// 
function Intro() {
  let slide = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    TweenMax.to(
      slide, 3, {
        opacity: 0,
        y: '-100%',
        ease: Power3.easeOut,
        delay: 2
      }, '-=1'
    );

    TweenMax.to(
      text, 1, {
        opacity: 0,
        y: '100%',
        ease: Power3.ease,
        delay: 1
      }, '-=1'
    )
  }, [])

  return (
      <Slider ref={el => {slide = el}}>
          <Text ref={el => {text = el}}>A new platarform</Text>
      </Slider>
  )
}

export default Intro;
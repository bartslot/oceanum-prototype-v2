import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { gsap, Linear } from 'gsap';
import animationPath from '../../public/static/starIncrease.json';
const Star = (props) => {
  
  gsap.config({ nullTargetWarn: false });
  const ref: MutableRefObject<HTMLDivElement> = useRef(null);
  const [lottie, setLottie] = useState<typeof Lottie | null>(null);
  
  var animationNr = props.playAnimation;
  var playAnimation = props.playAnimation;
  var animationDelay = props.animationDelay;

  // gsap.staggerFromTo('.animation2', { opacity: 0, scale: 0.01, xPercent:0,}, { opacity: 1, duration: 1, scale: 0.05, xPercent:-100}, "+=2");
  switch (props.playAnimation) {
    case 1: playAnimation = './static/starIncrease.json';
            animationDelay = 1;
      break;
    case 2: playAnimation = './static/correctAnswer1.json';
            animationDelay = 1.4;
      break;
    default: playAnimation = '';
  }
  useEffect(() => {
    // const timeline = gsap.timeline({
    //   defaults: { ease: Linear.easeNone, duration: 0.1 },
    // });
    // timeline
    //   .set(
    //     '.animation2', 
    //     { width:'30px', height:'20px', xPercent:-0, left:"50%", yPercent:-50, top:"50%", position: "absolute" }
    //   )
    //   .fromTo(
    //     '.animation2',
    //     { opacity: 1, scale:1 },
    //     { opacity: .2, scale:2 }
    //   )
    //   .to(".animation2", {
    //     opacity: 1,
    //     scale: 3,
    //     delay: animationDelay,
    //     left:"0%",
    //     top:"50%"
    //   });
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: playAnimation,
      });

      return () => animation.destroy();
    }
  }, [lottie, ref]);

  return <Lottie lottieRef={lottieRef} animationData={groovyWalkAnimation} />;


};

export default Star;
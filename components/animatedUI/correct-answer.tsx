import { MutableRefObject, useEffect, useRef, useState } from 'react';
import lottie from "lottie-web";
import { gsap, Linear } from 'gsap';

const CorrectAnswer = ({playAnimation}) => {  
  let anim = null;
  gsap.config({ nullTargetWarn: false });
  const container1 = useRef(null);
  // const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  
  var animationNr = './correctAnswer1_0.json';
  
  // gsap.staggerFromTo('.animation2', { opacity: 0, scale: 0.01, xPercent:0,}, { opacity: 1, duration: 1, scale: 0.05, xPercent:-100}, "+=2");
  
  switch (playAnimation) {
    case 1: animationNr = './correctAnswer1_0.json';
      break;
    case 2: animationNr = './correctAnswer1_1.json';
      break;
    case 3: animationNr = './correctAnswer1_2.json';
      break;
    case 4: animationNr = './correctAnswer1_3.json';
      break;
    case 5: animationNr = './correctAnswer1_4.json';
      break;
    case 6: animationNr = './correctAnswer1_5.json';
      break;
    default: animationNr = './correctAnswer1_0.json';
  }
  useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      animationData: require ('./correctAnswer1_0.json'),
      renderer: "svg", // "canvas", "html"
      loop: false, // boolean
      autoplay: true // boolean
    });

    return () => anim.destroy();
      
    }, [lottie, container1]);
  // useEffect(() => {
  //   if (lottie && container1.current) {
  //     const animation = lottie.loadAnimation({
  //       container: container1.current,
  //       renderer: 'svg',
  //       loop: false,
  //       autoplay: true,
  //       // path to your animation file, place it inside public folder
  //       animationData: animationNr,
  //       rendererSettings: {
  //         preserveAspectRatio: 'xMidYMid slice',
  //       },
  //     });

  //     return () => animation.destroy();
  //   }
  // }, [lottie, container1]);
 
  return (
    <div>
      <div className={`animation${playAnimation}`} ref={container1}></div>
      {/* <div data-delay={animationDelay +.1} className={`animation${animationNr}`} ref={ref}></div>
      <div data-delay={animationDelay +.2} className={`animation${animationNr}`} ref={ref}></div> */}
    </div>
  );
};
export default CorrectAnswer;

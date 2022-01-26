import { MutableRefObject, useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import { gsap, Linear } from 'gsap';

const CorrectAnswer = (props) => {  
  gsap.config({ nullTargetWarn: false });
  const ref: MutableRefObject<HTMLDivElement> = useRef(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  
  var animationNr = '';
  // let playAnimation = 1;
  var animationDelay = props.animationDelay;

  // gsap.staggerFromTo('.animation2', { opacity: 0, scale: 0.01, xPercent:0,}, { opacity: 1, duration: 1, scale: 0.05, xPercent:-100}, "+=2");
  // switch (props.playAnimation) {
  //   case 1: playAnimation = './static/correctAnswer.json';
  //           animationDelay = 1;
  //     break;
  //   case 2: playAnimation = './static/correctAnswer1.json';
  //           animationDelay = 1.4;
  //     break;
  //   default: playAnimation = './static/correctAnswer.json';
  // }
  // switch (playAnimation) {
  switch (props.playAnimation) {
    case 1: animationNr = './static/correctAnswer1_0.json';
      break;
    case 2: animationNr = './static/correctAnswer1_1.json';
      break;
    case 3: animationNr = './static/correctAnswer1_2.json';
      break;
    case 4: animationNr = './static/correctAnswer1_3.json';
      break;
    case 5: animationNr = './static/correctAnswer1_4.json';
      break;
    default: animationNr = './static/correctAnswer1_0.json';
  }
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: animationNr,
      });

      return () => animation.destroy();
    }
  }, [lottie, ref]);

  return (
    <div>
      <div data-delay={animationDelay} className={`animation${animationNr}`} ref={ref}></div>
      {/* <div data-delay={animationDelay +.1} className={`animation${animationNr}`} ref={ref}></div>
      <div data-delay={animationDelay +.2} className={`animation${animationNr}`} ref={ref}></div> */}
    </div>
  );
};
export default CorrectAnswer;
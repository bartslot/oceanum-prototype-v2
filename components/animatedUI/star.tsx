import { useRef, useEffect, useState} from 'react';
import type { LottiePlayer } from 'lottie-web';
import gsap from "gsap";

const Star = (props) => {
  const container1 = useRef(null);
  var currentScore = props.score;
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(true);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);
  useEffect(() => {
    if (lottie && container1.current) {
      const animation = lottie.loadAnimation({
        container: container1.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        // path to your animation file, place it inside public folder
        animationData: require ('./starIncrease.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });

      return () => animation.destroy();
    }
  }, [lottie, container1]);



  useEffect(() => { 
    switch (currentScore) {
      case 1:
        setUpdate();
        break;
      case 2: 
        setUpdate();
    }
  });
  function setUpdate() {
    console.log('played?' + playing);
    if (!playing && paused) {
      lottie.play
      // gsap.delayedCall(1, lottie.play, [])
      gsap.delayedCall(5, lottie.pause, [])
      // setPlaying(true);
      // setPaused(false);
      gsap.delayedCall(1, setPaused, [true])
      gsap.delayedCall(1, setPlaying, [false])
    }
    
  }
  
  
  
  
  // const updateAnimation = useRef(null);
  // var animationDelay = animationDelay;
  // var score = score;
  
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container1.current,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     animationData: require ('./starIncrease.json'),
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice',
  //     },
  //   });
  //   return () => {
  //     lottie.destroy;
  //   };
  // }, []);
  // // var playNow = props.playNow;
  
  // useEffect(()=> {
  //   return () => {
  //     console.log('Score updated, the score is now:' + score)
  //     if (score != score.current) {
  //       setUpdate
  //   }
  //   };
  // }, []);
  
  // setUpdate() {
  //   if(animationDelay == null) {
  //     animationDelay = 2;
  //   }
  //   gsap.delayedCall(animationDelay, lottie.pause, [])
  //   gsap.delayedCall(animationDelay, lottie.play, [])
  // }
  // var playAnimation = props.playAnimation;
  

  return (
  <div className="starContainer">
    <div ref={container1} />
  </div>
  );

};
export default Star;
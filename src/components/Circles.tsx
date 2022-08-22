import { useEffect, useRef } from "react";
import animation from "./Animation";
// import animation from "./Animation";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import { Lottie } from "lottie-react";

export default function Circles() {
  useEffect(() => {
    //
  }, []);

  const animationRef = useRef<LottieRefCurrentProps | null>(null);

  function goToLastFrame() {
    animationRef.current?.goToAndStop(60);
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="discoverAnimation"
      className="h-screen"
    >
      <Lottie
        lottieRef={animationRef}
        animationData={animation}
        className="h-screen"
        loop={false}
        interactivity={{
          actions: [
            {
              type: "play",
              frames: [0, 160],
              visibility: [1.0, 1.0],
            },
            // {
            //   type: "stop",
            //   frames: [60],
            //   visibility: [1, 0],
            // },
          ],
          mode: "scroll",
        }}
      ></Lottie>
    </div>
  );
}

// import React from "react";

// import { create } from "@lottiefiles/lottie-interactivity";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef(); // 1. create a reference for the lottie player
//   }
//   componentDidMount() {
//     // 3. listen for player load. see lottie player repo for other events
//     this.myRef.current.addEventListener("load", function (e) {
//       // 4. configure the interactivity library
// create({
//   mode: "scroll",
//   player: "#discoverAnimation",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "seek",
//       frames: [0, 100],
//     },
//   ],
// });
//     });
//   }
//   render() {
//     // const defaultOptions = {
//     //   loop: true,
//     //   autoplay: true,
//     //   animationData: data,
//     //   rendererSettings: {
//     //     preserveAspectRatio: "xMidYMid slice",
//     //   },
//     // };
//     return (
//       <div className="h-[500px]">
//         <Lottie
//           lottieRef={this.myRef} // 2. set the reference for the player
//           id="discoverAnimation"
//           animationData={data}
//         ></Lottie>
//       </div>
//     );
//   }
// }

// export default App;

// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect } from "react";

// export default function Part1ThirdSection({ title, text, number, displayK }) {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, Math.round);

//   useEffect(() => {
//     const animation = animate(count, number, { duration: 2 });

//     return animation.stop;
//   }, []);

//   return (
//     <div style={{ display: "flex", alignItems: "start", textAlign: "start", position:"relative" }}>
//       <motion.h1 style={{ fontSize: "130px", color: "white", fontFamily: 'Tilt Prism' }}>
//         {rounded}
//       </motion.h1>
//       {displayK && (
//         <span style={{ fontSize: "130px", color: "white", fontFamily: 'Tilt Prism', padding:"1rem" }}>K</span>
//       )}
//       <div style={{ marginLeft: "10px", fontSize: "18px", color: "white" , position:"absolute", top:"30%", left:"36%" , fontWeight:'500'}}>
//         {title}
//         <br />
//         {text}
//       </div>
//     </div>
//   );
// }



import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Part1ThirdSection({ title, text, number, displayK }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, { duration: 2 });

    return animation.stop;
  }, []);

  return (
    <div  style={{ display: "flex", alignItems: "center", textAlign: "start", position: "relative" }}>
      <motion.h1  style={{ fontSize:"130px" }}>
        {rounded}
      </motion.h1>
        {displayK && (
          <div style={{ fontSize: "130px", color: "white", marginBottom:"7px" }}>
            <span class="thirdStext">
              K
            </span>
            </div>
        )}
      <div style={{  fontFamily:"sans-serif", fontSize: "18px", color: "white" , position:"absolute" ,left:'120px',webkitTextStroke: '0.001em #888888' }}>
        <div>{title}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

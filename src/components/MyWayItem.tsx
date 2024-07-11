import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function MyWayItem(props: {
  direction: string;
  year: number;
  name: string;
  text: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.li
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : `translateX(${props.direction == "left" ? "-200px" : "200px"})`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="timeline-middle">
        <CiCircleCheck size={25} color="green" />
      </div>
      <div
        className={`
          timeline-${props.direction == "left" ? "start" : "end"} 
          mb-10
          ${props.direction == "left" ? "md:text-end" : ""}`}
      >
        <time className="font-mono italic">{props.year}</time>
        <div className="text-lg font-black">{props.name}</div>
        {props.text}
      </div>
      <hr />
    </motion.li>
  );
}

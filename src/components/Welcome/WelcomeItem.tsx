import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WelcomeItem(props: { text: string }) {
  const refItem = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refItem,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.7]);
  return (
    <div ref={refItem} className="h-[1600px] mb-1000px">
      <motion.div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          style={{ scale: scale, opacity: scrollYProgress }}
          className="md:container text-9xl text-center mx-auto"
        >
          {props.text}
        </motion.div>
      </motion.div>
    </div>
  );
}

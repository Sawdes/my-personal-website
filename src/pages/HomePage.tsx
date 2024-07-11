import MyModel from "../components/MyModel";
import { CiPhone } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import Welcome from "../components/Welcome/Welcome";
import MyWay from "../components/MyWay";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="">
      <div
        className="homepage-home relative"
        style={{
          minHeight: `calc(100svh)`,
        }}
      >
        <div className="homepage-home flex absolute h-full md:flex-row w-full items-stretch flex-col justify-between bg-gradient-to-r from-yellow-600 to-blue-300">
          <div className="flex mx-auto items-center flex-col lg:flex-row h-full">
            <div className="conatiner mx-auto order-last lg:order-first">
              <div className="p-4 w-4/5">
                <motion.h1
                  className="md:text-7xl text-5xl text-stone-900 font-black mb-2"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  Hello! My name is Daniil.
                </motion.h1>
                <motion.h2
                  className="text-4xl text-stone-800 font-black mb-2"
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  I am Frontend-Developer.
                </motion.h2>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Just contact me
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a href="tel:+79047176080">
                        <CiPhone />
                        +79047176080
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/dan_blise">
                        <BsTelegram />
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a href="mailto:urusowork90@gmail.com">
                        <LuMail />
                        Mail
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <MyModel />
          </div>
        </div>
      </div>
      <Welcome />
      <MyWay />
    </div>
  );
}

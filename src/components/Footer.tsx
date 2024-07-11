import { BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { TiStar } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <TiStar size={55} />
        <p className="font-bold">
          Urusov Daniil's personal website.
          <br />I am Frontend-developer.
        </p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://t.me/dan_blise">
            <BsTelegram size={28} />
          </a>
          <a href="mailto:urusowork90@gmail.com">
            <CiMail size={28} />
          </a>
          <a href="tel:+79047176080">
            {/* <CiPhone size={28} /> */}
            <PiPhoneCallLight size={28} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

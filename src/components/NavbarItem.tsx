import { Link } from "react-router-dom";

export default function NavbarItem(props: {
  link: string;
  name: string;
  setScrollTag: any;
  scrollTag: string;
}) {
  return (
    <li>
      <Link
        onClick={() => {
          props.setScrollTag(props.scrollTag);
        }}
        className="inline-block p-2 no-underline text-xl text-black dark:text-slate-200"
        to={props.link}
      >
        {props.name}
      </Link>
    </li>
  );
}

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
        to={props.link}
      >
        {props.name}
      </Link>
    </li>
  );
}

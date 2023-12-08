import Navbar from "./Topbar/Topbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar>{props.children}</Navbar>
    </div>
  );
}

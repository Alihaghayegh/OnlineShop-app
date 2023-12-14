import Topbar from "./Topbar/Topbar";
// import ProductCard from "../components/productCard/ProductCard";

import "./Layout.css";

export default function Layout(props) {
  return (
    <div>
      <Topbar />
      <div className="content-container">
        {props.children}
      </div>
    </div>
  );
}

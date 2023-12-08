import Navbar from "./Topbar/Topbar";
import axios from "axios";

export default function Layout(props) {
  const req = () => {
    axios.get("http://localhost:8000/api/items?format=json").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={req}>Hello</button>

        {/* {props.children} */}
      </div>
    </div>
  );
}

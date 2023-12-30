import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import search from "../../assets/image/search.png";

export default function Search() {
  const location = useLocation();

  return (
    <div className={location.pathname === "/" ? "w-75" : ""}>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="جست و جو"
          className="mx-2 rounded-4"
          aria-label="Search"
        />
        <Button variant="outline-light">
          <Image src={search}></Image>
        </Button>
      </Form>
    </div>
  );
}

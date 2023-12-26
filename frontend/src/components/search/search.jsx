import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import search from "../../assets/image/search.png";

export default function Search() {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="جست و جو"
          className="mx-2"
          aria-label="Search"
        />
        <Button variant="outline-light">
          <Image src={search}></Image>
        </Button>
      </Form>
    </div>
  );
}

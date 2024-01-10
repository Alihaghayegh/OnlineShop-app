import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";

import toy from "../../assets/image/toy-car.jpg";
import shop from "../../assets/image/shoppingCart.png";

function ProductCard() {
  return (
    <Card className="m-2 align-items-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={toy} />
      <Card.Body>
        <Card.Title>نام تستی</Card.Title>
        <Card.Text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">نمایش جزییات</Button>
          <Button variant="outline-secondary">
            <Image src={shop}></Image>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

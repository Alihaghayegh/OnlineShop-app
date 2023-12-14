import React from "react";
import test from "../../assets/image/toy-car.jpg";

import "./ProductCard.css";

export default function ProductCard() {
  return (
      <div className="card-container">
        <img src={test} alt="pic" className="card-image" />
        <div className="titlePrice">
          <h2 className="title">عنوان تست</h2>
          <h2 className="price">10000$</h2>
        </div>
        {/* <p className="description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p> */}
      </div>
  );
}

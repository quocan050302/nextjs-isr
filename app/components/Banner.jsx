import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="sec-com banner-san-pham">
      <img
        className="img-02 cir"
        src="./assets/images/chup-anh-san-pham/banner-sub-img-02.png"
        alt=""
      />
      <div className="container">
        <div className="banner-container">
          <img
            className="img-01 cir"
            src="./assets/images/chup-anh-san-pham/banner-sub-img-01.png"
            alt=""
          />
          <img
            className="img-03 cir"
            src="./assets/images/chup-anh-san-pham/banner-sub-img-03.png"
            alt=""
          />
          <img
            className="img-04"
            src="./assets/images/chup-anh-san-pham/ly-giu-nhiet.png"
            alt=""
          />
          <span className="txt-head">DỊCH VỤ CHỤP ẢNH SẢN PHẨM</span>
          <div className="img-top-banner">
            <img
              src="./assets/images/chup-anh-san-pham/banner-title.png"
              alt=""
            />
          </div>
          <ul className="option-discount">
            <li className="discount-item">
              <img
                className="img"
                src="./assets/images/chup-anh-san-pham/check-green.png"
                alt=""
              />
              <div className="txt-disc">
                <span>Giảm 10% </span> cho khách hàng đăng ký <br /> dịch vụ lần
                đầu
              </div>
            </li>
            <li className="discount-item">
              <img
                className="img"
                src="./assets/images/chup-anh-san-pham/check-green.png"
                alt=""
              />
              <div className="txt-disc">
                Tặng <span>01 video hậu trường </span> 15s
              </div>
            </li>
            <li className="discount-item">
              <img
                className="img"
                src="./assets/images/chup-anh-san-pham/check-green.png"
                alt=""
              />
              <div className="txt-disc">
                <span>Bộ hướng dẫn </span> sử dụng thông minh
              </div>
            </li>
          </ul>
          <div className="module-info-btn">
            <a
              className="btn-four style-pri openPopMona"
              href="https://mona.media/lien-he/"
              data-popup="solutions"
            >
              <span className="icon">
                <img
                  src="/assets/images/chup-anh-doanh-nhan/phone.png"
                  alt=""
                />
              </span>
              <span className="txt">NHẬN TƯ VẤN TỪ ACCOUNT MONA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

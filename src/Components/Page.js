import React, { useEffect, useState } from "react";
import data from "../Data";

const Page = () => {
  const [avtarIndex, upd_avtarIndex] = useState(0);
  let lgt = 5;

  useEffect(() => {
    const disc = document.querySelector(".disc");

    disc.style.transform = `translate(15.3rem, 11rem) rotateZ(${
      data[(avtarIndex + lgt) % lgt].rotate
    }deg)`;

    document.documentElement.style.setProperty(
      "--rt",
      `${-data[(avtarIndex + lgt) % lgt].rotate}deg`
    );

    const left_btn = document.querySelector(".lower_section .left_btn");
    const right_btn = document.querySelector(".lower_section .right_btn");
    const btn = document.querySelectorAll(".lower_section .btn");

    const avtar = document.querySelector(".avtar .img");
    const avtar_name = document.querySelector(".avtar p");

    left_btn.addEventListener("click", () => {
      upd_avtarIndex(avtarIndex + 1);
    });

    right_btn.addEventListener("click", () => {
      upd_avtarIndex(avtarIndex - 1);
    });

    btn.forEach((item) => {
      item.addEventListener("click", () => {
        avtar.classList.add("active");
        setTimeout(() => {
          avtar.classList.remove("active");
        }, 2000);

        avtar_name.classList.add("active");
        setTimeout(() => {
          avtar_name.classList.remove("active");
        }, 2000);
      });
    });

    return () => {};
  }, [avtarIndex]);

  return (
    <>
      <section className="container">
        {/* <!-- **Left Part** starts here--> */}
        <div className="left_part">
          {data.map((item, index) => {
            if (index < 5)
              return (
                <div
                  key={index}
                  className={
                    index !== (avtarIndex + 5) % 5
                      ? "content"
                      : "content active"
                  }
                >
                  <span className="rating">
                    <p>{item.rating}</p>
                    <p>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half" aria-hidden="true"></i>
                    </p>
                  </span>
                  <span className="title">
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                  </span>
                  <span className="description">
                    <p>{item.description}</p>
                  </span>
                  <span className="smt_btn">
                    <button>Book a session</button>
                  </span>
                </div>
              );
          })}
        </div>

        {/* <!-- **Right Part** starts here--> */}
        <div className="right_part">
          <div className="elliptical_bg">
            <div className="disc">
              {/*  */}
              {data.map((item, index) => {
                return (
                  <span key={index} className="disc_items">
                    <img src={item.img} alt={item.name} />
                  </span>
                );
              })}
              {/*  */}
            </div>
          </div>

          {/* <!-- lower section --> */}
          <div className="lower_section">
            {/* <!-- left button --> */}
            <button className="btn left_btn">
              <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
            </button>

            {/* <!-- Avtar image and name --> */}

            <div className="avtar">
              <div className="cover">
                <div className="img">
                  <img
                    src={data[(lgt + avtarIndex) % lgt].img}
                    alt={data[(lgt + avtarIndex) % lgt].name}
                  />
                </div>
              </div>
              <div className="name">
                <p>{data[(lgt + avtarIndex) % lgt].name}</p>
              </div>
            </div>

            {/* <!-- Right button  --> */}
            <button className="btn right_btn">
              <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

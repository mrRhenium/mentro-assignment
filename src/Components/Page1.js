import React, { useState } from "react";
import data from "../Data";

const Page1 = () => {
  const [avtarIndex, upd_avtarIndex] = useState(0);
  let lgt = 5;

  document.documentElement.style.setProperty(
    "--rt",
    `${-data[avtarIndex].rotate}deg`
  );

  return (
    <>
      {/* <!-- Main Background --> */}
      <section className="container">
        {/* <!-- **Left Part** starts here--> */}
        <div className="left_part">
          {/*  */}
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
          {/*  */}
        </div>

        {/* <!-- **Right Part** starts here--> */}
        <div className="right_part">
          <div className="upper_section">
            <div
              className="elliptical_bg"
              style={{
                backgroundColor:
                  avtarIndex & 1 ? "var(--color_bg1)" : "var(--color_bg2)",
              }}
            >
              <div
                className="disc"
                style={{
                  transform: `translateY(43%) rotate(${data[avtarIndex].rotate}deg)`,
                }}
              >
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
          </div>

          {/* <!-- lower section --> */}
          <div className="lower_section">
            {/* <!-- left button --> */}
            <button
              className="btn left_btn"
              onClick={() => upd_avtarIndex((avtarIndex + 1) % lgt)}
            >
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
            <button
              className="btn right_btn"
              onClick={() =>
                upd_avtarIndex((((avtarIndex - 1) % lgt) + lgt) % lgt)
              }
            >
              <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page1;

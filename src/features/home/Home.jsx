import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import { pulse } from "../../assets";
import { SlideInfo } from "../../constants";
import { Form, NewsCard, TovarCard } from "../../components";
import { useTranslation } from "react-i18next";

export function Home() {
  const slideInfo = SlideInfo();
  const { t } = useTranslation();
  return (
    <main>
      <section className="swiperSection">
        <Swiper
          effect={"creative"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Pagination, Navigation, EffectCreative]}
          className="mySwiper3"
        >
          {slideInfo.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide">
                <img className="bg" src={slide.bg} alt="" />
                <div className="container">
                  <div className="info">
                    {slide.text}
                    <img src={pulse} alt="" />
                    <a href="">
                      <span>{t("read")}</span>
                      <span>+</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="form">
        <Form />
      </section>
      <div className="container">
        <section className="medicine">
          <h2 className="heading">{t("medicine")}</h2>
          <img src={pulse} className="headingImg" alt="" />
          <div className="tovars">
            <TovarCard />
            <TovarCard />
            <TovarCard />
          </div>
        </section>
        <section className="medicine">
          <h2 className="heading">{t("news")}</h2>
          <img src={pulse} className="headingImg" alt="" />
          <div className="news">
            <NewsCard />
            <NewsCard />
          </div>
        </section>
      </div>
    </main>
  );
}

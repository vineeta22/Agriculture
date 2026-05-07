import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Odisha",
    text: "Using ANCHHITA GOLD has significantly improved my crop yield. The soil quality has also become much better.",
    image: "https://i.pravatar.cc/100?u=rajesh"
  },
  {
    id: 2,
    name: "Suresh P.",
    location: "Andhra Pradesh",
    text: "NEST SHIFT is very effective for weed control in my paddy fields. Highly recommended for all farmers.",
    image: "https://i.pravatar.cc/100?u=suresh"
  },
  {
    id: 3,
    name: "Amit Mohanty",
    location: "Kalahandi",
    text: "Kenzende Crops products are very reliable. Their support team is also very helpful and knowledgeable.",
    image: "https://i.pravatar.cc/100?u=amit"
  }
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title text-center">{t('home.testimonialsTitle')}</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">
                  {t(`testimonials.t${testimonial.id}Text`, testimonial.text)}
                </p>
                <div className="testimonial-user">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="user-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

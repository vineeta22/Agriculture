import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaLeaf, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

// Real customer success photos
import img1 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.44 (1).jpeg';
import img2 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.44.jpeg';
import img3 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.45 (1).jpeg';
import img4 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.45 (2).jpeg';
import img5 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.45.jpeg';
import img6 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.46 (1).jpeg';
import img7 from '../../assets/Testimonials/WhatsApp Image 2026-05-09 at 09.05.46.jpeg';

const successPhotos = [
  { src: img1 },
  { src: img2, imgStyle: { objectPosition: 'left center' } },        // farmer on left edge
  { src: img3, imgStyle: { transform: 'rotate(-90deg) scale(1.33)' } }, // rotated JPEG
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
];

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
    <>
      {/* ── SUCCESS FARMERS PHOTO GALLERY ── */}
      <section className="success-farmers-section section-padding">
        <div className="container">
          <div className="trust-header">
            <div className="trust-badge">
              <FaLeaf /> {t('home.trustedBy', 'Trusted by Farmers')}
            </div>
            <h2 className="section-title text-center">
              {t('home.successFarmersTitle', 'Success Farmers Trust Kenzende Crops Pvt. Ltd.')}
            </h2>
            <p className="trust-subtitle">
              {t('home.successFarmersDesc', 'Real farmers. Real results. See the smiles behind every harvest.')}
            </p>
          </div>

          <div className="trust-stats">
            <div className="stat-item">
              <FaUsers />
              <strong>500+</strong>
              <span>{t('home.happyFarmers', 'Happy Farmers')}</span>
            </div>
            <div className="stat-item">
              <FaStar />
              <strong>4.9★</strong>
              <span>{t('home.avgRating', 'Avg. Rating')}</span>
            </div>
            <div className="stat-item">
              <FaLeaf />
              <strong>10+</strong>
              <span>{t('home.statesCovered', 'States Covered')}</span>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              480:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="success-photos-slider"
          >
            {successPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="success-photo-card">
                  <img
                    src={photo.src}
                    alt={`Success Farmer ${index + 1}`}
                    style={photo.imgStyle || {}}
                  />
                  <div className="photo-overlay">
                    <FaLeaf className="overlay-icon" />
                    <span>{t('home.successFarmer', 'Success Farmer')}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS ── */}
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
    </>
  );
};

export default Testimonials;

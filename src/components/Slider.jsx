import { Swiper, SwiperSlide } from 'swiper/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'swiper/css';

let Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
        <SwiperSlide>
        <Row>
        <Col xs={6}>Slide 1</Col>
        <Col xs={6}>Image</Col>
        </Row>
        </SwiperSlide>

        <SwiperSlide>
        <Row>
        <Col xs={6}>Slide 2</Col>
        <Col xs={6}>Image</Col>
        </Row>
        </SwiperSlide>
    </Swiper>
  );
};

export default Slider
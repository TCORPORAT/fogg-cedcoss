import { Swiper, SwiperSlide } from 'swiper/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeadingLine from './HeadingLine';
import 'swiper/css';

let Slider = () => {
  return (
    <>
    <div className='w-spacing'>
    <HeadingLine text="What Customers Asking" fsize="font-34" sectionClass=""/>
    </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
        <SwiperSlide className='my_2-6-0'>
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
    </>
  );
};

export default Slider
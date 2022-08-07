import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import HeadingLine from './HeadingLine'

function KnowMore() {
    return (

//     <div> 
//     <div className="col--know_more d-flex">  
//         <Image className="yell" src='../public/images/knomOne.png' fluid="false" />
//         <div className="d-flex rotate-v">
//         <HeadingLine text="About Us" fsize="font-14" sectionClass=""/>
//         </div>
//         </div>
//         <div className="wth_image"></div>

// </div>
<>
<Row className="col--know_more">  
<HeadingLine text="Know more about Us" fsize="font-34" sectionClass="mobile-only"/>
<Col lg={3}>
    <Image className="yell" src='../public/images/knomTwo.png' fluid="false" />
    <div className=" rotate-v">
    <HeadingLine text="About Us" fsize="font-14" sectionClass=""/>
    </div>
    </Col>

    <Col className="" lg={9}>
    <Row className="internal-wrap">
    <HeadingLine text="Know more about Us" fsize="font-34 desktop-only"/>
    <Col lg={8} className="bg-black text-box float-margins">
    <Card.Title className='d-flex align-items-center justify-content-between mb-4 font-18'>Collection Name Here</Card.Title>
    <p className="font-16 content-spacing" >Three lights, three backgrounds, and stands are included in this all-in-one lighting system. It's ideal for setting up your own home studio.<br/>
<p className="next-para mt-3">    
Continuous lighting is ideal for any skill level because it is simple to learn and master. This package includes three 5-Socket Fluorescent fixtures with conventional 20x28" softboxes, totaling 3375 watts of power. This remarkable mix of strength and flexibility opens up a world of creative possibilities! </p>
</p>
<a href="#" className='know-btn'>Collection Name Here <span className="circle_chevron icon-center"><img src="/images/chevron-white.svg" alt="" /></span></a>
    </Col>
    <Col className="shift-down" lg={4}>
    <Image className="yell" src='../public/images/knomOne.png' fluid="false" />
    </Col>
    </Row>
    </Col>

    </Row>
 
</>
    )
}

export default KnowMore
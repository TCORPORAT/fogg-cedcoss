import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/CardImg';


function Categories() {
    return (
      
         <Row className="my_2-6-0">
        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 bg-transparent'>
        <Card.Img variant="top" src="/images/2.png" />
      <Card.Body className="category_card">
        <Card.Title className='d-flex align-items-center justify-content-between mb-0 font-16'>Collection Name Here <span className="circle_chevron icon-center"><img src="/images/chevron.svg" alt="" /></span></Card.Title>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 bg-transparent'>
        <Card.Img variant="top" src="/images/0.png" />
      <Card.Body className="category_card">
        <Card.Title className='d-flex align-items-center justify-content-between mb-0 font-16'>Collection Name Here <span className="circle_chevron icon-center"><img src="/images/chevron.svg" alt="" /></span></Card.Title>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 bg-transparent'>
        <Card.Img variant="top" src="/images/7.png" />
      <Card.Body className="category_card">
        <Card.Title className='d-flex align-items-center justify-content-between mb-0 font-16'>Collection Name Here <span className="circle_chevron icon-center"><img src="/images/chevron.svg" alt="" /></span></Card.Title>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 bg-transparent'>
        <Card.Img variant="top" src="/images/20.png" />
      <Card.Body className="category_card">
        <Card.Title className='d-flex align-items-center justify-content-between mb-0 font-16'>Collection Name Here <span className="circle_chevron icon-center"><img src="/images/chevron.svg" alt="" /></span></Card.Title>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        )
    }


export default Categories
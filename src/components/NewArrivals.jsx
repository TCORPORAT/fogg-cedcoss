import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/CardImg';


function NewArrivals() {
    return (
      
        <Row className="my_2-6-0">
        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 card_w_hover'>
        <Card.Img variant="top" src="/images/3.png" />
        <Card.Body className="">
        <Card.Text className="font-14">
          Fogg Scent Trump Eau De Parfum 50ml
          <p className="prodt_cost font-16">
          <span className="currency">₹</span> 500
          </p>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 card_w_hover'>
        <Card.Img variant="top" src="/images/9.png" />
      <Card.Body className="">
      <Card.Text className="font-14">
          Fogg Scent Trump Eau De Parfum 50ml
          <p className="prodt_cost font-16">
          <span className="currency">₹</span> 500
          </p>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 card_w_hover'>
        <Card.Img  className="p-3" variant="top" src="/images/16.png" />
      <Card.Body className="">
      <Card.Text className="font-14">
          Fogg Scent Trump Eau De Parfum 50ml
          <p className="prodt_cost font-16">
          <span className="currency">₹</span> 500
          </p>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={6} md={4} lg={3}>
        <Card className='border-0 card_w_hover'>
        <Card.Img variant="top" src="/images/4.png" />
      <Card.Body className="">
      <Card.Text className="font-14">
          Fogg Scent Trump Eau De Parfum 50ml
          <p className="prodt_cost font-16">
          <span className="currency">₹</span> 500
          </p>
        </Card.Text>   
        </Card.Body>
        </Card>
        </Col>
        </Row>
        )
    }


export default NewArrivals
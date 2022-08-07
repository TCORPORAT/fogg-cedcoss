import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
function SeasonImages() {
    return (
        <Row className='my_2-6-0'>
            <Col lg={6}>
                <Image fluid="false" src="/public/images/grp3.png" alt="" />
            </Col>
            <Col className='grid-images' lg={6}>
            <Image fluid="false" src="/public/images/grp1.png" alt="" />
            <Image fluid="false" src="/public/images/grp2.png" alt="" />
            </Col>
        </Row>
    )
}

export default SeasonImages
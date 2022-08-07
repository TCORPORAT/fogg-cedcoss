import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
      <footer className="footer-w-bg ">
      <Container>
      <div className="logo-wrapper" >
      <div className="round-logo"><img src="/images/logo-main.png" alt="" /></div>
      </div>
        <div className="footer-inner">
            <div className="off-nd-email">

                <div className="payments-off-text">
                    <p>Get <span>20% OFF</span> On PrePaid Payments</p>
                </div>

                <div className="susbscribe-email">
                <input className="subscribe-input" type="email" />
                <button>SUBSCRIBE</button>
                </div>
            </div>
            <Row>
                <Col lg={3}>
                    <ul className="footer-links">
                        <h6>CONTACT</h6>
                        <li>
                        <p>Email:</p>
                        <a href="#">supportsystem@fogg.com</a>
                        </li>
                        <li> 
                        <p>Mobile:</p>
                        <a href="#">+91582231231</a>
                        </li>
                        <li>
                        <p>Contact Us</p>
                        <a href="#"><img src="" alt="" /></a>
                        </li>
                    </ul>
                </Col>

                <Col lg={3}>
                    <ul className="footer-links">
                    <h6>QUICK LINKS</h6>
                        <li>
                        <a href="#">My Account</a>
                        </li>
                        <li> 
                        <a href="#">Expert Advice</a>
                        </li>
                        <li> 
                        <a href="#">Stores</a>
                        </li>
                        <li> 
                        <a href="#">Blog</a>
                        </li>
                        <li> 
                        <a href="#">Our Ingredients</a>
                        </li>
                        <li> 
                        <a href="#">Our Philosophy</a>
                        </li>
                        <li>
                        <a href="#"><img src="" alt="" /></a>
                        </li>
                    </ul>
                </Col>

                <Col lg={3}>
                    <ul className="footer-links">
                    <h6>About</h6>
                        <li>
                        <a href="#">Our Philosophy</a>
                        </li>
                        <li> 
                        <a href="#">Social Responsibility</a>
                        </li>
                        <li> 
                        <a href="#">Media & Press</a>
                        </li>
                        <li> 
                        <a href="#">Terms</a>
                        </li>
                        <li> 
                        <a href="#">FAQs</a>
                        </li>
                        <li> 
                        <a href="#">Contact Us</a>
                        </li>
                        <li>
                        <a href="#"><img src="" alt="" /></a>
                        </li>
                    </ul>
                </Col>

                <Col lg={3}>
                    <ul className="footer-links">
                    <h6>POLICIES & MORE</h6>
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li> 
                        <a href="#">Terms and Conditions</a>
                        </li>
                        <li> 
                        <a href="#">Privacy Policy</a>
                        </li>
                        <li> 
                        <a href="#">Our Philosophy</a>
                        </li>
                        <li> 
                        <a href="#">Return Policy</a>
                        </li>
                        <li> 
                        <a href="#">Shopping Policy</a>
                        </li>
                        <li>
                        <a href="#"><img src="" alt="" /></a>
                        </li>
                    </ul>
                </Col>

                
            </Row>
        </div>
        </Container>
      </footer>  
    )
}

export default Footer
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            {/* Background image container (Login Section) */}
            <section className="bg-section my-5">
                <Container fluid className="d-flex align-items-center justify-content-center vh-100">
                    <Row className="w-100 justify-content-center">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="p-4 shadow-lg">
                                <Card.Body>
                                    <h2 className="text-center mb-4">Welcome to Boostgram</h2>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicUsername">
                                            <Form.Control type="text" placeholder="Username" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100">
                                            Login
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Marketing Block */}
            <div className="row my-5">
                <div className="col-12">
                    <div className="text-block__description">
                        <p className="text-center">
                            Are you looking for a quick way to increase your online presence? We can help!
                        </p>
                    </div>
                </div>
            </div>

            {/* New Section with Background and SVG Divider */}
            <div id="block_20" className="my-5">
                <div className="block-bg">
                    <div className="bg-image"></div>
                </div>
            </div>
            {/* Features Block */}
            <div id="block_32" className="my-5">
                <div className="block-bg"></div>
                <div className="block-divider-bottom">

                </div>
                <div className="container">
                    <div className="block-features">
                        <div className="row align-items-start justify-content-start">
                            {/* Feature 1 */}
                            <div className="col-md-6 style-features-card mb-4">
                                <div className="w-100 editor__component-wrapper">
                                    <div className="card block-features__wrapper" style={{ background: 'none', color: 'inherit', boxShadow: 'none' }}>
                                        <div className="features-card__preview">
                                            <div className="block-features__card-icon" style={{ height: '80px', width: '80px', fontSize: '80px', background: 'none', borderRadius: '48px' }}>
                                                <span className="styled-card-hover">
                                                    <span className="feature-block__icon fas fa-chart-line" style={{ color: '#0095f6' }}></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card features-card" style={{ color: 'inherit' }}>
                                            <div className="block-features__card">
                                                <div className="block-features__card-content">
                                                    <p><strong>Grow Your Audience</strong></p>
                                                    <p>Expand your viewer base and get your brand noticed.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="col-md-6 style-features-card mb-4">
                                <div className="w-100 editor__component-wrapper">
                                    <div className="card block-features__wrapper" style={{ background: 'none', color: 'inherit', boxShadow: 'none' }}>
                                        <div className="features-card__preview">
                                            <div className="block-features__card-icon" style={{ height: '80px', width: '80px', fontSize: '80px', background: 'none', borderRadius: '48px' }}>
                                                <span className="styled-card-hover">
                                                    <span className="feature-block__icon fas fa-tachometer-alt-fast" style={{ color: '#0095f6' }}></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card features-card" style={{ color: 'inherit' }}>
                                            <div className="block-features__card">
                                                <div className="block-features__card-content">
                                                    <p><strong>Fast Delivery Speeds</strong></p>
                                                    <p>Choose a payment method that works best for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="col-md-6 style-features-card mb-4">
                                <div className="w-100 editor__component-wrapper">
                                    <div className="card block-features__wrapper" style={{ background: 'none', color: 'inherit', boxShadow: 'none' }}>
                                        <div className="features-card__preview">
                                            <div className="block-features__card-icon" style={{ height: '80px', width: '80px', fontSize: '80px', background: 'none', borderRadius: '48px' }}>
                                                <span className="styled-card-hover">
                                                    <span className="feature-block__icon fas fa-money-bill-wave" style={{ color: '#0095f6' }}></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card features-card" style={{ color: 'inherit' }}>
                                            <div className="block-features__card">
                                                <div className="block-features__card-content">
                                                    <p><strong>Cheapest In The Market</strong></p>
                                                    <p>Enjoy the lowest prices, at the highest quality.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="col-md-6 style-features-card mb-4">
                                <div className="w-100 editor__component-wrapper">
                                    <div className="card block-features__wrapper" style={{ background: 'none', color: 'inherit', boxShadow: 'none' }}>
                                        <div className="features-card__preview">
                                            <div className="block-features__card-icon" style={{ height: '80px', width: '80px', fontSize: '80px', background: 'none', borderRadius: '48px' }}>
                                                <span className="styled-card-hover">
                                                    <span className="feature-block__icon fas fa-trophy" style={{ color: '#0095f6' }}></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card features-card" style={{ color: 'inherit' }}>
                                            <div className="block-features__card">
                                                <div className="block-features__card-content">
                                                    <p><strong>Top Quality</strong></p>
                                                    <p>We make sure that all of our services are working, unlike any other panel.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer text-center my-5">
                <p>© 2025 Boostgram. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;

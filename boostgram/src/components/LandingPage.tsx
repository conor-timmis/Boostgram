import React from 'react';
import '../styles/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            {/* Background image container (Login Section) */}
            <section id="Login" className="bg-section">
                <div className="login-container">
                    <div className="card p-4 shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Welcome to Boostgram</h2>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Block */}
            <section id="features" className="text-block__description my-5">
                <p className="text-center">
                    Are you looking for a quick way to increase your online presence? We can help!
                </p>
            </section>

            {/* Features Block */}
            <section id="" className="block-features my-5">
                <div className="container">
                    <div className="row align-items-start justify-content-start">
                        {/* Feature 1 */}
                        <div className="col-md-6 style-features-card mb-4">
                            <div className="card block-features__wrapper">
                                <div className="features-card__preview">
                                    <div className="block-features__card-icon">
                                        <i className="fas fa-chart-line" style={{ color: '#0095f6' }}></i>
                                    </div>
                                </div>
                                <div className="features-card">
                                    <div className="block-features__card-content">
                                        <p><strong>Grow Your Audience</strong></p>
                                        <p>Expand your viewer base and get your brand noticed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="col-md-6 style-features-card mb-4">
                            <div className="card block-features__wrapper">
                                <div className="features-card__preview">
                                    <div className="block-features__card-icon">
                                        <i className="fas fa-tachometer-alt" style={{ color: '#0095f6' }}></i>
                                    </div>
                                </div>
                                <div className="features-card">
                                    <div className="block-features__card-content">
                                        <p><strong>Fast Delivery Speeds</strong></p>
                                        <p>Choose a payment method that works best for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="col-md-6 style-features-card mb-4">
                            <div className="card block-features__wrapper">
                                <div className="features-card__preview">
                                    <div className="block-features__card-icon">
                                        <i className="fas fa-money-bill-wave" style={{ color: '#0095f6' }}></i>
                                    </div>
                                </div>
                                <div className="features-card">
                                    <div className="block-features__card-content">
                                        <p><strong>Cheapest In The Market</strong></p>
                                        <p>Enjoy the lowest prices, at the highest quality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="col-md-6 style-features-card mb-4">
                            <div className="card block-features__wrapper">
                                <div className="features-card__preview">
                                    <div className="block-features__card-icon">
                                        <i className="fas fa-trophy" style={{ color: '#0095f6' }}></i>
                                    </div>
                                </div>
                                <div className="features-card">
                                    <div className="block-features__card-content">
                                        <p><strong>Top Quality</strong></p>
                                        <p>We make sure that all of our services are working, unlike any other panel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer text-center my-5">
                <p>© 2025 Boostgram. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;

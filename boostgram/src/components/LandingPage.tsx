import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface LandingPageProps {
    onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pricingValue, setPricingValue] = useState(100); // Initial value for slider
    const [metric, setMetric] = useState<'likes' | 'followers' | 'comments'>('likes'); // Default metric
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const mockCredentials = {
        username: 'testuser',
        password: 'testpassword',
    };

    const basePrices = {
        likes: 0.05,
        followers: 0.10,
        comments: 0.15,
    };

    const calculatePrice = (units: number): number => units * basePrices[metric];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === mockCredentials.username && password === mockCredentials.password) {
            setErrorMessage('');
            onLogin();
            navigate('/user-panel');
        } else {
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="landing-container">
            {/* Background image container (Login Section) */}
            <section id="login" className="bg-section">
                <div className="login-container">
                    <div className="card p-4 shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Welcome to Boostgram</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {errorMessage && (
                                    <p className="text-danger text-center">{errorMessage}</p>
                                )}
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

            {/* Pricing Section */}
            <section id="pricing" className="pricing-section my-5">
                <h2 className="text-center mb-4">Pricing</h2>
                <p className="text-center">
                    Use the slider below to calculate your price based on the selected metric.
                </p>
                <div className="d-flex justify-content-center mb-4">
                    <button
                        className={`btn mx-2 ${metric === 'likes' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setMetric('likes')}
                    >
                        Likes
                    </button>
                    <button
                        className={`btn mx-2 ${metric === 'followers' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setMetric('followers')}
                    >
                        Followers
                    </button>
                    <button
                        className={`btn mx-2 ${metric === 'comments' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setMetric('comments')}
                    >
                        Comments
                    </button>
                </div>
                <div className="pricing-slider-container">
                    <input
                        type="range"
                        min={100}
                        max={10000}
                        step={100}
                        value={pricingValue}
                        onChange={(e) => setPricingValue(Number(e.target.value))}
                        className="slider"
                    />
                    <div className="d-flex justify-content-between mt-2">
                        <span>100</span>
                        <span>10,000</span>
                    </div>
                    <div className="pricing-result text-center mt-4">
                        <p>
                            <strong>{pricingValue}</strong> {metric} selected
                        </p>
                        <p>
                            Total Price: <strong>${calculatePrice(pricingValue).toFixed(2)}</strong>
                        </p>
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

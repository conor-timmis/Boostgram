import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserPanelProps {
    onLogout: () => void;
}

const UserPanel: React.FC<UserPanelProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<'coins' | 'profile' | 'services'>('coins');
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <div className="user-panel-container">
            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'coins' ? 'active' : ''}`}
                    onClick={() => setActiveTab('coins')}
                >
                    Buy Coins
                </button>
                <button
                    className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Edit Profile
                </button>
                <button
                    className={`tab ${activeTab === 'services' ? 'active' : ''}`}
                    onClick={() => setActiveTab('services')}
                >
                    Services
                </button>
                <button className="tab logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'coins' && (
                    <div>
                        <h2>Buy Coins</h2>
                        <p>Select the amount of coins to purchase:</p>
                        <button className="btn btn-primary">100 Coins - $10</button>
                        <button className="btn btn-primary">500 Coins - $45</button>
                        <button className="btn btn-primary">1000 Coins - $80</button>
                    </div>
                )}
                {activeTab === 'profile' && (
                    <div>
                        <h2>Edit Profile</h2>
                        <form>
                            <div className="mb-3">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Update Username" />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Update Email" />
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                )}
                {activeTab === 'services' && (
                    <div>
                        <h2>Purchase Services</h2>
                        <p>Select a service and quantity:</p>
                        <div className="service">
                            <label>Service:</label>
                            <select className="form-control">
                                <option value="likes">Likes</option>
                                <option value="comments">Comments</option>
                                <option value="followers">Followers</option>
                            </select>
                        </div>
                        <div className="quantity">
                            <label>Quantity:</label>
                            <select className="form-control">
                                <option value="250">250</option>
                                <option value="500">500</option>
                                <option value="750">750</option>
                                <option value="1000">1000</option>
                            </select>
                        </div>
                        <button className="btn btn-primary mt-3">Purchase</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPanel;

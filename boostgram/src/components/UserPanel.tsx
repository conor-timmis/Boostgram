import React, { useState } from 'react';
import '../styles/UserPanel.css';

const UserPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'coins' | 'profile' | 'services'>('coins');

    return (
        <div className="user-panel-container">
            {/* Tabs */}
            <div className="tabs">
                {['coins', 'profile', 'services'].map((tab) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab as 'coins' | 'profile' | 'services')}
                    >
                        {tab === 'coins' && 'Buy Coins'}
                        {tab === 'profile' && 'Edit Profile'}
                        {tab === 'services' && 'Services'}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === 'coins' && (
                    <div className="tab-panel">
                        <h2>Buy Coins</h2>
                        <p>Select the amount of coins to purchase:</p>
                        {['100 Coins - $10', '500 Coins - $45', '1000 Coins - $80'].map((option) => (
                            <button key={option} className="buy-coins-btn">
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="tab-panel">
                        <h2>Edit Profile</h2>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Update Username" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Update Email" />
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                )}

                {activeTab === 'services' && (
                    <div className="tab-panel">
                        <h2>Purchase Services</h2>
                        <p>Select a service and quantity:</p>
                        <div className="form-group">
                            <label>Service:</label>
                            <select className="form-control">
                                <option value="likes">Likes</option>
                                <option value="comments">Comments</option>
                                <option value="followers">Followers</option>
                            </select>
                        </div>
                        <div className="form-group">
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

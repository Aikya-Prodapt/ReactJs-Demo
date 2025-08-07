import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data - in real app, this would come from authentication
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    servicesUsed: 3,
    totalSpent: 1250.00
  };

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setUser(mockUser);
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="user-info-card">
          <h2>User Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Name:</label>
              <span>{user?.name}</span>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <span>{user?.email}</span>
            </div>
            <div className="info-item">
              <label>Member Since:</label>
              <span>{user?.joinDate}</span>
            </div>
          </div>
        </div>

        <div className="stats-cards">
          <div className="stat-card">
            <h3>Services Used</h3>
            <p className="stat-number">{user?.servicesUsed}</p>
          </div>
          <div className="stat-card">
            <h3>Total Spent</h3>
            <p className="stat-number">${user?.totalSpent?.toFixed(2)}</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn" onClick={() => navigate('/services')}>
              View Services
            </button>
            <button className="action-btn" onClick={() => navigate('/about')}>
              About Us
            </button>
            <button className="action-btn" onClick={() => navigate('/')}>
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

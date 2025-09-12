import React from 'react';

const UserCard = ({ user }) => (
  <div className="user-card">
    <div className="user-name">{user.name}</div>
    <div className="user-email">{user.email}</div>
    <div className="user-details">
      <div className="user-detail">
        <span className="user-detail-label">Role:</span>
        <span className="user-detail-value">{user.role}</span>
      </div>
      <div className="user-detail">
        <span className="user-detail-label">Department:</span>
        <span className="user-detail-value">{user.department}</span>
      </div>
      <div className="user-detail">
        <span className="user-detail-label">Join Date:</span>
        <span className="user-detail-value">{user.joinDate}</span>
      </div>
      <div className="user-detail">
        <span className="user-detail-label">Status:</span>
        <span className={`status-badge status-${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </div>
    </div>
  </div>
);

export default UserCard;

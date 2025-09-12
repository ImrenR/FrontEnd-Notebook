

const Stats = ({ totalUsers, activeUsers, inactiveUsers, filteredCount }) => (
  <div className="stats">
    <div className="stat-item">
      <span className="stat-number">{totalUsers}</span>
      <span className="stat-label">Total Users</span>
    </div>
    <div className="stat-item">
      <span className="stat-number">{activeUsers}</span>
      <span className="stat-label">Active Users</span>
    </div>
    <div className="stat-item">
      <span className="stat-number">{inactiveUsers}</span>
      <span className="stat-label">Inactive Users</span>
    </div>
    <div className="stat-item">
      <span className="stat-number">{filteredCount}</span>
      <span className="stat-label">Filtered Results</span>
    </div>
  </div>
);

export default Stats;

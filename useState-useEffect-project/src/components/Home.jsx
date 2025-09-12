import React, { useState, useEffect } from 'react';
import * as fakeApi from '../api/fakeApi';
import Header from './Header';
import Stats from './Stats';
import Controls from './Controls';
import UserList from './UserList';

const Home = () => {
  // State management
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    department: 'all',
    status: 'all',
    role: 'all'
  });
  const [filterOptions, setFilterOptions] = useState({
    departments: [],
    roles: [],
    statuses: []
  });

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      try {
        const [usersData, deptData, roleData, statusData] = await Promise.all([
          fakeApi.fetchUsers(),
          fakeApi.getDepartments(),
          fakeApi.getRoles(),
          fakeApi.getStatuses()
        ]);
        
        setUsers(usersData);
        setFilteredUsers(usersData);
        setFilterOptions({
          departments: deptData,
          roles: roleData,
          statuses: statusData
        });
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Search functionality
  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setFilteredUsers(users);
        return;
      }

      setLoading(true);
      try {
        const searchResults = await fakeApi.searchUsers(searchQuery);
        setFilteredUsers(searchResults);
      } catch (error) {
        console.error('Error searching users:', error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(performSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, users]);

  // Filter functionality
  useEffect(() => {
    const applyFilters = async () => {
      if (filters.department === 'all' && filters.status === 'all' && filters.role === 'all') {
        setFilteredUsers(users);
        return;
      }

      setLoading(true);
      try {
        const filterResults = await fakeApi.filterUsers(filters);
        setFilteredUsers(filterResults);
      } catch (error) {
        console.error('Error filtering users:', error);
      } finally {
        setLoading(false);
      }
    };

    applyFilters();
  }, [filters, users]);

  // Event handlers
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleHomeReset = () => {
    setSearchQuery('');
    setFilters({ department: 'all', status: 'all', role: 'all' });
    setFilteredUsers(users);
  };

  const handleClearFilters = () => {
    setFilters({ department: 'all', status: 'all', role: 'all' });
  };

  // Calculate statistics
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'Active').length;
  const inactiveUsers = users.filter(user => user.status === 'Inactive').length;

  return (
    <div className="container">
      <Header />
      
      <Stats 
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        inactiveUsers={inactiveUsers}
        filteredCount={filteredUsers.length}
      />
      
      <Controls
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        filterOptions={filterOptions}
        onHomeReset={handleHomeReset}
        onClearFilters={handleClearFilters}
      />
      
      <UserList users={filteredUsers} loading={loading} />
    </div>
  );
};

export default Home;
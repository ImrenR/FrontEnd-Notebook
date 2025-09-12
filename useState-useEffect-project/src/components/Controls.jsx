import React from 'react';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';

const Controls = ({ 
  searchQuery, 
  onSearchChange, 
  filters, 
  onFilterChange, 
  filterOptions, 
  onHomeReset, 
  onClearFilters 
}) => (
  <div className="controls">
    <div className="controls-grid">
      <SearchBar 
        searchQuery={searchQuery} 
        onSearchChange={onSearchChange} 
      />
      
      <FilterDropdown
        id="department"
        label="Department"
        value={filters.department}
        options={filterOptions.departments}
        onChange={(e) => onFilterChange('department', e.target.value)}
        allOptionText="All Departments"
      />
      
      <FilterDropdown
        id="status"
        label="Status"
        value={filters.status}
        options={filterOptions.statuses}
        onChange={(e) => onFilterChange('status', e.target.value)}
        allOptionText="All Statuses"
      />
      
      <FilterDropdown
        id="role"
        label="Role"
        value={filters.role}
        options={filterOptions.roles}
        onChange={(e) => onFilterChange('role', e.target.value)}
        allOptionText="All Roles"
      />
    </div>

    <div className="button-group">
      <button className="btn btn-reset" onClick={onHomeReset}>
        🏠 Home Reset
      </button>
      <button className="btn btn-secondary" onClick={onClearFilters}>
        🗑️ Clear Filters
      </button>
    </div>
  </div>
);

export default Controls;

import axios from 'axios';

// Sample data
const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
    joinDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Designer",
    department: "Design",
    status: "Active",
    joinDate: "2023-02-20"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "Manager",
    department: "Management",
    status: "Inactive",
    joinDate: "2022-11-10"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
    joinDate: "2023-03-05"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    role: "Analyst",
    department: "Analytics",
    status: "Active",
    joinDate: "2023-04-12"
  },
  {
    id: 6,
    name: "Lisa Davis",
    email: "lisa.davis@example.com",
    role: "Designer",
    department: "Design",
    status: "Inactive",
    joinDate: "2022-12-01"
  },
  {
    id: 7,
    name: "Tom Anderson",
    email: "tom.anderson@example.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
    joinDate: "2023-05-18"
  },
  {
    id: 8,
    name: "Emma Taylor",
    email: "emma.taylor@example.com",
    role: "Manager",
    department: "Management",
    status: "Active",
    joinDate: "2023-01-30"
  }
];

// Simulate API delay using axios interceptor
axios.interceptors.request.use(
  (config) => {
    // Add delay to simulate network latency
    return new Promise((resolve) => {
      setTimeout(() => resolve(config), 800);
    });
  },
  (error) => Promise.reject(error)
);

// Fake API functions using axios
export const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    // Return sample data if API fails (simulating fake API)
    return sampleData;
  }
};

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`/api/users/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    // Return filtered sample data if API fails
    if (!query.trim()) return sampleData;
    
    return sampleData.filter(user => 
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase()) ||
      user.department.toLowerCase().includes(query.toLowerCase())
    );
  }
};

export const filterUsers = async (filters) => {
  try {
    const response = await axios.post('/api/users/filter', filters);
    return response.data;
  } catch (error) {
    // Return filtered sample data if API fails
    let filtered = [...sampleData];
    
    if (filters.department && filters.department !== 'all') {
      filtered = filtered.filter(user => user.department === filters.department);
    }
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(user => user.status === filters.status);
    }
    
    if (filters.role && filters.role !== 'all') {
      filtered = filtered.filter(user => user.role === filters.role);
    }
    
    return filtered;
  }
};

export const getDepartments = async () => {
  try {
    const response = await axios.get('/api/departments');
    return response.data;
  } catch (error) {
    // Return sample departments if API fails
    const departments = [...new Set(sampleData.map(user => user.department))];
    return departments;
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get('/api/roles');
    return response.data;
  } catch (error) {
    // Return sample roles if API fails
    const roles = [...new Set(sampleData.map(user => user.role))];
    return roles;
  }
};

export const getStatuses = async () => {
  try {
    const response = await axios.get('/api/statuses');
    return response.data;
  } catch (error) {
    // Return sample statuses if API fails
    const statuses = [...new Set(sampleData.map(user => user.status))];
    return statuses;
  }
};
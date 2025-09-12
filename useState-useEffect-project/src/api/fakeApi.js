// Fake API service with sample data
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

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fake API functions
export const fetchUsers = async () => {
  await delay(800); // Simulate network delay
  return [...sampleData];
};

export const searchUsers = async (query) => {
  await delay(500);
  if (!query.trim()) return [...sampleData];
  
  return sampleData.filter(user => 
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase()) ||
    user.role.toLowerCase().includes(query.toLowerCase()) ||
    user.department.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterUsers = async (filters) => {
  await delay(300);
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
};

export const getDepartments = () => {
  const departments = [...new Set(sampleData.map(user => user.department))];
  return departments;
};

export const getRoles = () => {
  const roles = [...new Set(sampleData.map(user => user.role))];
  return roles;
};

export const getStatuses = () => {
  const statuses = [...new Set(sampleData.map(user => user.status))];
  return statuses;
};

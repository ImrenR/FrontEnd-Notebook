# useState & useEffect Project

A React application demonstrating the use of `useState` and `useEffect` hooks with a fake API, featuring search, filter, and home reset functionality.

## Features

- **useState Hook**: Manages component state for users, filters, search queries, and loading states
- **useEffect Hook**: Handles side effects like data fetching, search debouncing, and filter application
- **Fake API**: Simulates real API calls with loading delays
- **Search Functionality**: Real-time search across user names, emails, roles, and departments
- **Filter System**: Filter users by department, status, and role
- **Home Reset**: Reset all filters and search to show all users
- **Responsive Design**: Modern, mobile-friendly UI with glassmorphism effects
- **Statistics Dashboard**: Shows total, active, inactive, and filtered user counts

## Technologies Used

- React 18
- Vite
- CSS3 with modern features (Grid, Flexbox, Glassmorphism)
- JavaScript ES6+ (Async/Await, Promises)

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd useState-useEffect-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── api/
│   └── fakeApi.js          # Fake API service with sample data
├── App.jsx                 # Main component with hooks
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Key Hooks Implementation

### useState
- `users`: Stores all user data
- `filteredUsers`: Stores filtered/search results
- `loading`: Manages loading state
- `searchQuery`: Current search input
- `filters`: Filter criteria object

### useEffect
- **Initial Data Loading**: Fetches users and filter options on component mount
- **Search Debouncing**: Delays search execution to avoid excessive API calls
- **Filter Application**: Applies filters when filter criteria change

## API Functions

- `fetchUsers()`: Gets all users
- `searchUsers(query)`: Searches users by query
- `filterUsers(filters)`: Filters users by criteria
- `getDepartments()`: Gets available departments
- `getRoles()`: Gets available roles
- `getStatuses()`: Gets available statuses

## Usage Examples

### Search Users
Type in the search box to find users by name, email, role, or department.

### Filter Users
Use the dropdown menus to filter by:
- Department (Engineering, Design, Management, Analytics)
- Status (Active, Inactive)
- Role (Developer, Designer, Manager, Analyst)

### Reset Everything
Click the "🏠 Home Reset" button to clear all filters and search, showing all users.

## Styling Features

- Glassmorphism design with backdrop blur effects
- Responsive grid layout
- Smooth animations and transitions
- Modern color scheme with gradients
- Mobile-first responsive design

# My Tasks

A modern, feature-rich task management application built with Next.js 16, TypeScript, Tailwind CSS, and Supabase.

## Features

### Authentication
- 🔐 User registration with email and password
- 🔐 Secure login with Supabase Auth
- 👤 User profiles with full name storage
- 🔒 Row Level Security (RLS) - users only see their own tasks
- ⚠️ Error handling for failed login/signup attempts

### Task Management
- ✅ Create tasks with detailed information
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Track active task count
- 🔄 Real-time task updates

### Task Organization
- **Categories**: Work, Personal, Shopping (with color-coded badges)
- **Priority Levels**: High (red), Medium (yellow), Low (green)
- **Timestamps**: Track when tasks were created

### Filtering & Sorting
- Filter by status: All, Active, Completed
- Filter by category
- Sort by: Date Created, Priority

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**:
  - `clsx` & `tailwind-merge` - Class management
  - `class-variance-authority` - Component variants

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Avichai-Mizrachi/Tasks-App.git
cd Tasks-App
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

**Note**: The Supabase credentials are included in the code for easy setup. The project uses Supabase's Row Level Security (RLS) to ensure users can only access their own data.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mission-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Authentication & routing
│   └── globals.css         # Global styles
├── components/
│   ├── login-page.tsx      # Login/Signup UI with error handling
│   ├── todo-dashboard.tsx  # Main dashboard with filtering
│   ├── todo-item.tsx       # Individual task card
│   ├── add-task-dialog.tsx # New task dialog
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── supabase-client.ts  # Supabase configuration
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Usage

### Getting Started
1. Create an account or sign in
2. Your tasks are private and secured with Row Level Security

### Creating a Task
1. Click "Add New Task" button
2. Enter task description
3. Select category (Work, Personal, or Shopping)
4. Choose priority level (High, Medium, or Low)
5. Click "Add" to create the task

### Managing Tasks
- **Complete**: Click the checkbox to mark as done
- **Delete**: Hover over a task and click the trash icon
- **Filter**: Use the status buttons (All, Active, Completed)
- **Sort**: Choose sorting method from dropdown
- **Category Filter**: Select specific category to view

## Security

This application implements Row Level Security (RLS) through Supabase:
- Users can only read, create, update, and delete their own tasks
- Authentication is required for all task operations
- User data is isolated and protected

## Database Schema

### tasks table
- `id` (uuid, primary key)
- `user_id` (uuid, foreign key to auth.users)
- `text` (text)
- `category` (text: work, personal, shopping)
- `priority` (text: high, medium, low)
- `completed` (boolean)
- `createdAt` (timestamp)

## Current Status

### ✅ Implemented
- Complete authentication system with Supabase
- User-specific task management with RLS
- Advanced filtering and sorting
- Responsive design
- Error handling for auth operations
- Real-time task updates
- Task categorization and prioritization

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project for learning and personal projects.

## Author

Avichai Mizrachi

Built using Next.js, Supabase, and shadcn/ui

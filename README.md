# My Tasks

A modern, feature-rich task management application built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

### Task Management
- ✅ Create tasks with detailed information
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Track active task count

### Task Organization
- **Categories**: Work, Personal, Shopping (with color-coded badges)
- **Priority Levels**: High (red), Medium (yellow), Low (green)
- **Due Dates**: Set and track task deadlines

### Filtering & Sorting
- Filter by status: All, Active, Completed
- Filter by category
- Sort by: Date Created, Priority, Due Date


## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**:
  - `clsx` & `tailwind-merge` - Class management
  - `class-variance-authority` - Component variants

## Getting Started

### Prerequisites
- Node.js 18+ installed
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
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── login-page.tsx      # Login/Signup UI
│   ├── todo-dashboard.tsx  # Main dashboard
│   ├── todo-item.tsx       # Individual task card
│   ├── add-task-dialog.tsx # New task dialog
│   ├── todo-app.tsx        # App orchestrator
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Usage

### Creating a Task
1. Click "Add New Task" button
2. Enter task description
3. Select category (Work, Personal, or Shopping)
4. Choose priority level (High, Medium, or Low)
5. Set due date
6. Click "Add" to create the task

### Managing Tasks
- **Complete**: Click the checkbox to mark as done
- **Delete**: Hover over a task and click the trash icon
- **Filter**: Use the status buttons (All, Active, Completed)
- **Sort**: Choose sorting method from dropdown
- **Category Filter**: Select specific category to view

## Current Status

### ✅ Implemented
- Complete task CRUD operations
- Advanced filtering and sorting
- Responsive design
- Login/Signup UI
- Task categorization and prioritization
- Due date tracking

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project for learning and personal projects.

## Author

Avichai Mizrachi

Built using Next.js and shadcn/ui

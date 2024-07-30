
# Task Manager App

A modern task management application built with React, TypeScript, Tailwind CSS, and Vite. This app allows users to create, edit, and delete tasks with various attributes including title, description, status, priority, and deadline.


## Deployment

The application is deployed and can be accessed at [https://task-manager-36i8.vercel.app/](https://task-manager-36i8.vercel.app/).

## Features

- **Task Management**: Create, edit, and delete tasks.
- **User Authentication**: Login and registration functionality.
- **Responsive Design**: Tailwind CSS for a responsive and user-friendly interface.
- **Drag-and-Drop**: Integration with `react-beautiful-dnd` for task reordering.
- **Timestamps**: Track creation and update times for tasks.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite
  - `react-beautiful-dnd`

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shwetaa94/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the app in action.

## Routes

- **Home**: `/` - View the list of tasks and navigate to create or edit tasks.
- **Login**: `/login` - User login page.
- **Register**: `/register` - User registration page.
- **Create Page**: `/create` - Page to create a new task.

## Code Structure

- **`src/components`**: Contains React components like `Card`, `TaskList`, etc.
- **`src/pages`**: Page components and routing setup.
- **`src/styles`**: Tailwind CSS configuration and custom styles.

## Schema Definition

### Task Schema

```typescript
import { Schema, model, Document } from 'mongoose';
import { TaskStatus, TaskPriority } from './enums';

interface ITask extends Document {
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  deadline?: Date;
  user: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.Todo,
      required: true,
    },
    priority: {
      type: String,
      enum: Object.values(TaskPriority),
    },
    deadline: { type: Date, default: null },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Task = model<ITask>('Task', TaskSchema);

export default Task;
```



## Contributing

1. **Fork the repository**.
2. **Create a new branch** for your changes.
3. **Commit your changes** and push them to your fork.
4. **Create a pull request** with a description of your changes.




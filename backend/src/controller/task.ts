// src/controllers/task.ts
import { Request, Response } from "express";
import Task from "../modals/task";
import { TaskStatus, TaskPriority } from "../utils/types";

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, priority, deadline } = req.body;

  if (!Object.values(TaskStatus).includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  if (priority && !Object.values(TaskPriority).includes(priority)) {
    return res.status(400).json({ message: "Invalid priority value" });
  }

  try {
    const task = new Task({
      title,
      description,
      status,
      priority,
      deadline,
    });

    await task.save();

    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error while creating task" });
  }
};

// Add other CRUD operations as needed

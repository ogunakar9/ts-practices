import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updatetodo,
} from "../controllers/todos";

const router = Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.patch("/:id", updatetodo);

router.delete("/:id", deleteTodo);

export default router;

import { Button } from "../ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuItem } from "../ui/dropdown";
import { useTranslation } from "react-i18next";

const ToDoPage = () => {
  const { t } = useTranslation();

  interface TodoItem {
    id: number;
    name: string;
    status: string;
  }
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [status, setStatus] = useState<string>(t("pending"));
  const [id, setId] = useState<number>(0);
  const [editId, setEditId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const statusMenuItem = [t("pending"), t("completed"), t("done")];
  /*
------------------------
*/

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsed = JSON.parse(storedTodos) as TodoItem[];
      setTodos(parsed);
      if (parsed.length > 0) {
        setId(parsed[parsed.length - 1].id);
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddOrEditToDo = () => {
    if (!taskName) return;
    if (editId !== null) {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === editId ? { ...todo, name: taskName, status } : todo))
      );
      setEditId(null);
    } else {
      const newTodo: TodoItem = {
        id: (id as number) + 1,
        name: taskName,
        status,
      };
      setTodos([...todos, newTodo]);
      setId((id as number) + 1);
    }
    setTaskName("");
    setStatus(t("pending"));
    setIsDialogOpen(false);
  };

  /*
------------------------
*/
  const handleEditToDo = (todo: TodoItem) => {
    setEditId(todo.id);
    setTaskName(todo.name);
    setStatus(todo.status);
    setIsDialogOpen(true);
  };

  /*
------------------------
*/

  const handleDeleteToDo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /*
------------------------
*/
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{t("todo_title")}</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-violet-600 hover:bg-violet-700 flex items-center gap-2">
              <AiOutlinePlus size={20} />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-violet-700">
                {editId !== null ? t("edit_task") : t("new_task")}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-5 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("task_name")}
                </label>
                <Input
                  placeholder={t("enter_task_name")}
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="w-full"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("status")}
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between text-left font-normal"
                    >
                      {status}
                      <span className="ml-2">▼</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-full min-w-[180px]">
                    {statusMenuItem.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onSelect={() => setStatus(option)}
                        className="cursor-pointer"
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                }}
              >
                {t("cancel")}
              </Button>
              <Button
                onClick={handleAddOrEditToDo}
                className="bg-violet-600 hover:bg-violet-700"
                disabled={!taskName.trim()}
              >
                {editId !== null ? t("update_task") : t("add_to_list")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-1/4 font-semibold text-gray-700 text-left">
              {t("task_name")}
            </TableHead>
            <TableHead className="w-1/4 font-semibold text-gray-700 text-left">
              {t("status")}
            </TableHead>
            <TableHead className="w-1/8 text-center font-semibold text-gray-700">Edit</TableHead>
            <TableHead className="w-1/8 text-center font-semibold text-gray-700">Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="w-1/4 font-medium text-left  text-gray-700">
                {todo.name}
              </TableCell>
              <TableCell className="w-1/4 text-left  text-gray-700">{todo.status}</TableCell>
              <TableCell className="w-1/8 text-center ">
                <button
                  onClick={() => handleEditToDo(todo)}
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                >
                  <AiOutlineEdit size={20} />
                </button>
              </TableCell>
              <TableCell className="w-1/8 text-center">
                <button
                  onClick={() => handleDeleteToDo(todo.id)}
                  className="text-purple-800 transition-colors"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {todos.length <= 0 && (
        <div>
          <p className="text-gray-500 mt-44 mb-2 text-center">{t("no_todo")}</p>
        </div>
      )}
    </div>
  );
};

export default ToDoPage;

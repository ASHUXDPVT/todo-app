import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  setTasks,
  toggleTask,
  deleteTask,
  updateTask
}) {

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setTasks(items);
  };

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-400 italic mt-4">
        ✨ No tasks yet. Add something productive.
      </p>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-gray-700 p-3 rounded shadow hover:scale-[1.02] transition"
                  >
                    <TaskItem
                      task={task}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
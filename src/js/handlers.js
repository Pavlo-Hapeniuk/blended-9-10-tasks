import { nanoid } from 'nanoid';
import localStorageApi from './local-storage-api';
import { renderTaskList } from './render-tasks';

export function onTaskFormSubmit(e) {
  e.preventDefault();

  const { taskName, taskDescription } = e.target.elements;

  const name = taskName.value.trim();
  const description = taskDescription.value.trim();

  if (!name || !description) {
    return alert('НЕ ВСІ ПОЛЯ ЗАПОВНЕНІ');
  }

  const task = {
    name,
    description,
    id: nanoid(),
  };
  console.log(task);

  localStorageApi.saveTask(task);
  renderTaskList(localStorageApi.getTasks());

  e.target.reset();
}

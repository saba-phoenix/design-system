import { useDraggable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';

export const SItem = ({ id, name }) => {
  //   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
  //     id: id,
  //   });
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  return (
    <li ref={setNodeRef} {...listeners} {...attributes} style={{ backgroundColor: 'red' }}>
      {name}
    </li>
  );
};

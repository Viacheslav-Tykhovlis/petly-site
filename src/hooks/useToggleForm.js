import { useState } from 'react';

export const useToggleForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const toggle = () => setIsFormOpen(isFormOpen => !isFormOpen);
  return { isFormOpen, toggle, setIsFormOpen };
};

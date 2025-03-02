import { createContext, useContext } from 'react';

const TableContext = createContext(null);

export const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTable must be used within a TableProvider');
  }
  return context;
};

export const TableProvider = ({ children, value }) => {
  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
};
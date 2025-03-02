import Table from '../components/Table';

const TableDemo = () => {
  
  const headers = ['id', 'name', 'email', 'role', 'status'];
  
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester', status: 'Active' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Table Component Demo</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default TableDemo;
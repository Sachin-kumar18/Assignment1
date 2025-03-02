import Table from '../components/Table';

const TableDemo = () => {
  
  const headers = ['id', 'name', 'email', 'role', 'status'];
  
  const data = [
    { id: 1, name: 'Ayush', email: 'ayush@gmail.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Sachin', email: 'sachin@gmail.com', role: 'Developer', status: 'Inactive' },
    { id: 3, name: 'Anmol', email: 'anmol@gmail.com', role: 'Designer', status: 'Active' },
    { id: 4, name: 'Aryansh', email: 'aryansh@gmail.com', role: 'Tester', status: 'Active' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Table Component Demo</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default TableDemo;

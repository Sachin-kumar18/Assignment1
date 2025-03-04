import Table from '../components/core';
import  data from '../data/data.json'

const TableDemo = () => {
  
  const headers = ['id', 'name', 'email', 'role', 'status'];
    

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Table Component Demo</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default TableDemo;
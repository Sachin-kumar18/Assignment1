import { useTable } from '../../context/TableContext';

const TableHeader = () => {
  const { headers } = useTable();

  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map((header, index) => (
          <th 
            key={`header-${index}`}
            className="px-4 py-2 font-semibold text-gray-700 text-left"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
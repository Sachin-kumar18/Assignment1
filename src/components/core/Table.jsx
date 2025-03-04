import PropTypes from 'prop-types';
import { TableProvider } from '../../context/TableContext';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ headers, data }) => {
  
  const tableContextValue = {
    headers
  };

  return (
    <TableProvider value={tableContextValue}>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <TableRow key={`row-${index}`} rowData={row} rowIndex={index} />
            ))}
          </tbody>
        </table>
      </div>
    </TableProvider>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;
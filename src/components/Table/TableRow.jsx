import PropTypes from 'prop-types';
import TableCell from './TableCell';
import { useTable } from '../../context/TableContext';

const TableRow = ({ rowData, rowIndex }) => {
  const { headers } = useTable();

  return (
    <tr className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      {headers.map((header, index) => (
        <TableCell 
          key={`cell-${rowIndex}-${index}`}
          content={rowData[header] || ''}
        />
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  rowData: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired
};

export default TableRow;
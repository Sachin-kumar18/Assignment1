import PropTypes from 'prop-types';

const TableCell = ({ content }) => {
  return (
    <td className="px-4 py-2">
      {content}
    </td>
  );
};

TableCell.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired
};

export default TableCell;
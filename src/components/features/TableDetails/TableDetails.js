import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";

const TableDetails = () => {
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));


  if (!table) return <Navigate to='/' />

  return (
    <div>
      {table.status}
    </div>
  )
};

export default TableDetails;
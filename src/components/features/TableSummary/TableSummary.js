import { Card, Button } from "react-bootstrap";
import styles from './TableSummary.module.scss';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";

const TableSummary = () => {
  const tables = useSelector(getAllTables);

  return (
    <div className={styles.mainContainer}>
      {tables.map(table => (<Card key={table.id}>
        <Card.Body className={styles.tableContainer}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.tableName}>Table {table.id}</h2>
            <span className={styles.tableStatus}><b>Status: </b> {table.status}</span>
          </div>
          <Button variant="primary" as={Link} to={`/table/detail/${table.id}`} className={styles.button}>Show more</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default TableSummary;
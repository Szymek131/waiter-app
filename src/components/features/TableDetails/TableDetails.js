import styles from './TableDetails.module.scss';
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const TableDetails = () => {
  const { id } = useParams();
  const [tableStatus, setTableStatus] = useState('');
  const [bill, setBill] = useState(0);
  const [minPeopleAmount, setMinPeopleAmount] = useState(0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);
  const table = useSelector(state => getTableById(state, id));

  if (!table) return <Navigate to='/' />
  setTableStatus(table.status)

  const statuses = ['Busy', 'Cleaning', 'Free', 'Reserved'];
  const newStatuses = statuses.filter(word => word !== table.status)
  const shouldDisplay = (tableStatus === 'Busy' && styles.statusDisplay) && (table.status === 'Busy' && styles.statusDisplay);
  setTableStatus(table.status);
  return (
    <div>
      <Form>
        <p className={styles.tableName}>Table {table.id}</p>
        <div className={styles.singleFormContainer}>
          <p className={styles.formCategories}>Status: </p>
          <div className={styles.select}>
            <Form.Select onChange={e => setTableStatus(e.target.value)}>
              <option>{table.status}</option>
              {newStatuses.map(status => (
                <option>{status}</option>
              ))};
            </Form.Select>
          </div>
        </div>
        <div className={clsx(styles.singleFormContainer, shouldDisplay)}>
          <p className={styles.formCategories}>People: </p>
          <div className={styles.peopleInput}>
            <Form.Control ></Form.Control>
          </div>
          <span className={styles.slash}>/</span>
          <div className={styles.peopleInput}>
            <Form.Control ></Form.Control>
          </div>
        </div>
        <div className={clsx(styles.singleFormContainer, shouldDisplay)}>
          <p className={styles.formCategories}>Bill: </p>
          <span className={styles.dolarSing}>$</span>
          <div className={styles.billInput}>
            <Form.Control value={table.bill} />
          </div>
        </div>
        <Button className={styles.updateButton} type="submit" variant="primary" size="lg" >Update</Button>
      </Form>
    </div>
  )
};

export default TableDetails;
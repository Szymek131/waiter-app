import styles from './TableDetails.module.scss';
import { useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { editTableRequest } from '../../../redux/tablesRedux';
import clsx from 'clsx';

const statuses = {
  busy: "Busy",
  cleaning: "Cleaning",
  free: "Free",
  reserved: "Reserved",
}

const TableDetails = () => {
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));

  const [tableStatus, setTableStatus] = useState(table?.status);
  const [bill, setBill] = useState(table?.bill);
  const [peopleAmount, setPeopleAmount] = useState(table?.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table?.maxPeopleAmount);

  const dispatch = useDispatch();

  if (!table) return <Navigate to='/' />

  const isOptionHidden = (tableStatus === statuses.busy && styles.statusDisplay)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTableRequest({ id, status: tableStatus, peopleAmount, maxPeopleAmount, bill }))
  }

  const handlePeopleAmount = e => {
    setPeopleAmount(e.target.value)
    if (e.target.value > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
      setMaxPeopleAmount(e.target.value);
    }
  }

  const handleSelectOnChange = e => {
    setTableStatus(e.target.value)
    if (e.target.value === statuses.cleaning || e.target.value === statuses.free) {
      console.log('hello!');
      setPeopleAmount(0);
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <p className={styles.tableName}>Table {table.id}</p>
        <div className={styles.singleFormContainer}>
          <p className={styles.formCategories}>Status: </p>
          <div className={styles.select}>
            <Form.Select value={tableStatus} onChange={handleSelectOnChange}>
              {Object.values(statuses).map(status => (
                <option key={status}>{status}</option>
              ))};
            </Form.Select>
          </div>
        </div>
        <div className={clsx(styles.singleFormContainer, isOptionHidden)}>
          <p className={styles.formCategories}>People: </p>
          <div className={styles.peopleInput}>
            <Form.Control type="number" max="10" min="0" value={peopleAmount} onChange={handlePeopleAmount} />
          </div>
          <span className={styles.slash}>/</span>
          <div className={styles.peopleInput}>
            <Form.Control type="number" max="10" min="0" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
          </div>
        </div>
        <div className={clsx(styles.singleFormContainer, isOptionHidden)}>
          <p className={styles.formCategories}>Bill: </p>
          <span className={styles.dolarSing}>$</span>
          <div className={styles.billInput}>
            <Form.Control value={bill} onChange={e => setBill(e.target.value)} />
          </div>
        </div>
        <Button className={styles.updateButton} type="submit" variant="primary" size="lg" >Update</Button>
      </Form>
    </div>
  )
};

export default TableDetails;
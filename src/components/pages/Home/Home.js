import styles from './Home.module.scss';
import TableSummary from '../../features/TableSummary/TableSummary';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>All Tables</h1>
      <TableSummary />
    </div>
  )
}

export default Home;
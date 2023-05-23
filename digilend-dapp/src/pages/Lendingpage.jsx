import Navbar from '../components/Navbar';
import LendigTable from '../components/LendingTable';

const Lendingpage = () => {

  return (
    <div
      style={{
        height: '100%'
        /*backgroundColor: 'green'*/
      }}
    >
      <Navbar />
      <LendigTable/>
    </div>
  );
};

export default Lendingpage;

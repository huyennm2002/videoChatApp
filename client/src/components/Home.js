import '../style/Home.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
         <Button variant="outlined" onClick={() => navigate('/create')}>Create</Button>
         <Button variant="outlined" onClick={() => navigate('/join')}>Join</Button>
      </div>
  );
}

export default Home;
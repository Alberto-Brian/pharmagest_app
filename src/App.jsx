import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import BR from './helpers/BR.jsx';

import Home0 from './assets/components/pages/Home0.jsx';
import Home1 from './assets/components/pages/Home1.jsx';
import Home2 from './assets/components/pages/Home2.jsx';
import Container from './assets/components/utils/Container.jsx';

let author = 'Alberto Brian'; 
function App(){

  return (
    <div>

      <Router>
          <Container>
            <Routes>
                  <Route path="/" element={ <Home2 /> } />
           </Routes>
          </Container>
      </Router>     
      <BR />
    </div>
  )
}

export default App
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import FormPage from './page/FormPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormPage />} />
            </Routes>
        </>
    );
}

export default App;

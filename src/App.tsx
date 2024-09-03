import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App: FC<any> = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
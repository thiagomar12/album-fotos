import { useRoutes } from 'react-router-dom';
import { AllAlbums } from '../components/AllAlbums';
import { Album } from '../components/Album';
import { Home } from '../pages/Home';
import { Photo } from '../components/Photo';


export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <AllAlbums />},
        {path: '/album/:slug', element: <Album/>},
        {path: '/foto/:slug', element: <Photo/>},
        {path: '/home', element: <Home />}
    ]);
}
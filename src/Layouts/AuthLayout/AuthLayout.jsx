
import { Outlet } from 'react-router';
import AquaTradeBD from '../../Shared/AquaTradeBD/AquaTradeBD';

const AuthLayout = () => {
    return (
        <div className='min-h-screen p-4 bg-slate-500'>
            <AquaTradeBD/>
            <div className='max-w-xl mx-auto my-12'>
            <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;
import {useEffect, type JSX } from 'react';
import { Route, Routes, Navigate,  } from 'react-router-dom';

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import EmailVerificationPage from './Pages/EmailVerificationPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import CreatePage from "./Pages/CreatePage.tsx";

import { useAuthStore } from '../store/authStore';
import { Loader } from 'lucide-react';

const ProtectedRoute = ({children}:{children: JSX.Element}) => {
    const { isCheckingAuth, isAuthenticated, user } = useAuthStore();

    if(isCheckingAuth) return <Loader className='stroke-green-700 size-4 md:size-6 lg:size-8' />

    if(!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    }

    if(!user.isVerified) {
        return <Navigate to={'/verify-email'} replace />
    }

    return children;
}

const RedirectAuthenticatedUser = ({children}:{children: JSX.Element}) => {
    const { isAuthenticated, user } = useAuthStore();

    if(isAuthenticated && user.isVerified)
        return <Navigate to="/" replace />

    return children;
}

function App(): JSX.Element | undefined{
    const { user, isAuthenticated, checkAuth } = useAuthStore();
    useEffect(() => {
        checkAuth();

        console.log(isAuthenticated);
        console.log(user);
    },[checkAuth])

    try {
        return (
            <section>
                <div className='min-h-screen min-w-screen md:py-8 px-4
            bg-gradient-to-br from-gray-900 via-orange-700 to-amber-900 relative flex
            items-center justify-center'>
                    <Routes>

                        <Route path='/signup' element={
                            <RedirectAuthenticatedUser>
                                <SignupPage />
                            </RedirectAuthenticatedUser>
                        }></Route>

                        <Route path='/login' element={
                            <RedirectAuthenticatedUser>
                                <LoginPage />
                            </RedirectAuthenticatedUser>
                        }></Route>

                        <Route path='/forgot-password' element={
                            <RedirectAuthenticatedUser>
                                <ForgotPasswordPage />
                            </RedirectAuthenticatedUser>
                        }></Route>

                        <Route path='/reset-password/:token' element={
                            <RedirectAuthenticatedUser>
                                <ResetPasswordPage />
                            </RedirectAuthenticatedUser>
                        }></Route>

                        <Route path='/verify-email' element={<EmailVerificationPage />}></Route>
                    </Routes>
                </div>
                <div className="bg-background-color min-h-screen">
                    <Routes>
                        <Route path="/" element={
                            <ProtectedRoute>
                                <CreatePage />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </section>
        )
    } catch (error) {
        console.error(error);
    }

}

export default App
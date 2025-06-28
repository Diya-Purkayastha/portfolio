import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black-100 flex justify-center">
      <div className="flex w-full max-w-[1280px]">

        {/* Sidebar */}
        <div className="hidden md:block sticky top-0 h-screen">
          <Sidebar />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col md:flex-row flex-1">

          {/* Profile */}
          <div className="w-full md:w-[300px] mt-16 md:mt-6 md:sticky md:top-6 bg-black">
            <ProfileCard />
          </div>

          {/* Outlet Section */}
          <main className="flex-1 px-4 md:px-8 py-6 bg-blue-300">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
};

export default MainLayout;

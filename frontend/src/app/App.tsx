import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { DashboardPage } from './components/DashboardPage';
import { LogPage } from './components/LogPage';
import { ChatPage } from './components/ChatPage';
import { ProfilePage } from './components/ProfilePage';
import React from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'log' | 'chat' | 'profile'>('dashboard');

  return (
    <div className="min-h-screen bg-[#FFF6DE]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'log' && <LogPage />}
      {currentPage === 'chat' && <ChatPage />}
      {currentPage === 'profile' && <ProfilePage />}

      {currentPage === 'dashboard' && (
        <footer className="max-w-7xl mx-auto px-6 py-12 mt-16 border-t border-[#371A0A]/10">
          <div className="text-center text-[#6B5D4F] text-sm">
            <p className="mb-2">Your AI-powered wellness companion</p>
            <p className="font-['Momo'] text-xl text-[#371A0A]">Luna</p>
          </div>
        </footer>
      )}
    </div>
  );
}
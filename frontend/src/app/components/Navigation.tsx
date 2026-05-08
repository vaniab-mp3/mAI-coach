import { User, Home, Edit3, MessageCircle, Settings, UserCircle } from 'lucide-react';
import React from 'react';

interface NavigationProps {
  currentPage: 'dashboard' | 'log' | 'chat' | 'profile';
  onNavigate: (page: 'dashboard' | 'log' | 'chat' | 'profile') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-[#371A0A]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="font-['Momo'] text-2xl text-[#371A0A]">Luna</h1>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('dashboard')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'dashboard'
                    ? 'text-[#371A0A] bg-[#F5EFD8]'
                    : 'text-[#6B5D4F] hover:text-[#371A0A]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => onNavigate('log')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'log'
                    ? 'text-[#371A0A] bg-[#F5EFD8]'
                    : 'text-[#6B5D4F] hover:text-[#371A0A]'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>Log</span>
              </button>
              <button
                onClick={() => onNavigate('chat')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'chat'
                    ? 'text-[#371A0A] bg-[#F5EFD8]'
                    : 'text-[#6B5D4F] hover:text-[#371A0A]'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </button>
              <button
                onClick={() => onNavigate('profile')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'profile'
                    ? 'text-[#371A0A] bg-[#F5EFD8]'
                    : 'text-[#6B5D4F] hover:text-[#371A0A]'
                }`}
              >
                <UserCircle className="w-4 h-4" />
                <span>Profile</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#6B5D4F] hover:text-[#371A0A] transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 rounded-full bg-[#9CAE5A] flex items-center justify-center text-white"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

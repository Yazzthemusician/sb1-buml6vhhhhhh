import React from 'react';
import { Home, Users, BookOpen, MessageSquare, Newspaper, User } from 'lucide-react';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: { username: string; role: string } | null;
  onLogout: () => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, user, onLogout, language, setLanguage }) => {
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-green-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2 sm:mb-0">Labor iConnect</h1>
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-green-800 dark:text-green-200 hidden sm:inline">Welcome, {user.username}</span>
                <button
                  onClick={() => setCurrentPage('admin')}
                  className="bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  <User size={20} className="sm:hidden" />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>
                <button
                  onClick={onLogout}
                  className="text-red-500 hover:text-red-700 transition-colors duration-300"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('admin')}
                className="bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                {t.login}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start items-center mt-2 space-x-2 sm:space-x-4">
          <NavButton icon={<Home size={20} />} text={t.home} onClick={() => setCurrentPage('home')} active={currentPage === 'home'} />
          <NavButton icon={<Users size={20} />} text={t.membership} onClick={() => setCurrentPage('membership')} active={currentPage === 'membership'} />
          <NavButton icon={<BookOpen size={20} />} text={t.blog} onClick={() => setCurrentPage('blog')} active={currentPage === 'blog'} />
          <NavButton icon={<MessageSquare size={20} />} text={t.forum} onClick={() => setCurrentPage('forum')} active={currentPage === 'forum'} />
          <NavButton icon={<Newspaper size={20} />} text={t.news} onClick={() => setCurrentPage('news')} active={currentPage === 'news'} />
        </div>
      </nav>
    </header>
  );
};

const NavButton: React.FC<{ icon: React.ReactNode; text: string; onClick: () => void; active: boolean }> = ({ icon, text, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
      active ? 'bg-green-600 text-white' : 'text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-700'
    } transition-colors duration-300`}
  >
    {icon}
    <span className="hidden sm:inline">{text}</span>
  </button>
);

export default Header;
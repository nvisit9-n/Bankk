import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  Sparkles, 
  Flame, 
  Zap, 
  ShieldCheck,
  Edit3,
  Menu,
  X,
  Home,
  BookOpen,
  Building2,
  FileText,
  Youtube,
  Newspaper,
  ShoppingBag,
  Bookmark,
  Trophy,
  User as UserIcon,
  LogOut,
  Crown,
  Info,
  ChevronDown,
  Landmark,
  Scale
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { isUserAdmin, OFFICIAL_ADMIN_EMAIL } from '../../utils/sanitizer';
import { NavigationTab } from '../../types';
import { DbService } from '../../services/dbService';
import { StorageService } from '../../services/storageService';
import { PWAHeaderInstallButton } from '../pwa/PWAInstallPrompt';

// =========================================================================
// Official Banking Tayari Nepal Inline SVG Component
// Rendered directly inline to guarantee 0ms latency, no broken image assets,
// and exact Navy Blue (#0B2046) & Crimson Red (#C8102E) branding.
// =========================================================================
export const BankingTayariLogoSvg: React.FC<{ 
  className?: string; 
  showMotto?: boolean;
}> = ({ 
  className = 'h-10 md:h-12 w-auto object-contain',
  showMotto = true
}) => {
  return (
    <svg 
      viewBox={showMotto ? "0 0 980 320" : "0 0 980 240"} 
      fill="none" 
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Banking Tayari Nepal Logo"
    >
      {/* ===== 1. LEFT EMBLEM: Stylized 'B' with Book, Pen, and Red Flourish ===== */}
      <g id="emblem-group" transform="translate(10, 8)">
        <path 
          d="M 28 6 L 176 6 C 220 6, 256 30, 256 74 C 256 110, 226 134, 184 142 C 228 152, 258 184, 258 226 C 258 244, 250 260, 238 274 C 228 266, 214 260, 196 258 C 226 244, 238 226, 238 208 C 238 174, 210 152, 166 152 L 76 152 L 76 248 L 28 248 Z" 
          fill="#0B2046" 
        />
        <path 
          d="M 76 40 L 168 40 C 190 40, 208 52, 208 72 C 208 92, 190 106, 168 106 L 76 106 Z" 
          fill="#FFFFFF" 
        />
        <path d="M 12 306 C 45 286, 86 276, 128 274 C 128 264, 128 256, 128 248 C 76 252, 38 266, 12 306 Z" fill="#0B2046" />
        <path d="M 20 282 C 52 262, 90 252, 130 249 C 130 241, 130 234, 130 226 C 84 230, 48 244, 20 282 Z" fill="#0B2046" />
        <path d="M 32 258 C 62 238, 98 228, 132 224 C 132 216, 132 210, 132 202 C 90 206, 56 218, 32 258 Z" fill="#0B2046" />
        <path d="M 136 302 C 178 282, 222 260, 260 216 C 260 242, 246 272, 218 292 C 190 308, 160 308, 136 302 Z" fill="#C8102E" />
        <path d="M 138 281 C 170 263, 206 244, 238 216 C 238 232, 228 254, 208 270 C 184 284, 160 286, 138 281 Z" fill="#C8102E" />
        <g transform="translate(94, 142)">
          <path 
            d="M 42 0 L 12 74 C 12 106, 24 133, 42 153 C 60 133, 72 106, 72 74 L 42 0 Z" 
            fill="#FFFFFF" 
            stroke="#0B2046" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          <circle cx="42" cy="74" r="6.5" fill="#0B2046" />
          <line x1="42" y1="67" x2="42" y2="4" stroke="#0B2046" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 26 76 C 26 96, 33 114, 42 128 C 51 114, 58 96, 58 76" fill="none" stroke="#0B2046" strokeWidth="2.5" />
        </g>
      </g>

      {/* ===== 2. RIGHT BRAND TYPOGRAPHY ===== */}
      <g transform="translate(295, 12)">
        <text 
          x="0" 
          y="126" 
          fill="#0B2046" 
          fontSize="136" 
          fontWeight="900" 
          letterSpacing="1"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
        >
          BANKING
        </text>
        <rect x="0" y="150" width="670" height="82" rx="4" fill="#C8102E" />
        <text 
          x="335" 
          y="210" 
          fill="#FFFFFF" 
          fontSize="46" 
          fontWeight="800" 
          textAnchor="middle" 
          letterSpacing="11"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
        >
          TAYARI NEPAL
        </text>

        {showMotto && (
          <g transform="translate(6, 256)">
            <g transform="translate(0, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#0B2046" strokeWidth="4.5" />
              <path d="M 14 18 C 19 16, 24 17, 26 19 C 28 17, 33 16, 38 18 L 38 34 C 33 32, 28 33, 26 35 C 24 33, 19 32, 14 34 Z" fill="#0B2046" />
              <line x1="26" y1="19" x2="26" y2="35" stroke="#FFFFFF" strokeWidth="2" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                PREPARE
              </text>
            </g>
            <line x1="218" y1="6" x2="218" y2="48" stroke="#0B2046" strokeWidth="2.5" />
            <g transform="translate(242, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#C8102E" strokeWidth="4.5" />
              <path d="M 36 15 L 39 18 L 25 32 L 18 35 L 21 28 Z" fill="#0B2046" />
              <path d="M 16 36 C 22 34, 30 36, 36 31" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                PRACTICE
              </text>
            </g>
            <line x1="472" y1="6" x2="472" y2="48" stroke="#C8102E" strokeWidth="2.5" />
            <g transform="translate(496, 0)">
              <circle cx="26" cy="26" r="26" fill="none" stroke="#0B2046" strokeWidth="4.5" />
              <rect x="17" y="29" width="4.5" height="9" fill="#0B2046" rx="1" />
              <rect x="24" y="23" width="4.5" height="15" fill="#0B2046" rx="1" />
              <rect x="31" y="17" width="4.5" height="21" fill="#0B2046" rx="1" />
              <path d="M 17 23 L 26 15 L 37 11 M 32 11 L 37 11 L 37 16" fill="none" stroke="#0B2046" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="66" y="35" fill="#0B2046" fontSize="23" fontWeight="800" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                SUCCEED
              </text>
            </g>
          </g>
        )}
      </g>
    </svg>
  );
};

export const Header: React.FC = () => {
  const { 
    user, 
    theme, 
    toggleTheme, 
    language,
    setLanguage,
    toggleLanguage,
    t,
    setIsSearchOpen, 
    setIsAiModalOpen,
    setIsNotificationsOpen,
    notifications,
    unreadNotificationsCount,
    activeTab,
    setActiveTab,
    setIsProfileModalOpen,
    openAdminWithSecurityCheck,
    isAdminAuthenticated,
    purchases,
    bookmarks,
    logout,
    openLoginModal,
    quizSubCategory,
    selectQuizSubCategory
  } = useApp();

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [isMobileSangathitOpen, setIsMobileSangathitOpen] = useState<boolean>(true);

  const isGuest = !user?.email || Boolean(user?.isGuest);

  // Force immediate re-render when auth changes so admin button and user profile update instantly
  const [, setForceUpdate] = useState(0);
  useEffect(() => {
    const handleAuthEvent = () => setForceUpdate(n => n + 1);
    window.addEventListener('btn:profile-updated', handleAuthEvent);
    window.addEventListener('btn:user-login', handleAuthEvent);
    window.addEventListener('btn:logout', handleAuthEvent);
    return () => {
      window.removeEventListener('btn:profile-updated', handleAuthEvent);
      window.removeEventListener('btn:user-login', handleAuthEvent);
      window.removeEventListener('btn:logout', handleAuthEvent);
    };
  }, []);

  // Visibility logic for the Admin button: ONLY when the authorized admin is logged in
  const isAdmin = Boolean(
    (user?.email && isUserAdmin(user.email)) ||
    (typeof window !== 'undefined' && isUserAdmin(StorageService.getUserProfile()?.email))
  );
  const isPro = DbService.isUserPro(user);

  const unreadCount = typeof unreadNotificationsCount === 'number' 
    ? unreadNotificationsCount 
    : (notifications || []).filter(n => !n.read).length;

  // Dynamic user session bindings:
  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = isGuest
    ? 'अतिथि'
    : (user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी')));
  const userEmail = isGuest ? '' : (user?.email || '');
  const photoURL = user?.photoURL || user?.avatarUrl || (isGuest ? '/default-avatar.png' : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`);

  const drawerNavItems: { tab: NavigationTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string | number; badgeColor?: string }[] = [
    { tab: 'home', label: language === 'ne' ? 'गृहपृष्ठ' : 'Home', icon: Home },
    { tab: 'courses', label: language === 'ne' ? 'पाठ्यक्रम' : 'Syllabus & Courses', icon: BookOpen },
    { tab: 'quiz', label: language === 'ne' ? 'संस्थान तथा संगठित संस्था' : 'Public Enterprises', icon: Building2 },
    { tab: 'free-notes', label: language === 'ne' ? 'अध्ययन / AI नोट्स' : 'Study & AI Notes', icon: FileText },
    { tab: 'leaderboard', label: language === 'ne' ? 'वरियता' : 'Leaderboard', icon: Trophy },
    { tab: 'video-lectures', label: language === 'ne' ? 'भिडियो कक्षाहरू' : 'Video Lectures', icon: Youtube },
    { tab: 'current-affairs', label: language === 'ne' ? 'समसामयिक' : 'Current Affairs', icon: Newspaper },
    { tab: 'premium', label: language === 'ne' ? 'प्रिमियम नोट्स' : 'Premium Notes', icon: Sparkles },
    { tab: 'purchases', label: language === 'ne' ? 'मेरो खरिद' : 'My Purchases', icon: ShoppingBag, badge: (purchases || []).length > 0 ? (purchases || []).length : undefined },
    { tab: 'bookmarks', label: language === 'ne' ? 'बुकमार्क' : 'Bookmarks', icon: Bookmark, badge: (bookmarks || []).length > 0 ? (bookmarks || []).length : undefined },
    { tab: 'profile', label: language === 'ne' ? 'मेरो प्रोफाइल' : 'My Profile', icon: UserIcon },
    { tab: 'about', label: language === 'ne' ? 'हाम्रो बारेमा' : 'About Us', icon: Info }
  ];

  const handleDrawerNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    setIsMobileDrawerOpen(false);
  };

  const handleLogout = () => {
    if (window.confirm('के तपाईं लगआउट गर्न चाहनुहुन्छ?')) {
      setIsMobileDrawerOpen(false);
      logout();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#0F172A] text-[#E2E8F0] border-b border-slate-800 transition-colors shadow-xs">
        <div className="w-full px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            
            {/* Left section: Mobile Hamburger Drawer Trigger & Brand */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
              {/* Mobile Hamburger Toggle Button (44px min touch target) */}
              <button
                type="button"
                id="mobile-drawer-toggle-btn"
                onClick={() => setIsMobileDrawerOpen(true)}
                className="md:hidden min-h-[44px] min-w-[44px] p-2 text-slate-300 hover:text-white hover:bg-[#1E293B] rounded-xl flex items-center justify-center cursor-pointer transition active:scale-95 shrink-0 border border-slate-700/60"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Mobile Brand Identity */}
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                className="md:hidden flex items-center gap-1.5 focus:outline-none cursor-pointer truncate"
                title="Banking Tayari Nepal"
              >
                <img 
                  src="/logo-icon.svg" 
                  alt="Banking Tayari" 
                  className="w-7 h-7 object-contain shrink-0" 
                />
                <span className="text-xs font-black tracking-tight text-[#E2E8F0] truncate max-w-[100px] xs:max-w-[130px]">
                  बैंकिङ्ग तयारी
                </span>
              </button>
            </div>

            {/* Desktop Search Bar (⌘K) - Minimalist Soft Slate */}
            <div className="flex-1 max-w-lg hidden md:block">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm bg-[#1E293B] hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700/80 hover:border-sky-400/60 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition" />
                  <span className="text-[#E2E8F0] font-medium">के खोज्दै हुनुहुन्छ? (Search Notes, Quiz...)</span>
                </div>
                <kbd className="hidden lg:inline-block px-2 py-0.5 text-[10px] font-semibold bg-[#0F172A] border border-slate-700 rounded text-slate-400 font-mono">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              
              {/* Mobile Search Button (40px touch target) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="md:hidden min-h-[40px] min-w-[40px] p-2 text-slate-300 hover:text-white hover:bg-[#1E293B] rounded-xl flex items-center justify-center transition active:scale-95 shrink-0 border border-slate-700/60"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* AI Study Assistant Button - Minimalist Sky-Blue Outline Style */}
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-xl bg-[#1E293B] text-sky-300 border border-sky-500/40 hover:bg-sky-500/15 hover:border-sky-400 transition shrink-0 cursor-pointer"
                title="AI Study Assistant"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>AI साथी</span>
              </button>

              {/* Install PWA App Button */}
              <div className="hidden xs:block shrink-0">
                <PWAHeaderInstallButton />
              </div>

              {/* About Us Platform Story Button */}
              <button
                onClick={() => setActiveTab('about')}
                className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition cursor-pointer shrink-0 ${
                  activeTab === 'about'
                    ? 'bg-[#1E293B] text-sky-300 border-sky-500/60'
                    : 'bg-[#1E293B]/70 hover:bg-[#1E293B] text-slate-300 hover:text-white border-slate-700/80 hover:border-slate-600'
                }`}
                title="हाम्रो बारेमा (About Platform Story)"
              >
                <Info className="w-3.5 h-3.5 text-sky-400" />
                <span>हाम्रो बारेमा</span>
              </button>

              {/* Streak Badge - Minimalist Sober Style */}
              <div 
                className="hidden xs:flex items-center gap-1 bg-[#1E293B] border border-slate-700/80 text-amber-300 px-2.5 py-1 rounded-xl text-xs font-bold shrink-0"
                title={`${user.streak} Days Continuous Study Streak`}
              >
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{user.streak}d</span>
              </div>

              {/* Theme Toggle - Desktop only */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="hidden md:flex p-2 text-slate-300 hover:text-white hover:bg-[#1E293B] border border-slate-700/60 rounded-xl transition shrink-0 cursor-pointer"
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4.5 h-4.5 text-amber-400" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-slate-300" />
                )}
              </button>

              {/* Bilingual Language Switcher: 🇳🇵 नेपाली / 🇬🇧 English */}
              <div 
                id="header-language-toggle"
                className="flex items-center p-0.5 rounded-xl bg-[#1E293B] border border-slate-700/80 shrink-0"
                title="भाषा छनोट / Select Language"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('ne')}
                  className={`px-2 py-1 rounded-lg text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                    language === 'ne'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="नेपाली भाषा (Default Core)"
                >
                  <span className="text-xs">🇳🇵</span>
                  <span className="hidden sm:inline">नेपाली</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded-lg text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                    language === 'en'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="English Language"
                >
                  <span className="text-xs">🇬🇧</span>
                  <span className="hidden sm:inline">EN</span>
                </button>
              </div>

              {/* Notification Bell with Dynamic Counter Badge (40px touch target) */}
              <button
                id="header-notification-btn"
                onClick={() => setIsNotificationsOpen(true)}
                aria-label="Notifications"
                className="min-h-[40px] min-w-[40px] p-2 relative text-slate-300 hover:text-white hover:bg-[#1E293B] border border-slate-700/60 rounded-xl flex items-center justify-center cursor-pointer transition focus:outline-none active:scale-95 shrink-0"
                title={`सूचनाहरू (${unreadCount} नपढिएका)`}
              >
                <Bell className="w-4.5 h-4.5" />
                {unreadCount > 0 && (
                  <span 
                    id="header-notification-badge"
                    className="absolute top-1 right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 text-[9px] font-black font-mono text-white bg-red-600 rounded-full border-2 border-[#0F172A] shadow-sm"
                  >
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Admin PIN Button - Minimalist Sky-Blue Outline */}
              {isAdmin && (
                <button
                  id="header-admin-btn"
                  onClick={openAdminWithSecurityCheck}
                  className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer shrink-0 ${
                    isAdminAuthenticated 
                      ? 'bg-sky-500/15 text-sky-300 border-sky-400 hover:bg-sky-500/25'
                      : 'bg-[#1E293B] text-slate-300 border-slate-700 hover:border-sky-500/40 hover:text-white'
                  }`}
                  title={`प्रशासक प्यानल (${OFFICIAL_ADMIN_EMAIL})`}
                >
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>प्रशासक (PIN)</span>
                </button>
              )}

              {/* Header Profile Section & Trigger */}
              {isGuest ? (
                <div className="flex items-center gap-1.5 pl-1.5 sm:pl-3 border-l border-slate-800 shrink-0">
                  <button
                    type="button"
                    onClick={() => openLoginModal()}
                    id="header-login-btn"
                    className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white text-xs font-black shadow-xs flex items-center gap-1.5 transition cursor-pointer shrink-0"
                    title="Google वा इमेलबाट लगइन गर्नुहोस्"
                  >
                    <UserIcon className="w-3.5 h-3.5" />
                    <span>लगइन</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsProfileModalOpen(true)}
                    className="hidden sm:block p-1 rounded-xl hover:bg-[#1E293B] transition cursor-pointer shrink-0"
                    title="अतिथि प्रोफाइल हेर्नुहोस्"
                  >
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border border-slate-700 object-cover shadow-xs"
                    />
                  </button>
                </div>
              ) : (
                <button 
                  type="button"
                  onClick={() => setIsProfileModalOpen(true)}
                  id="header-profile-btn"
                  className="min-h-[44px] flex items-center gap-2 p-1 rounded-xl hover:bg-[#1E293B] transition-colors border-l pl-2 sm:pl-3 ml-0.5 sm:ml-1 border-slate-800 group text-left cursor-pointer active:scale-95"
                  title={`${displayName} - प्रोफाइल सम्पादन`}
                >
                  <div className="text-right hidden sm:block max-w-[140px]">
                    <div className="flex items-center justify-end gap-1.5">
                      <p className="text-xs text-[#E2E8F0] font-bold group-hover:text-sky-300 transition truncate" title={displayName}>
                        {displayName}
                      </p>
                      {isPro && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-black tracking-wider border border-amber-500/40 flex items-center gap-0.5" title="Banking Tayari Pro Active">
                          <Crown className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          <span>PRO</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 truncate" title={userEmail || 'विद्यार्थी'}>
                      {userEmail || user?.targetExam?.split(' ')[0] || 'विद्यार्थी'}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-slate-700 object-cover shadow-sm transition-transform group-hover:scale-105"
                    />
                    {user && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border-2 border-[#0F172A] rounded-full" />
                    )}
                  </div>
                </button>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SLEEK COLLAPSIBLE MOBILE SLIDE-OVER DRAWER (SaaS Level)
          Provides quick, clean navigation on mobile screens without header clutter.
          ========================================================================= */}
      {isMobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex animate-in fade-in duration-200">
          
          {/* Backdrop blur overlay */}
          <div 
            onClick={() => setIsMobileDrawerOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" 
          />

          {/* Sliding Drawer Container - Sober Dark Navy */}
          <div className="relative w-4/5 max-w-xs bg-[#0F172A] text-[#E2E8F0] h-full shadow-2xl flex flex-col z-10 border-r border-slate-800 animate-in slide-in-from-left duration-200">
            
            {/* Drawer Top Bar: Brand Logo & Close Button */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="bg-white px-2.5 py-1.5 rounded-xl border border-slate-700 shadow-2xs">
                <img 
                  src="/logo.svg" 
                  alt="Banking Tayari Nepal" 
                  className="h-7 w-auto object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#1E293B] border border-slate-700/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active User Identity Card inside Mobile Drawer - Flat Soft Slate */}
            <div className="p-4 bg-[#1E293B] border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img 
                  src={photoURL} 
                  alt={displayName} 
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-600 shadow-xs"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#E2E8F0] truncate">
                    {displayName}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono truncate">
                    {userEmail || 'विद्यार्थी खाता'}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    {isPro ? (
                      <span className="px-1.5 py-0.2 text-[10px] font-black bg-amber-500/20 text-amber-300 rounded border border-amber-500/40 flex items-center gap-1">
                        <Crown className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        <span>PRO</span>
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.2 text-[10px] font-bold bg-slate-800 text-slate-300 rounded border border-slate-700">
                        FREE
                      </span>
                    )}
                    <span className="px-1.5 py-0.2 text-[10px] font-bold bg-[#0F172A] text-sky-300 border border-slate-700 rounded">
                      Lvl {user.level || 1}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {user.xp} XP
                    </span>
                  </div>
                </div>
              </div>

              {isGuest ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    openLoginModal();
                  }}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
                >
                  <UserIcon className="w-3.5 h-3.5" />
                  <span>लगइन / खाता खोल्नुहोस्</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    setIsProfileModalOpen(true);
                  }}
                  className="w-full mt-3 py-1.5 px-3 rounded-xl bg-[#0F172A] border border-slate-700 hover:border-sky-500/50 text-xs font-bold text-[#E2E8F0] flex items-center justify-center gap-1.5 transition"
                >
                  <Edit3 className="w-3.5 h-3.5 text-sky-400" />
                  <span>प्रोफाइल सम्पादन गर्नुहोस्</span>
                </button>
              )}
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
              {drawerNavItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.tab;

                if (item.tab === 'quiz') {
                  return (
                    <div key={item.tab} className="space-y-1">
                      <div className="flex items-center w-full">
                        <button
                          type="button"
                          id="mobile-drawer-sangathit-parent"
                          onClick={() => {
                            if (activeTab !== 'quiz') {
                              selectQuizSubCategory(quizSubCategory || 'sangathit');
                              setIsMobileSangathitOpen(true);
                              setIsMobileDrawerOpen(false);
                            } else {
                              setIsMobileSangathitOpen(!isMobileSangathitOpen);
                            }
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                            isActive 
                              ? 'bg-[#1E293B] text-white border border-sky-500/50 shadow-xs' 
                              : 'text-slate-300 hover:text-white hover:bg-[#1E293B]/70'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-1">
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                            <span className="truncate">१. संगठित संस्था एकीकृत प्रिटेस्ट</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span
                              role="button"
                              aria-label="टगल गर्नुहोस्"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileSangathitOpen(!isMobileSangathitOpen);
                              }}
                              className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSangathitOpen ? 'rotate-180' : ''}`} />
                            </span>
                          </div>
                        </button>
                      </div>

                      {/* Mobile Collapsible Sub-menu Structure */}
                      <div
                        id="mobile-sangathit-submenu"
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          isMobileSangathitOpen ? 'max-h-96 opacity-100 py-1 space-y-1' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        {/* 1. संगठित संस्था Pre-Test */}
                        <button
                          type="button"
                          id="mobile-submenu-sangathit"
                          onClick={() => {
                            selectQuizSubCategory('sangathit');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition cursor-pointer ${
                            isActive && quizSubCategory === 'sangathit'
                              ? 'bg-[#1E293B] text-sky-300 font-bold border-l-2 border-sky-400'
                              : 'text-slate-400 hover:text-white hover:bg-[#1E293B]/50 font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Building2 className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">१. संगठित संस्था Pre-Test (५० सेट)</p>
                            </div>
                          </div>
                        </button>

                        {/* 2. बैंकिङ्ग परीक्षा तयारी */}
                        <button
                          type="button"
                          id="mobile-submenu-banking"
                          onClick={() => {
                            selectQuizSubCategory('banking');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition cursor-pointer ${
                            isActive && quizSubCategory === 'banking'
                              ? 'bg-[#1E293B] text-sky-300 font-bold border-l-2 border-sky-400'
                              : 'text-slate-400 hover:text-white hover:bg-[#1E293B]/50 font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Landmark className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">२. बैंकिङ्ग सेवा (NRB, RBB, NBL, ADBL)</p>
                            </div>
                          </div>
                        </button>

                        {/* 3. निजामती/लोकसेवा तयारी */}
                        <button
                          type="button"
                          id="mobile-submenu-loksewa"
                          onClick={() => {
                            selectQuizSubCategory('loksewa');
                            setIsMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between py-2 px-3 pl-6 rounded-lg text-xs transition cursor-pointer ${
                            isActive && quizSubCategory === 'loksewa'
                              ? 'bg-[#1E293B] text-sky-300 font-bold border-l-2 border-sky-400'
                              : 'text-slate-400 hover:text-white hover:bg-[#1E293B]/50 font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Scale className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                            <div className="text-left truncate">
                              <p className="truncate font-semibold">३. निजामती/लोकसेवा तयारी</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.tab}
                    type="button"
                    onClick={() => handleDrawerNavigate(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isActive 
                        ? 'bg-[#1E293B] text-white border border-sky-500/50 shadow-xs' 
                        : 'text-slate-300 hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Admin Button inside Drawer */}
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    openAdminWithSecurityCheck();
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition mt-2 border border-red-200 dark:border-red-900/50"
                >
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>प्रशासक प्यानल (Admin PIN)</span>
                </button>
              )}
            </div>

            {/* Drawer Bottom Controls: Theme Switch, Language & Logout */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {language === 'ne' ? 'भाषा (Language)' : 'Language (भाषा)'}
                </span>
                <div className="flex items-center p-0.5 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setLanguage('ne')}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition ${
                      language === 'ne' ? 'bg-[#0B2046] text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🇳🇵 नेपाली
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition ${
                      language === 'en' ? 'bg-[#0B2046] text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {language === 'ne' ? 'डार्क मोड (Dark Mode)' : 'Dark Mode (रातको मोड)'}
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-2.5 px-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>खाता लगआउट गर्नुहोस्</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

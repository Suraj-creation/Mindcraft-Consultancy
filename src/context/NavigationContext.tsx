import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NavigationContextType {
  currentPath: string;
  queryParams: Record<string, string>;
  navigate: (to: string) => void;
  openConversationModal: (context?: string) => void;
  closeConversationModal: () => void;
  isModalOpen: boolean;
  modalContext: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  };

  const getInitialParams = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const entries: Record<string, string> = {};
      params.forEach((value, key) => {
        entries[key] = value;
      });
      return entries;
    }
    return {};
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [queryParams, setQueryParams] = useState<Record<string, string>>(getInitialParams);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      const params = new URLSearchParams(window.location.search);
      const entries: Record<string, string> = {};
      params.forEach((value, key) => {
        entries[key] = value;
      });
      setQueryParams(entries);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    const [path, search] = to.split('?');
    const newPath = path || '/';
    const newSearch = search ? `?${search}` : '';

    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `${newPath}${newSearch}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setCurrentPath(newPath);

    const params = new URLSearchParams(newSearch);
    const entries: Record<string, string> = {};
    params.forEach((value, key) => {
      entries[key] = value;
    });
    setQueryParams(entries);
  };

  const openConversationModal = (context: string = '') => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const closeConversationModal = () => {
    setIsModalOpen(false);
    setModalContext('');
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        queryParams,
        navigate,
        openConversationModal,
        closeConversationModal,
        isModalOpen,
        modalContext,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LayoutContextType {
  navHeight: number;
  setNavHeight: (height: number) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <LayoutContext.Provider value={{ navHeight, setNavHeight }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
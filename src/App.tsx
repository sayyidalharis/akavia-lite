import React from 'react';
import { LayoutProvider } from './components/LayoutContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Members from './components/Members';
import Workflow from './components/Workflow';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <LayoutProvider>
      <div className="font-['Poppins'] scroll-smooth overflow-hidden">
        <Navigation />
        <main>
          <Hero />
          <Portfolio />
          <Services />
          <Members />
          <Workflow />
          <Contacts />
        </main>
        <Footer />
      </div>
    </LayoutProvider>
  );
}

export default App;
import React, { Suspense, lazy } from 'react';
import { MotionConfig } from 'motion/react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Home is the LCP route and ships in the initial chunk. Every other route is
// split out — loading all fourteen eagerly put the bundle over the 110KB
// gzipped budget in specs/23, which is CI-blocking.
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo').then((m) => ({ default: m.WhatWeDo })));
const BusinessConsulting = lazy(() =>
  import('./pages/BusinessConsulting').then((m) => ({ default: m.BusinessConsulting }))
);
const MarketResearch = lazy(() =>
  import('./pages/MarketResearch').then((m) => ({ default: m.MarketResearch }))
);
const AITraining = lazy(() => import('./pages/AITraining').then((m) => ({ default: m.AITraining })));
const AIEnterpriseSolutions = lazy(() =>
  import('./pages/AIEnterpriseSolutions').then((m) => ({ default: m.AIEnterpriseSolutions }))
);
const Industries = lazy(() => import('./pages/Industries').then((m) => ({ default: m.Industries })));
const LifeSciences = lazy(() =>
  import('./pages/LifeSciences').then((m) => ({ default: m.LifeSciences }))
);
const WhereWeWork = lazy(() =>
  import('./pages/WhereWeWork').then((m) => ({ default: m.WhereWeWork }))
);
const HowWeWork = lazy(() => import('./pages/HowWeWork').then((m) => ({ default: m.HowWeWork })));
const Explore = lazy(() => import('./pages/Explore').then((m) => ({ default: m.Explore })));
const Insights = lazy(() => import('./pages/Insights').then((m) => ({ default: m.Insights })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

const PageRouter: React.FC = () => {
  const { currentPath } = useNavigation();

  const normalizedPath =
    currentPath.length > 1 && currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;

  switch (normalizedPath) {
    case '/':
      return <Home />;
    case '/about':
      return <About />;
    case '/what-we-do':
      return <WhatWeDo />;
    case '/what-we-do/business-consulting':
      return <BusinessConsulting />;
    case '/what-we-do/market-research':
      return <MarketResearch />;
    case '/what-we-do/ai-training':
      return <AITraining />;
    case '/what-we-do/ai-enterprise-solutions':
      return <AIEnterpriseSolutions />;
    case '/industries':
      return <Industries />;
    case '/industries/life-sciences':
      return <LifeSciences />;
    case '/where-we-work':
      return <WhereWeWork />;
    case '/how-we-work':
      return <HowWeWork />;
    case '/explore':
      return <Explore />;
    case '/insights':
      return <Insights />;
    case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
};

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <NavigationProvider>
        <div className="flex min-h-screen flex-col bg-[var(--color-ground)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-ground-deep)]">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-edge focus:bg-[var(--color-accent)] focus:px-5 focus:py-3 focus:text-body-sm focus:text-[var(--color-ground-deep)]"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main" className="flex-grow">
            {/* Reserves height so a chunk swap cannot shift layout (CLS budget 0.02). */}
            <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
              <PageRouter />
            </Suspense>
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </MotionConfig>
  );
}

export default App;

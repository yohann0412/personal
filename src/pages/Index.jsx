import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const recentEntries = [
    {
      title: 'On Digital Solitude',
      date: 'Dec 2024',
      slug: 'digital-solitude'
    },
    {
      title: 'Notes on Constraint',
      date: 'Nov 2024',
      slug: 'notes-on-constraint'
    },
    {
      title: 'The Attention Market',
      date: 'Oct 2024',
      slug: 'attention-market'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Main title and intro */}
      <div className="mb-16">
        <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-tight leading-tight">
          Thoughts in Progress
        </h1>
        <p className="text-xl text-stone leading-relaxed max-w-lg">
          A collection of notes, observations, and half-formed ideas about 
          technology, design, and the spaces between.
        </p>
      </div>

      {/* Recent writing preview */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <span className="mono text-slate">Recent Notes</span>
          <div className="flex-1 h-px bg-mist ml-6"></div>
        </div>
        
        <div className="space-y-6">
          {recentEntries.map((entry) => (
            <Link
              key={entry.slug}
              to={`/writing/${entry.slug}`}
              className="block group"
            >
              <div className="flex justify-between items-baseline border-b border-transparent group-hover:border-mist transition-colors duration-200 pb-3">
                <h3 className="text-xl font-serif group-hover:text-slate transition-colors duration-200">
                  {entry.title}
                </h3>
                <span className="mono text-ash text-xs ml-4 flex-shrink-0">
                  {entry.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-mist/50 flex justify-between items-center">
          <Link 
            to="/writing" 
            className="mono text-slate hover:text-ink transition-colors duration-200"
          >
            All Writing →
          </Link>
          <Link 
            to="/reflections" 
            className="mono text-slate hover:text-ink transition-colors duration-200"
          >
            Daily Reflections →
          </Link>
        </div>
      </div>

      {/* About preview */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <span className="mono text-slate">About</span>
          <div className="flex-1 h-px bg-mist ml-6"></div>
        </div>
        
        <p className="text-lg leading-relaxed text-stone mb-6">
          I'm someone who thinks deeply about the tools we build and the world 
          they shape. This space serves as an external hard drive for those thoughts.
        </p>
        
        <Link 
          to="/about" 
          className="mono text-slate hover:text-ink transition-colors duration-200"
        >
          More About Me →
        </Link>
      </div>
    </div>
  );
};

export default Index;

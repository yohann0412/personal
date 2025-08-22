import React from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const entries = [
    {
      title: 'On Digital Solitude',
      excerpt: 'In our hyperconnected world, we\'ve lost the art of being alone with our thoughts. Some notes on reclaiming internal space.',
      date: 'December 2024',
      slug: 'digital-solitude',
      tags: ['Philosophy', 'Technology']
    },
    {
      title: 'Notes on Constraint',
      excerpt: 'How limitations liberate creativity. Why the most innovative solutions emerge from the most restrictive parameters.',
      date: 'November 2024',
      slug: 'notes-on-constraint',
      tags: ['Design', 'Philosophy']
    },
    {
      title: 'The Attention Market',
      excerpt: 'Our attention has become the world\'s most valuable commodity. A brief exploration of its hidden costs.',
      date: 'October 2024',
      slug: 'attention-market',
      tags: ['Economics', 'Technology']
    },
    {
      title: 'Systems and Serendipity',
      excerpt: 'How rigid systems create space for unexpected discoveries. Notes from building platforms that surprise.',
      date: 'September 2024',
      slug: 'systems-serendipity',
      tags: ['Systems', 'Design']
    },
    {
      title: 'On Tools and Thinking',
      excerpt: 'Do we shape our tools, or do our tools shape us? Some observations on technological determinism.',
      date: 'August 2024',
      slug: 'tools-thinking',
      tags: ['Philosophy', 'Technology']
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl font-light mb-6 tracking-tight">
          Writing
        </h1>
        <p className="text-lg text-stone leading-relaxed">
          Thoughts, observations, and notes on the intersection of technology, 
          design, and human nature. Mostly unfinished, always evolving.
        </p>
      </div>

      <div className="space-y-12">
        {entries.map((entry) => (
          <article key={entry.slug} className="group">
            <Link to={`/writing/${entry.slug}`} className="block">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="mono text-ash text-xs">
                      {tag}
                    </span>
                  ))}
                  <span className="text-ash">·</span>
                  <span className="text-sm text-ash">{entry.date}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif mb-4 group-hover:text-slate transition-colors duration-200">
                {entry.title}
              </h2>
              
              <p className="text-stone leading-relaxed mb-4">
                {entry.excerpt}
              </p>
              
              <span className="mono text-slate group-hover:text-ink transition-colors duration-200 text-xs">
                Read More →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-mist/50 text-center">
        <p className="text-ash italic text-sm">
          More thoughts scattered across notebooks and voice memos. 
          Some may find their way here eventually.
        </p>
      </div>
    </div>
  );
};

export default Writing;

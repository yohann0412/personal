import React from 'react';
import { useParams, Link } from 'react-router-dom';

const WritingEntry = () => {
  const { slug } = useParams();
  
  // Mock content - in a real app, you'd fetch this based on the slug
  const entries = {
    'digital-solitude': {
      title: 'On Digital Solitude',
      date: 'December 2024',
      tags: ['Philosophy', 'Technology'],
      content: `
        <p>In the late hours when the notifications finally stop, there's a peculiar silence that settles over our digital devices. It's in these moments that I've begun to understand what we've lost in our rush toward connection.</p>

        <p>Solitude — real solitude — requires more than physical isolation. It demands a kind of mental spaciousness that feels increasingly rare. We've optimized away the gaps, filled every moment with stimulation, and in doing so, we've accidentally eliminated the conditions necessary for original thought.</p>

        <p>I've been experimenting with what I call "digital sabbaths" — deliberate periods of disconnection. Not as punishment or productivity hack, but as a practice of attention. The first few hours are uncomfortable, like phantom limb syndrome for the thumb-scroll reflex. But something interesting happens after that discomfort fades.</p>

        <p>Thoughts begin to connect in unexpected ways. Ideas that have been scattered across different apps, different contexts, start to find each other. It's as if the mind needs this unstructured time to perform its own kind of defragmentation.</p>

        <p>The irony isn't lost on me that I'm publishing these thoughts on the very platform I'm critiquing. But perhaps that's the point — we can't escape the systems we've built, only learn to use them more intentionally.</p>

        <p>The goal isn't to reject technology, but to create boundaries that preserve what makes us human: our capacity for deep thought, genuine reflection, and the kind of insights that only emerge in silence.</p>

        <p><em>This is still a work in progress. More questions than answers.</em></p>
      `
    },
    'notes-on-constraint': {
      title: 'Notes on Constraint',
      date: 'November 2024',
      tags: ['Design', 'Philosophy'],
      content: `
        <p>The best work emerges from constraint, not freedom.</p>

        <p>This is counterintuitive. We're told that creativity requires unlimited possibility, infinite resources, complete autonomy. But watch any master at work — the poet with fourteen lines, the architect with a narrow lot, the programmer with limited memory — and you'll see constraint as a creative catalyst.</p>

        <p>I've been thinking about this in the context of software design. The most elegant solutions I've encountered weren't born from abundance but from severe limitations. Twitter's 140 characters. Instagram's square format. Unix's "do one thing well" philosophy.</p>

        <p>Constraint forces clarity. When you can't do everything, you must choose what matters most. This act of choosing — of saying no to good ideas to make room for great ones — is perhaps the most essential skill in any creative discipline.</p>

        <p>But there's a deeper truth here. Constraint doesn't just improve our work; it shapes how we think. The haiku poet doesn't just write differently than the novelist — they see differently. The mobile designer doesn't just arrange pixels differently than their desktop counterpart — they conceive of interaction itself differently.</p>

        <p>The constraint becomes a lens, focusing attention and revealing possibilities that were invisible in the unlimited landscape.</p>

        <p>This is why I'm increasingly skeptical of "blank canvas" problems. Give me a brief with constraints, a budget with limits, a timeline with pressure. These aren't obstacles to overcome but tools to think with.</p>

        <p>The question isn't how to work within constraints, but how to choose the right ones.</p>
      `
    }
  };

  const entry = entries[slug];
  
  if (!entry) {
    return (
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl font-serif mb-4">Entry not found</h1>
        <Link to="/writing" className="mono text-slate hover:text-ink transition-colors duration-200">
          ← Back to Writing
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-8">
        <Link 
          to="/writing" 
          className="mono text-slate hover:text-ink transition-colors duration-200 mb-8 inline-block"
        >
          ← Writing
        </Link>
      </div>

      <article>
        <header className="mb-12">
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
          
          <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight leading-tight">
            {entry.title}
          </h1>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: entry.content }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.125rem'
          }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-mist/50">
        <div className="flex justify-between items-center">
          <Link 
            to="/writing" 
            className="mono text-slate hover:text-ink transition-colors duration-200"
          >
            ← All Writing
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-slate">
            <Link 
              to="/contact" 
              className="mono hover:text-ink transition-colors duration-200"
            >
              Discuss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingEntry;

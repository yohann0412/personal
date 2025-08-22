import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-light mb-8 tracking-tight">
          About
        </h1>
      </div>

      <div className="space-y-8 text-lg leading-loose">
        <p className="text-2xl font-serif font-light leading-relaxed text-stone">
          I'm someone who thinks deeply about the tools we build and the world they shape.
        </p>

        <p>
          My background spans technology, design, and the messy intersection between 
          human behavior and digital systems. I'm particularly interested in how 
          constraints shape creativity, how platforms influence thought, and why 
          some ideas stick while others fade.
        </p>

        <p>
          This space serves as an external hard drive for those thoughts — some 
          fully formed, others still evolving. I write to think, not to convince, 
          though I hope the process is useful to others navigating similar questions.
        </p>

        <p>
          When not writing, you'll find me reading (predominantly non-fiction), 
          building small experiments, or in long conversations about ideas that 
          probably matter less than we think they do.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-mist/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="mono text-slate mb-4">Currently</h3>
            <p className="text-stone leading-relaxed">
              Based in San Francisco, working on projects that sit at the 
              intersection of technology and human experience. Always interested 
              in collaborating with thoughtful people on meaningful work.
            </p>
          </div>

          <div>
            <h3 className="mono text-slate mb-4">Reading</h3>
            <p className="text-stone leading-relaxed">
              <em>The Power Broker</em> by Robert Caro, <em>Seeing Like a State</em> by 
              James C. Scott, and various papers on collective intelligence and 
              systems thinking.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-mist/50">
        <div className="flex items-center justify-between">
          <p className="text-stone">
            Want to discuss any of these ideas?
          </p>
          <Link 
            to="/contact" 
            className="mono text-slate hover:text-ink transition-colors duration-200"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

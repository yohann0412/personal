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
          I'm trying to figure out how to build things that matter.
        </p>

        <p>
          I study math and computer science at UCSD and spend a decent chunk of my time making stuff, currently 9-5 at 
          at TikTok and sometimes on my own. Right now, I'm chasing a hunch that small, boring 
          problems (like scheduling, paperwork, and admin in small clinics) are worth solving 
          with the right tools. I've been trying to find a problem worth solving and I think this is something worth considering. at least in the short run.
        </p>

        <p>
          This site isn't a portfolio. It's where I dump what I'm learning: cold calls that 
          flop, features that ship, and thoughts that stick (or don't).
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

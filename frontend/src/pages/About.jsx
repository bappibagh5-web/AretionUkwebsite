import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fafafa' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>About ARETION Global</h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Origins, evolution, and structure of our healthcare group
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>Who we are</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                ARETION Global is a UK-based holding company overseeing three operating entities across healthcare informatics, 
                publishing, and consulting.
              </p>
              <p>
                Our group provides oversight, governance, and strategic direction, ensuring consistent standards for quality, 
                responsible conduct, and disciplined execution across all operations. We work with public, private and voluntary 
                sector partners to strengthen health and care systems through practical, evidence-based solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fafafa' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>Our History</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>
                The concept for ARETION Global was born in 1986, rooted in a vision to provide specialist expertise across 
                critical sectors of healthcare and research. What began as a small team providing independent support to 
                healthcare organisations has evolved into a comprehensive group encompassing data and digital health, 
                specialist publishing and strategic consulting.
              </p>
              <p>
                In 2025, the group was strengthened through strategic merger and acquisition activity, including the 
                acquisition of the Journal of Medicine, Law and Public Health (JMLPH), reinforcing our commitment to 
                publishing excellence and research integrity.
              </p>
              <p>
                Throughout this evolution, we have retained our clear focus on strengthening health and care systems, 
                particularly where resources are constrained, and on building lasting partnerships with organisations 
                committed to improving patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>How we operate</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              ARETION Global follows a governance-led approach characterised by:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Clear accountability',
                  description: 'Defined roles, responsibilities and reporting structures across all entities'
                },
                {
                  title: 'Quality assurance',
                  description: 'Systematic review processes and quality controls embedded in all operations'
                },
                {
                  title: 'Responsible conduct',
                  description: 'Ethical practice, transparency and compliance with regulatory requirements'
                },
                {
                  title: 'Long-term value creation',
                  description: 'Strategic decisions prioritising sustainable growth and stakeholder benefit'
                }
              ].map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 border"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: 'var(--aretion-rust)' }}
                    />
                    <h3 className="font-normal text-lg" style={{ color: 'var(--aretion-navy)' }}>
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm pl-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 font-light" style={{ color: 'var(--text-light)' }}>
              Discover Our Companies
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Learn more about our three specialist entities and their areas of expertise
            </p>
            <Link 
              to="/group-companies"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium transition-all"
              style={{
                backgroundColor: 'white',
                color: 'var(--aretion-navy)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-tan)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'var(--aretion-navy)';
              }}
            >
              <span>View Group Companies</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { milestones } from '../mock/mockData';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>About</h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Origins, milestones, and group structure of ARETION & Company
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>Who we are</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              ARETION & Company is a UK-based holding company overseeing three operating entities across 
              informatics, publishing, and healthcare consulting.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Our group provides oversight, governance, and strategic direction, ensuring consistent 
              standards for quality, responsible conduct, and disciplined execution across all operations.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>Our History</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The concept for ARETION & Company was born in 1986, rooted in a vision to provide 
                specialist expertise across critical sectors of healthcare and research.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                In 2025, the group was strengthened through strategic merger and acquisition activity, 
                including the acquisition of the Journal of Medicine, Law and Public Health (JMLPH).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>How we operate</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              ARETION & Company follows a governance-led approach characterized by:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Clear accountability',
                'Quality assurance',
                'Responsible conduct',
                'Long-term value creation'
              ].map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 border"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--aretion-rust)' }}
                    />
                    <p className="font-medium" style={{ color: 'var(--aretion-navy)' }}>
                      {principle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center" style={{ color: 'var(--aretion-navy)' }}>Milestones</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-6 bg-white rounded-lg p-6 border"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div 
                    className="text-xl font-semibold px-4 py-2 rounded flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--aretion-cream)',
                      color: 'var(--aretion-navy)'
                    }}
                  >
                    {milestone.year}
                  </div>
                  <p className="text-lg pt-2" style={{ color: 'var(--text-secondary)' }}>
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-navy)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--text-light)' }}>
              Discover Our Companies
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Learn more about our three specialist entities and their areas of expertise
            </p>
            <Link 
              to="/group-companies"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium rounded transition-all"
              style={{
                backgroundColor: 'var(--aretion-tan)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-rust)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-tan)';
              }}
            >
              <span>View Group Companies</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const legalLinks = [
    { path: '/privacy', label: 'Privacy Notice' },
    { path: '/terms', label: 'Terms of Use' },
    { path: '/cookies', label: 'Cookie Policy' },
    { path: '/accessibility', label: 'Accessibility' },
    { path: '/modern-slavery', label: 'Modern Slavery Statement' },
    { path: '/sitemap', label: 'Sitemap' }
  ];

  return (
    <footer style={{ backgroundColor: 'var(--aretion-navy)', color: 'white', fontFamily: 'var(--font-body)' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'white', borderRadius: '4px', padding: '6px' }}>
                <img 
                  src="/images/logo.jpg" 
                  alt="ARETION & Company" 
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="text-xl mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              <span style={{ color: 'white' }}>ARETION</span>
              <span style={{ color: 'var(--aretion-tan)' }}> & </span>
              <span style={{ color: 'white' }}>Company</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'white', opacity: 0.9 }}>
              A UK-based group overseeing specialist entities across informatics, publishing, and healthcare consulting.
            </p>
            <div className="flex items-start space-x-2 text-sm">
              <Mail size={16} className="mt-1 flex-shrink-0" style={{ color: 'white' }} />
              <a href="mailto:contact@aretion.org" className="hover:opacity-80 transition-opacity" style={{ color: 'white' }}>
                contact@aretion.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--aretion-tan)', fontFamily: 'var(--font-body)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" style={{ color: 'white' }} className="hover:opacity-80 transition-opacity">About</Link></li>
              <li><Link to="/group-companies" style={{ color: 'white' }} className="hover:opacity-80 transition-opacity">Group Companies</Link></li>
              <li><Link to="/governance" style={{ color: 'white' }} className="hover:opacity-80 transition-opacity">Governance</Link></li>
              <li><Link to="/newsroom" style={{ color: 'white' }} className="hover:opacity-80 transition-opacity">Newsroom</Link></li>
              <li><Link to="/careers" style={{ color: 'white' }} className="hover:opacity-80 transition-opacity">Careers</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--aretion-tan)', fontFamily: 'var(--font-body)' }}>
              Offices
            </h3>
            <div className="space-y-4 text-sm" style={{ color: 'white' }}>
              <div>
                <div className="font-medium mb-1" style={{ color: 'white' }}>Registered Office</div>
                <div style={{ color: 'white', opacity: 0.9 }}>
                  71–75 Shelton Street<br />
                  Covent Garden<br />
                  London, WC2H 9JQ<br />
                  United Kingdom
                </div>
              </div>
              <div>
                <div className="font-medium mb-1" style={{ color: 'white' }}>Gulf Office</div>
                <div style={{ color: 'white', opacity: 0.9 }}>
                  Innovation Boulevard, Al Aqeeq<br />
                  King Abdullah Financial District<br />
                  Building 7229, 13519
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--aretion-tan)', fontFamily: 'var(--font-body)' }}>
              Company
            </h3>
            <div className="text-sm space-y-2" style={{ color: 'white' }}>
              <p>
                <strong style={{ color: 'white' }}>ARETION & Company</strong>
              </p>
              <p className="text-xs leading-relaxed pt-4" style={{ color: 'white', opacity: 0.8 }}>
                Information on this website is provided for general purposes only and does not constitute legal, medical, or other professional advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs" style={{ color: 'white', opacity: 0.8 }}>
              © {new Date().getFullYear()} ARETION & Company. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              {legalLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  style={{ color: 'white' }}
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Privacy Notice Content
const PrivacyContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 9 Feb 2026</p>
    
    <p>We, ARETION & Company (the brand used on aretion.co.uk), understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This Privacy Notice explains how we handle and protect personal data when we collect it through our website and through our externally facing activities, such as service enquiries, consultations, and communications.</p>
    
    <p>Depending on the nature of your relationship with ARETION, additional or different privacy information may apply to you (for example, if you receive services under separate terms, or where a client organisation controls personal data we process on its behalf).</p>

    <h3>1. Data controller</h3>
    <p>When ARETION & Company collects and processes personal data in accordance with this Privacy Notice, we do so as a data controller (or joint controller where applicable). This means we determine how and why your personal data is collected, used, protected, disclosed, and disposed of.</p>
    <p><strong>Company details:</strong></p>
    <ul>
      <li>Legal name: ARETION & Company</li>
      <li>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
      <li>Contact email: post@aretion.co.uk</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
    </ul>

    <h3>2. Who this notice applies to</h3>
    <p>This Privacy Notice applies to individuals who interact with us, including:</p>
    <ul>
      <li>Website visitors</li>
      <li>People who contact us with general enquiries, service enquiries, or partnership enquiries</li>
      <li>Representatives of clients, partners, suppliers, and collaborators</li>
      <li>Individuals who request or receive psychotherapy services (where offered)</li>
      <li>Job applicants (where we receive application materials directly)</li>
    </ul>

    <h3>3. How we collect personal data</h3>
    <p>We collect personal data:</p>
    <ul>
      <li>Directly from you (for example, when you email us or submit an enquiry)</li>
      <li>Automatically when you use our website (for example, through log files and similar technical records)</li>
      <li>From your organisation (for example, where you are a representative of a client, partner, or supplier)</li>
      <li>From third parties where appropriate (for example, professional advisers, or referees in recruitment), and only where permitted by law</li>
    </ul>

    <h3>4. Categories of personal data</h3>
    <p>Depending on how you interact with us, we may collect the following categories of personal data:</p>
    <p><strong>Enquiries and communications:</strong> name, email address, telephone number; organisation and role; the content of your message and our correspondence with you.</p>
    <p><strong>Service-related data:</strong> information needed to provide consulting services and manage engagements.</p>
    <p><strong>Website technical and usage data:</strong> IP address; date and time of access; pages requested; browser and operating system information.</p>
    <p><strong>Recruitment data:</strong> CV, cover letter, work and education history; interview notes; right-to-work information.</p>

    <h3>5. Why we use personal data</h3>
    <p>We process personal data for providing and securing the website, responding to enquiries, managing relationships, service delivery, recruitment, and legal compliance.</p>

    <h3>6. Your rights</h3>
    <p>Subject to conditions and exceptions under UK GDPR, you may have the right to:</p>
    <ul>
      <li>Request access to personal data we hold about you</li>
      <li>Request rectification</li>
      <li>Request erasure</li>
      <li>Request restriction of processing</li>
      <li>Object to processing</li>
      <li>Request data portability</li>
      <li>Withdraw consent where processing is based on consent</li>
    </ul>

    <h3>7. Contact and complaints</h3>
    <p><strong>Contact:</strong> post@aretion.co.uk (please include "Privacy" in the subject line).</p>
    <p><strong>Complaints:</strong> You have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner's Office (ICO). We encourage you to contact us first so we can try to resolve your concern.</p>
  </div>
);

// Terms of Use Content
const TermsContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 7 Feb 2026</p>
    
    <p>These Terms of Use apply to your access to and use of the ARETION & Company website at aretion.org (the Site). By using the Site, you agree to these Terms. If you do not agree, you must not use the Site.</p>

    <h3>1. About these Terms</h3>
    <p>These Terms apply to your use of the Site and all content and functionality made available through the Site (together, Site Content). Separate terms may apply to any services we provide to you.</p>

    <h3>2. About us and contact details</h3>
    <p>The Site is operated by ARETION & Company.</p>
    <ul>
      <li>Contact: post@aretion.co.uk</li>
      <li>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
    </ul>

    <h3>3. Copyright and intellectual property</h3>
    <p>All Site Content, including text, graphics, logos, icons, images, videos, and the selection and arrangement of the foregoing, is owned by or licensed to ARETION and is protected by applicable intellectual property laws.</p>
    <p>Except as expressly permitted by these Terms, you may not copy, reproduce, modify, reverse engineer, alter, publish, upload, post, transmit, distribute, or otherwise exploit any Site Content without our prior written permission.</p>

    <h3>4. Trademarks</h3>
    <p>The trademarks, service marks, designs, and logos displayed on the Site are the property of ARETION or its licensors. You must not use or reproduce any trademarks in any manner that is likely to cause confusion or imply endorsement by ARETION.</p>

    <h3>5. Use of Site Content</h3>
    <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Site and to download, display, and print one copy of Site Content solely for your internal, non-commercial use.</p>
    <p><strong>Restrictions:</strong> You may not access, search, collect, mine, or extract data from the Site by any means (automated or otherwise); "mirror" the Site Content; or use the Site Content to develop any AI tool or machine learning system.</p>

    <h3>6. User submissions</h3>
    <p>If the Site allows you to submit materials to us, you are responsible for ensuring they are lawful and do not infringe the rights of any third party.</p>

    <h3>7. Third-party websites</h3>
    <p>The Site may contain links to third-party websites or resources. We have no responsibility for third-party websites, which are governed by their own terms of use and privacy policies.</p>

    <h3>8. Privacy</h3>
    <p>For information about how we collect and use personal data, please read our Privacy Notice.</p>

    <h3>9. Disclaimers</h3>
    <p>The Site and Site Content are provided for general information only and should not be relied upon as professional advice. To the extent permitted by applicable law, all Site Content and functionality are provided "as is" and "as available", without warranty of any kind.</p>

    <h3>10. Limitation of liability</h3>
    <p>Subject to applicable law, ARETION will not be liable for any loss or damage arising out of or in connection with your use of, or inability to use, the Site, including indirect, incidental, consequential, or punitive losses.</p>

    <h3>11. Governing law</h3>
    <p>These Terms are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.</p>

    <h3>12. Contact</h3>
    <p>Questions about these Terms should be sent to: compliance@aretion.co.uk</p>
  </div>
);

// Code of Conduct Content
const CodeOfConductContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-sm text-gray-500 mb-4">Last updated: 10 Feb 2026</p>
    
    <p>This Code of Conduct explains the standards we expect from everyone who works for, or represents, ARETION & Company and its subsidiaries. It reflects our commitment to ethical conduct, professional integrity, patient-centred impact, and strict legal compliance in the UK and internationally.</p>

    <h3>1. Who this Code applies to</h3>
    <p>This Code applies to all individuals representing ARETION & Company and its subsidiaries, including employees, officers and directors, contractors, consultants, agency staff, partners, and agents.</p>

    <h3>2. Our values and ethical commitments</h3>
    <ul>
      <li><strong>Integrity:</strong> We act honestly, fairly, and transparently</li>
      <li><strong>Patient-centred impact:</strong> Our work supports patient safety, dignity, equity, and improved health outcomes</li>
      <li><strong>Independence and objectivity:</strong> We provide impartial, evidence-based guidance</li>
      <li><strong>Respect:</strong> We treat people with dignity and fairness</li>
      <li><strong>Accountability:</strong> We deliver high-quality work and welcome scrutiny</li>
      <li><strong>Sustainability:</strong> We consider long-term social and environmental impacts</li>
      <li><strong>Transparency:</strong> We communicate openly and correct errors promptly</li>
    </ul>

    <h3>3. Compliance with UK law</h3>
    <p>We comply with applicable laws and regulations, including UK GDPR, Bribery Act 2010, Equality Act 2010, Modern Slavery Act 2015, Health and Safety at Work Act 1974, and other applicable laws.</p>

    <h3>4. Anti-bribery and anti-corruption</h3>
    <p>ARETION has zero tolerance for bribery and corruption. We do not offer, request, accept, or facilitate improper advantages in any form. Facilitation payments are prohibited.</p>

    <h3>5. Conflicts of interest</h3>
    <p>Conflicts of interest must be disclosed and managed. You must disclose any actual or potential conflict during recruitment, before joining a project, and as soon as circumstances change.</p>

    <h3>6. Confidentiality and information security</h3>
    <p>We protect sensitive information, including patient data, client confidential information, proprietary research, and security credentials. We maintain and follow security controls to prevent unauthorised access.</p>

    <h3>7. Professional conduct</h3>
    <p>We commit to working within our competence, providing evidence-based analysis, prioritising patient safety, and being transparent about methodology and limitations.</p>

    <h3>8. Fair treatment, dignity, and inclusion</h3>
    <p>We are committed to equal opportunity, inclusive working practices, and a respectful environment free from discrimination, harassment, bullying, or victimisation.</p>

    <h3>9. Human rights and modern slavery</h3>
    <p>We respect human rights and are committed to preventing modern slavery and exploitation in our operations and supply chain.</p>

    <h3>10. Speaking up</h3>
    <p>We encourage people to raise concerns in good faith and we prohibit retaliation. Concerns can be raised with your manager, HR, or Compliance and Ethics at compliance@aretion.co.uk.</p>

    <h3>11. Questions</h3>
    <p>If you have questions about this Code of Conduct:</p>
    <ul>
      <li>Compliance and Ethics: compliance@aretion.co.uk</li>
      <li>Data Protection Officer: dpo@aretion.co.uk</li>
    </ul>
  </div>
);

// Modal Component
const LegalModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(26, 58, 82, 0.1)' }}
        >
          <h2 
            id="modal-title"
            className="text-xl font-semibold"
            style={{ color: 'var(--aretion-navy)', fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ focusRingColor: 'var(--aretion-navy)' }}
            aria-label="Close modal"
          >
            <X size={20} style={{ color: 'var(--aretion-navy)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        <div 
          className="px-6 py-4 border-t flex justify-end"
          style={{ borderColor: 'rgba(26, 58, 82, 0.1)' }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: 'var(--aretion-navy)', 
              color: 'white',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Export modal types and hook
export const useLegalModals = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openPrivacy = () => setActiveModal('privacy');
  const openTerms = () => setActiveModal('terms');
  const openCodeOfConduct = () => setActiveModal('code');
  const closeModal = () => setActiveModal(null);

  const LegalModals = () => (
    <>
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Notice"
      >
        <PrivacyContent />
      </LegalModal>
      
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Terms of Use"
      >
        <TermsContent />
      </LegalModal>
      
      <LegalModal 
        isOpen={activeModal === 'code'} 
        onClose={closeModal} 
        title="Code of Conduct"
      >
        <CodeOfConductContent />
      </LegalModal>
    </>
  );

  return { openPrivacy, openTerms, openCodeOfConduct, LegalModals };
};

export default LegalModal;

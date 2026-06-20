import { useTheme } from "../context/ThemeContext";

const Section = ({ title, children, isDark }) => (
  <section className="mb-10">
    <h2
      className={`text-xl font-bold mb-3 ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
    <div
      className={`space-y-3 text-sm leading-relaxed ${
        isDark ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {children}
    </div>
  </section>
);

export const PrivacyPolicy = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto rounded-2xl shadow-lg p-8 sm:p-12 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600 bg-clip-text text-transparent mb-2">
            Privacy Policy
          </h1>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Effective date: January 1, 2026 &nbsp;·&nbsp; Last updated: June 1, 2026
          </p>
        </div>

        <p className={`mb-10 text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          JobPortal (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains what information
          we collect, how we use it, and what rights you have in relation to it. Please read
          this policy carefully. If you disagree with its terms, please discontinue use of
          our platform.
        </p>

        <Section title="1. Information We Collect" isDark={isDark}>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Account information:</strong> When you register, we collect your name, email address, password (stored as a hashed value), and role (job seeker or employer).</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Profile information:</strong> Job seekers may optionally provide a bio, skills, work experience, education history, and a profile photo.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Job postings:</strong> Employers provide job titles, descriptions, salaries, locations, and company details when creating listings.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Application data:</strong> When you apply for a job, we store your application, including any attached resume or cover letter.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Usage data:</strong> We automatically collect information about how you interact with JobPortal — pages visited, search queries, and features used — to improve the platform.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Device &amp; log data:</strong> We may collect your IP address, browser type, operating system, and referring URLs for security and analytics purposes.</p>
        </Section>

        <Section title="2. How We Use Your Information" isDark={isDark}>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Create and manage your account</li>
            <li>Match job seekers with relevant job opportunities</li>
            <li>Allow employers to review applications and contact candidates</li>
            <li>Send transactional emails (e.g., application confirmations, password resets)</li>
            <li>Improve and personalise your experience on the platform</li>
            <li>Monitor for and prevent fraudulent or abusive activity</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong className={isDark ? "text-gray-100" : "text-gray-800"}>not</strong> sell, rent, or trade your personal data to third parties for marketing purposes.</p>
        </Section>

        <Section title="3. Information Sharing" isDark={isDark}>
          <p>We share your information only in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>With employers:</strong> When you apply to a job, your profile and application materials are shared with that employer.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Service providers:</strong> We engage trusted third-party vendors (e.g., hosting, email delivery) who process data on our behalf under strict confidentiality agreements.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Legal requirements:</strong> We may disclose information if required by law, court order, or government authority.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking Technologies" isDark={isDark}>
          <p>We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how users navigate the platform.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Essential cookies</strong> are required for the platform to function and cannot be disabled.</p>
          <p><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Analytics cookies</strong> help us understand usage patterns so we can make improvements. You can opt out via your browser settings or our cookie consent banner.</p>
          <p>We do not use cookies for cross-site advertising or sell cookie data to advertisers.</p>
        </Section>

        <Section title="5. Data Retention" isDark={isDark}>
          <p>We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal information within 30 days, except where retention is required by law or legitimate business interests (e.g., fraud prevention records).</p>
          <p>Anonymised, aggregated data may be retained indefinitely for analytics and platform improvement.</p>
        </Section>

        <Section title="6. Security" isDark={isDark}>
          <p>We implement industry-standard security measures including:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>HTTPS encryption for all data in transit</li>
            <li>Hashed storage of passwords (bcrypt)</li>
            <li>Role-based access controls to limit data exposure</li>
            <li>Regular security audits and vulnerability scans</li>
          </ul>
          <p>No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. Please notify us immediately at <span className="font-medium">security@jobportal.com</span> if you suspect a breach.</p>
        </Section>

        <Section title="7. Your Rights" isDark={isDark}>
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Rectification:</strong> Correct inaccurate or incomplete information.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Portability:</strong> Receive your data in a machine-readable format.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Restriction:</strong> Request that we limit how we process your data in certain circumstances.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <span className="font-medium">privacy@jobportal.com</span>. We will respond within 30 days.</p>
        </Section>

        <Section title="8. Children's Privacy" isDark={isDark}>
          <p>JobPortal is not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that a child under 16 has provided us with personal information, we will delete it promptly. If you believe we may have collected data from a child, please contact us.</p>
        </Section>

        <Section title="9. Third-Party Links" isDark={isDark}>
          <p>Our platform may contain links to third-party websites (e.g., employer websites, social media). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.</p>
        </Section>

        <Section title="10. Changes to This Policy" isDark={isDark}>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on this page and, where appropriate, by email. Your continued use of JobPortal after the effective date constitutes your acceptance of the revised policy.</p>
        </Section>

        <Section title="11. Contact Us" isDark={isDark}>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact our Data Privacy team:</p>
          <ul className="list-none space-y-1 pl-2">
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Email:</strong> privacy@jobportal.com</li>
            <li><strong className={isDark ? "text-gray-100" : "text-gray-800"}>Mailing address:</strong> JobPortal Inc., 123 Career Lane, San Francisco, CA 94105, USA</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

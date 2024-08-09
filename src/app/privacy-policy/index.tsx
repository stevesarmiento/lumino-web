import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Lumino</h1>
      <p className="mb-4">Last updated: [Current Date]</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>Lumino is a simple iOS app that turns your iPhone screen into a night light. We respect your privacy and are committed to protecting it.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Don't Collect</h2>
        <p>Lumino does not collect, store, or transmit any personal data. The app functions entirely on your device without accessing or processing any of your information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Third-Party Services</h2>
        <p>Lumino does not use any third-party services that might collect information about you.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Children's Privacy</h2>
        <p>Lumino is safe for use by children as it does not collect any personal information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: [Your Contact Information]</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Data Collection and Usage</h2>
            <p className="text-gray-600 mb-4">
              At Webbound, we collect and process personal data to provide our services effectively. 
              This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (website interaction, preferences)</li>
              <li>Business information for service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under GDPR and applicable data protection laws, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Cookie Policy</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to improve your browsing experience:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to ensure data security:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any privacy-related concerns or requests, please contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Email: support@webbound.in</p>
              <p className="text-gray-600">Phone: +91 94267 74932</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
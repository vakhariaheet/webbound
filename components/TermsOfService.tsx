import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              By using Webbound&apos;s services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in unauthorized access or use of our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Service Limitations</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide reliable services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Services are provided &quot;as is&quot; without warranties</li>
              <li>We may modify or discontinue services with notice</li>
              <li>Maintenance windows may affect service availability</li>
              <li>Response times may vary based on service level agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All intellectual property rights related to our services remain with Webbound:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Software and technology ownership</li>
              <li>Trademark and copyright protection</li>
              <li>License terms for provided solutions</li>
              <li>Restrictions on modification and redistribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              For paid services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Payment is required before service delivery</li>
              <li>Refunds are processed according to project terms</li>
              <li>Late payments may incur additional fees</li>
              <li>Pricing may be adjusted with notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              In case of disputes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Initial resolution through direct communication</li>
              <li>Mediation as a secondary step</li>
              <li>Arbitration as final resolution method</li>
              <li>Jurisdiction and venue specifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Webbound&apos;s liability is limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Direct damages up to service fees paid</li>
              <li>Exclusion of indirect or consequential damages</li>
              <li>Force majeure circumstances</li>
              <li>Statutory limitations where applicable</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
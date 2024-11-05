import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including your name,
              email address, date of birth, gender, photos, and other profile information.
              We also collect information about your usage of our services and your
              interactions with other users.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our
              services, including to:
            </p>
            <ul>
              <li>Create and manage your account</li>
              <li>Match you with potential partners</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information
              with third parties only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information.
              You can also object to processing and request data portability.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@datingapp.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
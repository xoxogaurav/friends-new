import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import Footer from '../../components/Footer';

const TermsConditions = () => {
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
            <ScrollText className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our services. By using our
              services, you represent and warrant that you have the right, authority, and
              capacity to enter into this agreement.
            </p>

            <h2>3. User Account</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
            </p>

            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Harass, abuse, or harm other users</li>
              <li>Create false identities or impersonate others</li>
              <li>Post inappropriate or illegal content</li>
              <li>Attempt to circumvent our security measures</li>
              <li>Use our services for commercial purposes</li>
            </ul>

            <h2>5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for
              violations of these terms or for any other reason.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              Our services are provided "as is" without any warranties, expressed or
              implied. We do not guarantee the accuracy of user information or the
              success of any relationships formed through our platform.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at:
              legal@datingapp.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default TermsConditions;
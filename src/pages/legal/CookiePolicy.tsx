import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Footer from '../../components/Footer';

const CookiePolicy = () => {
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
            <Cookie className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile
              device when you visit our website. They help us provide you with a better
              experience by remembering your preferences and login status.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>Authentication and security</li>
              <li>Preferences and settings</li>
              <li>Analytics and performance</li>
              <li>Personalized content and ads</li>
              <li>Session management</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They
              enable core functionality such as security, network management, and
              accessibility.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website
              by collecting and reporting information anonymously.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and
              personalization based on your preferences.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings
              preferences. However, limiting cookies may affect the functionality of
              our website.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              privacy@datingapp.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default CookiePolicy;
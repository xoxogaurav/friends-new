import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/Footer';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-4 flex items-center justify-between text-left"
      onClick={onToggle}
    >
      <span className="font-medium">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="pb-4 text-gray-600">{answer}</p>
    </motion.div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Creating an account is easy! Click the 'Sign Up' button, fill in your basic information, and follow the profile setup guide. You'll be ready to start matching in minutes."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes! We take your privacy seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent."
    },
    {
      question: "How does the matching system work?",
      answer: "Our matching system uses advanced algorithms to connect you with compatible partners based on your interests, preferences, and behavior on the platform."
    },
    {
      question: "Can I block someone?",
      answer: "Yes, you can block any user at any time. Simply visit their profile, click the menu icon, and select 'Block User'. They won't be able to contact you or see your profile."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, go to Settings > Subscription > Cancel Subscription. Your premium features will remain active until the end of your billing period."
    },
    {
      question: "What should I do if I feel unsafe?",
      answer: "Your safety is our priority. If you feel unsafe, immediately stop communication with the user, block them, and report them to our support team. In emergencies, contact local authorities."
    },
    {
      question: "Can I change my location?",
      answer: "Yes, you can change your location in your profile settings. This is useful if you're planning to move or want to meet people in different areas."
    },
    {
      question: "How do I verify my profile?",
      answer: "Profile verification is available through our photo verification system. Take a selfie following the prompted pose, and our team will verify your identity within 24 hours."
    }
  ];

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
            <HelpCircle className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-8 p-6 bg-pink-50 rounded-xl text-center">
            <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default FAQ;
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Eye, Lock, UserCheck, MapPin, Camera, MessageSquare } from 'lucide-react';
import Footer from '../../components/Footer';

const SafetyTip = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-pink-500" />
    </div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SafetyTips = () => {
  const tips = [
    {
      icon: Eye,
      title: "Meet in Public Places",
      description: "Always arrange first dates in well-lit, public locations with plenty of people around."
    },
    {
      icon: Lock,
      title: "Protect Personal Information",
      description: "Never share sensitive personal details like your home address or financial information."
    },
    {
      icon: UserCheck,
      title: "Trust Your Instincts",
      description: "If something feels off about a person or situation, don't hesitate to end contact."
    },
    {
      icon: MapPin,
      title: "Share Your Location",
      description: "Let a trusted friend know where you're going and who you're meeting."
    },
    {
      icon: Camera,
      title: "Verify Photos",
      description: "Be wary of profiles with only one photo or photos that look professionally taken."
    },
    {
      icon: MessageSquare,
      title: "Keep Communication on Platform",
      description: "Stay on our messaging system until you're completely comfortable moving to another platform."
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
            <Shield className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-bold">Safety Tips</h1>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-4 rounded-lg mb-6">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm">
                Your safety is our top priority. Please read and follow these guidelines
                for a secure dating experience.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <SafetyTip key={index} {...tip} />
            ))}
          </div>

          <div className="mt-8 p-6 bg-pink-50 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
            <p className="text-gray-600 mb-4">
              If you ever feel unsafe or need immediate assistance:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>Emergency Services: 911</li>
              <li>Dating App Support: +1 (555) 123-4567</li>
              <li>24/7 Safety Hotline: +1 (800) 555-0000</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default SafetyTips;
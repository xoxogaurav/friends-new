import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { profiles } from '../data/profiles';
import Footer from '../components/Footer';
import HeartAnimation from '../components/HeartAnimation';

const LandingPage = () => {
  const featuredProfiles = profiles.slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
    >
      {/* Fixed navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="text-xl font-semibold">DatingApp</span>
          </div>
          <Link
            to="/profile-selection"
            className="btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Now
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pt-24">
        {/* Featured profiles section */}
        <section className="mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Featured Profiles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Hero section */}
        <section className="text-center py-20 relative overflow-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Find Your Perfect Match
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join our community of singles looking for meaningful connections.
              Your perfect match could be just a click away.
            </p>
            <Link
              to="/profile-selection"
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              Start Your Journey
            </Link>
          </motion.div>
        </section>

        {/* Features section */}
        <section className="mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">
              Why Choose Our Dating Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold mb-2">Meaningful Connections</h3>
                <p className="text-gray-600">Find genuine relationships with like-minded individuals</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Smart Matching</h3>
                <p className="text-gray-600">Advanced algorithms to find your perfect match</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Your privacy and security are our top priority</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to action */}
        <section className="mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Find Love?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of happy couples who found their perfect match through our platform.
              Your love story is waiting to begin.
            </p>
            <Link
              to="/profile-selection"
              className="inline-flex items-center gap-2 bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Get Started
            </Link>
          </motion.div>
        </section>
      </div>

      <Footer />

      {/* Enhanced floating hearts animation */}
      <HeartAnimation />
    </motion.div>
  );
};

export default LandingPage;
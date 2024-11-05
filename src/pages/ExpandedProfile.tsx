import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MapPin, MessageCircle, Phone, GraduationCap, Briefcase, Languages, User2, Ruler, Sparkles } from 'lucide-react';
import { getProfileById } from '../data/profiles';

const ExpandedProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = getProfileById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);

  const handleContact = () => {
    navigate('/unavailable');
  };

  if (!profile) {
    navigate('/profiles');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-8"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image Gallery */}
          <div className="relative">
            <img
              src={profile.images[selectedImage]}
              alt={profile.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Thumbnail Gallery */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
              {profile.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-pink-500 scale-110' : 'border-white/50'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Profile Header */}
            <div className="absolute bottom-28 left-4 right-4 text-white">
              <h1 className="text-4xl font-bold mb-2">
                {profile.name}, {profile.age}
              </h1>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {profile.location}
                </div>
                <span className={`flex items-center gap-2 ${
                  profile.isOnline ? 'text-green-400' : 'text-gray-400'
                }`}>
                  • {profile.isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleContact}
                className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
              >
                <MessageCircle className="w-5 h-5" />
                Message
              </button>
              <button
                onClick={handleContact}
                className="flex-1 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>

            {/* Profile Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                  <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Basic Info</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Briefcase className="w-5 h-5 text-pink-500" />
                      <span>{profile.occupation}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <GraduationCap className="w-5 h-5 text-pink-500" />
                      <span>{profile.education}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Languages className="w-5 h-5 text-pink-500" />
                      <span>{profile.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Ruler className="w-5 h-5 text-pink-500" />
                      <span>{profile.stats.heightCm} cm</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Sparkles className="w-5 h-5 text-pink-500" />
                      <span>{profile.stats.zodiacSign} • {profile.stats.personality}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Lifestyle</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(profile.lifestyle).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                        <div className="font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                  <div className="flex flex-wrap gap-3">
                    {profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Looking For</h2>
                  <p className="text-gray-600 leading-relaxed">{profile.idealMatch}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedProfile;
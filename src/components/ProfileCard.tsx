import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Profile } from '../types/profile';

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  if (!profile) return null;

  const { id, name, age, location, images, isOnline, tagline } = profile;

  return (
    <Link to={`/profile/${id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="relative rounded-xl overflow-hidden shadow-lg bg-white"
      >
        <div className="aspect-[3/4] relative">
          {images?.[0] && (
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {name}, {age}
                </h3>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {location}
                </div>
              </div>
              <div className="flex items-center">
                <Circle
                  className={`w-3 h-3 mr-1 ${
                    isOnline ? 'fill-green-400 text-green-400' : 'fill-gray-400 text-gray-400'
                  }`}
                />
                <span className="text-white text-sm">
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            {tagline && (
              <p className="text-gray-200 text-sm mt-2 line-clamp-2">{tagline}</p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProfileCard;
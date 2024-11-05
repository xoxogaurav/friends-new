import { Profile } from '../types/profile';

const generateProfiles = (): Profile[] => {
  // Diverse collection of Unsplash portrait images
  const baseImageSets = [
    [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6',
      'https://images.unsplash.com/photo-1514315384763-ba401779410f'
    ],
    [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5',
      'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692',
      'https://images.unsplash.com/photo-1512310604669-443f26c35f52',
      'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7'
    ],
    [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1513721032312-6a18a42c8763',
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
      'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd',
      'https://images.unsplash.com/photo-1519275565142-d81952663e40'
    ],
    [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1534528334700-1b159b2e2ca1',
      'https://images.unsplash.com/photo-1534528741830-1b80dc6b4082',
      'https://images.unsplash.com/photo-1534528741267-011aead001b5',
      'https://images.unsplash.com/photo-1534528741521-53994a69daeb'
    ],
    [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      'https://images.unsplash.com/photo-1529680459049-bf0340fa0755',
      'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6',
      'https://images.unsplash.com/photo-1529626399832-af615f720427',
      'https://images.unsplash.com/photo-1529636444744-adffc9135a5e'
    ],
    [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    ],
    [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    ],
    [
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce'
    ],
    [
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496'
    ],
    [
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8',
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8',
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8',
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8',
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8'
    ]
  ];

  // Generate image variations with different parameters
  const generateImageSet = (baseUrls: string[]) => 
    baseUrls.map(url => `${url}?auto=format&fit=crop&w=800&q=80`);

  const detailedBios = [
    {
      name: "Sophie",
      bio: "As a passionate photographer and world traveler, I've captured moments across 25 countries and counting. My camera is my third eye, always seeking beauty in the ordinary. When I'm not behind the lens, you'll find me practicing yoga at sunrise or experimenting with new recipes in my kitchen. I believe in living mindfully and creating meaningful connections through shared experiences. My wanderlust has taught me to appreciate different cultures and perspectives, making me a more empathetic and open-minded person. I'm equally comfortable scaling mountains for the perfect shot or curling up with a good book and a cup of artisanal coffee.",
      occupation: "Professional Photographer",
      education: "BFA in Photography from NYU",
      languages: ["English", "French", "Spanish"],
      lifestyle: {
        diet: "Mostly vegetarian",
        exercise: "Yoga and hiking",
        drinking: "Social drinker",
        smoking: "Never",
        religion: "Spiritual but not religious"
      },
      idealMatch: "Looking for an adventurous soul who shares my passion for creativity and exploration. Someone who understands the beauty of spontaneous road trips and isn't afraid to get lost in new cities. My ideal partner would appreciate art and culture, engage in deep conversations about life and philosophy, and have their own passionate pursuits. They should be kind-hearted, emotionally intelligent, and value personal growth. Bonus points if you can teach me something new or challenge my perspectives in thoughtful ways."
    },
    {
      name: "Emma",
      bio: "Classical musician by training, tech entrepreneur by choice. I bridge the gap between art and innovation, running a successful music education startup while performing with the city symphony on weekends. My perfect day starts with Bach and ends with coding. Growing up in a multicultural family taught me to appreciate diversity in all its forms. I'm an advocate for women in tech and regularly mentor young musicians. My analytical mind loves solving complex problems, but my artistic soul needs creative expression. I believe in the power of music to connect people and transform lives.",
      occupation: "Tech Entrepreneur & Musician",
      education: "Master's in Computer Science from Stanford",
      languages: ["English", "Mandarin", "German"],
      lifestyle: {
        diet: "Flexitarian",
        exercise: "Swimming and pilates",
        drinking: "Occasionally",
        smoking: "Never",
        religion: "Buddhist"
      },
      idealMatch: "Seeking someone who appreciates both logic and creativity, understanding that life's greatest innovations often happen at the intersection of different fields. My ideal partner would be intellectually curious, emotionally available, and passionate about their own pursuits. They should value continuous learning, appreciate classical music (or at least be open to it), and share my vision of using technology for positive social impact. Looking for someone who can engage in both technical discussions and artistic appreciation."
    }
  ];

  const interests = [
    'Photography', 'Travel', 'Yoga', 'Cooking', 'Reading',
    'Music', 'Art', 'Technology', 'Fitness', 'Dancing',
    'Hiking', 'Writing', 'Fashion', 'Film', 'Theater',
    'Languages', 'Meditation', 'Wine Tasting', 'Surfing', 'Rock Climbing',
    'Painting', 'Pottery', 'Gardening', 'Architecture', 'Interior Design',
    'Astronomy', 'Psychology', 'Philosophy', 'History', 'Politics'
  ];

  const locations = [
    'New York, USA', 'London, UK', 'Paris, France', 'Tokyo, Japan',
    'Sydney, Australia', 'Berlin, Germany', 'Barcelona, Spain',
    'Amsterdam, Netherlands', 'Toronto, Canada', 'Singapore'
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const baseProfile = detailedBios[i % detailedBios.length];
    const imageSet = baseImageSets[i % baseImageSets.length];
    
    return {
      id: (i + 1).toString(),
      name: baseProfile.name,
      age: 25 + Math.floor(Math.random() * 10),
      location: locations[i % locations.length],
      images: generateImageSet(imageSet),
      isOnline: Math.random() > 0.5,
      tagline: "Life is an adventure waiting to be explored",
      bio: baseProfile.bio,
      occupation: baseProfile.occupation,
      education: baseProfile.education,
      languages: baseProfile.languages,
      lifestyle: baseProfile.lifestyle,
      interests: Array.from(
        { length: 5 + Math.floor(Math.random() * 5) },
        () => interests[Math.floor(Math.random() * interests.length)]
      ).filter((v, i, a) => a.indexOf(v) === i),
      idealMatch: baseProfile.idealMatch,
      stats: {
        heightCm: 160 + Math.floor(Math.random() * 25),
        zodiacSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor(Math.random() * 12)],
        personality: ['INFJ', 'ENFP', 'INTJ', 'ENFJ', 'INTP', 'ENTJ'][Math.floor(Math.random() * 6)]
      }
    };
  });
};

export const profiles = generateProfiles();

export const getProfileById = (id: string): Profile | undefined => {
  return profiles.find(profile => profile.id === id);
};
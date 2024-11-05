export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  images: string[];
  isOnline: boolean;
  tagline: string;
  bio: string;
  occupation: string;
  education: string;
  languages: string[];
  lifestyle: {
    diet: string;
    exercise: string;
    drinking: string;
    smoking: string;
    religion: string;
  };
  interests: string[];
  idealMatch: string;
  stats: {
    heightCm: number;
    zodiacSign: string;
    personality: string;
  };
}
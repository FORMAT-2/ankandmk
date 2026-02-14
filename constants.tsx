import React from 'react';
import { Heart, Stars, Music, Volume2, VolumeX, Sparkles, Send } from 'lucide-react';

export const COLORS = {
  primary: 'text-rose-600',
  secondary: 'text-pink-500',
  bgGradient: 'from-rose-50 to-pink-100',
  card: 'bg-white/80 backdrop-blur-sm shadow-xl border border-rose-100'
};

export const ICONS = {
  Heart: <Heart className="w-6 h-6" />,
  Stars: <Stars className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  VolumeOn: <Volume2 className="w-6 h-6" />,
  VolumeOff: <VolumeX className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Send: <Send className="w-5 h-5" />
};

/**
 * ALL APP TEXT CONTENT
 */
export const TEXT_CONTENT = {
  START: {
    title: "Hello, My Love!",
    body: "I've prepared a little journey for us. Play these small games to unlock some of my favorite moments of us.",
    button: "Start the Journey"
  },
  STAGE_1_MESSAGE: "You've caught my heart just like those falling ones! ❤️",
  STAGE_2_MESSAGE: "Matching these was easy, but matching with you was fate. 💖",
  STAGE_3_MESSAGE: "No matter how scrambled things get, my love for you is always clear. 💌",
  FINAL: {
    title: "Happy Valentine's Day!",
    body: "You've completed the journey, but our adventure together has only just begun. You are my greatest reward, my favorite memory, and the word that makes my life make sense.",
    replay: "Replay our story"
  }
};

/**
 * PHOTO GALLERY IMAGES
 * Using raw GitHub links to ensure they load correctly.
 */
export const GALLERY_IMAGES = {
  STAGE_1: [
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/ag.jpeg', 
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/iu.jpeg'
  ],
  STAGE_2: [
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/opp.jpeg', 
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/toget.jpeg'
  ],
  STAGE_3: [
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/tyr.jpeg', 
    'https://raw.githubusercontent.com/FORMAT-2/FORMAT-2/main/yu.jpeg'
  ],
};

/**
 * AUDIO TRACKS
 * Total 5 tracks as requested.
 */
export const AUDIO_TRACKS = {
  intro_final: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Start & End
  gameplay: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',    // All Games
  gallery_1: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',   // Gallery 1
  gallery_2: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',   // Gallery 2
  gallery_3: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'    // Gallery 3
};

/**
 * WORD SCRAMBLE SETS
 */
export const SCRAMBLED_WORD_SETS = [
  ["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"],
  ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"],
  ["DARLING", "SWEETIE", "BELOVED", "ADORE", "CHERISH"]
];

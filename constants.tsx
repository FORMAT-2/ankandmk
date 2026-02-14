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
    body: "I've prepared a little journey for us. Thoda late ho gaya sorry meri jaan.",
    button: "Start the Journey"
  },
  STAGE_1_MESSAGE: "You've caught my heart just like those falling ones, I am glad that we made this far, aur mai ye hi chahtha hu bs isi tarah ham ssari life ssath rahe! ❤️",
  STAGE_2_MESSAGE: "Matching these was easy, but matching with you was fate, Bby tumhe pata bhi nahi hai how much I love you. you are my everything my love, my sweetheart. 💖",
  STAGE_3_MESSAGE: "No matter how scrambled things get, my love for you is always clear, Bby Aaj I waana say you something, mujhe meri life me kuch nahi chahiye ab bs tum chahiye aur baaki mai jo bhi kar rha hu bs tumhare liye kr rha hu mujhe jo chahiye tha wo mil gya hai bby ❤️😍💕. 💌",
  FINAL: {
    title: "Happy Valentine's Day My swwetest love my bby , my world 🌍, my everthing, my sweetest reality 💕❤️!",
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
 */
export const AUDIO_TRACKS = {
  intro: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/HIGH%20ON%20YOU%20-%20Jind%20Universe%20%20Latest%20Punjabi%20Love%20Song%202024.mp3',      
  gameplay: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',   
  gallery: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/Kya%20Tujhe%20Ab%20Ye%20Dil%20Bataye%20Sanam%20Re%20128%20Kbps.mp3'     
};

/**
 * WORD SCRAMBLE SETS
 */
export const SCRAMBLED_WORD_SETS = [
  ["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"],
  ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"],
  ["DARLING", "SWEETIE", "BELOVED", "ADORE", "CHERISH"]
];

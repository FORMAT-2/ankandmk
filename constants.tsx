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
    body: "I've prepared a little journey for us. Thoda late ho gaya sorry meri jaan ❤️, This is for my only one my sweetest reality, my bby hope you like this, Enjoy.",
    button: "Start the Journey"
  },
  STAGE_1_MESSAGE: "You’ve caught my heart just like those falling stars that appear out of nowhere and leave the whole sky glowing. ✨ From the very beginning, there was something about you that felt different — something pure, something magical. I’m honestly so grateful that we’ve made it this far together. Every little moment, every smile, every conversation has brought us closer, and I wouldn’t trade this journey for anything.Aur main dil se yehi chahta hoon… bas isi tarah hum hamesha saath rahein. No matter what life brings, no matter how time changes, I want us to keep holding hands, supporting each other, and choosing each other every single day. ❤️ You’re not just someone I love… you’re someone I feel lucky to have.",
  STAGE_2_MESSAGE: "Matching these might have been easy… but matching with you? That was fate. That was destiny doing its most beautiful work. ✨ Out of all the people in this world, somehow our paths crossed — and that will always feel magical to me. Bby, tumhe shayad andaaza bhi nahi hai how much I love you. It’s more than words, more than expressions… it’s something I feel in every heartbeat.You are my everything — my love, my peace, my comfort, my biggest happiness. When I think about my future, I see you. When I pray, I thank God for you. When I smile, it’s because of you. 💖You’re not just my sweetheart… you’re my home.",
  STAGE_3_MESSAGE: "No matter how scrambled things get in life, no matter how confusing the world becomes… one thing is always clear — my love for you. It has never been confused, never been unsure, never been half. It’s always been full, pure, and completely yours. ❤️ Bby, aaj main tumhe ek baat dil se kehna chahta hoon… mujhe meri life mein ab kuch aur nahi chahiye. Mujhe sirf tum chahiye. Jo bhi main kar raha hoon, jo bhi sapne dekh raha hoon, jo bhi mehnat kar raha hoon — sab tumhare liye hai, humare liye hai. Mujhe jo chahiye tha, woh mujhe mil gaya hai… aur woh tum ho. ❤️😍💕You are my forever, my answered prayer, my greatest blessing. And no matter what happens, I will always choose you — today, tomorrow, and for the rest of my life. 💌",
  FINAL: {
    title: "Happy Valentine's Day!",
    body: "You've completed the journey, but our adventure together has only just begun. You are my greatest reward, my favorite memory, and the word that makes my life make sense. Thanks bby for having me. And always remember I am so proud of you my sweetheart ❤️",
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
  intro_final: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/HIGH%20ON%20YOU%20-%20Jind%20Universe%20%20Latest%20Punjabi%20Love%20Song%202024.mp3', // Start & End
  gameplay: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',    // All Games
  gallery_1: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/Kya%20Tujhe%20Ab%20Ye%20Dil%20Bataye%20Sanam%20Re%20128%20Kbps.mp3',   // Gallery 1
  gallery_2: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/Tera%20Hone%20Laga%20Hoon-(Mr-Jat.in).mp3',   // Gallery 2
  gallery_3: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/Tu%20Hi%20Meri%20Shab%20Hai%20Gangster%20128%20Kbps.mp3'    // Gallery 3
};

/**
 * WORD SCRAMBLE SETS
 */
export const SCRAMBLED_WORD_SETS = [
  ["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"],
  ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"],
  ["DARLING", "SWEETIE", "BELOVED", "ADORE", "CHERISH"]
];

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Music,
  Globe2,
  Link,
  Grid3x3,
  TreePine,
  Shapes,
  Search,
  Clock,
  Calculator,
  Square,
  Gamepad2,
  Moon,
  Sun,
} from 'lucide-react';

interface Game {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  darkColor: string;
}

const games: Game[] = [
  {
    title: 'Globe',
    description: 'Test your geography knowledge in this country guessing challenge',
    url: 'https://qw-globe-6.netlify.app',
    icon: <Globe2 className="w-8 h-8" />,
    color: 'bg-blue-500',
    darkColor: 'dark:bg-blue-600',
  },
  /*
  {
    title: 'Intro',
    description: 'How fast can you recognize these famous song intros?',
    url: 'https://qw-intros.netlify.app',
    icon: <Music className="w-8 h-8" />,
    color: 'bg-purple-500',
    darkColor: 'dark:bg-purple-600',
  },
  */
  {
    title: 'Chain',
    description: 'Create word chains by filling in the missing vowels',
    url: 'https://qw-chain.netlify.app',
    icon: <Link className="w-8 h-8" />,
    color: 'bg-green-500',
    darkColor: 'dark:bg-green-600',
  },
  {
    title: 'Atlas',
    description: 'Challenge friends in this multiplayer geography adventure',
    url: 'https://qw-atlas2.netlify.app',
    icon: <Globe2 className="w-8 h-8" />,
    color: 'bg-indigo-500',
    darkColor: 'dark:bg-indigo-600',
  },
  {
    title: 'Jumble',
    description: 'Race against others in this multiplayer word puzzle',
    url: 'https://qw-jumble.netlify.app',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-yellow-500',
    darkColor: 'dark:bg-yellow-600',
  },
  {
    title: 'Cross Tree',
    description: 'Strategic tree placement puzzle',
    url: 'https://qw-cross-tree-7.netlify.app',
    icon: <TreePine className="w-8 h-8" />,
    color: 'bg-emerald-500',
    darkColor: 'dark:bg-emerald-600',
  },
  {
    title: '5x5',
    description: 'Find five 5-letter words hidden in the grid',
    url: 'https://qw-five-by-five.netlify.app',
    icon: <Grid3x3 className="w-8 h-8" />,
    color: 'bg-rose-500',
    darkColor: 'dark:bg-rose-600',
  },
  {
    title: 'Shape',
    description: 'Solve the puzzle by fitting shapes in the available space',
    url: 'https://qw-shape-9.netlify.app',
    icon: <Shapes className="w-8 h-8" />,
    color: 'bg-orange-500',
    darkColor: 'dark:bg-orange-600',
  },
  {
    title: 'Truth',
    description: 'Can you find the one truth among the lies?',
    url: 'https://qw-truth-4.netlify.app',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-cyan-500',
    darkColor: 'dark:bg-cyan-600',
  },
  {
    title: 'Older',
    description: 'Test your knowledge of historical chronology',
    url: 'https://qw-older-10.netlify.app',
    icon: <Clock className="w-8 h-8" />,
    color: 'bg-pink-500',
    darkColor: 'dark:bg-pink-600',
  },
  {
    title: 'Chimp',
    description: 'Challenge your memory like a chimp',
    url: 'https://qw-chimp.netlify.app',
    icon: <Calculator className="w-8 h-8" />,
    color: 'bg-teal-500',
    darkColor: 'dark:bg-teal-600',
  },
  {
    title: 'Boxes',
    description: 'Classic dots and boxes game',
    url: 'https://qw-boxes-7.netlify.app',
    icon: <Square className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
   {
    title: 'Celeb',
    description: 'Name the celebrity',
    url: 'https://qw-secret-celeb.netlify.app',
    icon: <Square className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
     {
    title: 'First',
    description: 'Which came first',
    url: 'https://qw-first-5.netlify.app',
    icon: <Square className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
       {
    title: 'Search',
    description: 'Solve the wordsearch',
    url: 'https://qw-search-3.netlify.app',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
         {
    title: 'Equal',
    description: 'Get the biggest balancing equation',
    url: 'https://qw-equal-9.netlify.app',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
  {
    title: 'All Fours',
    description: 'Four in a line 3D',
    url: 'https://qw-all-fours-2.netlify.app',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
];

function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className={`${game.color} ${game.darkColor} p-6 flex justify-center items-center text-white`}>
        {game.icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">QuizWordz {game.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{game.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </a>
  );
}

function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gamepad2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              QuizWordz Games
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Challenge your mind with our collection of engaging puzzle and quiz games.
            Each game offers a unique way to test your knowledge and skills.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>More games coming soon!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

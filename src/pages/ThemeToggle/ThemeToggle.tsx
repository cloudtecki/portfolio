import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme } from 'core/entities/user/theme/theme.slice';
import { RootState, useAppDispatch, useAppSelector } from 'core/store';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state: RootState) => state.user.theme.isDark);

  return (
    <motion.button
      className='theme-toggle'
      onClick={() => dispatch(toggleTheme())}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label='Toggle theme'
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

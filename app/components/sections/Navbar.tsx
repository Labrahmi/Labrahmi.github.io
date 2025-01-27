"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, personalInfo } from "@/lib/data";

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 bg-black dark:bg-zinc-900 z-50 md:hidden flex flex-col min-h-screen"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-between px-6 py-4 border-b border-zinc-800"
          >
            <span className="text-lg font-medium text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 px-6 py-8 overflow-y-auto"
          >
            <nav className="space-y-6">
              {navigationLinks.map((link, index) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-medium text-white hover:text-zinc-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Actions */}
          <motion.div 
            variants={itemVariants}
            className="px-6 py-6 border-t border-zinc-800 space-y-4"
          >
            <div className="text-zinc-400 text-center mb-6">
              Have a project in mind or want to discuss opportunities? I'm just a message away
            </div>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="block w-full py-4 px-6 bg-zinc-800 text-white rounded-lg font-medium text-center hover:bg-zinc-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="tel:+1234567890"
              className="block w-full py-4 px-6 bg-white text-black rounded-lg font-medium text-center hover:bg-zinc-100 transition-colors"
            >
              Book a Call
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden block"
        aria-label="Toggle Menu"
      >
        <MenuIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
      </button>

      {/* Desktop Menu */}
      <div className="gap-8 hidden md:flex">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`max-w-7xl mx-auto flex items-center border border-transparent justify-between transition-all duration-500 ease-out ${
          isScrolled ? "py-4 px-6 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm" : ""
        }`}
      >
        <Link
          href="#top"
          className="text-lg font-medium text-zinc-800 dark:text-zinc-200 relative group"
        >
          <span className="relative">
            {personalInfo.name} 👨‍💻
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"
              initial={false}
              animate={{ width: "0%" }}
              whileHover={{ width: "100%" }}
            />
          </span>
        </Link>
        <Menu />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-white text-black rounded-full hidden md:block hover:bg-zinc-800 transition-colors"
        >
          Book a Call
        </motion.button>
      </motion.nav>
    </header>
  );
};

export default Navbar;

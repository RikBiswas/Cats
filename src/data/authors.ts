import { Author, Reviewer } from '../types';

export const AUTHORS: Record<string, Author> = {
  'elena-vance': {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Senior Feline Nutrition & Health Editor',
    bio: 'Elena has specialized in companion animal nutrition and welfare writing for over 9 years, collaborating closely with veterinary researchers to translate clinical studies for everyday cat guardians.',
    credentials: 'BSc Animal Science, Pet Nutrition Certified',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&h=256&q=80',
    articlesWritten: 48
  },
  'marcus-reed': {
    id: 'marcus-reed',
    name: 'Marcus Reed',
    role: 'Feline Behaviorist & Environmental Enrichment Lead',
    bio: 'A certified feline training and behavior consultant with a focus on indoor enrichment, multi-cat household conflicts, and positive-reinforcement clicker conditioning.',
    credentials: 'CCBC (Certified Cat Behavior Consultant)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80',
    articlesWritten: 35
  },
  'clara-dupont': {
    id: 'clara-dupont',
    name: 'Clara Dupont',
    role: 'Product Testing & Buying Guide Lead',
    bio: 'Clara oversees WhiskerWise hands-on gear evaluations. Over five years, she has rigorously tested over 300 litters, automated litter boxes, water fountains, and climbing trees with her three shelter rescues.',
    credentials: 'Senior Product Analyst, Feline Welfare Advocate',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
    articlesWritten: 42
  }
};

export const REVIEWERS: Record<string, Reviewer> = {
  'dr-sarah-miller': {
    id: 'dr-sarah-miller',
    name: 'Dr. Sarah Miller, DVM',
    credentials: 'DVM, Board Certified Feline Practice (ABVP)',
    title: 'Veterinary Advisory Board Lead',
    bio: 'Dr. Miller is a small animal veterinarian with 14 years in exclusive feline clinical practice. She reviews all medical, pharmacological, and physiological content on WhiskerWise.',
    avatar: 'https://images.unsplash.com/photo-1594824813589-354397775586?auto=format&fit=crop&w=256&h=256&q=80',
    verifiedStatus: 'Verified Veterinary Reviewer (Sample Profile)'
  },
  'dr-arun-patel': {
    id: 'dr-arun-patel',
    name: 'Dr. Arun Patel, BVSc, PhD',
    credentials: 'BVSc, PhD in Companion Animal Nutrition',
    title: 'Veterinary Nutrition Consultant',
    bio: 'Dr. Patel researches amino acid requirements, feline urinary tract biomechanics, and moisture balance in commercial feline diets.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80',
    verifiedStatus: 'Verified Nutrition Reviewer (Sample Profile)'
  }
};

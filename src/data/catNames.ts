import { CatName } from '../types';

export const CAT_NAMES: CatName[] = [
  // Cute & Playful
  { id: '1', name: 'Mochi', gender: 'unisex', style: 'cute', coats: ['White', 'Calico', 'Cream'], meaning: 'Sweet Japanese rice cake; soft and round', origin: 'Japanese', popularityRank: 4 },
  { id: '2', name: 'Boba', gender: 'unisex', style: 'cute', coats: ['Black', 'Brown', 'Tortoiseshell'], meaning: 'Playful tapioca pearl found in milk tea', origin: 'Taiwanese', popularityRank: 12 },
  { id: '3', name: 'Pippin', gender: 'male', style: 'cute', coats: ['Tabby', 'Ginger', 'Any'], meaning: 'Cheerful wanderer and beloved halfling hobbit', origin: 'English', popularityRank: 28 },
  { id: '4', name: 'Peanut', gender: 'unisex', style: 'cute', coats: ['Ginger', 'Buff', 'Cream'], meaning: 'Small, spunky, and nutty-sweet', origin: 'English', popularityRank: 18 },
  { id: '5', name: 'Button', gender: 'female', style: 'cute', coats: ['White', 'Tuxedo', 'Calico'], meaning: 'Cute as a button; dainty and tiny', origin: 'English', popularityRank: 34 },
  { id: '6', name: 'Pip', gender: 'unisex', style: 'cute', coats: ['Any'], meaning: 'Small seed; full of endless energetic potential', origin: 'English', popularityRank: 45 },
  { id: '7', name: 'Noodle', gender: 'unisex', style: 'cute', coats: ['Orange', 'Cream', 'Tabby'], meaning: 'Flexible, goofy, and endlessly twisty', origin: 'English', popularityRank: 15 },
  { id: '8', name: 'Tofu', gender: 'unisex', style: 'cute', coats: ['White', 'Cream'], meaning: 'Gentle, soft, and pure-hearted companion', origin: 'Asian', popularityRank: 22 },
  { id: '9', name: 'Bean', gender: 'unisex', style: 'cute', coats: ['Black', 'Tabby', 'Any'], meaning: 'Tribute to precious toe beans and pint-sized kittens', origin: 'English', popularityRank: 7 },
  { id: '10', name: 'Sprout', gender: 'unisex', style: 'cute', coats: ['Any'], meaning: 'Fresh growth, youthful optimism, and curiosity', origin: 'English', popularityRank: 52 },

  // Majestic & Royal
  { id: '11', name: 'Cleopatra', gender: 'female', style: 'majestic', coats: ['Black', 'Egyptian Mau', 'Tabby'], meaning: 'Glory of the father; regal queen of ancient Egypt', origin: 'Greek / Egyptian', popularityRank: 9 },
  { id: '12', name: 'Apollo', gender: 'male', style: 'majestic', coats: ['Ginger', 'Golden', 'Cream'], meaning: 'Greek god of the sun, light, music, and truth', origin: 'Greek', popularityRank: 11 },
  { id: '13', name: 'Freya', gender: 'female', style: 'majestic', coats: ['Grey', 'Silver', 'Norwegian Forest'], meaning: 'Norse goddess whose chariot was pulled by blue cats', origin: 'Norse', popularityRank: 8 },
  { id: '14', name: 'Zeus', gender: 'male', style: 'majestic', coats: ['White', 'Grey', 'Black'], meaning: 'Ruler of Mount Olympus; commanding and thunderous', origin: 'Greek', popularityRank: 16 },
  { id: '15', name: 'Athena', gender: 'female', style: 'majestic', coats: ['Grey', 'Calico', 'Any'], meaning: 'Goddess of wisdom, strategic courage, and craft', origin: 'Greek', popularityRank: 14 },
  { id: '16', name: 'Sterling', gender: 'male', style: 'majestic', coats: ['Grey', 'Silver', 'Russian Blue'], meaning: 'High quality and pure silver luster', origin: 'English', popularityRank: 39 },
  { id: '17', name: 'Duchess', gender: 'female', style: 'majestic', coats: ['White', 'Persian', 'Fluffy'], meaning: 'Aristocratic title from Aristocats; refined elegance', origin: 'French / Latin', popularityRank: 25 },
  { id: '18', name: 'Ramses', gender: 'male', style: 'majestic', coats: ['Sphynx', 'Tabby', 'Gold'], meaning: 'Born of the sun god Ra; pharaoh of ancient empires', origin: 'Egyptian', popularityRank: 64 },
  { id: '19', name: 'Odin', gender: 'male', style: 'majestic', coats: ['One-eyed', 'Grey', 'Maine Coon'], meaning: 'Allfather of Norse mythology; guardian of ancient wisdom', origin: 'Norse', popularityRank: 31 },
  { id: '20', name: 'Sultan', gender: 'male', style: 'majestic', coats: ['Orange', 'Seal Point', 'Persian'], meaning: 'Ruler, sovereign, and distinguished monarch', origin: 'Arabic', popularityRank: 78 },

  // Food & Cozy Culinary
  { id: '21', name: 'Cinnamon', gender: 'unisex', style: 'food', coats: ['Orange', 'Brown', 'Tortoiseshell'], meaning: 'Warm, fragrant spice with an affectionate kick', origin: 'English', popularityRank: 21 },
  { id: '22', name: 'Biscuit', gender: 'unisex', style: 'food', coats: ['Buff', 'Ginger', 'Cream'], meaning: 'Tribute to happy kneading paws making fresh dough', origin: 'French', popularityRank: 5 },
  { id: '23', name: 'Matcha', gender: 'unisex', style: 'food', coats: ['Green-eyed', 'Tortie', 'Calico'], meaning: 'Fine green tea powder; calm yet energizing', origin: 'Japanese', popularityRank: 30 },
  { id: '24', name: 'Waffles', gender: 'unisex', style: 'food', coats: ['Tabby', 'Orange', 'Calico'], meaning: 'Crisp on the outside, warm and sweet within', origin: 'Dutch', popularityRank: 27 },
  { id: '25', name: 'Chai', gender: 'unisex', style: 'food', coats: ['Tortie', 'Seal Point', 'Brown'], meaning: 'Spiced aromatic tea with cardamom and cloves', origin: 'Hindi', popularityRank: 23 },
  { id: '26', name: 'Cannoli', gender: 'male', style: 'food', coats: ['Tuxedo', 'Calico', 'Cream'], meaning: 'Sweet Italian pastry stuffed with ricotta cream', origin: 'Italian', popularityRank: 58 },
  { id: '27', name: 'Pepper', gender: 'unisex', style: 'food', coats: ['Black', 'Grey', 'Tuxedo'], meaning: 'Zesty, spirited spice with endless curiosity', origin: 'English', popularityRank: 10 },
  { id: '28', name: 'Nutmeg', gender: 'female', style: 'food', coats: ['Tortoiseshell', 'Calico', 'Orange'], meaning: 'Rich autumn spice with complex earthy warmth', origin: 'English', popularityRank: 44 },
  { id: '29', name: 'Pretzel', gender: 'unisex', style: 'food', coats: ['Tabby', 'Orange', 'Brown'], meaning: 'Curled up in twisted acrobatic sleeping knots', origin: 'German', popularityRank: 60 },
  { id: '30', name: 'Pecan', gender: 'unisex', style: 'food', coats: ['Brown', 'Tabby', 'Calico'], meaning: 'Sweet southern tree nut with rich pie aroma', origin: 'Algonquian', popularityRank: 72 },

  // Nature & Botany
  { id: '31', name: 'Willow', gender: 'female', style: 'nature', coats: ['Grey', 'Silver', 'Calico'], meaning: 'Graceful, flexible tree that bends without breaking', origin: 'English', popularityRank: 6 },
  { id: '32', name: 'Cedar', gender: 'male', style: 'nature', coats: ['Brown', 'Orange', 'Tabby'], meaning: 'Aromatic evergreen tree representing resilience', origin: 'Latin', popularityRank: 49 },
  { id: '33', name: 'Juniper', gender: 'female', style: 'nature', coats: ['Blue', 'Grey', 'Any'], meaning: 'Evergreen shrub with frosty berry blue accents', origin: 'Latin', popularityRank: 17 },
  { id: '34', name: 'Maple', gender: 'female', style: 'nature', coats: ['Orange', 'Red', 'Calico'], meaning: 'Vibrant autumn leaf with golden sap sweetness', origin: 'English', popularityRank: 19 },
  { id: '35', name: 'River', gender: 'unisex', style: 'nature', coats: ['Silver', 'Grey', 'Blue'], meaning: 'Fluid, tranquil current flowing through stones', origin: 'English', popularityRank: 33 },
  { id: '36', name: 'Bramble', gender: 'male', style: 'nature', coats: ['Tabby', 'Brown', 'Tortie'], meaning: 'Thorny wild berry thicket; rugged survivor', origin: 'English', popularityRank: 81 },
  { id: '37', name: 'Sage', gender: 'unisex', style: 'nature', coats: ['Grey', 'Green-eyed', 'Silver'], meaning: 'Healing herb with calming cleansing aroma', origin: 'Latin', popularityRank: 26 },
  { id: '38', name: 'Ember', gender: 'female', style: 'nature', coats: ['Orange', 'Tortoiseshell', 'Calico'], meaning: 'Glowing coal that radiates sustained steady warmth', origin: 'English', popularityRank: 29 },
  { id: '39', name: 'Clover', gender: 'female', style: 'nature', coats: ['Calico', 'Tabby', 'White'], meaning: 'Four-leaf charm bringing good fortune and spring lushness', origin: 'English', popularityRank: 37 },
  { id: '40', name: 'Orion', gender: 'male', style: 'nature', coats: ['Black', 'Tuxedo', 'Midnight'], meaning: 'The great celestial starry constellation of the hunter', origin: 'Greek', popularityRank: 32 },

  // Literary & Historical
  { id: '41', name: 'Gatsby', gender: 'male', style: 'literary', coats: ['Tuxedo', 'White', 'Black'], meaning: 'Extravagant, romantic host from F. Scott Fitzgerald', origin: 'Literary', popularityRank: 41 },
  { id: '42', name: 'Ophelia', gender: 'female', style: 'literary', coats: ['White', 'Silver', 'Calico'], meaning: 'Shakespearean heroine adorned with wildflower garlands', origin: 'Greek / Literary', popularityRank: 38 },
  { id: '43', name: 'Sherlock', gender: 'male', style: 'literary', coats: ['Tabby', 'Black', 'Grey'], meaning: 'Analytical detective who notices microscopic clues', origin: 'Literary', popularityRank: 50 },
  { id: '44', name: 'Poe', gender: 'male', style: 'literary', coats: ['Black', 'Midnight'], meaning: 'Edgar Allan Poe, author of gothic mystery The Black Cat', origin: 'Literary', popularityRank: 47 },
  { id: '45', name: 'Atticus', gender: 'male', style: 'literary', coats: ['Grey', 'Tuxedo', 'Brown'], meaning: 'Moral compass and integrity from To Kill a Mockingbird', origin: 'Latin / Literary', popularityRank: 53 },
  { id: '46', name: 'Bronte', gender: 'female', style: 'literary', coats: ['Tortie', 'Calico', 'Tabby'], meaning: 'Tribute to literary sisters Charlotte and Emily Bronte', origin: 'Literary', popularityRank: 86 },
  { id: '47', name: 'Huxley', gender: 'male', style: 'literary', coats: ['Tuxedo', 'Grey', 'Any'], meaning: 'Inquisitive philosopher and author Aldous Huxley', origin: 'English', popularityRank: 67 },
  { id: '48', name: 'Austen', gender: 'female', style: 'literary', coats: ['Calico', 'Cream', 'Tabby'], meaning: 'Sharp wit and social brilliance of Jane Austen', origin: 'English / Literary', popularityRank: 62 },

  // Vintage & Classic
  { id: '49', name: 'Jasper', gender: 'male', style: 'vintage', coats: ['Tabby', 'Orange', 'Calico'], meaning: 'Bringer of treasure; spotted semiprecious stone', origin: 'Persian', popularityRank: 13 },
  { id: '50', name: 'Penelope', gender: 'female', style: 'vintage', coats: ['Calico', 'Tortie', 'Any'], meaning: 'Loyal weaver and patient heroine from Odyssey', origin: 'Greek', popularityRank: 20 },
  { id: '51', name: 'Winston', gender: 'male', style: 'vintage', coats: ['British Shorthair', 'Grey', 'Tuxedo'], meaning: 'Joyful stone; dignified and stalwart gentleman', origin: 'English', popularityRank: 24 },
  { id: '52', name: 'Hazel', gender: 'female', style: 'vintage', coats: ['Tortie', 'Tabby', 'Calico'], meaning: 'Warm golden-brown hazelnut tree with amber eyes', origin: 'English', popularityRank: 15 },
  { id: '53', name: 'Felix', gender: 'male', style: 'vintage', coats: ['Tuxedo', 'Black & White', 'Any'], meaning: 'Happy and fortunate; classic iconic cartoon cat', origin: 'Latin', popularityRank: 2 },
  { id: '54', name: 'Milo', gender: 'male', style: 'vintage', coats: ['Orange', 'Tabby', 'Ginger'], meaning: 'Beloved soldier; brave and affectionate companion', origin: 'German / Latin', popularityRank: 3 },
  { id: '55', name: 'Luna', gender: 'female', style: 'vintage', coats: ['Black', 'Silver', 'White'], meaning: 'The shining moon; mystical, serene, and radiant', origin: 'Latin', popularityRank: 1 },
  { id: '56', name: 'Oliver', gender: 'male', style: 'vintage', coats: ['Orange', 'Tabby', 'Any'], meaning: 'The olive tree; symbol of peace and gentle affection', origin: 'Latin', popularityRank: 1 },
  { id: '57', name: 'Simba', gender: 'male', style: 'majestic', coats: ['Orange', 'Golden', 'Lion-like'], meaning: 'Lion in Swahili; courageous monarch of the pride', origin: 'Swahili', popularityRank: 5 },
  { id: '58', name: 'Bella', gender: 'female', style: 'cute', coats: ['White', 'Calico', 'Ragdoll'], meaning: 'Beautiful; graceful and adored family member', origin: 'Italian', popularityRank: 3 }
];

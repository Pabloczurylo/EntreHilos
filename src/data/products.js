// src/data/products.js

// CORREGIDO: Importar todas las imágenes con las extensiones correctas (.jpg)
import TamakiAmajiki from '../assets/TamakiAmajiki.jpg';
import Rapunzel from '../assets/Rapunzel.jpg';
import Osito from '../assets/Osito.jpg';
import FloresJarron from '../assets/FloresJarron.jpg';
import HunterxHunter from '../assets/HunterxHunter.jpg';
import KoroSensei from '../assets/KoroSensei.jpg';
import PerroSalchicha from '../assets/PerroSalchicha.jpg';
import Matecitos from '../assets/Matecitos.jpg'; // AGREGADO: Nueva imagen

export const products = [
  {
    id: 1,
    name: 'Tamaki Amajiki Amigurumi',
    price: 35.00,
    oldPrice: null,
    image: TamakiAmajiki,
    bgColor: 'blue',
    category: 'amigurumis',
    description: 'Personaje de My Hero Academia tejido a mano con gran detalle.'
  },
  {
    id: 2,
    name: 'Rapunzel Amigurumi',
    price: 32.00,
    oldPrice: 38.00,
    image: Rapunzel,
    bgColor: 'pink',
    category: 'amigurumis',
    description: 'Princesa Rapunzel con su característico cabello largo dorado.'
  },
  {
    id: 3,
    name: 'Osito de Peluche',
    price: 28.00,
    oldPrice: null,
    image: Osito,
    bgColor: 'cream',
    category: 'amigurumis',
    description: 'Tierno osito tejido perfecto para regalar o decorar.'
  },
  {
    id: 4,
    name: 'Flores en Jarrón Decorativo',
    price: 24.50,
    oldPrice: null,
    image: FloresJarron,
    bgColor: 'green',
    category: 'decoracion',
    description: 'Hermosas flores tejidas en jarrón, perfectas para decoración.'
  },
  {
    id: 5,
    name: 'Hunter x Hunter Amigurumi',
    price: 36.00,
    oldPrice: null,
    image: HunterxHunter,
    bgColor: 'blue',
    category: 'amigurumis',
    description: 'Personaje del anime Hunter x Hunter tejido con amor.'
  },
  {
    id: 6,
    name: 'Koro Sensei Amigurumi',
    price: 33.00,
    oldPrice: 40.00,
    image: KoroSensei,
    bgColor: 'cream',
    category: 'amigurumis',
    description: 'El famoso profesor de Assassination Classroom en versión amigurumi.'
  },
  {
    id: 7,
    name: 'Perro Salchicha Amigurumi',
    price: 29.00,
    oldPrice: null,
    image: PerroSalchicha,
    bgColor: 'pink',
    category: 'amigurumis',
    description: 'Adorable perro salchicha tejido con materiales de alta calidad.'
  },
  {
    id: 8,
    name: 'Set de Matecitos Decorativos',
    price: 22.00,
    oldPrice: null,
    image: Matecitos,
    bgColor: 'green',
    category: 'decoracion',
    description: 'Hermosos matecitos tejidos, ideales para decorar tu hogar.'
  }
];

// Función helper para obtener productos por categoría
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Función helper para obtener un producto por ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Función helper para obtener productos en oferta
export const getProductsOnSale = () => {
  return products.filter(product => product.oldPrice !== null);
};
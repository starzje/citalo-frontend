/**
 * Represents the menu items for the website. Each object in the array contains the properties for a single menu item.
 * @const {Object[]} MENI - An array of menu items
 * @property {number} id - The unique identifier for the menu item
 * @property {string} naslov - The title of the menu item
 * @property {string} putanja - The URL path of the menu item
 */
export const MENI = [
  {
    id: 1,
    naslov: 'Naslovnica',
    putanja: '/',
  },
  {
    id: 2,
    naslov: 'O meni',
    putanja: '/o-meni',
  },
  {
    id: 3,
    naslov: 'Recenzije',
    putanja: '/recenzije',
  },
  {
    id: 4,
    naslov: 'Svaštara',
    putanja: '/svastara',
  },
  {
    id: 5,
    naslov: 'Kontakt',
    putanja: '/kontakt',
  },
];

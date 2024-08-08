import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
        "id": 1,
        "slug": "asterix",
        "name": "Astérix le Gaulois",
        "price": 29.99,
        "image": "../assets/products/asterix.jpg",
        "description": "Astérix, le plus célèbre des Gaulois, prêt pour une nouvelle aventure. Fabriqué à la main avec des détails soignés.",
        "detail": "Hauteur: 15 cm, Matériaux: Résine et peinture acrylique, Poids: 200g."
    },
    {
        "id": 2,
        "slug": "obelix",
        "name": "Obélix le Gaulois",
        "price": 34.99,
        "image": "../assets/products/obelix.jpg",
        "description": "Obélix, inséparable compagnon d'Astérix, toujours prêt à se lancer dans une bataille avec son menhir.",
        "detail": "Hauteur: 18 cm, Matériaux: Résine solide, Poids: 300g."
    },
    {
        "id": 3,
        "slug": "idefix",
        "name": "Idéfix",
        "price": 14.99,
        "image": "../assets/products/idefix.jpg",
        "description": "Idéfix, le fidèle compagnon canin d'Astérix et Obélix, réalisé en matériaux écologiques.",
        "detail": "Hauteur: 5 cm, Matériaux: Plastique recyclé, Poids: 50g."
    },
    {
        "id": 4,
        "slug": "panoramix",
        "name": "Panoramix le Druide",
        "price": 24.99,
        "image": "../assets/products/panoramix.jpg",
        "description": "Panoramix, le druide sage de la tribu, avec sa potion magique qui donne de la force surhumaine.",
        "detail": "Hauteur: 16 cm, Matériaux: Résine peinte, Accessoire: chaudron."
    },
    {
        "id": 5,
        "slug": "assurancetourix",
        "name": "Assurancetourix le Barde",
        "price": 19.99,
        "image": "../assets/products/assurancetourix.jpg",
        "description": "Assurancetourix, le barde dont les chants enchantent (ou dérangent) le village, avec sa lyre emblématique.",
        "detail": "Hauteur: 15 cm, Matériaux: Vinyle, Accessoire: Lyre en plastique."
    },
    {
        "id": 6,
        "slug": "abraracourcix",
        "name": "Abraracourcix le Chef",
        "price": 27.99,
        "image": "../assets/products/abraracourcix.jpg",
        "description": "Abraracourcix, le chef vaillant du village, toujours prêt à défendre son peuple contre les Romains.",
        "detail": "Hauteur: 17 cm, Matériaux: Résine, Poids: 250g, Accessoire: Bouclier."
    },
    {
        "id": 7,
        "slug": "bonemine",
        "name": "Bonemine",
        "price": 22.99,
        "image": "../assets/products/bonemine.jpg",
        "description": "Bonemine, la femme du chef, connue pour son caractère fort et son soutien indéfectible à son mari.",
        "detail": "Hauteur: 15 cm, Matériaux: Céramique, Poids: 180g."
    },
    {
        "id": 8,
        "slug": "cetautomatix",
        "name": "Cétautomatix le Forgeron",
        "price": 18.99,
        "image": "../assets/products/cetautomatix.webp",
        "description": "Cétautomatix, le forgeron du village, célèbre pour ses disputes avec le poissonnier.",
        "detail": "Hauteur: 16 cm, Matériaux: Résine, Accessoire: Marteau de forgeron."
    },
    {
        "id": 9,
        "slug": "ordralfabetix",
        "name": "Ordralfabétix le Poissonnier",
        "price": 18.99,
        "image": "../assets/products/ordralfabetix.jpg",
        "description": "Ordralfabétix, le poissonnier qui fournit le village en poissons frais (ou presque).",
        "detail": "Hauteur: 15 cm, Matériaux: Plastique, Accessoire: Panier de poissons."
    },
    {
        "id": 10,
        "slug": "falbala",
        "name": "Falbala",
        "price": 25.99,
        "image": "../assets/products/falbala.jpg",
        "description": "Falbala, la belle et gracieuse Gauloise qui fait tourner bien des têtes au village.",
        "detail": "Hauteur: 15 cm, Matériaux: PVC, Poids: 170g."
    },
    {
        "id": 11,
        "slug": "cesar",
        "name": "Jules César",
        "price": 30.99,
        "image": "../assets/products/cesar.jpg",
        "description": "Jules César, l'empereur romain, toujours en quête de conquérir la Gaule récalcitrante.",
        "detail": "Hauteur: 17 cm, Matériaux: Bronze peint, Poids: 300g."
    },
    {
        "id": 12,
        "slug": "caius",
        "name": "Caius Bonus",
        "price": 23.99,
        "image": "../assets/products/caius_bonus.jpg",
        "description": "Caius Bonus, le centurion romain, constamment frustré par l'échec de ses plans contre les Gaulois.",
        "detail": "Hauteur: 16 cm, Matériaux: Résine peinte, Accessoire: Épée romaine."
    }
]
  constructor() { }
}

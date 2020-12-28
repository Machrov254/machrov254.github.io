"use strict";

// for(let i = 0; i < catList.length; i++){
//   const page = catList[i].thumbnail;
//   const image = Object.values(page)[0]?.pageimage;
//   fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=File:${image}&format=json&prop=imageinfo&iiprop=url`).then(response => response.json()).then(result => catList[i].imageUrl = result.query.pages)
//   }

const catList = [
  { href: "https://en.wikipedia.org/wiki/American_Ringtail", title: "American Ringtail" },
  { href: "https://en.wikipedia.org/wiki/American_Shorthair", title: "American Shorthair" },
  { href: "https://en.wikipedia.org/wiki/American_Wirehair", title: "American Wirehair" },
  { href: "https://en.wikipedia.org/wiki/Cyprus_cat#Aphrodite_Giant", title: "Cyprus cat" },
  { href: "https://en.wikipedia.org/wiki/Arabian_Mau", title: "Arabian Mau" },
  { href: "https://en.wikipedia.org/wiki/Asian_cat", title: "Asian cat" },
  { href: "https://en.wikipedia.org/wiki/Asian_Semi-longhair", title: "Asian Semi-longhair" },
  { href: "https://en.wikipedia.org/wiki/Burmese_cat", title: "Burmese cat" },
  { href: "https://en.wikipedia.org/wiki/Australian_Mist", title: "Australian Mist" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Bambino_cat", title: "Bambino cat" },
  { href: "https://en.wikipedia.org/wiki/Munchkin_cat", title: "Munchkin cat" },
  { href: "https://en.wikipedia.org/wiki/Bengal_cat", title: "Bengal cat" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Persian_cat", title: "Persian cat" },
  { href: "https://en.wikipedia.org/wiki/Bombay_cat", title: "Bombay cat" },
  { href: "https://en.wikipedia.org/wiki/Brazilian_Shorthair", title: "Brazilian Shorthair" },
  { href: "https://en.wikipedia.org/wiki/British_Longhair", title: "British Longhair" },
  { href: "https://en.wikipedia.org/wiki/British_Shorthair", title: "British Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Burmese_cat", title: "Burmese cat" },
  { href: "https://en.wikipedia.org/wiki/Burmilla", title: "Burmilla" },
  { href: "https://en.wikipedia.org/wiki/Burmese_cat", title: "Burmese cat" },
  { href: "https://en.wikipedia.org/wiki/California_Spangled", title: "California Spangled" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Tabby_cat", title: "Tabby cat" },
  { href: "https://en.wikipedia.org/wiki/Chartreux", title: "Chartreux" },
  { href: "https://en.wikipedia.org/wiki/Chausie", title: "Chausie" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Cymric_cat", title: "Cymric cat" },
  { href: "https://en.wikipedia.org/wiki/Cyprus_cat", title: "Cyprus cat" },
  { href: "https://en.wikipedia.org/wiki/Devon_Rex", title: "Devon Rex" },
  { href: "https://en.wikipedia.org/wiki/Donskoy_cat", title: "Donskoy cat" },
  { href: "https://en.wikipedia.org/wiki/Dragon_Li", title: "Dragon Li" },
  { href: "https://en.wikipedia.org/wiki/American_Curl", title: "American Curl" },
  { href: "https://en.wikipedia.org/wiki/Egyptian_Mau", title: "Egyptian Mau" },
  { href: "https://en.wikipedia.org/wiki/European_Shorthair", title: "European Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Exotic_Shorthair", title: "Exotic Shorthair" },
  { href: "https://en.wikipedia.org/wiki/American_Shorthair", title: "American Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Foldex_cat", title: "Foldex cat" },
  { href: "https://en.wikipedia.org/wiki/Exotic_Shorthair", title: "Exotic Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Havana_Brown", title: "Havana Brown" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Himalayan_cat", title: "Himalayan cat" },
  { href: "https://en.wikipedia.org/wiki/Persian_cat", title: "Persian cat" },
  { href: "https://en.wikipedia.org/wiki/Javanese_cat", title: "Javanese cat" },
  { href: "https://en.wikipedia.org/wiki/Balinese_cat", title: "Balinese cat" },
  { href: "https://en.wikipedia.org/wiki/African_wildcat", title: "African wildcat" },
  { href: "https://en.wikipedia.org/wiki/Khao_Manee", title: "Khao Manee" },
  { href: "https://en.wikipedia.org/wiki/Kinkalow", title: "Kinkalow" },
  { href: "https://en.wikipedia.org/wiki/Dwarf_cat", title: "Dwarf cat" },
  { href: "https://en.wikipedia.org/wiki/Korat", title: "Korat" },
  { href: "https://en.wikipedia.org/wiki/Korean_Bobtail", title: "Korean Bobtail" },
  { href: "https://en.wikipedia.org/wiki/Kurilian_Bobtail", title: "Kurilian Bobtail" },
  { href: "https://en.wikipedia.org/wiki/Lambkin_(cat)", title: "Lambkin (cat)" },
  { href: "https://en.wikipedia.org/wiki/Dwarf_cat", title: "Dwarf cat" },
  { href: "https://en.wikipedia.org/wiki/LaPerm", title: "LaPerm" },
  { href: "https://en.wikipedia.org/wiki/Lykoi", title: "Lykoi" },
  { href: "https://en.wikipedia.org/wiki/Maine_Coon", title: "Maine Coon" },
  { href: "https://en.wikipedia.org/wiki/Manx_cat", title: "Manx cat" },
  { href: "https://en.wikipedia.org/wiki/Mekong_Bobtail", title: "Mekong Bobtail" },
  { href: "https://en.wikipedia.org/wiki/Minskin", title: "Minskin" },
  { href: "https://en.wikipedia.org/wiki/Munchkin_cat", title: "Munchkin cat" },
  { href: "https://en.wikipedia.org/wiki/Minuet_cat", title: "Minuet cat" },
  { href: "https://en.wikipedia.org/wiki/Persian_cat", title: "Persian cat" },
  { href: "https://en.wikipedia.org/wiki/Munchkin_cat", title: "Munchkin cat" },
  { href: "https://en.wikipedia.org/wiki/Dwarf_cat", title: "Dwarf cat" },
  { href: "https://en.wikipedia.org/wiki/Nebelung", title: "Nebelung" },
  { href: "https://en.wikipedia.org/wiki/Norwegian_Forest_cat", title: "Norwegian Forest cat" },
  { href: "https://en.wikipedia.org/wiki/Ocicat", title: "Ocicat" },
  { href: "https://en.wikipedia.org/wiki/Abyssinian_cat", title: "Abyssinian cat" },
  { href: "https://en.wikipedia.org/wiki/Oregon_Rex", title: "Oregon Rex" },
  { href: "https://en.wikipedia.org/wiki/Oriental_bicolour", title: "Oriental bicolour" },
  { href: "https://en.wikipedia.org/wiki/Oriental_Longhair", title: "Oriental Longhair" },
  { href: "https://en.wikipedia.org/wiki/Oriental_Shorthair", title: "Oriental Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Domestic_long-haired_cat", title: "Domestic long-haired cat" },
  { href: "https://en.wikipedia.org/wiki/Oriental_Shorthair", title: "Oriental Shorthair" },
  { href: "https://en.wikipedia.org/wiki/European_Shorthair", title: "European Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Persian_cat", title: "Persian cat" },
  { href: "https://en.wikipedia.org/wiki/Traditional_Persian", title: "Traditional Persian" },
  { href: "https://en.wikipedia.org/wiki/Greater_Iran", title: "Greater Iran" },
  { href: "https://en.wikipedia.org/wiki/Peterbald", title: "Peterbald" },
  { href: "https://en.wikipedia.org/wiki/Donskoy_cat", title: "Donskoy cat" },
  { href: "https://en.wikipedia.org/wiki/Bobcat", title: "Bobcat" },
  { href: "https://en.wikipedia.org/wiki/Ragamuffin_cat", title: "Ragamuffin cat" },
  { href: "https://en.wikipedia.org/wiki/Ragdoll_cat", title: "Ragdoll cat" },
  { href: "https://en.wikipedia.org/wiki/Himalayan_cat", title: "Himalayan cat" },
  { href: "https://en.wikipedia.org/wiki/Birman_cat", title: "Birman cat" },
  { href: "https://en.wikipedia.org/wiki/Russian_Blue", title: "Russian Blue" },
  { href: "https://en.wikipedia.org/wiki/Russian_Blue", title: "Russian Blue" },
  { href: "https://en.wikipedia.org/wiki/Thai_cat", title: "Thai cat" },
  { href: "https://en.wikipedia.org/wiki/Savannah_cat", title: "Savannah cat" },
  { href: "https://en.wikipedia.org/wiki/Cat", title: "Cat" },
  { href: "https://en.wikipedia.org/wiki/Bone", title: "Bone" },
  { href: "https://en.wikipedia.org/wiki/Serengeti_cat", title: "Serengeti cat" },
  { href: "https://en.wikipedia.org/wiki/Bengal_cat", title: "Bengal cat" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Thai_cat", title: "Thai cat" },
  { href: "https://en.wikipedia.org/wiki/Siberian_cat", title: "Siberian cat" },
  { href: "https://en.wikipedia.org/wiki/Singapura_cat", title: "Singapura cat" },
  { href: "https://en.wikipedia.org/wiki/Burmese_cat", title: "Burmese cat" },
  { href: "https://en.wikipedia.org/wiki/American_Shorthair", title: "American Shorthair" },
  { href: "https://en.wikipedia.org/wiki/Siamese_cat", title: "Siamese cat" },
  { href: "https://en.wikipedia.org/wiki/Sokoke", title: "Sokoke" },
  { href: "https://en.wikipedia.org/wiki/Somali_cat", title: "Somali cat" },
  { href: "https://en.wikipedia.org/wiki/Sphynx_cat", title: "Sphynx cat" },
  { href: "https://en.wikipedia.org/wiki/Suphalak", title: "Suphalak" },
  { href: "https://en.wikipedia.org/wiki/Thai_cat", title: "Thai cat" },
  { href: "https://en.wikipedia.org/wiki/Korat", title: "Korat" },
  { href: "https://en.wikipedia.org/wiki/Tonkinese_cat", title: "Tonkinese cat" },
  { href: "https://en.wikipedia.org/wiki/Burmese_cat", title: "Burmese cat" },
  { href: "https://en.wikipedia.org/wiki/Bengal_cat", title: "Bengal cat" },
  { href: "https://en.wikipedia.org/wiki/Turkish_Van", title: "Turkish Van" },
  { href: "https://en.wikipedia.org/wiki/Van_cat", title: "Van cat" },
  { href: "https://en.wikipedia.org/wiki/Ukrainian_Levkoy", title: "Ukrainian Levkoy" },
  { href: "https://en.wikipedia.org/wiki/Donskoy_cat", title: "Donskoy cat" },
  { href: "https://en.wikipedia.org/wiki/New_York_(state)", title: "New York (state)" },
] 
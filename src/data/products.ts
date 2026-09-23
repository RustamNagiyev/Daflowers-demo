export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  badgeType?: 'default' | 'favorite' | 'bespoke' | 'architectural' | 'gifting';
  description: string;
  occasion: string;
  stemType: string;
  colorPalette: 'cream' | 'blush' | 'noir' | 'ochre' | 'green';
  image: string;
  galleryImages: {
    url: string;
    label: string;
    caption: string;
  }[];
  architecture: {
    stemCount: string;
    totalHeight: string;
    vessel: string;
    origin: string;
  };
  inStock: boolean;
  sameDayDelivery: boolean;
  includesVessel: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'the-baku-noir-ranunculus',
    name: 'The Baku Noir Ranunculus',
    subtitle: 'Dark Italian ranunculus & plum eucalyptus',
    price: 185,
    badge: 'Édition Limitée',
    badgeType: 'default',
    description: 'Dark Italian ranunculus, black velvety baccara roses, and wild plum eucalyptus sourced via direct Amsterdam airfreight in a bespoke matte black ceramic cylinder.',
    occasion: 'Romance & Grand Gifting',
    stemType: 'Dutch Ranunculus',
    colorPalette: 'noir',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBf6BGYxHaFC__aOmXHFw2qtZD_wY4MTTcC8CaoMwKl6OO5ly2_YcZWf0DRJhm_R3ThsG4Jxav9mWaJx8DS88mucCBQ8g4_gafUVlMBluQyFLIe_MMuNBFkhCzfucVx_y0lqzd90Gb_G0gnpfr28CYlKwzZC0QgxK8ff7hM1UItH-thDRoxCVb1OAjjSbAoezuumplueWKaGBou10HEZNF_xo2720uKM6_gTYiQ_4W2wHcmI4f4WFazg',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_w2nPm5mgNg1mHZecCeQ_-PxlB4kgM5KDEPodcco64mNzoi2scaImO917g4-PPK6Eqb34UpIcRHe30uUX1bRR5GWel_A7KLFkdcS4P6RFkNUwe3ZoTVcsmOoWldcsVaWMLKftmP6MTsKnx3S3qeI3DVY5CQkvo97SuQre8wHnyloifcH0T5mxYbhnlkWck3CK3pJcjk_66zY7yTraefb-Rne8rYtWfd4HCLGdVsPc4gKmuqi6xvwaxw',
        label: 'Arrangement Overview',
        caption: 'Studio Archive / Still life on travertine pedestal'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBozt9cd9VtzD_PDveNBFm_TuN4pAajh1yc2JvHDtHjQorIod3L1__6UbypwgeRgOyp45Ta-Zct8yykFnnB315lpt5CK2NX0gymgu3pppErhQ_DYq3rnoWUPW2-Fv7Yivu24HEmSUUo3RPAeP0mEbBkTCFSn_xcsvlXLh_YAtdS2pamEs-kdx0rq4yXgVrIy3pvi1fu4cE_knceQFguqpZwK6u7nk0GkiJPojhe8LM5qgty5a63eT22vQ',
        label: 'Macro Botanical Detail',
        caption: 'Extreme close-up of dark plum Italian ranunculus velvety layered petals'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAztOAL2_30a16lX9nSpaK0yrb2DrvcnYxA_1nTUHfT_inDn1O6pv5vWGDeKp8wVgyhMrqC9p6lW7MEEg9vhs3QtBSxZUDlOMPfw-RRoWyPOSD6GTdEUqEIZx49ZntZOXhJdptJ3rBT78DA3ClPFrA1vET8vFsWm2NmqqRBYV4d_XNiJRsZJLrQiome4nte3tLOsZwaVpQaPhBLh2XYOcbkIeHlO_1vCFdLLxdradkD3PpH-i8nctFzRg',
        label: 'Maison Packaging & Seal',
        caption: 'Ribbed alabaster parchment, hand-tied copper silk, wine-red wax seal'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtqqVaBUm2soluL8jgB2u-fzEHSJvSJ9gxT_Y6tVZbzEk8DjP81ohJWKWJZDR5GgGWAoPNE-JYOJX15K5pQsDNNClK9s9ybUJNp8ZF0hAs3LfZ9OpXxCBCYMCdSxRYgb3jT7uO9GesPDwnX2WiGp1eTkuGbw_2EEBvrxESkceDckWr_GbL4OouXdH_l-3tuDiDlVTWKB8d0fSOWdHN65CMG6Pf7w7uyyWRUlgwndA3F_WOo9DueWVuqg',
        label: 'In Situ Baku Residence',
        caption: 'Styled on antique calacatta marble mantle in Port Baku residence'
      }
    ],
    architecture: {
      stemCount: '28–32 Graded Stems',
      totalHeight: '~55 cm Architectural',
      vessel: 'Hand-Turned Charcoal Clay',
      origin: 'Sanremo & Dutch Imports'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '2',
    slug: 'caspian-dawn-peonies',
    name: 'Caspian Dawn Peonies',
    subtitle: 'Grand Dutch coral charm and blush peonies',
    price: 240,
    badge: 'Maison Favorite',
    badgeType: 'favorite',
    description: 'Grand Dutch coral charm and blush peonies with wild white Caspian botanicals, finished in signature ribbed cotton casing conditioned for an opulent multi-day bloom.',
    occasion: 'Birthday & Milestone',
    stemType: 'Coral Charm Peonies',
    colorPalette: 'blush',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRqUQ4SHarkAy28uFXzI0slYoOLq4M_LShhLvHa1ZouCxTcNI2kX7QvItKje6D2r2VU54nUl9Lvfz6hNjHmkwerKZDbboDe7VWX6TVXNdOuB7A6qDmZ2W30gJ3oDIjkzeGBbuOHK0UyHxonrEcu7fOrWCW03P0sOBMPeAeSintpgwTltjyv2HNN4pOILoI_kgaE5DYFNnn119KXs0YnscaqQoI3TTPhbM_NZhocJaESB7EQFzCgmi7WA',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRqUQ4SHarkAy28uFXzI0slYoOLq4M_LShhLvHa1ZouCxTcNI2kX7QvItKje6D2r2VU54nUl9Lvfz6hNjHmkwerKZDbboDe7VWX6TVXNdOuB7A6qDmZ2W30gJ3oDIjkzeGBbuOHK0UyHxonrEcu7fOrWCW03P0sOBMPeAeSintpgwTltjyv2HNN4pOILoI_kgaE5DYFNnn119KXs0YnscaqQoI3TTPhbM_NZhocJaESB7EQFzCgmi7WA',
        label: 'Full Composition',
        caption: 'Blush Sarah Bernhardt and Coral Charm peonies'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAZdQ6qKJHmkEJ8QF2IIz4JqECf0tCIY5ZDtqWuXcKErRdl8ysPk5UO7cSXwVNE7joCscdsRE0jHp84Berl5E_aTdCYBLdV7GDrSIvWeiTMVBJeRN1ilwCQWzkHo1Coupeo8uyhNiIf2PAL5Itcb544nTiCqek5iuCiaGKdY31RugRNO3i2BmNjzRAIYJS45ffsf2AKeRRjb0fdsUyZER6ai_PPfAnoz4baZOsy2GsiAKPMVW6USRVVQ',
        label: 'Vessel Presentation',
        caption: 'Conditioned in ribbed ceramic pedestal with sea lavender'
      }
    ],
    architecture: {
      stemCount: '25 Master Peonies',
      totalHeight: '~50 cm Spherical',
      vessel: 'Signature Ribbed Cotton Casing',
      origin: 'Aalsmeer Dutch Auction'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '3',
    slug: 'palais-royal-garden-roses',
    name: 'Palais Royal Garden Roses',
    subtitle: "Highly fragrant O'Hara French garden roses",
    price: 210,
    badge: 'Bespoke Stem',
    badgeType: 'bespoke',
    description: "Highly fragrant O'Hara garden roses from Grasse accompanied by antique spray blooms, mint foliage, and wax seal envelope.",
    occasion: 'Romance & Grand Gifting',
    stemType: 'French Garden Roses',
    colorPalette: 'blush',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbb97kNKuAtm3Lo3sKQGxinxNmD5__w8fGVEryT11V5A0h3kyAn7G5JdUJf16JNUTgfFFr_rBiEGFxTBE9fiPTLMaCNkZhv9-iYARheBFgnGAwwoXwSd0Nmo_6AL1JDpjNZLSq97bbzPIh1dZgbXohHwtmKkSWK27HbSjvHVB8GMkfPhUdgRXlABzQpoz4RuqiBgoZzPyQMgZM1fuM8RwCXN-dtsmNmR27rTsvmYUG67lncTDrFNnuSg',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbb97kNKuAtm3Lo3sKQGxinxNmD5__w8fGVEryT11V5A0h3kyAn7G5JdUJf16JNUTgfFFr_rBiEGFxTBE9fiPTLMaCNkZhv9-iYARheBFgnGAwwoXwSd0Nmo_6AL1JDpjNZLSq97bbzPIh1dZgbXohHwtmKkSWK27HbSjvHVB8GMkfPhUdgRXlABzQpoz4RuqiBgoZzPyQMgZM1fuM8RwCXN-dtsmNmR27rTsvmYUG67lncTDrFNnuSg',
        label: 'Front View',
        caption: 'Ruffled O\'Hara petals in antique blush'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA0_BZQ35WryJ0j-QKvY7mEt4D7fZwS_PwPp1g5ELHK2KztBGdJWdwccRYj-ahLSz1Y8zESSTNoyZAQ3f-w3j-zZLsu7HVLv4z3GkkIrte_Jw-U7vmt8_K_t8CSKWED0_xC3FyWNYvd8Oc2_HHnGijtWxhnOFasly__80nRIMq-e1eC1SaiBlgVb7NdW_sZxXriFAnjvtczyPtIcT-7siILe-lJV170nhzHeRM92QbQs3FTaE-vbJ3FQ',
        label: 'Tabletop Display',
        caption: 'Bespoke fluted porcelain vase in candlelight'
      }
    ],
    architecture: {
      stemCount: '30 Grasse Garden Stems',
      totalHeight: '~48 cm Classic Urn',
      vessel: 'Fluted Alabaster Porcelain',
      origin: 'Grasse, Provence & Netherlands'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '4',
    slug: 'white-city-monolith',
    name: 'White City Monolith',
    subtitle: 'Pristine white hydrangea, calla lilies & Phalaenopsis',
    price: 320,
    badge: 'Architectural',
    badgeType: 'architectural',
    description: 'Pristine white hydrangea, calla lilies, and cascading Phalaenopsis orchids for expansive spaces and modern penthouse architecture.',
    occasion: 'Corporate & Diplomatic',
    stemType: 'Hydrangea & Delphinium',
    colorPalette: 'cream',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKqyHCBoGHRmgIE3VPW4RdvMtDdiLu54vMpGuwCq6yMmKL_c06tzBgrnIZPUcF1LZq5M8P4kVAZlXsMa3oC24wTh5kfPI9SFTVGVtXV1OhsFsnONMhYs1urbK2KdMpNJCEPPeCoafWal1JzWWyzyYXT_9Yct_0hMBbjjXOmwFEju5BoKpl-OpZjBfyrf-pk0hPcWeinnkD4J9c_SvlGjmOazCX4pcZtPokxxqhviN_euwIv0BdyrzOA',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKqyHCBoGHRmgIE3VPW4RdvMtDdiLu54vMpGuwCq6yMmKL_c06tzBgrnIZPUcF1LZq5M8P4kVAZlXsMa3oC24wTh5kfPI9SFTVGVtXV1OhsFsnONMhYs1urbK2KdMpNJCEPPeCoafWal1JzWWyzyYXT_9Yct_0hMBbjjXOmwFEju5BoKpl-OpZjBfyrf-pk0hPcWeinnkD4J9c_SvlGjmOazCX4pcZtPokxxqhviN_euwIv0BdyrzOA',
        label: 'Statuesque Monolith',
        caption: 'Cascading Phalaenopsis orchids on stone pedestal'
      }
    ],
    architecture: {
      stemCount: '45 Graded Specimen Stems',
      totalHeight: '~85 cm Grand Scale',
      vessel: 'Handcrafted Fluted Stone Pedestal',
      origin: 'Netherlands & Taiwan Rare Orchids'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '5',
    slug: 'old-city-amber-and-saffron',
    name: 'Old City Amber & Saffron',
    subtitle: 'Warm ochre garden roses & saffron carnations',
    price: 195,
    badge: 'Bespoke Heritage',
    badgeType: 'bespoke',
    description: 'Warm ochre garden roses, saffron-dyed carnations, and feathery Caspian seaside grasses celebrating the amber warmth of ancient Baku.',
    occasion: 'Birthday & Milestone',
    stemType: 'French Garden Roses',
    colorPalette: 'ochre',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOysohXeFcWGN8q57dne1EfB9-39Ewzajw0Iczkw8c-6LKI5ymGsXOBCJALQAtUcWDTi_63TRJdsDGX2FnxSpFukTxsSig-_VecrkSH85YD_2QxLx5lfMH7p3fvFBShTMXYcJfPmWFyK20Ul2Y06sNRrUCHh-V9D4rzITCjATogsuhLOSiz6zAuT499dTv0vd4S9afBYZgp5s3lxCGM3RWs2552ZVwUw3iA4WTQzwVqUlvfjR12gA9fQ',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOysohXeFcWGN8q57dne1EfB9-39Ewzajw0Iczkw8c-6LKI5ymGsXOBCJALQAtUcWDTi_63TRJdsDGX2FnxSpFukTxsSig-_VecrkSH85YD_2QxLx5lfMH7p3fvFBShTMXYcJfPmWFyK20Ul2Y06sNRrUCHh-V9D4rzITCjATogsuhLOSiz6zAuT499dTv0vd4S9afBYZgp5s3lxCGM3RWs2552ZVwUw3iA4WTQzwVqUlvfjR12gA9fQ',
        label: 'Warm Tonal Focus',
        caption: 'Saffron petals, dried grasses, antique bronze bowl'
      }
    ],
    architecture: {
      stemCount: '32 Selected Stems',
      totalHeight: '~52 cm Compact Luxury',
      vessel: 'Burnished Aged Copper Bowl',
      origin: 'French Riviera & Absheron Botanicals'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '6',
    slug: 'verdant-boulevard',
    name: 'Verdant Boulevard',
    subtitle: 'English sweet peas, green viburnum & olive branches',
    price: 160,
    description: 'English sweet peas, vibrant green viburnum, and Absheron olive branches in fluted ivory glass evoking the coastal promenade breezes.',
    occasion: 'Sympathy & Serenity',
    stemType: 'French Garden Roses',
    colorPalette: 'green',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-LeqJ5qcczhngJ9fDFS0xTKGfLEF224EBJ8kwYyzO6G6u8JQVoqITKvGf6JHIX3OrUHwSfza-H_Y9urJ-DHK1r5fKYS1bG8rSanNEWHJ_hJoRoqaU_N9J7kBFCPYS1ZYCac2t9PA9gfYUiObqSdxtAysgrf8YiwMppD8BLR435zpuVn0nyMSMKGNRHJJLd07wsJ0I3q8byGKiLSchVCJ2Pl53w_LJtqyolXrWYDXC-_RGVN9QYJiICA',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-LeqJ5qcczhngJ9fDFS0xTKGfLEF224EBJ8kwYyzO6G6u8JQVoqITKvGf6JHIX3OrUHwSfza-H_Y9urJ-DHK1r5fKYS1bG8rSanNEWHJ_hJoRoqaU_N9J7kBFCPYS1ZYCac2t9PA9gfYUiObqSdxtAysgrf8YiwMppD8BLR435zpuVn0nyMSMKGNRHJJLd07wsJ0I3q8byGKiLSchVCJ2Pl53w_LJtqyolXrWYDXC-_RGVN9QYJiICA',
        label: 'Organic Lush Foliage',
        caption: 'Absheron olive branch accents with soft viburnum'
      }
    ],
    architecture: {
      stemCount: '24 Botanical Stems',
      totalHeight: '~46 cm Fluid Lineage',
      vessel: 'Fluted Ribbed Ivory Glass',
      origin: 'Devon Growers & Baku Gardens'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '7',
    slug: 'boulevard-prive-lilies',
    name: 'Boulevard Privé Lilies',
    subtitle: 'Imperial Casablanca white lilies & silver eucalyptus',
    price: 275,
    badge: 'Maison Classic',
    badgeType: 'default',
    description: 'Imperial Casablanca white lilies paired with oversized frosted silver dollar eucalyptus in a statuesque smoked glass cylinder.',
    occasion: 'Wedding & Bridal',
    stemType: 'Imperial White Lilies',
    colorPalette: 'cream',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi1WSf4SSMkUqVxMcEPAZr-Fu92um2aNJLfS59Lh6RV9o6vw8dQrZdpNivh5c4CiH0len-edd3kjJuUEZUuZlDjT_OMZKLQ391UZYBkB5mPpYjOERvlMXev0mvvU-x4reYQRdGyAZ8fAvic5MyvtNp-GDzw4FC3Z0u2DhSLnExE-bHF5bm2rxPhB_rV-8HdC-YxLN-2ZadpQHlkd5ydWOntnvBSkK6NY_Rg6wbo9WlDJp-0ZuPlHU9dw',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi1WSf4SSMkUqVxMcEPAZr-Fu92um2aNJLfS59Lh6RV9o6vw8dQrZdpNivh5c4CiH0len-edd3kjJuUEZUuZlDjT_OMZKLQ391UZYBkB5mPpYjOERvlMXev0mvvU-x4reYQRdGyAZ8fAvic5MyvtNp-GDzw4FC3Z0u2DhSLnExE-bHF5bm2rxPhB_rV-8HdC-YxLN-2ZadpQHlkd5ydWOntnvBSkK6NY_Rg6wbo9WlDJp-0ZuPlHU9dw',
        label: 'Statuesque Casablanca Stems',
        caption: 'Pristine white lilies and silver dollar eucalyptus'
      }
    ],
    architecture: {
      stemCount: '18 Heavy Oriental Lilies',
      totalHeight: '~70 cm Tall Column',
      vessel: 'Smoked Cylindrical Glass',
      origin: 'Rijnsburg FloraHolland'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '8',
    slug: 'nizami-grand-romance',
    name: 'Nizami Grand Romance',
    subtitle: 'One hundred velvety black baccara red roses',
    price: 390,
    badge: 'Grand Gifting',
    badgeType: 'gifting',
    description: 'One hundred hand-selected velvety baccara red roses finished in custom raw-edge silk, creating an unforgettable statement of romance.',
    occasion: 'Romance & Grand Gifting',
    stemType: 'French Garden Roses',
    colorPalette: 'noir',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoIjeN8MK8kIesp1BirCNKZ1blpb7Hp0CHQ27QRhaI6uEUoLLk6IwI0P0C4bjQApvI8wZphm_58Kc1t_yH6HC8RxCjIVClVVhzQQ3uHv42hPwl1x2jgBMQRjqekaRXgyz66Pmag-T7dZpZDtVt9gWK_QCKLrKfc-XDsxeZyy9kT7j__ju2XNAC0htZAgyoPWnXu02kn_-VXS7ApDcTaWUxaD6QrgHrpxNTkOB9VkLiJJAtcC3EhbW_Pg',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoIjeN8MK8kIesp1BirCNKZ1blpb7Hp0CHQ27QRhaI6uEUoLLk6IwI0P0C4bjQApvI8wZphm_58Kc1t_yH6HC8RxCjIVClVVhzQQ3uHv42hPwl1x2jgBMQRjqekaRXgyz66Pmag-T7dZpZDtVt9gWK_QCKLrKfc-XDsxeZyy9kT7j__ju2XNAC0htZAgyoPWnXu02kn_-VXS7ApDcTaWUxaD6QrgHrpxNTkOB9VkLiJJAtcC3EhbW_Pg',
        label: 'Spherical 100 Rose Dome',
        caption: 'Architectural dome of 100 Black Baccara roses'
      }
    ],
    architecture: {
      stemCount: '100 Long-Stem Red Roses',
      totalHeight: '~60 cm Tight Dome',
      vessel: 'Bespoke Rigid Hatbox & Raw Silk Ribbon',
      origin: 'Ecuador & Dutch Select Growers'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  },
  {
    id: '9',
    slug: 'atelier-serenade',
    name: 'Atelier Serenade',
    subtitle: 'Pastel delphiniums, blush ranunculus & champagne roses',
    price: 225,
    badge: 'Atelier Edition',
    badgeType: 'default',
    description: 'Pastel delphiniums, blush ranunculus, and champagne spray roses for thoughtful celebration and serene interior sanctuaries.',
    occasion: 'Wedding & Bridal',
    stemType: 'Hydrangea & Delphinium',
    colorPalette: 'blush',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsNjNL0GGWbsnFEZWhiIFoUtaKpZYl6gYvkukb_iVFD-1wYrYfpMBu_AbhXaYcVReaCPjqXW967nINEuOLoP1HGn6HlDlFRHkBOrVQg2WovIVTjNdjZofE0aEfIRjhCYhxdW1KUFPjKkhcRy1Q98azVxkok99sB24q6Sgx3QaWOp0TGRYM4oWPg99-LUQwC96nwF-WVSAyPMjTIR-siTWAvhDLGb7Zrz5RSn43PR9JPGILe5_jMSK_Mw',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsNjNL0GGWbsnFEZWhiIFoUtaKpZYl6gYvkukb_iVFD-1wYrYfpMBu_AbhXaYcVReaCPjqXW967nINEuOLoP1HGn6HlDlFRHkBOrVQg2WovIVTjNdjZofE0aEfIRjhCYhxdW1KUFPjKkhcRy1Q98azVxkok99sB24q6Sgx3QaWOp0TGRYM4oWPg99-LUQwC96nwF-WVSAyPMjTIR-siTWAvhDLGb7Zrz5RSn43PR9JPGILe5_jMSK_Mw',
        label: 'Gentle Powder Sky Harmony',
        caption: 'Pastel delphiniums and blush garden stems'
      }
    ],
    architecture: {
      stemCount: '34 Harmonic Stems',
      totalHeight: '~58 cm Gentle Spire',
      vessel: 'Warm Off-White Stone Vessel',
      origin: 'Sanremo & Holland Auctions'
    },
    sameDayDelivery: true,
    includesVessel: true,
    inStock: true
  }
];

export interface OccasionCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  filterKey: string;
}

export const OCCASIONS: OccasionCategory[] = [
  {
    id: 'birthday',
    number: '01',
    name: 'Birthday',
    description: 'Celebratory blooms & seasonal exotics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyWpsVRD5jyw2_NRzUicQJedA5YcyS0qKrS9XtR_a1QSp06z1kMVdenGAfU0QZvuovFs_VyKcZ7_vgZLNHRm1pUxjz0UphowDkrPzkj3afwKBo0_GVMhpGMRVHxK8GyYfHGzM_YynOg5TJxDY1iCtH1SGE1MAyiSHPHDJUmx3pp5WBfKlEQFhdUkH-PqynPfrjEm4sIVR2KNxAuz46W-2CNf3PAjYcnT_T1iKX12JBkOM-DO2UeIAXwA',
    filterKey: 'Birthday & Milestone'
  },
  {
    id: 'wedding',
    number: '02',
    name: 'Wedding',
    description: 'Bridal elegance & ceremonial botanicals.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBYUsK65ZWSX9fz-BsYh_CvkWuXpqfhG0PxEyHXRpWoMapBxLQ01mGW8LQ3wDTgCbW092Gp2feRrnfyhzJg3xcIjxeB9_KfaiFJYbcwRkQ8Kc2i8TBERN6eyK_W2dAPzthBBHo8_rnx2WsIh2K7ZzxWt2CNy3pqQiL-nmmrrlB73t6nelj-AuOUYDcD4utscL5T1HvoMfybwocURLwNUFZZ8BwTGfZDnNsQyiGM0iwW9JEfP1vM-gqOQ',
    filterKey: 'Wedding & Bridal'
  },
  {
    id: 'romance',
    number: '03',
    name: 'Romance',
    description: 'Grand garden roses & Parisian stems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvBCTXaxpzgO0h1lyFA0WMWnW0dCVHFzx-08YdhC2WKx8zUMbo4dv7KbcoC49sZw7uBf4i0lb5F_pxTlR8BMcBhXW89QZ4HQlD3TCQ6o_k357X3esl8cZmd3rxoboWuFyz2FBhpMTMR3J1Lvrt80SM47N0fXVTHnDoqKTa3abHFc0p6-GUq_nETRYwIGAITiHTl2g0-WWmm0wq8ZmglBHCG5sAGJZhIxvoOSFuUTwSI_wjRGEJNg0ekA',
    filterKey: 'Romance & Grand Gifting'
  },
  {
    id: 'corporate',
    number: '04',
    name: 'Corporate',
    description: 'Lobby & executive installations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuNZrUWmdGk_MB5PSpKkNlVhqHCWstRHD4BFyd-du6G_PWSWNkTHUjakw97aqbCMVZe5wBJ1WKBKDKRqe85umg4Lmn2hRD5QeHel2iOZ-xNWvcN6YPOH2aD7GuWAKGgo1zs291_ML2x4Hpx0sv7NDb_XFig5-bV8iFJbOoBABNwv_yLYrxpqtDiGB6LKgAvkj_INtPpEv9oP7eo2kPohf60ZjUaA0eNgqEzJh0XmF6ewZmwOlvoFXIzw',
    filterKey: 'Corporate & Diplomatic'
  },
  {
    id: 'sympathy',
    number: '05',
    name: 'Sympathy',
    description: 'Serene whites & dignified tributes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82zuydAKBsEe-qbrO5PR7lIDXdpxFDpndjOiEbj649anYg9c_Uj11gYsbsE9_gqSgMkzJYLI6R8b-4W8CdXBLYppL6DH_e3uVu8A9izGOFo5JOSUzWBDxdHqs5DqQAZRDhbvD-IHR8arAliD5gt-9QeagZPSMxp0HgrLQk9Jbs_35gGGUIF3ZnkSbbfel4ffv7i1lJiVc9voyhovmaQ6SeSlDXAXfAhzuZRtWBMYfuBANcXl9Vmlpxw',
    filterKey: 'Sympathy & Serenity'
  }
];

export const TESTIMONIALS = [
  {
    quote: "The arrangement for our anniversary at Fairmont Baku took everyone's breath away. Pure understated poetry.",
    author: "Leyla M.",
    location: "Baku"
  },
  {
    quote: "The only florist in Azerbaijan with this level of restraint, luxury, and botanical perfection.",
    author: "Farhad A.",
    location: "Port Baku"
  },
  {
    quote: "Impeccable white-glove arrival within 2 hours. The handwritten letter was a splendid touch.",
    author: "Gunel K.",
    location: "White City"
  }
];

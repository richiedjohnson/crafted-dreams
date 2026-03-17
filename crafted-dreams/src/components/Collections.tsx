import CollectionCard from './CollectionCard';
import type { CollectionItem } from './CollectionCard';

const items: CollectionItem[] = [
  {
    id: 1,
    label: 'Curated Artifact 01',
    title: 'Luminary Ring',
    description: 'Forged in 18k solid gold, the Luminary represents the first light of dawn against a velvet sky. A masterwork of texture and shadow.',
    price: '$850',
    image: '/card1_image.png',
    imageAlt: 'Luminary Ring — twisted gold band',
    reversed: false,
  },
  {
    id: 2,
    label: 'Curated Artifact 02',
    title: 'Nocturne Chain',
    description: 'The weight of elegance. A fluid geometry of gold links designed to catch the flickering light of midnight gatherings.',
    price: '$1,200',
    image: '/card2_image.png',
    imageAlt: 'Nocturne Chain — delicate gold chain necklace',
    reversed: true,
  },
  {
    id: 3,
    label: 'Curated Artifact 03',
    title: 'Nocturne Ring',
    description: 'Minimalist bands that speak volumes. The Nocturne Ring is silence made tangible — pure restraint in hammered gold.',
    price: '$650',
    image: '/card3_image.png',
    imageAlt: 'Nocturne Ring — flat hammered gold band',
    reversed: false,
  },
  {
    id: 4,
    label: 'Curated Artifact 04',
    title: 'Oberon Pendant',
    description: 'Suspended in golden orbit, the Oberon Pendant captures the geometry of the cosmos. Concentric circles, infinite depth.',
    price: '$980',
    image: '/card4_image.png',
    imageAlt: 'Oberon Pendant — double circle gold pendant on chain',
    reversed: true,
  },
  {
    id: 5,
    label: 'Curated Artifact 05',
    title: 'Midnight Cuff',
    description: 'Wide-set in brushed gold with a stone inset, the Midnight Cuff commands presence with understated drama. Power, distilled.',
    price: '$1,450',
    image: '/card5_image.png',
    imageAlt: 'Midnight Cuff — gold bangle with stone detail',
    reversed: false,
    outOfStock: true,
  },
  {
    id: 6,
    label: 'Curated Artifact 06',
    title: 'Aurora Choker',
    description: 'A seamless arc of polished gold, the Aurora Choker wraps the neck like a second skin. Effortless. Eternal.',
    price: '$720',
    image: '/card6_image.png',
    imageAlt: 'Aurora Choker — minimal open gold cuff choker',
    reversed: true,
    outOfStock: true,
  },
];

const Collections = () => (
  <div id="collections">
    {items.map(item => (
      <CollectionCard key={item.id} item={item} />
    ))}
  </div>
);

export default Collections;

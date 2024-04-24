import BentoItemSmall from './BentoItemSmall';
import BentoItemLarge from './BentoItemLarge';
import BentoItemVertical from './BentoItemVertical';
import BentoItemHorizontal from './BentoItemHorizontal';

import accessoriesCategory from '../assets/categories/AccessoriesBackground.png';
import jeansCategory from '../assets/categories/JeansBackground.png';
import pantsCategory from '../assets/categories/PantsBackground.png';
import polosCategory from '../assets/categories/PolosBackground.png';
import shoesCategory from '../assets/categories/ShoesBackground.png';
import shortsCategory from '../assets/categories/ShortsBackground.png';
import suitsCategory from '../assets/categories/SuitsBackground.png';
import sweatshirtsCategory from '../assets/categories/SweatshirtsBackground.png';
import tracksuitsCategory from '../assets/categories/TracksuitsBackground.png';
import tShirtsCategory from '../assets/categories/TShirtsBackground.png';
import underwearCategory from '../assets/categories/UnderwearBackground.png';


function BentoGrid() {
    return (
        <section className="grid grid-cols-6 grid-rows-4 gap-4 m-auto">
            <BentoItemVertical imageSrc={pantsCategory} textPosition='center' text='Pants'/>
            <BentoItemHorizontal imageSrc={sweatshirtsCategory} textPosition='right' text='Sweatshirts'/>
            <BentoItemLarge imageSrc={tShirtsCategory} textPosition='left' text='T-Shirts'/>
            <BentoItemSmall imageSrc={underwearCategory} textPosition='center' text='Underwear'/>
            <BentoItemHorizontal imageSrc={polosCategory} textPosition='left' text='Polos'/>
            <BentoItemVertical imageSrc={jeansCategory} textPosition='center' text='Jeans'/>
            <BentoItemLarge imageSrc={shoesCategory} textPosition='center' text='Shoes'/>
            <BentoItemVertical imageSrc={suitsCategory} textPosition='center' text='Suits'/>
            <BentoItemVertical imageSrc={tracksuitsCategory} textPosition='center' text='Tracksuits'/>
            <BentoItemSmall imageSrc={accessoriesCategory} textPosition='center' text='Accessories'/>
            <BentoItemHorizontal imageSrc={shortsCategory} textPosition='left' text='Shorts'/>
        </section>
    );
};

export default BentoGrid;
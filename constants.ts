// Import images from LandingPage
import antImg from './LandingPage/ant.jpg';
import carmenImg from './LandingPage/carmen.jpg';
import finaImg from './LandingPage/fina.jpg';
import jaedynImg from './LandingPage/jaedyn.jpg';
import leoImg from './LandingPage/leo.jpg';
import snowImg from './LandingPage/snow.jpg';
import taiImg from './LandingPage/tai.jpeg';
import yaniImg from './LandingPage/yani.jpeg';
import zoeImg from './LandingPage/zoe.jpeg';
import keshaImg from './LandingPage/kesha.jpeg';
import sadiImg from './LandingPage/sadi.jpg';
import zoe2Img from './LandingPage/zoe2.jpeg';
import valImg from './LandingPage/val.png';
import aboutHeroImg from './LandingPage/about_hero.jpg';
import profile1 from './LandingPage/profile_1.jpg';
import profile2 from './LandingPage/profile_2.jpg';
import profile3 from './LandingPage/profile_3.jpg';
import profile4 from './LandingPage/profile_4.jpg';
import profile5 from './LandingPage/profile_5.jpg';
import profile6 from './LandingPage/profile_6.jpg';

// New Grads Imports
import grad1 from './Portfolio/grad_1.png';
import grad2 from './Portfolio/grad_2.png';
import grad3 from './Portfolio/grad_3.png';
import grad4 from './Portfolio/grad_4.png';
import grad5 from './Portfolio/grad_5.png';

import grad6 from './Portfolio/grad_6.png';
import grad7 from './Portfolio/grad_7.png';
import grad8 from './Portfolio/grad_8.png';
import grad9 from './Portfolio/grad_9.png';
import grad10 from './Portfolio/grad_10.png';
import grad11 from './Portfolio/grad_11.png';

// Birthday Imports
import birthday1 from './Portfolio/birthday_1.png';
import birthday2 from './Portfolio/birthday_2.png';
import birthday3 from './Portfolio/birthday_3.png';
import birthday4 from './Portfolio/birthday_4.png';
import birthday5 from './Portfolio/birthday_5.png';
import birthday6 from './Portfolio/birthday_6.png';
import birthday7 from './Portfolio/birthday_7.png';
import birthday8 from './Portfolio/birthday_8.png';
import birthday9 from './Portfolio/birthday_9.png';

// Portrait Imports
import portrait1 from './Portfolio/portrait_1.png';
import portrait2 from './Portfolio/portrait_2.png';
import portrait3 from './Portfolio/portrait_3.png';
import portrait4 from './Portfolio/portrait_4.png';
import portrait5 from './Portfolio/portrait_5.png';
import portrait6 from './Portfolio/portrait_6.png';
import portrait7 from './Portfolio/portrait_7.png';
import portrait8 from './Portfolio/portrait_8.jpg';
import portrait9 from './Portfolio/portrait_9.jpg';
import portrait10 from './Portfolio/portrait_10.jpg';
import portrait11 from './Portfolio/portrait_11.jpg';
import portrait12 from './Portfolio/portrait_12.jpg';
import portrait13 from './Portfolio/portrait_13.jpg';

// Couples Imports
import couples1 from './Portfolio/couples_1.jpg';
import couples2 from './Portfolio/couples_2.jpg';
import couples3 from './Portfolio/couples_3.jpg';

// Branding Imports
import branding1 from './Portfolio/branding_1.png';
import branding2 from './Portfolio/branding_2.png';
import branding3 from './Portfolio/branding_3.png';
import branding4 from './Portfolio/branding_4.png';
import branding5 from './Portfolio/branding_5.png';
import branding6 from './Portfolio/branding_6.png';
import branding7 from './Portfolio/branding_7.png';
import branding8 from './Portfolio/branding_8.png';
import branding9 from './Portfolio/branding_9.png';

// Maternity Imports
import maternity1 from './Portfolio/maternity_1.png';
import maternity2 from './Portfolio/maternity_2.jpg';
import maternity3 from './Portfolio/maternity_3.png';

export const ALL_IMAGES = [
    leoImg, carmenImg, jaedynImg, finaImg,
    zoeImg, zoe2Img, antImg, keshaImg,
    taiImg, sadiImg, yaniImg, snowImg
];

export const GRAD_IMAGES = [
    grad1, grad2, grad3, grad4, grad5,
    grad6, grad7, grad8, grad9, grad10,
    grad11
];

export const BIRTHDAY_IMAGES = [
    birthday1, birthday2, birthday3, birthday4, birthday5,
    birthday6, birthday7, birthday8, birthday9
];

export const PORTRAIT_IMAGES = [
    portrait1, portrait2, portrait3, portrait4, portrait5,
    portrait6, portrait7, portrait8, portrait9, portrait10,
    portrait11, portrait12, portrait13,
    ...ALL_IMAGES
];

export const COUPLES_IMAGES = [
    couples1, couples2, couples3
];

export const BRANDING_IMAGES = [
    branding1, branding2, branding3, branding4, branding5,
    branding6, branding7, branding8, branding9
];

export const MATERNITY_IMAGES = [
    maternity1, maternity2, maternity3
];

export {
    antImg, carmenImg, finaImg, jaedynImg, leoImg, snowImg, taiImg, yaniImg, zoeImg, keshaImg, sadiImg, zoe2Img, valImg, aboutHeroImg,
    grad1, grad2, grad3, grad4, grad5,
    grad6, grad7, grad8, grad9, grad10,
    grad11,
    birthday1, birthday2, birthday3, birthday4, birthday5,
    birthday6, birthday7, birthday8, birthday9,
    portrait1, portrait2, portrait3, portrait4, portrait5,
    portrait6, portrait7, portrait8, portrait9, portrait10,
    portrait11, portrait12, portrait13,
    couples1, couples2, couples3,
    branding1, branding2, branding3, branding4, branding5,
    branding6, branding7, branding8, branding9,
    maternity1, maternity2, maternity3,
    profile1, profile2, profile3, profile4, profile5, profile6
};

export const PROFILE_IMAGES = [profile1, profile2, profile3, profile4, profile5, profile6];

export const getImagesForCategory = (category: string): string[] => {
    if (category.toUpperCase() === 'GRADS') {
        return GRAD_IMAGES;
    }
    if (category.toUpperCase() === 'BIRTHDAY') {
        return BIRTHDAY_IMAGES;
    }
    if (category.toUpperCase() === 'PORTRAIT') {
        return PORTRAIT_IMAGES;
    }
    if (category.toUpperCase() === 'COUPLES') {
        return COUPLES_IMAGES;
    }
    if (category.toUpperCase() === 'BRANDING') {
        return BRANDING_IMAGES;
    }
    if (category.toUpperCase() === 'MATERNITY') {
        return MATERNITY_IMAGES;
    }
    return ALL_IMAGES;
};

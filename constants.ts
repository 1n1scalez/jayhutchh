// Import images from LandingPage
import antImg from './LandingPage/ant.webp';
import carmenImg from './LandingPage/carmen.webp';
import finaImg from './LandingPage/fina.webp';
import jaedynImg from './LandingPage/jaedyn.webp';
import leoImg from './LandingPage/leo.webp';
import snowImg from './LandingPage/snow.webp';
import taiImg from './LandingPage/tai.webp';
import yaniImg from './LandingPage/yani.webp';
import zoeImg from './LandingPage/zoe.webp';
import keshaImg from './LandingPage/kesha.webp';
import sadiImg from './LandingPage/sadi.webp';
import zoe2Img from './LandingPage/zoe2.webp';
import valImg from './LandingPage/val.webp';
import aboutHeroImg from './LandingPage/about_hero.webp';
import profile1 from './LandingPage/profile_1.webp';
import profile2 from './LandingPage/profile_2.webp';
import profile3 from './LandingPage/profile_3.webp';
import profile4 from './LandingPage/profile_4.webp';
import profile5 from './LandingPage/profile_5.webp';
import profile6 from './LandingPage/profile_6.webp';

// New Grads Imports
import grad1 from './Portfolio/grad_1.webp';
import grad2 from './Portfolio/grad_2.webp';
import grad3 from './Portfolio/grad_3.webp';
import grad4 from './Portfolio/grad_4.webp';
import grad5 from './Portfolio/grad_5.webp';

import grad6 from './Portfolio/grad_6.webp';
import grad7 from './Portfolio/grad_7.webp';
import grad8 from './Portfolio/grad_8.webp';
import grad9 from './Portfolio/grad_9.webp';
import grad10 from './Portfolio/grad_10.webp';
import grad11 from './Portfolio/grad_11.webp';

// Birthday Imports
import birthday1 from './Portfolio/birthday_1.webp';
import birthday2 from './Portfolio/birthday_2.webp';
import birthday3 from './Portfolio/birthday_3.webp';
import birthday4 from './Portfolio/birthday_4.webp';
import birthday5 from './Portfolio/birthday_5.webp';
import birthday6 from './Portfolio/birthday_6.webp';
import birthday7 from './Portfolio/birthday_7.webp';
import birthday8 from './Portfolio/birthday_8.webp';
import birthday9 from './Portfolio/birthday_9.webp';

// Portrait Imports
import portrait1 from './Portfolio/portrait_1.webp';
import portrait2 from './Portfolio/portrait_2.webp';
import portrait3 from './Portfolio/portrait_3.webp';
import portrait4 from './Portfolio/portrait_4.webp';
import portrait5 from './Portfolio/portrait_5.webp';
import portrait6 from './Portfolio/portrait_6.webp';
import portrait7 from './Portfolio/portrait_7.webp';
import portrait8 from './Portfolio/portrait_8.webp';
import portrait9 from './Portfolio/portrait_9.webp';
import portrait10 from './Portfolio/portrait_10.webp';
import portrait11 from './Portfolio/portrait_11.webp';
import portrait12 from './Portfolio/portrait_12.webp';
import portrait13 from './Portfolio/portrait_13.webp';

// Couples Imports
import couples1 from './Portfolio/couples_1.webp';
import couples2 from './Portfolio/couples_2.webp';
import couples3 from './Portfolio/couples_3.webp';

// Branding Imports
import branding1 from './Portfolio/branding_1.webp';
import branding2 from './Portfolio/branding_2.webp';
import branding3 from './Portfolio/branding_3.webp';
import branding4 from './Portfolio/branding_4.webp';
import branding5 from './Portfolio/branding_5.webp';
import branding6 from './Portfolio/branding_6.webp';
import branding7 from './Portfolio/branding_7.webp';
import branding8 from './Portfolio/branding_8.webp';
import branding9 from './Portfolio/branding_9.webp';

// Maternity Imports
import maternity1 from './Portfolio/maternity_1.webp';
import maternity2 from './Portfolio/maternity_2.webp';
import maternity3 from './Portfolio/maternity_3.webp';

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

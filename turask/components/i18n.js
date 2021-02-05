import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import * as RNLocalize from 'react-native-localize';
// import { locales } from './locales';
// import en from './locales/en.json';
// import sk from './locales/sk.json';

const resources = {
  sk:{
  translation: {
    "Welcome": "Vitajte",
    "Hiker planner": "Plánovač turistiky",
    "Map": "Mapa",
    "Where to go": "Kam ísť",
    "Visited places": "Navštívené miesta",
    "Hiking places": "Turistické miesta",
    "new place...": "nové miesto...",
    "ADD": "PRIDAŤ",
    "word must be over 3 chars long":"slovo musí byť dlhšie ako 3 znaky",
    "Understood": "Rozumiem",
    "Checkout some of the most visited places on Slovakia by clicking on the Map button.":"Prezrite si najnavštívovanejšie miesta na Slovensku klinutím na tlačidlo Mapa. ",
    "By clicking on button, Where to go, you can take closer look of some of the most visited places on Slovakia.":"Kliknutím na tlačidlo, Kam ísť, sa môžete lepšie pozrieť na najnavštívovanejšie miesta Slovenska",
    "Planner":"Plánovač",
    "Plan out your hiking tour.":"Naplánujte si vašu túru.",
},
  en:{
    translation: {
      "Welcome":"Welcome",
      "Hiker planner" :"Hiker planner" ,
      "Map": "Map",
      "Where to go":"Where to go",
      "Visited places":"Visited places",
      "Hiking places":"Hiking places",
      "new place..." :"new place..." ,
      "ADD" :"ADD" ,
      "word must be over 3 chars long":"word must be over 3 chars long",
      "Understood":"Understood",
      "Checkout some of the most visited places on Slovakia by clicking on the Map button.":"Prezrite si najnavštívovanejšie miesta na Slovensku klinutím na tlačidlo Mapa. ",
      "By clicking on button, Where to go, you can take closer look of some of the most visited places on Slovakia.":"By clicking on button, Where to go, you can take closer look of some of the most visited places on Slovakia.",
      "Planner":"Planner",
      "Plan out your hiking tour.":"Plan out your hiking tour.",
    }
  }
}}

i18n
    .use(initReactI18next) 
    .init({
      resources,
      lng: 'en',
      keySeparator: false, 
      interpolation: {
        escapeValue: false, 
      },
    });
    export default i18n;
// RNLocalize.addEventListener('change', () => {
//     const language = RNLocalize.getLocales()[0].languageCode;
//     i18n.changeLanguage(language);
//     console.log(`>> language has been changed to ${language}`);
//   });
  
//   i18n
//     .use(initReactI18next) 
//     .init({
//       resources: locales,
//       fallbackLng: 'en',
//       lng: RNLocalize.getLocales()[0].languageCode,
//       keySeparator: false, 
//       interpolation: {
//         escapeValue: false, 
//       },
//     });
  
//   export default i18n;
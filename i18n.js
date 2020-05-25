import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    "en": {
      translations: {
        "Hi, my name is": "Hi, my name",
        "header_contact": "contact",
        "header_projects": "projects",
        "header_about": "about",
        "footer_by": "by",
        "footer_languages": "languages",
        "home_description_a": "A",
        "home_description_and_former_developer_who_seeks_to": "and former developer who seeks to",
        "home_description_understand_and_solve_problems": "understand and solve problems",
        "home_description_by_transforming_user_pain_points_into": "by transforming user pain points into",
        "home_description_business_opportunities": "business opportunities",
        "home_description_and_in": "and in",
        "home_description_great_products": "great products",
        
      }
    },
    "pt": {
      translations: {
        "Hi, my name is": "Olá, me chamo",
        "header_contact": "contato",
        "header_projects": "projetos",
        "header_about": "sobre mim",
        "footer_by": "por",
        "footer_languages": "idiomas",
        "home_description_a": "Um",
        "home_description_and_former_developer_who_seeks_to": "e um ex-dev que busca",
        "home_description_understand_and_solve_problems": "entender e resolver problemas",
        "home_description_by_transforming_user_pain_points_into": "transformando as dores dos usuários em",
        "home_description_business_opportunities": "oportunidades de negócios",
        "home_description_and_in": "e em",
        "home_description_great_products": "grandes produtos",

      },
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
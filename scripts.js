// function expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active')
});

//close the menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
});

//close the menu on click
selectElement('.nav-list').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
});

i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextXHRBackend)
  .init({
    fallbackLng: 'pt',
    debug: true,
    whitelist: ['en', 'pt'],
    backend: {
        loadPath: '/locales/{{lng}}/translation.json',
        crossDomain: true
      }
  }, function(err, t) {
    // init set content
    updateContent();
  });


// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
  
    // header
    document.getElementById('header_portfolio').innerHTML = i18next.t("header.portfolio");
    document.getElementById('header_resume').innerHTML = i18next.t("header.resume");
    document.getElementById('header_about_me').innerHTML = i18next.t("header.about_me");
    document.getElementById('header_contact').innerHTML = i18next.t("header.contact");

    // hero section
    document.getElementById('main_text').innerHTML = i18next.t("main_text");

    // portfolio section
    document.getElementById('portfolio_title_1').innerHTML = i18next.t("portfolio.subtitle");
    document.getElementById('portfolio_title_2').innerHTML = i18next.t("portfolio.main_title");
    document.getElementById('portfolio_title_3').innerHTML = i18next.t("portfolio.description");
    // portfolio project 1
    document.getElementById('project_1_portfolio_desc_1').innerHTML = i18next.t("portfolio.project_1.first_paragraph");
    document.getElementById('project_1_portfolio_desc_2').innerHTML = i18next.t("portfolio.project_1.second_paragraph");
    // portfolio project 2
    document.getElementById('project_2_portfolio_desc_1').innerHTML = i18next.t("portfolio.project_2.first_paragraph");
    document.getElementById('project_2_portfolio_desc_2').innerHTML = i18next.t("portfolio.project_2.second_paragraph");

    // resume section
    document.getElementById('resume_title_1').innerHTML = i18next.t("resume.subtitle");
    document.getElementById('resume_title_2').innerHTML = i18next.t("resume.main_title");
    document.getElementById('resume_title_3').innerHTML = i18next.t("resume.description");
    
    // resume titles
    document.getElementById('resume_titles_education').innerHTML = i18next.t("resume.titles.education");
    document.getElementById('resume_titles_work').innerHTML = i18next.t("resume.titles.work");
    document.getElementById('resume_titles_certificate').innerHTML = i18next.t("resume.titles.certificate");
    
    // eductation
    document.getElementById('resume_education_course_1').innerHTML = i18next.t("resume.education.course_1");
    document.getElementById('resume_education_course_2').innerHTML = i18next.t("resume.education.course_2");

    // work
    document.getElementById('pontotel_date').innerHTML = i18next.t("resume.work.pontotel.date");
    document.getElementById('pontotel_desc_1').innerHTML = i18next.t("resume.work.pontotel.desc_1");
    document.getElementById('pontotel_desc_2').innerHTML = i18next.t("resume.work.pontotel.desc_2");

    document.getElementById('opus_desc_1').innerHTML = i18next.t("resume.work.opus.desc_1");

    // about me section
    document.getElementById('about_title_1').innerHTML = i18next.t("about_me.subtitle");
    document.getElementById('about_title_2').innerHTML = i18next.t("about_me.main_title");
    document.getElementById('about_desc_1').innerHTML = i18next.t("about_me.section.first_paragraph");
    document.getElementById('about_desc_2').innerHTML = i18next.t("about_me.section.second_paragraph");
    document.getElementById('about_desc_3').innerHTML = i18next.t("about_me.section.third_paragraph");

    //contact section
    document.getElementById('contact_title_1').innerHTML = i18next.t("contact.subtitle");
    document.getElementById('contact_title_2').innerHTML = i18next.t("contact.main_title");
    document.getElementById('contact_title_3').innerHTML = i18next.t("contact.description_1");
    document.getElementById('contact_title_4').innerHTML = i18next.t("contact.description_2");


    // buttons
    document.getElementById('buttom_more_about_me').innerHTML = i18next.t("buttom.more_about_me");
    document.getElementById('buttom_my_resume').innerHTML = i18next.t("buttom.my_resume");
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});


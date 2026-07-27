const languageSelect = document.getElementById("languageSelect");

const subtitle = document.getElementById("subtitle");

const titleInput = document.getElementById("titleInput");

const textInput = document.getElementById("textInput");

const saveBtn = document.getElementById("saveBtn");

const searchInput = document.getElementById("searchInput");

const languageLabel = document.getElementById("languageLabel");
const translations = {

    en:{

        subtitle:"Professional Notes Manager",

        language:"🌐 Language",

        title:"Title",

        content:"Content",

        save:"Save Note",

        search:"Search Notes..."

    },

    de:{

        subtitle:"Professioneller Notizmanager",

        language:"🌐 Sprache",

        title:"Titel",

        content:"Inhalt",

        save:"Notiz speichern",

        search:"Notizen suchen..."

    }

};
function changeLanguage(language){

    subtitle.textContent =
        translations[language].subtitle;

    languageLabel.textContent =
        translations[language].language;

    titleInput.placeholder =
        translations[language].title;

    textInput.placeholder =
        translations[language].content;

    saveBtn.textContent =
        translations[language].save;

    searchInput.placeholder =
        translations[language].search;

}
languageSelect.addEventListener("change",function(){

    changeLanguage(this.value);

});
changeLanguage("en");

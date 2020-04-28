// TODO: Update the .change-language links to work without javascript, by having two urls pointing to this file, one with toki pona
// as default expanded, one with english
function set_lang_en() {
    document.getElementById('toki-wrapper').classList.remove("expanded");
    document.getElementById('en-wrapper').classList.add("expanded");
}
function set_lang_toki() {
    document.getElementById('toki-wrapper').classList.add("expanded");
    document.getElementById('en-wrapper').classList.remove("expanded");
}

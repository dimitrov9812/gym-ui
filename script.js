// Handle Localization ===================================================================
let selectedLanguage = document.getElementsByTagName('html').item(0).getAttribute('lang');
console.log(selectedLanguage);

// Get all the elements
let elements = document.getElementsByTagName('*');
let elementsCount = elements.length;



// Handle Language select
let languageSelector = document.querySelector('.language-select');

handleLanguageSelect('en');

function handleLanguageSelect(value) {
    selectedLanguage = languageSelector.value;
    localizePage();
}

// Apply the styles on each localized element and toggle it's display propery by changing the style
function localizePage() {
    for (let i = 0; i < elementsCount; i++) {
        const element = elements.item(i)
        if (element.hasAttribute('lang') && element.tagName.toString() != 'HTML') {

            if (element.attributes) {
                let attributesLength = element.attributes.length;

                for (let k = 0; k < attributesLength; k++) {
                    const attribute = element.attributes.getNamedItem('lang');

                    if (attribute.value != selectedLanguage) {
                        element.setAttribute('style','display: none');
                    } else {
                        element.setAttribute('style','display: block');
                    }
                }
            }
        }
    }
}

// =====================================================================================


// Handle theme change =================================================================
function changeTheme() {
    document.body.classList.toggle('dark');
}
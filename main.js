import data from './data.json' assert{type: 'json'}

window.loader = (language = 'EN') => {
    data.map(element => {
        const html_element = document.getElementById(element.REF)
        language_selector(element, html_element, language)
    })
}

const language_selector = (element , html_element, language = 'EN') => {
    if (language === 'ES') return html_element.innerText = element.ES
    if (language === 'EN') return html_element.innerText = element.EN
    if (language === 'RU') return html_element.innerText = element.RU
    return html_element.innerText = element.EN
}
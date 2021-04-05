const buttons = document.querySelectorAll('.card__button');
const contentText = document.querySelector('.containerTextCards')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const textDom = document.querySelector('.textLearnMore');
        if(textDom === null) {
            validation(index)
            const deleteText = document.querySelector('.x');
            deleteElementText(deleteText);
            saveLS(true, index)
        }else {
            textDom.remove();
            validation(index);
            const deleteText = document.querySelector('.x');
            const exist = domExist(deleteText);
            deleteElementText(deleteText);
            saveLS(exist, index, )
        }
    });    
});

document.addEventListener('DOMContentLoaded', () => {
    getItemsLS()
    const deleteText = document.querySelector('.x');
    deleteElementText(deleteText);
})

function deleteElementText (element) {
    element.addEventListener('click', () => {
        const parent = element.closest('.textLearnMore');
        parent.remove();
        deleteElement()
    })
}

function createElementHtml (image, color) {
    const div = document.createElement('div');
    div.className = `textLearnMore ${color}`;
    div.innerHTML = `
        <div class="containerText">
            <h1 class="containerText__title">Lorem ipsum dolor sit.</h1>
            <p class="contianerText__paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellendus tempora optio ab esse consequatur maxime fugiat quibusdam cupiditate voluptatum.</p>
            <img src="images/icon-${image}.svg">
            <i class="x">X</i>
        </div>
    `;
    return div;
}

function validation (index) {
    if(index === 0) return contentText.appendChild(createElementHtml('sedans','orange')), 'funciona';
    else if (index === 1) return contentText.appendChild(createElementHtml('suvs','cyan'));
    else if (index === 2) return contentText.appendChild(createElementHtml('luxury','veryCyan'));
}

function domExist (element) {
    element === null ? false: true;
}

function saveLS (dom, index) {
    const valuesLearn = {
        index: `${index}`,
        dom: `${dom}`
    }   
    const jsonTransform = JSON.stringify(valuesLearn)
    localStorage.setItem('learnmore',[jsonTransform]);
}

function getItemsLS () {
    const ls = JSON.parse(localStorage.getItem('learnmore'));
    if (ls.dom === 'true') {
        if(ls.index === '0') contentText.appendChild(createElementHtml('sedans','orange'))
        else if (ls.index === '1') contentText.appendChild(createElementHtml('suvs','cyan'))
        else if (ls.index === '2') contentText.appendChild(createElementHtml('luxury','veryCyan'))
    }
}

function deleteElement () {
    const parseLS = JSON.parse(localStorage.getItem('learnmore'));
    parseLS.dom = false;
    saveLS(parseLS.dom, parseLS.index)
}


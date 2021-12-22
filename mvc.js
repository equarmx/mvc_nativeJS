const itemsWrapper = document.querySelector('.container-items__items')

console.log(itemsWrapper)

class View {
    constructor(itemsWrapper) {
        this.element = itemsWrapper;
        this.itemList = [];
    }

    // Формируем HTML <li></li> с <button/>
    static createItem(text, id) {
        const li = document.createElement('li')
        li.textContent = text
        let changed = View.changeLastChar(li.textContent)
        li.className = `item${id}`

        const btn = document.createElement('button')
        btn.textContent = `Выбрать ${changed}`
        btn.className = `btn${id}`
        btn.value = id
        li.appendChild(btn)

        return li
    }

    // Меняем окончание наименования элемента
    static changeLastChar(text) {
        if (text.charAt(text.length-1) === 'а') {
            return `${text.slice(0, text.length-1)}у`
        }
    }

    // Отрисовываем полученные данные для пользователя
    updateItemList() {
        // Очищаем все элементы массива
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }

        // Проходим по массиву и выбираем оттуда значение элемента и id
        for (let i = 0; i < this.itemList.length; i++) {
            let id = i + 1;
            this.element.appendChild(View.createItem(this.itemList[i], id))
        }
        console.log(this.itemList)
    }

    // Добавление элемента в список
    addItemList(text) {
        this.itemList.push(text);
    }

    // Получаем элементы
    getItemList(text) {
        /* Здесь должен быть запросу к серверу, чтобы получить список элементов для отрисования пользователю */
        /* Используем заглушку */
        for (let i = 0; i < 5; i++) {
            this.addItemList(text)
        }
        this.updateItemList()
    }
}

const items = new View(itemsWrapper);
items.getItemList('Игрушка')


class Controller {
    constructor(event) {
        this.event = event;
        this.elemsId = [];
    }

    addElems(items) {
        if (Array.isArray(items)) {
            for (let i = 0; i < items.length; i++) {
                this.elemsId.push(i+1)
            }
            this.setEvents(this.event)
        }
    }

    setEvents(event) {
        function onClicked(event) {
            console.log('Touched!')
        }

        for (let i = 0; i < this.elemsId.length; i++) {
            let element = document.querySelector(`.btn${this.elemsId[i]}`)
            console.log(element)
            element.addEventListener(event, onClicked())
        }

        // this.elemsId.forEach(id => {
        //     let element = document.querySelector(`.btn${id}`)
        //     console.log(element)
        //     element.addEventListener(event, onClicked())
        // })
    }

    // const btn = document.querySelector('.btn1');
    // function clickHandler(event) {
    //     console.log('You clicked');
    // }
    // btn.addEventListener('click', clickHandler);

    // onClicked(event) {
    //     return console.log(`touched elems`)
    // }
}

const controller = new Controller('click')
controller.addElems(items.itemList)


/* ЗАНОВО */

window.addEventListener('load', () => {
    const model = new Model(['Игрушка', 'Подушка', 'Апельсин', 'Арбуз', 'Кепка'])
    const view = new View(model, {
        'itemsWrapper' : document.querySelector('.container-items__items'),
        getElems: () => {
            const arrayBtn = []
            // arrayBtn.push(...document.querySelector('.container-items__items').childNodes).map(elem => elem.childNodes.)
        }
    })
    const controller = new Controller(model, view)
})

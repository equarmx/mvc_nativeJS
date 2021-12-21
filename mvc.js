const itemsWrapper = document.querySelector('.container-items__items')

console.log(itemsWrapper)

class View {
    constructor(itemsWrapper) {
        this.element = itemsWrapper;
        this.itemList = [];
    }

    static createItem(text) {
        const li = document.createElement('li')
        li.textContent = text
        let changed = View.changeLastChar(li.textContent)

        const btn = document.createElement('button')
        btn.textContent = `Выбрать ${changed}`
        li.appendChild(btn)

        return li
    }

    static changeLastChar(text) {
        if (text.charAt(text.length-1) === 'а') {
            return `${text.slice(0, text.length-1)}у`
        }
    }

    getItemList() {
        // Очищаем все элементы массива
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }

        //
        for (const item of this.itemList) {
            this.element.appendChild(View.createItem(item))
        }
        console.log(this.itemList)
    }

    addHTML(text) {
        this.itemList.push(text);
        this.getItemList()
    }
}

const items = new View(itemsWrapper);



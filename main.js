const tabs = document.querySelectorAll('.tab-item')
const tabItems = document.querySelectorAll('.tab-content-item')


tabs.forEach(tab => tab.addEventListener('click', selectItem));


function selectItem() {
    removeBorder()
    removeShow()
    this.classList.add('tab-border')
    const item = document.querySelector(`#${this.id}-content`)
    item.classList.add('show')
}

function removeBorder() {

    tabs.forEach(tab => tab.classList.remove('tab-border'))
}

function removeShow() {

    tabItems.forEach(tab => tab.classList.remove('show'))
}
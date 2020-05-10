const keyLocalСostAccounting = "CAList";

export function saveCAList(list) {
    localStorage.setItem(keyLocalСostAccounting, JSON.stringify(list));
}

export function getCAList() {
    const listString = localStorage.getItem(keyLocalСostAccounting);
    return sortList(listString ? JSON.parse(listString) : []);
}

export function findById(id){
    const list = getCAList();
    return list.find(val => val.id === id);
}

export function editElem(elem){
    let list = getCAList();
    const index = list.findIndex(val => val.id === elem.id);
    list[index] = elem;
    saveCAList(list);
    return list;
}

export function sortList(list, filter = "ByDateRevers") {
    switch (filter) {
        default:
        case "ByDateRevers":
            list.sort((x, y) => (x.date >y.date) ? 1 : ((y.date> x.date)? -1:0)).reverse();
            return list;
        case "ByDate":
            list.sort((x, y) => (x.date >y.date) ? 1 : ((y.date> x.date)? -1:0));
            return list;
    }
}

export function getCAListByType(type){
    return getCAList().filter(el => 
        el.type === type
    );
}

export function getCAListForLineChart(){
    let list = sortList(getCAList(), 'ByDate');
    list = list.map(val => {
        return {date: val.date, 
        total: (val.type==='income'? val.price: -val.price)}}
        );
    if (list.length>1){
        for (let i = 1; i < list.length; i++) {
            list[i] = {total: list[i].total + list[i-1].total, date: list[i].date}
        }
    }
    return list;
}
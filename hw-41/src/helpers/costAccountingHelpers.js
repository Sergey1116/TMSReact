const keyLocalСostAccounting = "CAList";

export function saveCAList(list) {
    localStorage.setItem(keyLocalСostAccounting, JSON.stringify(list));
}

export function getCAList() {
    const listString = localStorage.getItem(keyLocalСostAccounting);
    return listString ? JSON.parse(listString) : [];
}

export function sortList(list, filter = "All") {
    switch (filter) {
        default:
        case "All":
            list.sort((x, y) => x.date - y.date);
            return list;
        case "Incomes":
            return list.filter(val => val.type === "income");
        case "Outcomes":
            return list.filter(val => val.type === "outcome");
    }
}

// function setDefaultValues(){
//     const val = [{
//         name: "Drinking",
//         price: 50,
//         type: "income",
//         date: Date.now()
//     },{
//         name: "Eat",
//         price: 100,
//         type: "outcome",
//         date: (Date.now()+10)
//     },{
//         name: "Eat",
//         price: 100,
//         type: "outcome",
//         date: (Date.now()+20)
//     }]
//     saveCAList(val);
// }
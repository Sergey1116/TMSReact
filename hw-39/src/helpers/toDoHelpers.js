const keyLocalToDoList = "toDoList";

export function saveToDoList(list) {
    localStorage.setItem(keyLocalToDoList, JSON.stringify(list));
}

export function getToDoList() {
    const listString = localStorage.getItem(keyLocalToDoList);
    return listString ? JSON.parse(listString) : [];
}

export function filterList(list, filter = "All") {
    switch (filter) {
        default:
        case "All":
            list.sort((x, y) => Number(x.completed) - Number(y.completed));
            return list;
        case "New":
            return list.filter(val => val.completed === false);
        case "Completed":
            return list.filter(val => val.completed === true);
    }
}
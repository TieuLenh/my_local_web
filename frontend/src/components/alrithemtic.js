const subList = (list = [], start = 0, end = list.length) => {
    if(start < 0 || end > list.lenght || start > end) return null;
    let result = [];
    for(let i = start; i < end; i++){
        result.push(list[i]);
    }
    return result;
}

export {subList};
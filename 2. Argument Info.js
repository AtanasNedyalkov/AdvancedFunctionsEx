function solve(...params){
    let result = {};
    for (let element of params) {
        let type = typeof(element)
        console.log(`${(type)}: ${element}`)

        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }
        result[type]+=1
    }
    let buff = "";
    for (let [k,v] of Object.entries(result)){

        buff += `${k} = ${v}\n`
    }
    console.log(buff)
    
    
}
solve('cat', 42, function () { console.log('Hello world!'); })
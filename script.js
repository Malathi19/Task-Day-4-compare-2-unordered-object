var obj1 = {"name" : "person1", "age" : 5};
var obj2 = {"age" : 5, "name" : "person1"};




function sortObj(unordered) {
    const ordered = Object.keys(unordered).sort().reduce(
        (obj, key) => { 
          obj[key] = unordered[key]; 
          return obj;
        }, 
        {}
      );
      return ordered
      
}
console.log(JSON.stringify(sortObj(obj1)) == JSON.stringify(sortObj(obj2)));

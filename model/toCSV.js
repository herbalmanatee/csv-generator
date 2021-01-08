const _ = require('underscore');

let toCSV = (data) => {
  let template = _.template("<div><%- data%></div>");
  let dataObj = JSON.parse(data);
  //let csvString = '';
  let headerString = '';
  let bodyString = '';

  let traverseObj = (obj) => {
    for (let key in obj) {
      if (key === 'children') {
        for (let element of obj[key]) {
          traverseObj(element);
        }
      } else {
        if (!headerString.includes(key.toString())) {
          headerString += key + ',';
        }
        bodyString += obj[key].toString() + ',';
      }
    }
    return headerString+bodyString.slice(0,bodyString.length-1);
  }
  let getcsvString = traverseObj(dataObj);

  return template({data: getcsvString});
}
 export default toCSV;

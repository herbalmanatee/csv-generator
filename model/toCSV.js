const _ = require('underscore');

let toCSV = (data) => {
  let template = _.template("<div><%- data%></div>");
  let dataObj = JSON.parse(data);

  for (let key in dataObj) {
    console.log(dataObj[key]);
  }
  return template({data: dataObj});
}
 export default toCSV;

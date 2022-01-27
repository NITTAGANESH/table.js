var table = document.createElement('table')
table.classNam = "table";

var thead = document.createElement('th')
thead.className = "thead-dark";

var tr = document.createElement('tr');
var th1 = createtrth('th', 'firstname');
var th2 = createtrth('th', 'lastname');
var th3 = createtrth('th', 'middlename');
tr.append(th1, th2, th3);
thead.append(tr);

var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var th = createtrth('th', '1');
var td1 = createtrth('td', 'mark');
var td2 = createtrth('th', 'otto');
var td3 = createtrth('th', '@mdo');
tr.append(th, td1, td2, td3);
tbody.append(tr);
table.append(thead, tbody);
document.body.append(table);





function createtrth(elementname, value = "") {
    var td = document.createElement(elementname)
    td.innerHTML = value;
    return td;

}

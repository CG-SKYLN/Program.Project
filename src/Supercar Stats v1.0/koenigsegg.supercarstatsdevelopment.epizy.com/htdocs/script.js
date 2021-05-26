class Car {
  constructor(dropnum) {
    this.dropnum = dropnum;
  }
  createCar(carName, imgFile, modelYear) {
    var name = document.createElement("h2");
    name.innerHTML = carName.toString();
    var section = document.createElement("div");
    var img = document.createElement("img");
    img.src = imgFile.toString();
    var p = document.createElement("p");
    p.innerHTML = modelYear.toString();
    var text = document.createElement("p");
    section.appendChild(name)
    section.appendChild(img);
    section.appendChild(p);
    section.appendChild(this.factTable);
    section.appendChild(this.table);
    return section;
  }
  altStyle(varName, altImg) {
    var altSec = document.createElement("div");
    var variation = document.createElement("img");
    variation.src = altImg.toString();
    altSec.appendChild(variation);
    return altDrop;
  }

  //2nd, 3rd, 8th


  tableCell(info) {
    var cell = document.createElement("td");
    cell.innerHTML = info;
    return cell;
  }
  statsTable(speed, accel, qtrmi, hp, wt, price, text) {
    this.table = document.createElement("table");
    //table row = <tr> | each cell = <td> and goes inside <tr> | header cell = <th>
    var info = [speed, accel, qtrmi, hp, wt, price, text];
    var cells = new Array();
    for (var i = 0; i < 6; i++) {
      cells[i] = this.tableCell(info[i]);
    }
    var row2 = document.createElement("tr");
    row2.appendChild(cells[0]);
    row2.appendChild(cells[1]);
    row2.appendChild(cells[2]);
    var row3 = document.createElement("tr");
    row3.appendChild(cells[3]);
    row3.appendChild(cells[4]);
    row3.appendChild(cells[5]);
    this.factTable = document.createElement("table");
    var row1 = document.createElement("tr");
    cells[6] = this.tableCell(info[6]);
    cells[6].columnSpan = "3";
    row1.appendChild(cells[6]);
    this.table.appendChild(row2);
    this.table.appendChild(row3);
    this.factTable.appendChild(row1);
    return this.table;
  }
}

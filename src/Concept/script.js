class BrandDropdown{
  constructor(){
    var body = document.getElementById("main");
  }
  createDropdown(dropnum){

/* Dropdown order:
1. Bugatti
2. Ferrari
3. Lamborghini
4. Mclaren
5. Other

6. Divo
7. Chiron
8. Veyron

9. Roma
10. LaFerrari
11. FXX K

12. Hurucan
13. Adventador
14. Countach

15. P1
16. Speedtail
17. Spider

18. DMC Delorean
19. Konigsegg One:1
20. Ford GT
*/

    var dropdown = document.createElement("details");
    var summary = document.createElement("summary");
    var text = document.createElement("p");
    text.attributes = "id=table" + dropnum;
    dropdown.appendChild(summary);
    dropdown.appendChild(text);
  }
}


class CarDropdown extends BrandDropdown{
  constructor(dropnum) {
    super()
    createDropdown(dropnum);
  }
  statsTable(price, speed, accel, brake, qtrmi, hp, wt, info) { 
  //table row = <tr> | each cell = <td> and goes inside <tr> | header cell = <th>
  }
}
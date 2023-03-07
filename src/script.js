function tableCreate() {
let   raw = document.getElementById("input-area-id").value.trim()

    raw = raw.split('\n')
.map(cell => cell.split('\t').map(Number))
.sort((str1,str2) => str1[0]-str2[0]);

let sum = [raw[0]];

for( const row of raw.slice(1)){
//console.log(row) 
 if (row[0] === sum[sum.length-1][0]){
   sum[sum.length-1][1] += row[1];
   sum[sum.length-1][2] += row[2];
 } else sum.push(row)
} 
console.log('==================')
let[voltage, total, fails]=[[],[],[]]

for (const row of sum) {
 voltage.push(row[0]);
 total.push(row[1]);
 fails.push(row[2]);
}

const out=[voltage,total,fails];


console.log('[' + voltage.join(' ') + ']');
console.log('[' + total.join(' ') + ']');
console.log('[' + fails.join(' ') + ']');
console.log('==================')
console.log('Iraw{SetN}=[' + voltage.join(' ') + ']');
console.log('Nraw{SetN}=[' + total.join(' ') + ']');
console.log('Kraw{SetN}=[' + fails.join(' ') + ']');

    document.getElementById("first-table").remove();
    document.getElementById("line1").remove();
    document.getElementById("line2").remove();
    document.getElementById("line3").remove();

    const body = document.body,
          tbl = document.createElement('table');
    tbl.setAttribute("id", "first-table");
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i < 3; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < voltage.length; j++) {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(out[i][j]));
        td.style.border = '1px solid black';
      }
    }
    body.appendChild(tbl);
 
  // changes are stuck
  const par1 = body.appendChild(document.createElement('p'));
  const par2 = body.appendChild(document.createElement('p'));
  const par3 = body.appendChild(document.createElement('p'));
  
  par1.setAttribute("id", "line1");
  par2.setAttribute("id", "line2");
  par3.setAttribute("id", "line3");

  par1.appendChild(document.createTextNode('Iraw{SetN}=[' + voltage.join(' ') + ']'));
  par2.appendChild(document.createTextNode('Nraw{SetN}=[' + total.join(' ') + ']'));
  par3.appendChild(document.createTextNode('Iraw{SetN}=[' + voltage.join(' ') + ']'+'<br>Nraw{SetN}=[' + total.join(' ') + ']'+'<br>Kraw{SetN}=[' + fails.join(' ') + ']'));

  
}


  document.getElementById("clickMe").onclick = tableCreate;
  // tableCreate();
// test push
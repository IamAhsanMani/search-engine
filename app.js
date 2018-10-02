var cellPhone = {
    samsung:{
        modals:{
            s9:{
                version: "Lolipop 7.5",
                ram: "4GB",
                storage: "64GB",
                camera: "16 Mega pixels",
                display: "5.9",
                fingerPrint: "yes",
                availabe: "yes",
            },
            s8:{
                version: "Lolipop 7.2",
                ram: "4GB",
                storage: "32GB",
                camera: "13 Mega pixels",
                display: "5.7",
                fingerPrint: "yes",
                availabe: "yes",
            },
            j7:{
                version: "KitKat 6.6",
                ram: "3GB",
                storage: "32GB",
                camera: "12 Mega pixels",
                display: "5.5",
                fingerPrint: "yes",
                availabe: "yes",
            },
            j5:{
                version: "kitKat",
                ram: "2GB",
                storage: "16GB",
                camera: "12 Mega pixels",
                display: "4.9",
                fingerPrint: "yes",
                availabe: "yes",
            },
            s6:{
                version: "Lolipop",
                ram: "4GB",
                storage: "32GB",
                camera: "16 Mega pixels",
                display: "5.7",
                fingerPrint: "yes",
                availabe: "yes",
            },
            s5:{
                version: "andriod",
                ram: "2GB",
                storage: "16GB",
                camera: "10 Mega pixels",
                display: "5.2",
                fingerPrint: "yes",
                availabe: "No",
            },
            s4:{
                version: "andriod",
                ram: "2GB",
                storage: "16GB",
                camera: "13 Mega pixels",
                display: "4.5",
                fingerPrint: "yes",
                availabe: "No",
            },
            s3:{
                version: "andriod 2.1",
                ram: "3GB",
                storage: "16GB",
                camera: "13 Mega pixels",
                display: "5.7",
                fingerPrint: "yes",
                availabe: "NO",
            },
            s2:{
                version: "Andriod",
                ram: "1GB",
                storage: "8GB",
                camera: "8 Mega pixels",
                display: "4.2",
                fingerPrint: "yes",
                availabe: "No",
            },
        }
    },
    iphone:{
        modals:{
            ix:{
                version: "A12",
                ram: "3GB",
                storage: "64GB",
                camera: "16 Mega pixels",
                display: "5.9",
                fingerPrint: "yes",
                availabe: "yes",
            },
            i8:{
                version: "A11.9",
                ram: "2GB",
                storage: "32GB",
                camera: "14 Mega pixels",
                display: "5.7",
                fingerPrint: "yes",
                availabe: "yes",
            },
            i6:{
                version: "A11.2",
                ram: "1GB",
                storage: "16GB",
                camera: "12 Mega pixels",
                display: "4.8",
                fingerPrint: "yes",
                availabe: "yes",
            },
            i5:{
                version: "A9.2",
                ram: "1GB",
                storage: "16GB",
                camera: "8 Mega pixels",
                display: "4",
                fingerPrint: "yes",
                availabe: "No",
            },
        }
    },
    oppo:{
        modals:{
            f3:{
                version: "MarshMallo",
                ram: "4GB",
                storage: "32GB",
                camera: "18 Mega pixels",
                display: "5.5",
                fingerPrint: "yes",
                availabe: "yes",
            }   
        }
    },
}


var title = document.getElementById("title");

// **************************** update btn ************************************

var footer = document.getElementById("footer");
var updateBtn1 = document.createElement("button");
updateBtn1.setAttribute("class", "btn btn-outline-primary");
updateBtn1.setAttribute("data-dismiss","modal");
updateBtn1.setAttribute("click", "update()");
var btnText1 = document.createTextNode("Update");
btnFont = document.createElement("li");
btnFont.setAttribute("class","fas fa-check a")
updateBtn1.appendChild(btnFont);
updateBtn1.appendChild(btnText1);
footer.appendChild(updateBtn1);

// **************************** update btn ************************************


for(var key in cellPhone) {
    for(var key2 in cellPhone[key]) {
        for(var key3 in cellPhone[key][key2]) {
            console.log(key3)
            document.getElementById("show").innerHTML += 
                "<tr class='text-center text-primary'>" + "<td colspan='10'>"+ key +"</td>" +"</tr>"    
                +"<tr class='text-center'>" + "<td>"+ key3 +"</td>"
                +"<td>" + cellPhone[key][key2][key3].version+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].ram+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].storage+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].camera+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].display+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].fingerPrint+ "</td>"
                +"<td>" + cellPhone[key][key2][key3].availabe+ "</td>"
                +"<td>" + "<button type='button' id='"+key3+"' class='btn btn-primary' data-toggle='modal' data-target='#myModal'><i class='fas fa-edit'></i> Edit</button>" + "</td>"
                +"<td>" + "<button type='button' id='"+key3+"' onClick='dele(id)' class='btn btn-danger'><i class='fas fa-trash'></i> Delete</button>"+ "</td>" + "</tr>" 
        }
    }
}



var textbox = document.getElementById("getData");
textbox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});



var btn = document.getElementById("btn");
btn.addEventListener("click", function() {

// search item 

for(var i in cellPhone) {
    for(var j in cellPhone[i]) {
        for(var k in cellPhone[i][j]) {
            // console.log(key3);
            var input = document.getElementById("getData").value.toLowerCase();
            console.log(input);

            var inputIndex = input.indexOf(k);
            console.log(inputIndex);
            // alert(inputIndex);
            var a = input.slice(inputIndex, inputIndex+2);
            console.log(a);
            if(k === a) {
            document.getElementById("show").innerHTML = 
            "<thead class='thead-dark'>" 
            +"<tr class='text-center'>"
                +"<th>Modal</th>"
                +"<th>Version</th>"
                +"<th>Ram</th>"
                +"<th>Internal Storage</th>"
                +"<th>Camera</th>"
                +"<th>Display</th>"
                +"<th>fingerPrint Sensor</th>"
                +"<th>Avability</th>"
            +"</tr>"
            +"</thead>"
                +"<tr class='text-center text-primary'>" + "<td colspan='8'>"+ i +"</td>" +"</tr>"    
                +"<tr class='text-center'>" + "<td>"+ k +"</td>"
                +"<td>" + cellPhone[i][j][k].version+ "</td>"
                +"<td>" + cellPhone[i][j][k].ram+ "</td>"
                +"<td>" + cellPhone[i][j][k].storage+ "</td>"
                +"<td>" + cellPhone[i][j][k].camera+ "</td>"
                +"<td>" + cellPhone[i][j][k].display+ "</td>"
                +"<td>" + cellPhone[i][j][k].fingerPrint+ "</td>"
                +"<td>" + cellPhone[i][j][k].availabe+ "</td>"+ "</tr>"
           }
        }
        }
    }
})


// ***************************** DELETE BUTTON CODING START ****************************

function dele(argId) {
    var a = document.getElementById(argId);
    // console.log(a)
    var b = a.parentNode;
    // console.log(b)
    var c = b.parentNode;
    // console.log(c)
    var d = c.previousSibling;
    // console.log(d)
    c.innerHTML = "";
    d.innerHTML = "";
}

// ***************************** DELETE BUTTON CODING END ****************************



// ***************************** EDIT BUTTON CODING START ***************************************

// edit 
var edit = document.getElementById("s9");
edit.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S9 items..."
    updateBtn1.setAttribute("onclick", "update()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
    console.log(first.innerHTML);
})

function update() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s9");
    
    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 2

var edit1 = document.getElementById("s8");
edit1.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S8 items..."
    updateBtn1.setAttribute("onclick", "update1()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
    console.log(first.innerHTML);
})

function update1() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s8");
    
    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}


// 3

var edit2 = document.getElementById("j7");
edit2.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung J7 items..."
    updateBtn1.setAttribute("onclick", "update2()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update2() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("j7");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 4

var edit3 = document.getElementById("j5");
edit3.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung J5 items..."
    updateBtn1.setAttribute("onclick", "update3()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update3() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("j5");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}


// 5

var edit4 = document.getElementById("s6");
edit4.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S6 items..."
    updateBtn1.setAttribute("onclick", "update4()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update4() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s6");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 6

var edit5 = document.getElementById("s5");
edit5.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S5 items..."
    updateBtn1.setAttribute("onclick", "update5()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update5() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s5");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 7

var edit6 = document.getElementById("s4");
edit6.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S4 items..."
    updateBtn1.setAttribute("onclick", "update6()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update6() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s4");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 8

var edit7 = document.getElementById("s3");
edit7.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S3 items..."
    updateBtn1.setAttribute("onclick", "update7()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update7() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s3");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}


// 9

var edit8 = document.getElementById("s2");
edit8.addEventListener("click", function() {
    title.innerHTML = "Updating Samsung S2 items..."
    updateBtn1.setAttribute("onclick", "update8()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update8() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("s2");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 10

var edit9 = document.getElementById("ix");
edit9.addEventListener("click", function() {
    title.innerHTML = "Updating iPhone ix items..."
    updateBtn1.setAttribute("onclick", "update9()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update9() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("ix");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 11

var edit10 = document.getElementById("i8");
edit10.addEventListener("click", function() {
    title.innerHTML = "Updating iPhone i8 items..."
    updateBtn1.setAttribute("onclick", "update10()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update10() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("i8");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 12

var edit11 = document.getElementById("i6");
edit11.addEventListener("click", function() {
    title.innerHTML = "Updating iPhone i6 items..."
    updateBtn1.setAttribute("onclick", "update11()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update11() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("i6");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 13

var edit12 = document.getElementById("i5");
edit12.addEventListener("click", function() {
    title.innerHTML = "Updating iPone i5 items..."
    updateBtn1.setAttribute("onclick", "update12()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update12() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("i5");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// 14

var edit13 = document.getElementById("f3");
edit13.addEventListener("click", function() {
    title.innerHTML = "Updating OPPO F3 items..."
    updateBtn1.setAttribute("onclick", "update13()")

    var par = this.parentNode;
    var grandPar = par.parentNode;
    var first = grandPar.childNodes[1];
    var second = grandPar.childNodes[2];
    var third = grandPar.childNodes[3];
    var fourth = grandPar.childNodes[4];
    var fifth = grandPar.childNodes[5];
    var sixth = grandPar.childNodes[6];
    var seven = grandPar.childNodes[7];
    console.log(first.innerHTML);
    document.getElementById("version").value = first.innerHTML;
    document.getElementById("ram").value = second.innerHTML;
    document.getElementById("storage").value = third.innerHTML;
    document.getElementById("camera").value = fourth.innerHTML;
    document.getElementById("display").value = fifth.innerHTML;
    document.getElementById("finger").value = sixth.innerHTML;
    document.getElementById("ava").value = seven.innerHTML;
})

function update13() {
    var vs = document.getElementById("version").value;
    var ra = document.getElementById("ram").value;
    var sto = document.getElementById("storage").value;
    var cam = document.getElementById("camera").value;
    var dis = document.getElementById("display").value;
    var fin = document.getElementById("finger").value;
    var ava = document.getElementById("ava").value;
    var realPar = document.getElementById("f3");

    var par = realPar.parentNode;
    var gPar = par.parentNode;
    var a = gPar.childNodes[1].innerHTML = vs;
    var b = gPar.childNodes[2].innerHTML = ra;
    var c = gPar.childNodes[3].innerHTML = sto;
    var d = gPar.childNodes[4].innerHTML = cam;
    var e = gPar.childNodes[5].innerHTML = dis;
    var f = gPar.childNodes[6].innerHTML = fin;
    var g = gPar.childNodes[7].innerHTML = ava;
    console.log(b);
}

// ***************************** EDIT BUTTON CODING END ***************************************



// search item



// modal input


// function edit() {
    // var edit = document.getElementById(arg);
    // edit.addEventListener("click", function()



    // updateBtn1.setAttribute("id", arg)
    // updateBtn1.setAttribute("onClick", "update()");
  

// var edit1 = document.getElementsByClassName("p")[1];
//     edit1.addEventListener("click", function() {

    
//     var par1 = document.getElementById("s8");
//     console.log(par1)
//     // var b = a.childNodes[1].innerHTML;
//     // console.log(b)
//     // // updateBtn.setAttribute("id", argId);
//     // // footer.appendChild(updateBtn);
//     // var b = a.parentNode;
//     // var c = b.parentNode;
//     // console.log(a,b,c);
//     var ve = par1.childNodes[1].innerHTML;
//     var ram = par1.childNodes[2].innerHTML;
//     var storage = par1.childNodes[3].innerHTML;
//     var camera = par1.childNodes[4].innerHTML;
//     var display = par1.childNodes[5].innerHTML;
//     var finger = par1.childNodes[6].innerHTML;
//     var availab = par1.childNodes[7].innerHTML;
//     console.log(ve,ram,storage,camera,display)     
//     ver.value = ve;
//     ra.value = ram;
//     sto.value = storage;
//     cam.value = camera;
//     dis.value = display;
//     fin.value = finger;
//     ava.value = availab;

// })

// var edit2 = document.getElementsByClassName("q")[2];
//     edit2.addEventListener("click", function() {

    
//     var par2 = document.getElementById("j7");
//     console.log(par2)
//     // var b = a.childNodes[1].innerHTML;
//     // console.log(b)
//     // // updateBtn.setAttribute("id", argId);
//     // // footer.appendChild(updateBtn);
//     // var b = a.parentNode;
//     // var c = b.parentNode;
//     // console.log(a,b,c);
//     var ve = par2.childNodes[1].innerHTML;
//     var ram = par2.childNodes[2].innerHTML;
//     var storage = par2.childNodes[3].innerHTML;
//     var camera = par2.childNodes[4].innerHTML;
//     var display = par2.childNodes[5].innerHTML;
//     var finger = par2.childNodes[6].innerHTML;
//     var availab = par2.childNodes[7].innerHTML;
//     console.log(ve,ram,storage,camera,display)     
//     ver.value = ve;
//     ra.value = ram;
//     sto.value = storage;
//     cam.value = camera;
//     dis.value = display;
//     fin.value = finger;
//     ava.value = availab;

// })

// var a = document.getElementById("s9");
// var vs = a.childNodes[1].innerHTML;
// var ram = a.childNodes[2].innerHTML;
// console.log(vs,ram)

// var b = document.getElementById("s8");
// var vs1 = b.childNodes[1].innerHTML;
// var ram1 = b.childNodes[2].innerHTML;
// console.log(vs1,ram1)
// console.log(b)
// var update = document.getElementById("update");
// var q = update.setAttribute("onClick", "abc")
// console.log(q);

// function update() {
//     var a = document.getElementById("s9");
//     var b = a.childNodes[1];
//     b.innerHTML = ver.value;
//     console.log(a);
// }

// var update1 = document.getElementsByClassName("bb")[1];
// update1.addEventListener("click", function() {
//     // var b = document.getElementById("s8");
//     vs1.innerHTML = ver.value;
//     console.log(vs1 = ver.value);
// })

// var update= document.getElementById("aaa");
// update.addEventListener("click", function() {
    // var aa = document.getElementById("s9");
    // var bb = aa.parentNode;
    // console.log(aa, bb)
// })
// function update(arg) {
//     var a = document.getElementById(arg);
//     var b = a.parentNode;
//     console.log(b)
// }

 
// var del = document.getElementsByClassName('a')[0];
// del.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })
// var del1 = document.getElementsByClassName('b')[1];
// del1.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del2 = document.getElementsByClassName('c')[2];
// del2.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del3 = document.getElementsByClassName('d')[3];
// del3.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del4 = document.getElementsByClassName('e')[4];
// del4.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del5 = document.getElementsByClassName('f')[5];
// del5.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del6 = document.getElementsByClassName('g')[6];
// del6.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del7 = document.getElementsByClassName('h')[7];
// del7.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del8 = document.getElementsByClassName('i')[8];
// del8.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del9 = document.getElementsByClassName('j')[9];
// del9.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del10 = document.getElementsByClassName('k')[10];
// del10.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del11 = document.getElementsByClassName('l')[11];
// del11.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del12 = document.getElementsByClassName('m')[12];
// del12.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// var del13 = document.getElementsByClassName('n')[13];
// del13.addEventListener("click", function(){
//     var a = this.parentNode;
//     var b = a.parentNode;
//     var c = b.previousSibling;
//     c.innerHTML = "";
//     b.innerHTML = "";

//     console.log(c)
// })

// modal btn




// var edit = document.getElementsByClassName("o")[0];
// edit.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update = document.getElementsByClassName("aa")[0];
//     update.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit1 = document.getElementsByClassName("p")[1];
// edit1.addEventListener("click", function() {
//     var editBtnRef1 = this.parentNode;
//     console.log(editBtnRef1);
//     var editBtnPar1 = editBtnRef1.parentNode;
//     console.log(editBtnPar1);
//     var version1 = editBtnPar1.childNodes[1];
//     var ram1 = editBtnPar1.childNodes[2];
//     var storage1 = editBtnPar1.childNodes[3];
//     var camera1 = editBtnPar1.childNodes[4];
//     var display1 = editBtnPar1.childNodes[5];
//     var finger1 = editBtnPar1.childNodes[6];
//     var availabe1 = editBtnPar1.childNodes[7];
//     console.log(ram1.innerHTML);
//     ver.value = version1.innerHTML;
//     ra.value = ram1.innerHTML;
//     sto.value = storage1.innerHTML;
//     cam.value = camera1.innerHTML;
//     dis.value = display1.innerHTML;
//     fin.value = finger1.innerHTML;
//     ava.value = availabe1.innerHTML;

    
// })

// // var update1 = document.getElementsByClassName("bb")[1];
// //     update1.addEventListener("click", function() {
// //         var a = editBtnRef1;

// //         console.log(a)
// //         version1.innerHTML = ver.value;
// //         console.log(version.innerHTML = ver.value);
// //         ram1.innerHTML = ra.value;
// //         storage1.innerHTML = sto.value;
// //         camera1.innerHTML = cam.value;
// //         display1.innerHTML = dis.value;
// //         finger1.innerHTML = fin.value;
// //         availabe1.innerHTML = ava.value;
// //     });

// var edit2 = document.getElementsByClassName("q")[2];
// edit2.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update2 = document.getElementById("update");
//     update2.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit3 = document.getElementsByClassName("r")[3];
// edit3.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update3 = document.getElementById("update");
//     update3.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit4 = document.getElementsByClassName("s")[4];
// edit4.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update4 = document.getElementById("update");
//     update4.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit5 = document.getElementsByClassName("t")[5];
// edit5.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update5 = document.getElementById("update");
//     update5.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit6 = document.getElementsByClassName("u")[6];
// edit6.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update6 = document.getElementById("update");
//     update6.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit7 = document.getElementsByClassName("v")[7];
// edit7.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update7 = document.getElementById("update");
//     update7.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit8 = document.getElementsByClassName("w")[8];
// edit8.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update8 = document.getElementById("update");
//     update8.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit9 = document.getElementsByClassName("x")[9];
// edit9.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update9 = document.getElementById("update");
//     update9.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit10 = document.getElementsByClassName("y")[10];
// edit10.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update10 = document.getElementById("update");
//     update10.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit11 = document.getElementsByClassName("z")[11];
// edit11.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update11 = document.getElementById("update");
//     update11.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit12 = document.getElementsByClassName("o2")[12];
// edit12.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update12 = document.getElementById("update");
//     update12.addEventListener("click", function() {
//         version.innerHTML = ver.value;
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });
// })

// var edit13 = document.getElementsByClassName("p2")[13];
// edit13.addEventListener("click", function() {
//     var editBtnRef = this.parentNode;
//     console.log(editBtnRef);
//     var editBtnPar = editBtnRef.parentNode;
//     console.log(editBtnPar);
//     var version = editBtnPar.childNodes[1];
//     var ram = editBtnPar.childNodes[2];
//     var storage = editBtnPar.childNodes[3];
//     var camera = editBtnPar.childNodes[4];
//     var display = editBtnPar.childNodes[5];
//     var finger = editBtnPar.childNodes[6];
//     var availabe = editBtnPar.childNodes[7];
//     console.log(ram.innerHTML);
//     ver.value = version.innerHTML;
//     ra.value = ram.innerHTML;
//     sto.value = storage.innerHTML;
//     cam.value = camera.innerHTML;
//     dis.value = display.innerHTML;
//     fin.value = finger.innerHTML;
//     ava.value = availabe.innerHTML;

//     var update13 = document.getElementById("update");
//     update13.addEventListener("click", function() {
//         console.log(version.innerHTML = ver.value);
//         ram.innerHTML = ra.value;
//         storage.innerHTML = sto.value;
//         camera.innerHTML = cam.value;
//         display.innerHTML = dis.value;
//         finger.innerHTML = fin.value;
//         availabe.innerHTML = ava.value;
//     });

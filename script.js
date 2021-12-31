var id = [];
var names = [];
var email = [];

var table = document.createElement("table");
table.setAttribute("class", "table table-dark table-striped");
var tHead = document.createElement("thead");
var trHead = document.createElement("tr");
for (var i = 0; i < 3; i++) {
    var th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.setAttribute("id", `head${i}`);
    trHead.appendChild(th);
}

var tBody = document.createElement("tbody");
for (var i = 0; i < 5; i++) {
    var trBody = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.setAttribute("id", `id${i + 1}`);
    td2.setAttribute("id", `name${i + 1}`);
    td3.setAttribute("id", `email${i + 1}`);
    trBody.appendChild(td1);
    trBody.appendChild(td2);
    trBody.appendChild(td3);
    tBody.appendChild(trBody);
}
table.appendChild(tHead);
table.appendChild(tBody);
tHead.appendChild(trHead);
document.body.appendChild(table);


document.getElementById("head0").innerText = "Id";
document.getElementById("head1").innerText = "Name";
document.getElementById("head2").innerText = "Email";


var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("class", "button-container");
document.body.appendChild(buttonDiv);
var prev = document.createElement("button");
prev.setAttribute("class", "btn btn-dark");
prev.setAttribute("id", "prev");
prev.onclick = function () { getData(this) };
prev.innerHTML = "<<";
buttonDiv.appendChild(prev);
for (var i = 1; i <= 10; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark");
    button.setAttribute("id", i);
    button.onclick = function () { getData(this) };
    button.innerHTML = i;
    buttonDiv.appendChild(button);
}
var next = document.createElement("button");
next.setAttribute("class", "btn btn-dark");
next.setAttribute("id", "next");
next.onclick = function () { getData(this) };
next.innerHTML = ">>";
buttonDiv.appendChild(next);

async function getData(yourClick) {
    try {
        var data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
        var obj = await data.json();
        for (var i = 0; i < obj.length; i++) {
            id.push(obj[i].id);
            names.push(obj[i].name);
            email.push(obj[i].email);
        }
    } catch (error) {
        console.log(error);
    }
    console.log("hi");
    if(yourClick.id == 1){
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i];
            document.getElementById(`name${i + 1}`).innerHTML = names[i];
            document.getElementById(`email${i + 1}`).innerHTML = email[i];
        }
    }
    if (yourClick.id == 2) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 5];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 5];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 5];

        }
    }
    if (yourClick.id == 3) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 10];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 10];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 10];

        }
    }
    if (yourClick.id == 4) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 15];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 15];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 15];
        }
    }
    if (yourClick.id == 5) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 20];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 20];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 20];
        }
    }
    if (yourClick.id == 6) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 25];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 25];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 25];
        }
    }
    if (yourClick.id == 7) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 30];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 30];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 30];
        }
    }
    if (yourClick.id == 8) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 35];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 35];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 35];
        }
    }
    if (yourClick.id == 9) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 40];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 40];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 40];
        }
    }
    if (yourClick.id == 10) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 45];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 45];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 45];
        }
    }
    if (yourClick.id == 11) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 50];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 50];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 50];
        }
    }
    if (yourClick.id == 12) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 55];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 55];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 55];
        }
    }
    if (yourClick.id == 13) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 60];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 60];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 60];
        }
    }
    if (yourClick.id == 14) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 70];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 70];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 70];
        }
    }
    if (yourClick.id == 15) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 75];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 75];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 75];
        }
    }
    if (yourClick.id == 16) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 80];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 80];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 80];
        }
    }
    if (yourClick.id == 17) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 85];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 85];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 85];
        }
    }
    if (yourClick.id == 18) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 90];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 90];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 90];
        }
    }
    if (yourClick.id == 19) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 95];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 95];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 95];
        }
    }
    if (yourClick.id == 20) {
        for (var i = 0; i < 5; i++) {
            document.getElementById(`id${i + 1}`).innerHTML = id[i + 100];
            document.getElementById(`name${i + 1}`).innerHTML = names[i + 100];
            document.getElementById(`email${i + 1}`).innerHTML = email[i + 100];
        }
    }
    if (yourClick.id == "next") {
        document.getElementById("1").setAttribute("id", "11");
        document.getElementById("2").setAttribute("id", "12");
        document.getElementById("3").setAttribute("id", "13");
        document.getElementById("4").setAttribute("id", "14");
        document.getElementById("5").setAttribute("id", "15");
        document.getElementById("6").setAttribute("id", "16");
        document.getElementById("7").setAttribute("id", "17");
        document.getElementById("8").setAttribute("id", "18");
        document.getElementById("9").setAttribute("id", "19");
        document.getElementById("10").setAttribute("id", "20");
        document.getElementById("11").innerHTML = "11";
        document.getElementById("12").innerHTML = "12";
        document.getElementById("13").innerHTML = "13";
        document.getElementById("14").innerHTML = "14";
        document.getElementById("15").innerHTML = "15";
        document.getElementById("16").innerHTML = "16";
        document.getElementById("17").innerHTML = "17";
        document.getElementById("18").innerHTML = "18";
        document.getElementById("19").innerHTML = "19";
        document.getElementById("20").innerHTML = "20";
    }

    if (yourClick.id == "prev") {
        document.getElementById("11").setAttribute("id", "1");
        document.getElementById("12").setAttribute("id", "2");
        document.getElementById("13").setAttribute("id", "3");
        document.getElementById("14").setAttribute("id", "4");
        document.getElementById("15").setAttribute("id", "5");
        document.getElementById("16").setAttribute("id", "6");
        document.getElementById("17").setAttribute("id", "7");
        document.getElementById("18").setAttribute("id", "8");
        document.getElementById("19").setAttribute("id", "9");
        document.getElementById("20").setAttribute("id", "10");
        document.getElementById("1").innerHTML = "1";
        document.getElementById("2").innerHTML = "2";
        document.getElementById("3").innerHTML = "3";
        document.getElementById("4").innerHTML = "4";
        document.getElementById("5").innerHTML = "5";
        document.getElementById("6").innerHTML = "6";
        document.getElementById("7").innerHTML = "7";
        document.getElementById("8").innerHTML = "8";
        document.getElementById("9").innerHTML = "9";
        document.getElementById("10").innerHTML = "10";
    }
}



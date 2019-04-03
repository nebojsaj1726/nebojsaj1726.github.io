function crtl() {
    let li = document.createElement("li");
    let sadr = document.getElementById("task").value;
    let txt = document.createTextNode(sadr);
    let xbt = document.createElement("span");
    let xtx = document.createTextNode("x");
    xbt.appendChild(xtx);
    li.appendChild(txt);
    li.appendChild(xbt);
    document.getElementById("list").appendChild(li);

    xbt.addEventListener("click", function() {
        let ul = document.getElementById("list");
        ul.removeChild(this.parentNode);
        lcst();
    });
    lcst();
}

function fltr() {
    let input = document.getElementById("flt");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function rmvt() {
    let ul = document.getElementById("list");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    lcst();
}

function lcst() {
    let lista = document.getElementById("list").innerHTML;
    localStorage.setItem("sachl", lista); 
}

window.onload = function() {
    document.getElementById("list").innerHTML = localStorage.getItem("sachl");
    let closebtns = document.getElementsByTagName("span");
    for (let i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            let ul = document.getElementById("list"); 
            ul.removeChild(this.parentNode);
            lcst();
        });
    }
    let input = document.getElementById("task");
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
        document.getElementById("bt1").click();
        }
    });
}

document.getElementById("bt1").addEventListener("click", crtl);
document.getElementById("bt2").addEventListener("click", rmvt);
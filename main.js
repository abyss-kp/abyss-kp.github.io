var x = document.querySelectorAll(".simage");
var count = 0;
setInterval(() => {
    if (count < x.length) {
        x[count].style.display = "block";
        if (count != 0) {
            x[count - 1].style.display = "none";
        }
        count++;
    } else {
        x[count - 1].style.display = "none";

        count = 0;
        x[count].style.display = "block";
    }
}, 3000)

function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/kapi1Pandey/repos')

    xhr.send();
    var table = document.getElementById("myTable");

    xhr.onload = function () {
        var rows = document.getElementById("myTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
        if (xhr.status == 200) {
            let n = JSON.parse(xhr.responseText);
            var cls = document.getElementById("GitData")
            if (rows < 2) {
                table.style.display = 'table';
                for (let j = 1; j <= n.length; j++) {
                    var row = table.insertRow(j);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = `${n[j - 1]["name"]}`;
                    cell2.innerHTML = `<a href="${n[j - 1]['html_url']}" target="_blank">${n[j - 1]['html_url']}</a>`

                }
            }
            window.location.hash = "";
            window.location.hash = "GIT";
        }
    }
}
let data = JSON.parse(localStorage.getItem('vaccineData'));

let html = "";

console.log(data);

data.forEach((elem) => {
    html += `
            <tr>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>${elem.age}</td>
            <td>${elem.phone}</td>
            <td>${elem.adhaar}</td>
            <td>${elem.address}</td>
            <td>${elem.date}</td>
            </tr>`
})

let table = document.getElementById('table');

table.innerHTML = table.innerHTML + html;
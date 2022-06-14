function submitHandler() {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let age = document.getElementById('userAge').value;
    let phone = document.getElementById('userPhone').value;
    let adhaar = document.getElementById('userNumber').value;
    let address = document.getElementById('userAddress').value;
    let date = document.getElementById('userDate').value;

    if(name == "" || age == "" || email == "" || phone == "" || adhaar == "" || date == "") {
        alert("Please fill all the fields");
        return;
    }

    let dataObj = [];

    let data = {
        name, email, age, phone, adhaar, address, date
    }
    dataObj.push(data);
    let fetchedData = JSON.parse(localStorage.getItem('vaccineData'));
    console.log("fetchedData", fetchedData);
    if(fetchedData != null) {
        fetchedData.forEach((elem) => {
            dataObj.push(elem);
        })
    }
    localStorage.setItem('vaccineData', JSON.stringify(dataObj));

    document.getElementById('userName').value = "";
    document.getElementById('userEmail').value = "";
    document.getElementById('userAge').value = "";
    document.getElementById('userPhone').value = "";
    document.getElementById('userNumber').value = "";
    document.getElementById('userAddress').value = "";
    document.getElementById('userDate').value = "";
}
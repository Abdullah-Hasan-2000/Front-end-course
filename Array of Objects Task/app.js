var stdObj = {
    name: "Ali",
    age: 20,
    city: "Karachi",
};

localStorage.setItem("stdObj", JSON.stringify(stdObj));

function addObj(key,value) {
    var arrayOfObj = localStorage.getItem("stdObj")
    var convertedArr = JSON.parse(arrayOfObj)
    console.log(convertedArr)

    convertedArr[key] = value
    console.log(convertedArr)
    localStorage.setItem("stdObj", JSON.stringify(convertedArr));
};

addObj('country','Pakistan');
addObj('address','Karimabad');
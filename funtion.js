/**
 * Ex about Function
 */
var a = null;
var b = null;

/**
 * Function tinh tong
 * @param {*} a number
 * @param {*} b number
 */
function tinhTong(a, b) {
    return a + b;
}

/**
 * Function tinh hieu
 * @param {*} a number
 * @param {*} b number
 */
function hieu(a, b) {
    return a - b;
}

/**
 * Function tinh thuong
 * @param {*} a number
 * @param {*} b number
 */
function thuong(a, b) {
    return a / b;
}

/**
 * Function tinh tich;
 * @param {*} a number
 * @param {*} b number
 */
function tich(a, b) {
    return a * b;
}
console.log(tinhTong(7, 5));
console.log(hieu(7, 2));
console.log(thuong(10, 5));
console.log(tich(2, 2));

/**
 * Ex about Object
 */
var yen = {
    name: "Yen",
    age: 20,
    address: "bac giang",
    class: "TH23.37",
    infoDetail: function () {
        return `${this.name} ${this.age} ${this.address}`;
    }
};
console.log(yen.name);
console.log(yen.age);
console.log(yen.infoDetail());

/**
 * Ex String
 */
var textRoom = "\"Hom nay troi that dep\""; // Data type string;
var countLength = textRoom.length; // Method đếm độ dài của chuỗi
console.log(textRoom);
console.log(countLength);

/**
 * Ex String method
 */
var str = "Hôm nay ăn gì ???";
var indexStrOne = str.indexOf("ăn"); // Method tìm kiếm trả về index hiện tại của ký tự;
console.log(indexStrOne);

var indexStrOneTwo = str.search("gi"); // Method tìm kiếm trả về index hiện tại của ký tự;
console.log(indexStrOneTwo);

/**
 * Ex Number
 */
var x = 6.8989
var y = "8";
var z = x - y;
var xx = x + y;
console.log(z);
console.log(xx);
console.log(x.toExponential(2));
console.log(x.toFixed(2));

/**
 * Ex Number
 */
var listName = ["Yen", "Ngoc", "Hieu", "Lai", "Bao", "Du", "bang"];

for (var i = 0; i < listName.length; i++) {
    console.log(`Tên: ${listName[i]}`)
}

console.log(listName[0]);
listName.pop(); // xoa phan tu cuoi ra khoi mang;
listName.push("An"); // them mot phan tu vo mang;
listName.shift(); //chuyen phan tu dau tien ra ngoai;

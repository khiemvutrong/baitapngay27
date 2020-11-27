//funtion
var a,b;
// Ham tinh tong
function tinhTong(a,b){
    return a+b;
}
//Ham tinh hieu
function Hieu(a,b){
    return a-b;
}
// Ham tinh thuong 
function Thuong(a,b){
    return a/b;
}
//Ham tinh tich
function Tich(a,b){
    return a*b;
}
//Ojects

var YEN ={
    Ten:"Yen",
    Tuoi:20,
    Quequan:"bacgiang",
    Lop:"TH2337",
    thongTin: function(){
        return this.Ten +" "+this.Tuoi+" "+this.Quequan;  
    }
    };
    //String 
    var string="\"Hom nay troi that dep\"";
    var doDai=string.length;
    // ở đây ta đặt một biến string với dữ liệu kiểu chuỗi(" hôm nay trời thật đẹp") sau đó khai báo  một biến doDai để tính để đếm xem có bao nhiêu ký tự trong chuỗi string 
    //string method
    var str="Hôm nay ăn gì ???";
    var tk=str.indexOf("ăn");
    var timkiem=str.search("gi");
    // ở đây ta đặt một biến str với dữ liệu kiểu chuỗi (hôm nay ăn gì)
    //  sau đó đặt một biến tk để chỉ ra từ mình cần tim kiếm ở vị trí thứ bao nhiêu
    //  JavaScript đếm các vị trí từ 0.
    //  0 là vị trí đầu tiên trong một chuỗi, 1 là thứ hai, 2 là thứ ba
    //  ở đây tk tìm được vị trí từ "ăn "ở vị trí só 8 
    //  còn timliem vì không có chữ cần tìm nên giá trị trả về sẽ là -1
    //Number
        var x=6.8989,y="8";
        var z=x-y;
        var xx=x+y;
        // trong js khi ta khai báo kiểu chuỗi mà vẫn thực hiện tính toán ( trừ phép cộng )
        // JavaScript sẽ cố gắng chuyển đổi chuỗi thành số trong tất cả các phép toán số.
        // còn phép cộng sẽ thực hiện như bình thường nối 2 chuỗi lại với nhau
    //Array
    var  Name=["Yen","Ngoc","Hieu","Lai","Bao","Du","bang"];
    var len=Name.length;
    Name.pop();// xoa phan tu cuoi ra khoi mang 
    Name.push("An");// them mot phan tu vo mang
    Name.shift();//chuyen phan tu dau tien ra ngoai
    for (var i=0;i<len;i++)
    {
        var text;
        text +="Tên :"+ Name[i]+ " ";

    }

console.log(tinhTong(7,5));
console.log(Hieu(7,2));
console.log(Thuong(10,5));
console.log(Tich(2,2));
console.log(YEN.Ten);
console.log(YEN.Tuoi);
console.log(YEN.thongTin());
console.log(string);
console.log(doDai);
console.log(tk);
console.log(timkiem);
console.log(z);
console.log(xx);
console.log(x.toExponential(2));
console.log(x.toFixed(2));
console.log(text);
console.log(Name[0]);

//bài 1:
//input: nhập số ngày đi làm và * với số tiền công 1 ngày
//output tổng tiền lương
console.log("bai1")
function CongLam(){
    var soDate = Number(document.getElementById("Date").value);
    const motDate = 100000;
    var tongTien = motDate * soDate;
    document.getElementById("bai1").innerHTML = "tong tien : " + tongTien;
}
document.getElementById("btn-bai1").onclick = CongLam;
// --------------------
//bài 2:
//input: nhập 5 số
//output tính trung bình tổng của 5 số
function tinhtoan() {
    var so1 = Number(document.getElementById("Case").value);
    var so2 = Number(document.getElementById("Case1").value);
    var so3 = Number(document.getElementById("Case2").value);
    var so4 = Number(document.getElementById("Case3").value);
    var so5 = Number(document.getElementById("Case4").value);
    var STT = (so1 + so2 + so3 + so4 + so5)/5;
    document.getElementById("bai2").innerHTML = "ket quả : " + STT;
}
document.getElementById("btn-bai2").onclick = tinhtoan;
//bài 3:
//input: nhập tiền usd,rồi quy đổi từ tiền usd -> vnd
//output: tổng tiền đã quy đổi
//-----------------------
function quyDoiTienTe() {
    var tienUsd = Number(document.getElementById("usd").value);
    const tienVnd = 23500
    var quyDoi = tienUsd * tienVnd ;
    document.getElementById("bai3").innerHTML = "Số tiền quy đổi : " + quyDoi + " VND";
}
document.getElementById("btn-bai3").onclick = quyDoiTienTe;
//bài 4:
//input: nhập dài và rộng
//output: tính diện tích ,chu vi
function dientich() {
    var chieuDai = Number(document.getElementById("dai").value);
    var chieuRong = Number(document.getElementById("rong").value);
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    document.getElementById("bai4").innerHTML = "Chu vi : " + chuVi +"<br/>" +"Diện tích : " + dienTich;
}
document.getElementById("btn-bai4").onclick = dientich;
//bài 5:
//input: nhập 1 số có 2 chữ số
//output: tính tổng ký số của số vừa nhập
function tinhTong2KySo() {
    var kySo = Number(document.getElementById("input-so").value);
    var hangDonVi = kySo % 10;
    var hangChuc = (kySo%100 - kySo%10)/10;
    var tongKySo =  hangDonVi + hangChuc;
    document.getElementById("bai5").innerHTML = "Tổng ký số của 2 số là : " + tongKySo;
}
document.getElementById("btn-bai5").onclick = tinhTong2KySo;

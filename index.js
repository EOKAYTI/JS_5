// Bài 1: Quản Lý Tuyển Sinh
function tinhDTB(diemMonThu1, diemMonThu2, diemMonThu3){
    let dtb = (diemMonThu1 + diemMonThu2 + diemMonThu3) / 3;
    return dtb;
}

function kiemTraDauRot(diemChuan, diemMonThu1, diemMonThu2, diemMonThu3, dtb){
    let ketQua = "";
    if((diemMonThu1 == 0 || diemMonThu2==0 || diemMonThu3==0)){
        ketQua = "Rớt";
    }else{
        if(dtb < diemChuan){
            ketQua = "Rớt";
        }else{
            ketQua = "Đậu";
        }
    }
    return ketQua;
}

function kiemTraKhuVuc(khuVuc){
    let diemKhuVuc = 0;
    if(khuVuc == "A"){
        diemKhuVuc  = 2;
    }else if(khuVuc == "B"){
        diemKhuVuc  = 1;
    }else if(khuVuc == "C"){
        diemKhuVuc = 0.5;
    }
    return diemKhuVuc;
}

function kiemTraDoiTuong(doiTuong){
    let diemDoiTuong = 0;
    if(doiTuong == 1){
        diemDoiTuong  = 2.5;
    }else if(doiTuong == 2){
        diemDoiTuong = 1.5;
    }else if(doiTuong == 3){
        diemDoiTuong =  1;
    }
    return diemDoiTuong;
}

document.getElementById("tinhDTB").onclick = function(){
    let diemChuan = document.getElementById("diemChuan").value * 1;
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value * 1;
    let diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
    let diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
    let diemMonThu3 = document.getElementById("diemMonThu3").value * 1;

    let diemTB = tinhDTB(diemMonThu1, diemMonThu2, diemMonThu3);
    let dauRot = kiemTraDauRot(diemChuan, diemMonThu1, diemMonThu2, diemMonThu3, diemTB);
    let diemKhuVuc = kiemTraKhuVuc(khuVuc);
    let diemDoiTuong = kiemTraDoiTuong(doiTuong);

    let tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemKhuVuc  + diemDoiTuong;

    document.getElementById("KQ1").innerHTML = `<p>Bạn đã ${dauRot}. Tổng điểm: ${tongDiem}<p/>`

}

//Bài 2: Tính Tiền Điện
function tinhTienDien(soKw){
    let tongTien = 0;
    if(soKw >0 && soKw<= 50){
        tongTien = soKw * 500;
    }else if(soKw > 50 && soKw <= 100){
        tongTien = 50 * 500 + ((soKw - 50) * 650);
    }else if(soKw > 100 && soKw <= 200){
        tongTien =  (50*500) + (50*650) + ((soKw -100)*850);
    }else if(soKw > 200 && soKw <= 350){
        tongTien = (50*500) + (50*650) + (100 * 850) + ((soKw - 200) * 1100);
    }else{
        tongTien = (50*500) + (50*650) + (100 * 850) +(150 * 1100) +((soKw - 350) * 1300);
    }

    return tongTien;
}

document.getElementById("tinhTienDien").onclick = function(){
    let hoTen = document.getElementById("hoTen").value;
    let soKw = document.getElementById("soKw").value * 1;

    let tienDien = tinhTienDien(soKw);

    document.getElementById("KQ2").innerHTML = `<p>Họ tên: ${hoTen}; Tiền điện: ${tienDien.toLocaleString('vi-VN')}<p/>`
}

//Bài 3: Tính Thuế Thu Nhập Cá Nhân
function tinhThue(thuNhap, nguoiPhuThuoc){
    let tienThue = 0;
    if(thuNhap >0 && thuNhap <= 60000000){
        tienThue = (thuNhap * 0.05) + (nguoiPhuThuoc * 1.6);
    }else if(thuNhap >60000000 && thuNhap <= 120000000){
        tienThue = (thuNhap * 0.1) + (nguoiPhuThuoc * 1.6);
    }else if(thuNhap >120000000 && thuNhap <= 210000000){
        tienThue = (thuNhap * 0.15) + (nguoiPhuThuoc * 1.6);
    }else if(thuNhap >210000000 && thuNhap <= 384000000){
        tienThue = (thuNhap * 0.2) + (nguoiPhuThuoc * 1.6);
    }else if(thuNhap >384000000 && thuNhap <= 624000000){
        tienThue = (thuNhap * 0.25) + (nguoiPhuThuoc * 1.6);
    }else if(thuNhap >624000000 && thuNhap <= 960000000){
        tienThue = (thuNhap * 0.3) + (nguoiPhuThuoc * 1.6);
    }else{
        tienThue = (thuNhap * 0.35) + (nguoiPhuThuoc * 1.6);
    }

    return tienThue;
}

document.getElementById("tinhTienThue").onclick = function(){
    let ten = document.getElementById("ten").value;
    let thuNhap = document.getElementById("thuNhap").value * 1;
    let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value *1;


    let tienThue = tinhThue(thuNhap, nguoiPhuThuoc);

    document.getElementById("KQ3").innerHTML = `<p>Tiền thuế: ${tienThue.toLocaleString("vi-VN")}<p/>`

}
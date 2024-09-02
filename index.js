// Bài 1: Quản Lý Tuyển Sinh
function tinhDTB(diemMonThu1, diemMonThu2, diemMonThu3) {
  let dtb = (diemMonThu1 + diemMonThu2 + diemMonThu3) / 3;
  return dtb;
}

function kiemTraDauRot(diemChuan, diemMonThu1, diemMonThu2, diemMonThu3, dtb) {
  let ketQua = "";
  if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
    ketQua = "Rớt";
  } else {
    if (dtb < diemChuan) {
      ketQua = "Rớt";
    } else {
      ketQua = "Đậu";
    }
  }
  return ketQua;
}

function kiemTraKhuVuc(khuVuc) {
  let diemKhuVuc = 0;
  if (khuVuc == "A") {
    diemKhuVuc = 2;
  } else if (khuVuc == "B") {
    diemKhuVuc = 1;
  } else if (khuVuc == "C") {
    diemKhuVuc = 0.5;
  }
  return diemKhuVuc;
}

function kiemTraDoiTuong(doiTuong) {
  let diemDoiTuong = 0;
  if (doiTuong == 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong == 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong == 3) {
    diemDoiTuong = 1;
  }
  return diemDoiTuong;
}

document.getElementById("tinhDTB").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  let diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  let diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  let diemMonThu3 = document.getElementById("diemMonThu3").value * 1;

  let diemTB = tinhDTB(diemMonThu1, diemMonThu2, diemMonThu3);
  let dauRot = kiemTraDauRot(
    diemChuan,
    diemMonThu1,
    diemMonThu2,
    diemMonThu3,
    diemTB
  );
  let diemKhuVuc = kiemTraKhuVuc(khuVuc);
  let diemDoiTuong = kiemTraDoiTuong(doiTuong);

  let tongDiem =
    diemMonThu1 + diemMonThu2 + diemMonThu3 + diemKhuVuc + diemDoiTuong;

  document.getElementById(
    "KQ1"
  ).innerHTML = `<p>Bạn đã ${dauRot}. Tổng điểm: ${tongDiem}<p/>`;
};

//Bài 2: Tính Tiền Điện
function tinhTienDien(soKw) {
  const MUC_1 = 500;
  const MUC_2 = 650;
  const MUC_3 = 850;
  const MUC_4 = 1100;
  const MUC_5 = 1300;

  let tongTien = 0;
  if (soKw > 0 && soKw <= 50) {
    tongTien = soKw * MUC_1;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * MUC_1 + (soKw - 50) * MUC_2;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * MUC_1 + 50 * MUC_2 + (soKw - 100) * MUC_3;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = 50 * MUC_1 + 50 * MUC_2 + 100 * MUC_3 + (soKw - 200) * MUC_4;
  } else {
    tongTien =
      50 * MUC_1 +
      50 * MUC_2 +
      100 * MUC_3 +
      150 * MUC_4 +
      (soKw - 350) * MUC_5;
  }

  return tongTien;
}

document.getElementById("tinhTienDien").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;

  let tienDien = tinhTienDien(soKw);

  document.getElementById(
    "KQ2"
  ).innerHTML = `<p>Họ tên: ${hoTen}; Tiền điện: ${tienDien.toLocaleString(
    "vi-VN"
  )}<p/>`;
};

//Bài 3: Tính Thuế Thu Nhập Cá Nhân
function tinhThue(thuNhap, nguoiPhuThuoc) {
  const MUC_1 = 0.05;
  const MUC_2 = 0.1;
  const MUC_3 = 0.15;
  const MUC_4 = 0.2;
  const MUC_5 = 0.25;
  const MUC_6 = 0.3;
  const MUC_7 = 0.35;

  const PHI_NGUOI_PHU_THUOC = 1.6;

  let tienThue = 0;
  if (thuNhap > 0 && thuNhap <= 60000000) {
    tienThue = thuNhap * MUC_1 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else if (thuNhap > 60000000 && thuNhap <= 120000000) {
    tienThue = thuNhap * MUC_2 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else if (thuNhap > 120000000 && thuNhap <= 210000000) {
    tienThue = thuNhap * MUC_3 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else if (thuNhap > 210000000 && thuNhap <= 384000000) {
    tienThue = thuNhap * MUC_4 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else if (thuNhap > 384000000 && thuNhap <= 624000000) {
    tienThue = thuNhap * MUC_5 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else if (thuNhap > 624000000 && thuNhap <= 960000000) {
    tienThue = thuNhap * MUC_6 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  } else {
    tienThue = thuNhap * MUC_7 + nguoiPhuThuoc * PHI_NGUOI_PHU_THUOC;
  }

  return tienThue;
}

document.getElementById("tinhTienThue").onclick = function () {
  let ten = document.getElementById("ten").value;
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;

  let tienThue = tinhThue(thuNhap, nguoiPhuThuoc);

  document.getElementById(
    "KQ3"
  ).innerHTML = `<p>Tiền thuế: ${tienThue.toLocaleString("vi-VN")}<p/>`;
};

//Bài 4: Tính Tiền Cáp
function tienCapNhaDan(soKenhCaoCap) {
  const PHI_HOA_DON = 4.5;
  const PHI_DICH_VU_CO_BAN = 20.5;
  const THUE_KENH_CAO_CAP = 7.5;
  let tongTienNhaDan =
    PHI_HOA_DON + PHI_DICH_VU_CO_BAN + THUE_KENH_CAO_CAP * soKenhCaoCap;
  return tongTienNhaDan;
}

function tienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
  const PHI_XU_LY_HOA_DON = 15;
  const THUE_KENH_CAO_CAP = 50;
  if (0 >= soKetNoi <= 10) {
    phiCoBan = 75;
  } else if (soKetNoi > 10) {
    phiCoBan = soKetNoi * 5;
  }
  let tienDoanhNghiep =
    PHI_XU_LY_HOA_DON * phiCoBan * THUE_KENH_CAO_CAP * soKenhCaoCap;

  return tienDoanhNghiep;
}

document.getElementById("tinhTienCap").onclick = function () {
  let loaiKH = document.getElementById("loaiKH").value;
  let maKh = document.getElementById("maKH").value;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;

  let soKetNoi = document.getElementById("soKetNoi").value * 1;

  let tongTienNhaDan = 0;
  let tienDoanhNghiep = 0;
  let phiCoBan;
  if (loaiKH == "nhaDan") {
    tienNhaDan = tienCapNhaDan(soKenhCaoCap);
  } else if (loaiKH == "doanhNghiep") {
    tienDoanhNghiep = tienCapDoanhNghiep(soKenhCaoCap, soKetNoi);
  }

  if (loaiKH == "nhaDan") {
    document.getElementById(
      "KQ4"
    ).innerHTML = `Mã khách hàng: ${maKh}, Tiền cáp: $${tienNhaDan.toLocaleString(
      "vi-VN"
    )}`;
  } else if (loaiKH == "doanhNghiep") {
    document.getElementById(
      "KQ4"
    ).innerHTML = `Mã khách hàng: ${maKh}, Tiền cáp: $${tienDoanhNghiep.toLocaleString(
      "vi-VN"
    )}`;
  }
};

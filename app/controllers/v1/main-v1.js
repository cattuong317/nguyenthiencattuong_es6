import { layThongtinTuForm } from "./controller-v1.js";

let themMon = () => {
  let data = layThongtinTuForm();
  console.log("😀 - themMon - data", data);
  // destructuring
  let { ma, ten, loai, gia, hinhAnh, tinhTrang, moTa, khuyenMai } = data;
  // show data lên layout
  document.getElementById("spMa").innerText = ma;
  document.getElementById("spTenMon").innerText = ten;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spTT").innerText = tinhTrang == "0" ? "Hết" : "Còn";
  document.getElementById("imgMonAn").src = hinhAnh;
  document.getElementById("pMoTa").innerText = moTa;
  document.getElementById("spKM").innerText = khuyenMai + "%";
  document.getElementById("spGiaKM").innerText = data.tinhGKM();
};
window.themMon = themMon;

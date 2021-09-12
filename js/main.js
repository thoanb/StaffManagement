// BIẾN TOÀN CỤC
var dsnv = new StaffList();
var validation = new Validation();

// Hàm rút gọn của document.getElementById
function getELE(id) {
    return document.getElementById(id);
}

// LOCAL STORAGE
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.staffArray));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.staffArray = JSON.parse(localStorage.getItem("DSNV"));
        display(dsnv.staffArray);
    }
}
getLocalStorage();



// HIỂN THỊ TABLE
function display(array) {
    var content = "";
    array.map(function (item, index) {
        content += `<tr>
            <td>${item.staffID}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.date}</td>
            <td>${item.position}</td>
            <td>${item.totalSalary}</td>
            <td>${item.type}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteStaff('${item.staffID}')" >Xoá</button>
                <button class="btn btn-info" onclick="detail('${item.staffID}')" data-toggle="modal" data-target="#myModal">Xem</button>
            </td>
        </tr>`
    });

    getELE("tableDanhSach").innerHTML = content;
}


// THÊM NHÂN VIÊN

function addStaff() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passNV = getELE("password").value;
    var ngayNV = getELE("datepicker").value;
    var luongCoBanNV = getELE("luongCB").value;
    var chucVuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;


    // VALIDATION
    var isValid = true;

    // Check staffID
    isValid &= validation.checkEmpty(maNV, "tbTKNV", "ID không được để trống!") && validation.checkID(maNV, "tbTKNV", "ID không được trùng!", dsnv.staffArray);

    // Check name
    isValid &= validation.checkEmpty(tenNV, "tbTen", "Tên nhân viên không được để trống!") && validation.checkName(tenNV, "tbTen", "Tên phải là ký tự chữ!");

    // Check email
    isValid &= validation.checkEmpty(emailNV, "tbEmail", "Email không được để trống!") && validation.checkEmail(emailNV, "tbEmail", "Email không đúng định dạng!");

    // Check pass
    isValid &= validation.checkEmpty(passNV, "tbMatKhau", "Pass không được để trống!") && validation.checkPass(passNV, "tbMatKhau", "Mật khẩu không đúng định dạng!");

    // Check date
    isValid &= validation.checkEmpty(ngayNV, "tbNgay", "Ngày không được để trống!");

    // Check basic salary
    isValid &= validation.checkEmpty(luongCoBanNV, "tbLuongCB", "Lương cơ bản không được để trống!") && validation.checkSalary(luongCoBanNV, "tbLuongCB", "Lương cơ bản từ 1000000 đến 20000000 vnd!");

    // Check positon
    isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Hãy chọn chức vụ!");

    // Check hours
    isValid &= validation.checkEmpty(gioNV, "tbGiolam", "Giờ làm không được để trống!") && validation.checkHours(gioNV, "tbGiolam", "Số giờ làm từ 80 đến 200 giờ/tháng!");


    if (isValid) {
        document.querySelectorAll('.sp-thongbao').forEach(function (el) {
            el.style.display = 'none';
        });
        
        var nv = new NhanVien(maNV, tenNV, emailNV, passNV, ngayNV, parseFloat(luongCoBanNV), chucVuNV, parseFloat(gioNV));
        nv.totalSalary = nv.calTotalSalary();
        nv.type = nv.calType();

        dsnv.addStaff(nv);
        console.log(dsnv.staffArray);

        setLocalStorage();

        display(dsnv.staffArray);
    } else {
        console.log(document.getElementsByClassName("sp-thongbao"));
        document.querySelectorAll('.sp-thongbao').forEach(function (el) {
            el.style.display = 'block';
        });
    }

}


// XOÁ NHÂN VIÊN
function deleteStaff(ma) {
    dsnv.delStaff(ma);
    display(dsnv.staffArray);
    setLocalStorage();
}


// HIỂN THỊ DETAIL

function detail(ma) {
    var viTri = dsnv.timViTri(ma);
    var nv = dsnv.staffArray[viTri];

    getELE("tknv").disabled = true;

    getELE("tknv").value = nv.staffID;
    getELE("name").value = nv.name;
    getELE("email").value = nv.email;
    getELE("datepicker").value = nv.date;
    getELE("luongCB").value = nv.basicSalary;
    getELE("chucvu").value = nv.position;
    getELE("gioLam").value = nv.hours;
}


// UPDATE NHÂN VIÊN
function updaStaff() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passNV = getELE("password").value;
    var ngayNV = getELE("datepicker").value;
    var luongCoBanNV = getELE("luongCB").value;
    var chucVuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;

    var nv = new NhanVien(maNV, tenNV, emailNV, passNV, ngayNV, parseFloat(luongCoBanNV), chucVuNV, parseFloat(gioNV));
    nv.totalSalary = nv.calTotalSalary();
    nv.type = nv.calType();

    dsnv.updateStaff(nv);
    display(dsnv.staffArray);
    setLocalStorage();
}

// TÌM KIẾM THEO LOẠI XẾP HẠNG
function searchType() {
    var keyWork = getELE("searchName").value;
    var resultArray = dsnv.search(keyWork);
    display(resultArray);
}
getELE("searchName").onkeyup = searchType;








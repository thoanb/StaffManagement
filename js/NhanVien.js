function NhanVien(ma, ten, email, pass, ngayLam, luongCoBan, chucVu, gioLam) {
    this.staffID = ma;
    this.name = ten;
    this.email = email;
    this.pass = pass;
    this.date = ngayLam;
    this.basicSalary = luongCoBan;
    this.position = chucVu;
    this.hours = gioLam;
    this.type = "";
    this.totalSalary = 0;

    this.calTotalSalary = function() {
        if (this.position == "Sếp") {
            return (this.basicSalary*3);
        }else if (this.position == "Trưởng phòng") {
            return (this.basicSalary*2);
        }else if (this.position == "Nhân viên") {
            return (this.basicSalary);
        }
    }
    
    this.calType = function() {
        if (this.hours >= 192) {
            return (this.type = "Xuất sắc");
        }else if (this.hours >= 176 && this.hours < 192) {
            return (this.type = "Giỏi");
        }else if (this.hours >= 160 && this.hours < 176) {
            return (this.type = "Khá");
        }else if (this.hours < 160) {
            return (this.type = "Trung Bình");
        }
    }
}
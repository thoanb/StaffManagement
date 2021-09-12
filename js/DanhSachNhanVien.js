function StaffList() {
    this.staffArray = [];

    // phuong thuc
    this.addStaff = function (staff) {
        this.staffArray.push(staff);
    }

    this.timViTri = function (ma) {
        var viTri = -1;
        this.staffArray.map(function (item, index) {
            if (item.staffID == ma) {
                viTri = index;
            }
        });
        return viTri;
    }

    this.delStaff = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri >= 0) {
            this.staffArray.splice(viTri, 1);
        } else {
            console.log("Không tìm được");
        }
    }

    this.updateStaff = function (nv) {
        var viTri = this.timViTri(nv.staffID);
        if (viTri >= 0) {
            this.staffArray[viTri] = nv;
        }else {
            console.log("Khong tim duoc");
        }
    }
}

StaffList.prototype.search = function(tuKhoa){
    var resultArray = [];
    var lowerKey = tuKhoa.trim().toLowerCase();
    this.staffArray.map(function(item,index){
        var xepLoai = item.type.trim().toLowerCase();
        var result = xepLoai.indexOf(lowerKey);
        if (result >= 0) {
            resultArray.push(item);
        }
    });
    return resultArray;
}




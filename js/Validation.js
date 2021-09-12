function Validation() {
    this.checkEmpty = function(inputval, spanID, message){
        console.log(inputval);
        if(inputval.trim() == "") {
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }else {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    this.checkID = function (inputval, spanID, message, mang) {
        var isExist = false;
        isExist = mang.some(function (item) {
            return item.staffID === inputval.trim();
        });
        
        if (isExist) {
            //ma bi trung
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkName = function (inputval, spanID, message) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        
        if (pattern.test(inputval)) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkEmail = function (inputval, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputval.match(pattern)) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkDropdown = function (selID, spanID, message) {
        var optIndex = document.getElementById(selID).selectedIndex;

        if (optIndex!= 0) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else {
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkPass = function(inputval, spanID, message){
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        if (inputval.match(pattern)) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkSalary = function(inputID, spanID, message){
        console.log(inputID);
        if (inputID >= 1000000 && inputID <= 20000000) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkHours = function(inputID, spanID, message){
        if (inputID >= 80 && inputID <= 200) {
            //Hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //Khong hop le
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

}
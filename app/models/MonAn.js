export class MonAn {
    maMon = '';
    tenMon = '';
    loaiMon = '';
    maLoaiMon = '';
    giaMon = 0;
    khuyenMai = 0;
    tenTinhTrang = '';
    maTinhTrang = 0;
    hinhAnh = '';
    moTa = '';
    constructor() {

    }
    tinhGiaKhuyenMai = function (){
        return this.giaMon - (this.giaMon * this.khuyenMai / 100);
    }
}

/*
    V(view): các file chưa giao diện html
    M(model): Folder chưa các file cũng là js nhưng là các file class(prototype)
    C(controller): chứa các file  js để xử lí những control (nút ân, text input,...) thao tác người dùng.
*/
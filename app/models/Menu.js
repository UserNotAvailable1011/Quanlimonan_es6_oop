export class Menu {
    mangMonAn = [];

    constructor() {

    }

    themMonAn = (monAnMoi) => {
        try {
            //Bất kì lệnh nào xảy ra lỗi => chạy sang catch và hủy hết 
            //Thêm món ăn vào mảng món ăn
            this.mangMonAn.push(monAnMoi);
        } catch (ex) {
            console.log(ex);
            return false;
        }
        return true;
    }
    luuMonAn = function () {
        let sMenu = JSON.stringify(this.mangMonAn);
        localStorage.setItem('menu', sMenu);
    }
    layMonAn = function () {
        if(localStorage.getItem('menu')){
            //Lấy dữ liệu từ localstorage gán vào mangMonAn của đối tượng menu
            this.mangMonAn = JSON.parse(localStorage.getItem('menu'));
            }
    }
    xoaMonAn = function(maMonAn){
        //finđInex: hàm tìm 1 giá trị thỏa với arrow function.Nếu tìm thấy thì trả về vị trí của phần tử trong mảng, không thấy thì trả về -1
        let indexXoa = this.mangMonAn.findIndex(monAn => monAn.maMon === maMonAn);
        if(indexXoa !== -1){
            this.mangMonAn.splice(indexXoa,1);
            return true;
        }
        return false;
     }
     layThongTinMonAn = function (maMon){
         //find(): hàm tìm 1 giá trị trong mảng thỏa với arrow function tương tự như findindex() => kết quả trả về là giá trị hoặc object nếu tìm thấy. Nếu khong tìm thấy thì trả về undifined
         let monAn = this.mangMonAn.find(monAn => monAn.maMon === maMon);
         if(monAn){
             return monAn;
         }
         return undefined;
     }
    capNhatMonAn = function (maMon, monAnUpdate){
        //Lấy thông tin món ăn
        let monAn = this.layThongTinMonAn(maMon);
        if(monAn){
            for(let tenThuocTinh in monAn){
                monAn[tenThuocTinh] = monAnUpdate[tenThuocTinh];
            }
        }
        this.luuMonAn();
    }
}
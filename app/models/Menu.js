export class Menu{
    mangMonAn = []
    
    constructor(){

    }

    themMonAn = (monAnMoi) => {
        try{
            //Bất kì lệnh nào xảy ra lỗi => chạy sang catch và hủy hết 
            //Thêm món ăn vào mảng món ăn
            this.mangMonAn.push(monAnMoi);        
        }catch(ex){
            console.log(ex);
            return false;
        }
        return true;
    }
    xoaMonAn = () => {}
    chinhSuaMon = () => {}
    timKiemMonAn = () => {}
}
//Sử dụng class
import { MonAn } from '../models/MonAn.js';
import { Menu } from '../models/Menu.js';

var menu = new Menu();

document.querySelector('#btnThemMon').onclick = () => {
    var monAn = new MonAn();
    let arrInput = document.querySelectorAll('form input, form select, form textarea');

    // console.log(arrInput);
    for (let tagInput of arrInput) {
        let { id, value } = tagInput;
        if (id === 'loaiMon') {
            monAn['maLoaiMon'] = value;
            monAn['loaiMon'] = tagInput.options[tagInput.selectedIndex].innerHTML;
        } else if (id === 'maTinhTrang') {
            monAn['tenTinhTrang'] = tagInput.options[tagInput.selectedIndex].innerHTML;
        } else {
            monAn[id] = value;
            console.log(id, value);
        }

    }
    //Dom đến tất cả các thẻ li => in ra thông tin

    var arrLi = document.querySelectorAll('#thongTinMonAn li:not(:first-child)');
    for (let li of arrLi) {
        let { id } = li;
        if(id === 'giaKhuyenMai'){
            li.innerHTML = `
            <div>
                <h6>${id}</h6>

                <p id="pMoTa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</p>
            </div>
        `   
        }else{
            li.innerHTML = `
                <div>
                    <h6>${id}</h6>

                    <p id="pMoTa" class="text-muted">${monAn[id]}</p>
                </div>
            `
        }
        
    }
    document.getElementById('imgMonAn').src = monAn.hinhAnh;
    
    //sau khi lấy thông tin món ăn thì thêm món ăn vào menu

    menu.themMonAn(monAn);

    console.log(menu);
}


import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

var menu = new Menu();

menu.layMonAn();

renderTable(menu.mangMonAn);

//Viết hàm xử lis từ menu.mangMonAn hiển thị ra giao diện
    function renderTable(mangMonAn){
        var content = '';
        
        for(let monAnLocal of mangMonAn){
            let monAn = new MonAn();
            monAn = {...monAn,...monAnLocal}
            content += `
                <tr>
                        <td>${monAn.maMon}</td>    
                        <td>${monAn.tenMon}</td>    
                        <td>${monAn.loaiMon}</td>    
                        <td>${monAn.giaMon}</td>    
                        <td>${monAn.khuyenMai}</td>    
                        <td>${monAn.tinhGiaKhuyenMai()}</td>
                        <td>${monAn.tenTinhTrang}</td>  
                        <td>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="chinhSua('${monAn.maMon}')">Sửa</button>
                            <button class="btn btn-danger" onclick="xoa('${monAn.maMon}')">Xóa</button>
                        </td>  
                </tr>
            
            `
        }
        document.getElementById('tbodyFood').innerHTML = content;
    }

    window.xoa = function(maMonAnClick){
        menu.xoaMonAn(maMonAnClick);
        renderTable(menu.mangMonAn);
    }

    window.chinhSua = function(maMonAnClick){
        document.querySelector('.modal-title').innerHTML = 'Cập Nhật Món Ăn';
         //Lấy thông tin món ăn từ menu.mangMonAn
        let monAn = menu.layThongTinMonAn(maMonAnClick);
        //Đưa thông tin món ăn lên giao diện
       if(monAn){
          // console.log('mon an', monAn);

          var arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
          for(let input of arrInput){
              let {id} = input;
              input.value = monAn[id];
          }
       }
    }

    document.getElementById('btnCapNhat').onclick = function(){

        var arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
        var monAnCapNhat = new MonAn();
        for(let input of arrInput){
            let {id,value} = input;
            if (id === 'maLoaiMon') {
                monAnCapNhat['maLoaiMon'] = value;
                monAnCapNhat['loaiMon'] = input.options[input.selectedIndex].innerHTML;
            } else if (id === 'maTinhTrang') {
                monAnCapNhat['tenTinhTrang'] = input.options[input.selectedIndex].innerHTML;
            } else {
                monAnCapNhat[id] = value;
              //  console.log(id, value);
            }
        }
       // console.log('monAnCapNhat', monAnCapNhat);
       //Gọi phương thức cập nhật món ăn
       menu.capNhatMonAn(monAnCapNhat.maMon, monAnCapNhat);
       //render lại giao diện
       renderTable(menu.mangMonAn);
    }



/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var fs = require('fs');
var readLineSync = require('readline-sync');

var contacts = [];
contacts.push(JSON.stringify({name : 'Nam', phone : '0868236239'}));

fs.writeFileSync('contact.json',contacts);

var loop = true;

while(loop){
  var option = readLineSync.question('What do you do ? \n\t 1.Add a contact \n\t 2.Change a contact\n\t 3.Delete contact');
  var nameContact;
  var phoneContact;
  var id;
  if(option == 1){
    nameContact = readLineSync.question('Name : \n\t');
    phoneContact = readLineSync.question('Phone : \n\t');
    contacts.push(JSON.stringify({name : nameContact, phone : phoneContact}));
    fs.writeFileSync('contact.json',contacts);
  }
  else if(option == 2){
    id = readLineSync.question('Phone ID you want change : \n\t');
    nameContact = readLineSync.question('Name : \n\t');
    phoneContact = readLineSync.question('Phone : \n\t');
    JSON.parse(contacts[id]);
    contacts[id].name = nameContact;
    contacts[id].phone = phoneContact;
    contacts.push(JSON.stringify(contacts[id]));
    fs.writeFileSync('contact.json',contacts);
  }
  else if(option == 3){
    id = readLineSync.question('Phone ID you want delete : \n\t');
    contacts.splice(id,1);
    fs.writeFileSync('contact.json',contacts);
  }
  else {
    console.log('Wrong option.\n\t');
    loop = false;
  }
}
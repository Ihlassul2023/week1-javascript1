let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
//mengubah data objek menggunakan spreed operator
data = { ...data, name: "ihlas sul akbar", email: "ihlasakbar00@gmail.com", hobby: "ngoding" };
// console.log(data);

//mengambil key object dengan destructuring
let {
  address: { street, city },
} = data;
console.log(street, city);

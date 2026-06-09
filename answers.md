# JAVASCRIPT BASICS — Variables, Data Types, Control Structures

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 - var / let / const

// Đoạn 1
console.log(x);
var x = 5;
-> undefined
-> var được hoisting (đưa phần khai báo lên đầu phạm vi) nên x tồn tại nhưng chưa có giá trị

// Đoạn 2
console.log(y);
let y = 10;
-> ReferenceError: Cannot access 'y' before initialization
-> let cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ) từ đầu block đến khi được khởi tạo.

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
-> TypeError: Assignment to constant variable.
-> const không cho phép gán lại giá trị sau khi khởi tạo.

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
-> [1, 2, 3, 4]
-> const không cho phép gán lại biến nhưng vẫn cho phép thay đổi nội dung của object hoặc array mà biến đang tham chiếu tới.

// Đoạn 5
let a = 1;
{
let a = 2;
console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
-> Trong block: 2
Ngoài block: 1
-> let có phạm vi block.

### Câu A2 - Data Types & Coercion

console.log(typeof null); // "object" (lỗi cổ điển trong JS)
console.log(typeof undefined); // "undefined"
console.log(typeof NaN); // "number"
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" \* "3"); // 15
console.log(true + true); // 2
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"

**Giải thích:** Toán tử `+` được ưu tiên nối chuỗi khi có ít nhất 1 string. Toán tử `-`, `*`, `/` luôn ép kiểu về số.

### Câu A3 - So sánh == vs ===

console.log(5 == "5"); // true (ép kiểu, so sánh giá trị)
console.log(5 === "5"); // false (strict, khác kiểu dữ liệu)
console.log(null == undefined); // true (abstract equality)
console.log(null === undefined); // false (khác kiểu)
console.log(NaN == NaN); // false (NaN khác NaN)
console.log(NaN === NaN); // false (NaN khác NaN)
console.log(0 == false); // true (ép kiểu)
console.log(0 === false); // false (khác kiểu)
console.log("" == false); // true (ép kiểu)
console.log("" === false); // false (khác kiểu)

**Quy tắc:** Nên dùng `===` vì nó chính xác, không ép kiểu. `==` gây nhầm lẫn vì có quy tắc ép kiểu phức tạp.

### Câu A4 - Truthy & Falsy

**Falsy values (những giá trị coi là false trong if):**

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt 0)
5. `""` (chuỗi rỗng)
6. `null`
7. `undefined`
8. `NaN`

**Kết quả:**

- if ("0") console.log("A"); // **In "A"** (chuỗi "0" là truthy)
- if ("") console.log("B"); // Không in (chuỗi rỗng là falsy)
- if ([]) console.log("C"); // **In "C"** (array là truthy, kể cả rỗng)
- if ({}) console.log("D"); // **In "D"** (object là truthy, kể cả rỗng)
- if (null) console.log("E"); // Không in (null là falsy)
- if (0) console.log("F"); // Không in (0 là falsy)
- if (-1) console.log("G"); // **In "G"** (-1 là truthy)
- if (" ") console.log("H"); // **In "H"** (chuỗi có space là truthy)

### Câu A5 - Template Literals

Viết lại bằng **template literal** (backtick):

```javascript
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

## PHẦN C — SUY LUẬN

### Câu C1 - Debug JavaScript

function tinhGiaGiamGia(giaBan, phanTramGiam) {
if (phanTramGiam < 0 || phanTramGiam > 100) {
return "Phần trăm giảm không hợp lệ" <- Lỗi 1: thiếu dấu ";"
}

    var giamGia = giaBan * phanTramGiam / 100
    let giaSauGiam = giaBan - giamGia

    if (giaSauGiam = 0) { // <- Lỗi 2: giaSauGiam = 0 -> Sửa: giaSauGiam === 0
        console.log("Sản phẩm miễn phí!")
    }

    return giaSauGiam <- Lỗi 3: thiếu dấu ";"

}

// Test
const gia = tinhGiaGiamGia("100000", 20) // <- Lỗi 4: tinhGiaGiamGia("100000", 20) -> Sửa: tinhGiaGiamGia(100000, 20)
console.log("Giá sau giảm: " + gia + "đ")

const gia2 = tinhGiaGiamGia(50000, 110)
console.log("Giá: " + gia2)

for (var i = 0; i < 5; i++) { <- Lỗi 5: var -> Sửa: let i = 0; i < 5; i++
setTimeout(function() {
console.log("Item " + i)
}, 1000)
}

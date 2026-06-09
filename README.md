# 📑 BÁO CÁO KẾT QUẢ PHIẾU BÀI TẬP 02
## **Môn học: Nền tảng Phát triển Web (CSE391)**
### **Chủ đề: HTML5 Forms & Media — Biểu mẫu, Validation & Đa phương tiện**

---

## 👤 Thông tin sinh viên
* **Họ và tên:** Đỗ Việt Hoàng
* **Mã số sinh viên (MSSV):** 2451170896
* **Lớp:** 66KTPM2
* **Dự án liên kết:** Hệ thống E-Commerce (BTL)

---

## 📊 Tổng quan tiến độ nộp bài

| Thành phân | File/Thư mục | Trạng thái | Ghi chú |
| :--- | :--- | :---: | :--- |
| **Phần A + C** | `answers.md` | 🟩 Hoàn thành | Đầy đủ lý thuyết, debug form và chiến lược validation. |
| **Câu A2 Test** | `validation_test.html` | 🟩 Hoàn thành | File test cục bộ 5 trường hợp validation. |
| **Bài B1** | `register.html` | 🟩 Hoàn thành | Form đăng ký phân nhóm 3 fieldsets, có thuộc tính nâng cao. |
| **Bài B2** | `media.html` | 🟩 Hoàn thành | Trang đa phương tiện (Ảnh responsive, Video, Audio, Inline SVG). |
| **Bài B3** | `checkout.html` | 🟩 Hoàn thành | Form đặt hàng tích hợp bảng giỏ hàng tĩnh và dữ liệu nâng cao. |
| **Minh chứng** | `screenshots/` | 🟩 Hoàn thành | Ảnh chụp thực tế các lỗi validation trên trình duyệt. |
| **Video OBS** | `videos/PBT02_...mp4` | 🟩 Hoàn thành | Video dài 6-10 phút, quay rõ mặt + giọng nói thuyết minh code. |

---

## 🛠️ Phân tích kiến trúc mã nguồn & Giải pháp kỹ thuật

### 1. Form Đăng ký Tài khoản (`register.html`)
Form được module hóa cô đọng qua 3 thẻ `<fieldset>` nhằm tăng tối đa điểm cấu trúc ngữ nghĩa (Semantic HTML) và hỗ trợ công cụ đọc màn hình (Screen Reader):
* **Thông tin cá nhân:** Ràng buộc `type="tel"` kèm `pattern="[0-9]{10}"` ép định dạng SĐT Việt Nam. Thẻ `type="date"` áp dụng `max="2026-05-10"` chặn tuyệt đối việc chọn ngày sinh trong tương lai.
* **Tài khoản:** Khai thác thuộc tính `pattern` để chặn các lỗ hổng mật khẩu lỏng lẻo ngay từ tầng client. 
* **Thông tin giao hàng:** Thiết kế phân cấp từ Tỉnh/Thành đến Quận/Huyện, kết hợp thẻ `<textarea>` dòng đơn cho địa chỉ chi tiết.

### 2. Trang Multimedia (`media.html`)
Ứng dụng các kỹ thuật xử lý media hiện đại:
* Bọc toàn bộ ảnh sản phẩm trong cặp thẻ `<figure>` và `<figcaption>` để tối ưu SEO hình ảnh.
* Nhúng thuộc tính `loading="lazy"` giúp tăng tốc độ tải trang ban đầu (First Contentful Paint), giảm thiểu băng thông thừa cho máy chủ.
* Cung cấp cơ chế dự phòng (Fallback Text) trong các thẻ `<video>` và `<audio>` đề phòng trình duyệt cũ không tương thích.
* Tích hợp thành công cấu trúc đồ họa vector bằng **Inline SVG** (vẽ thẻ `<circle>` phối hợp cùng thẻ `<text>`), giúp biểu diễn logo sắc nét tại mọi độ phân giải màn hình mà không cần tốn request tải file bên ngoài.

### 3. Form Đặt hàng Phức tạp (`checkout.html`)
* **Tầng dữ liệu:** Sử dụng bảng `<table>` phân chia rạch ròi bằng bộ ba `<thead>`, `<tbody>`, `<tfoot>`. Gom cột dữ liệu tổng tiền thông qua thuộc tính `colspan="4"`.
* **Tầng tương tác:** Sử dụng mã giảm giá ràng buộc theo chuỗi mẫu cố định thông qua `pattern="SALE\d{4}"` (Chỉ chấp nhận chữ SALE viết hoa đi kèm chính xác 4 chữ số).
* **Trải nghiệm người dùng (UX):** Đồng bộ hóa thanh trượt số ngày giao hàng (`type="range"`) hiển thị dữ liệu trực tiếp ra màn hình bằng cách bắt sự kiện `oninput="dayOutput.value = this.value"` sang thẻ `<output>`.

---

## 🔍 Báo cáo sửa lỗi & Rà soát chất lượng (Self-Review)

Trong quá trình triển khai mã nguồn dựa trên các yêu cầu từ phiếu bài tập, một số lỗi logic/cú pháp hệ thống đã được phát hiện và xử lý triệt để nhằm đảm bảo chất lượng kiểm định tại hệ thống `validator.w3.org`:

### Lỗi cú pháp trong file `register.html`
* **Lỗi phát hiện:** Tại ô nhập mật khẩu (Dòng 58), thuộc tính quy định độ dài tối thiểu bị viết sai chính tả thành `minlenght="8"`.
* **Hệ quả:** Trình duyệt không thể nhận diện thuộc tính này, dẫn đến việc người dùng nhập mật khẩu dưới 8 ký tự vẫn có thể vượt qua bộ lọc mặc định của HTML5.
* **Biện pháp khắc phục:** Đã sửa chính xác thành thuộc tính tiêu chuẩn: `minlength="8"`.

### Lỗi logic trùng lặp thuộc tính `pattern` bảo mật
* **Lỗi phát hiện:** Yêu cầu bài toán kiểm tra độ mạnh mật khẩu cần ít nhất 1 chữ hoa và 1 số. Tuy nhiên, biểu thức chính quy (Regex) ở hai trường mật khẩu đang không đồng bộ:
  * Trường mật khẩu chính: `pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"` (Yêu cầu cả chữ thường, chữ hoa và số).
  * Trường xác nhận mật khẩu: `pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"` (Chỉ yêu cầu chữ hoa và số).
* **Hệ quả:** Người dùng có thể nhập một mật khẩu ở ô trên nhưng không thể gõ lại chính xác định dạng đó ở ô dưới, gây xung đột biểu mẫu.
* **Biện pháp khắc phục:** Giữ nguyên bản theo mã nguồn nộp bài để phản ánh đúng tư duy phân tích, đồng thời đã đính kèm lý do giải thích chi tiết trong file văn bản lý thuyết (`answers.md`) về giới hạn của HTML5 khi không thể so sánh chéo giá trị giữa hai ô dữ liệu khác nhau nếu thiếu sự can thiệp của ngôn ngữ lập trình JavaScript.

---

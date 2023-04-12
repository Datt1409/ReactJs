componentDidMount (chỉ chạy 1 lần duy nhất sau khi render)
và componentDidUpdate (chỉ chạy sau khi component cập nhật)

=> đồng bộ trạng thái của ứng dụng React với bên thứ 3
thực hiện side effects

componentWillUnmount

- dọn dẹp các side effects (bộ đếm, request, các event ở trên window)

Tại sao không dùng class component nữa ?

- Cú pháp class dài dòng và không quen với người mới
- Hạn chế của lifecycle methods

* lặp mã
* 1 lifecycle method lại chứa quá nhiều logic

Ưu tiên sử dụng function component (trước đây gọi là stateless component, chỉ render giao diện)
Từ 16.8 trở lên thì ra mắt Hooks (useState)
Là các hàm đặc biệt cho phép function component có thể sử dụng được các tính năng của React (state, lifecycle methods)

Lưu ý: Tất cả các Hooks thì bắt đầu bằng use
Cho phép tự tạo ra các hook riêng (customHooks)

//state

- useState thì có thể nhận vào một hàm (lazyInitialState)
- setState: cũng có thể nhận vào 1 hàm, sẽ nhận vào giá trị trạng thái trước đó (thường dùng để tránh
  bị cache callback)

//effect

- về cơ bản: cho phép triển khai các lifecycle methods trong function components (thay thế cho
  didMount, didUpdate và WillAmount)

//context

- cung cấp các giá trị chung cho toàn bộ cây thành phần con sử dụng, tránh truyền props qua nhiều cấp

// Khi gọi component <Counter/> lần đầu tiên

- Khởi tạo (chạy câu lệnh trước return) (đặt 1 setInterval)
- Render => Hiển thị lên DOM
- Kích hoạt hàm sau render

// Khi cập nhật (do state thay đổi)

- Lại chạy lại các câu lệnh từ đầu (đặt thêm 1 cái setInterval)
- Kích hoạt hàm dọn dẹp của lần render trước đó
- Render => Hiển thị DOM mới
- Kích hoạt hàm sau render

// Mounting -

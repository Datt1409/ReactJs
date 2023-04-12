import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // Cú pháp chung
  // useEffect(effectFn, dependencies);
  // Dependencies là các giá tri phụ thuộc thay đổi

  // Thay thế cho didMount
  // Chỉ chạy lần đầu sau khi render

  useEffect(
    () => {
      // Lưu ý là sẽ in ra 2 lần
      console.log("Mounted");
    },
    [] /** dependencies là 1 mảng rỗng */
  );

  // Thay thế cho didUpdate
  // Chạy lần đầu tiên, và mỗi khi một trong giá trị dependencies thay đổi
  useEffect(
    () => {
      document.title = `You click ${count} times`;
    },
    [count] /** Khi count thay đổi thì hàm mới kích hoạt */
  );

  // Gộp cả didMount và didUpdate
  // Chạy cả lần đầu tiên và mỗi lần cập nhật
  useEffect(() => {
    console.log("Mount/Updated0");
  });

  // Dọn dẹp
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // Đóng vai trò dọn dẹp
    // chạy ở lần render sau, trước khi chạy useEffect mới
    // trước khi chạy useEffect thì kiểm tra
    // Lần trước đó có return hàm hay không
    // Nếu có thì chạy hàm trước, sau đó thì đến useEffect
    // Ví dụ:
    // Lần đầu tiên chạy: chưa có hàm (bỏ qua) => set(1)
    // return hàm clear(1)
    // Lần chạy thứ 2: chạy hàm clear(1) => set(2) => return hàm clear(2)
    // Lần chạy thứ 3: chạy hàm clear(2) => set(3) => return hàm clear(3)

    return () => {
      // Dọn dẹp bố đếm
      // Xóa sự kiện trên window
      // Hủy bỏ request
      // ...
      console.log("Hàm dọn dẹp, lúc này count=", count);
      clearInterval(timer);
    };
  });

  // Các lỗi thường gặp
  // 1. Không xác định đúng dependencies
  // - Muốn nó chạy khi nào, 1 lần, nhiều lần, phụ thuộc cái gì không ?
  // - Tất cả những cái giá trị sử dụng bên trong useEffect (state, hàm) thì nên có mặt trong dependencies
  // - Triển khai hàm dọn dẹp

  return <button onClick={() => setCount(count + 1)}>CLICK ME</button>;
}

import { React } from "react";
import { useEffect, useState } from "react";

// 1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Khi muốn thực hiện 1 logic 1 lần sau khi component đó được mount và không muốn nó gọi lại => đưa [] vào
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

export default function Content() {
  // useEffect with timer function

  // const [countDown, setCountDown] = useState(180);
  // useEffect(() => {
  //   const timerID = setInterval(() => {
  //     setCountDown((preState) => preState - 1);
  //   }, 1000);
  //   return () => clearInterval(timerID);
  // }, []);

  // useEffect with preview avatar

  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   console.log(`Mounted or re-render ${count}`);

  //   return () => {
  //     console.log(`Clean lan ${count}`);
  //   };
  // }, [count]);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.linkPreview);
    };
  }, [avatar]);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.linkPreview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    // <div>
    //   <h1>{countDown}</h1>
    // </div>

    // <div>
    //   <h1>{count}</h1>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div>

    <div>
      <input type="file" onChange={handleAvatar} />
      {avatar && <img src={avatar.linkPreview} alt="img" width="80px" />}
    </div>
  );
}

/**
 * khi được mount, useEffect chỉ được mount 1 lần, còn setInterval sẽ chạy sau mỗi 1s và chạy cho
 * đến khi tắt chương trình. Lần 1 nó render countdown, giá trị của countdown ở useEffect tại thời
 * điểm đó là 180, và sau khi setCountDown thì countdown = 179, sau đó nó sẽ render ra 179.
 * Lần 2 là tại thời điểm sau 1s, sau setCountdown(countdown - 1) thì lại có một môi trường mới được tạo ra,
 * countdown sẽ chọc ra thằng cha và bởi vì lần 1 countdown = 180
 * (tại vì nó đang ở trong một môi trường useEffect không bị gọi lại nên giá trị của countdown luôn là 180)
 *
 *  */

/**
  useEffect(() => {
    return () => {
     URL.revokeObjectURL(avatar.linkPreview);
    };
  }, [avatar]);

  sẽ gặp lỗi undefine vì state ban đầu của avatar là undefine, khi chọn ảnh sẽ thay đổi deps của useEffect,
  hàm clean up sẽ được gọi trước và đọc đến avatar. Avatar đang là undefined => báo lỗi

 */

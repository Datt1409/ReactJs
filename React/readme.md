    1. Luôn dùng React.createElement() ? Vấn đề ?

    2. JSX ?
    3. JSX không phải HTML, cần phải có Javascript, Babel để dùng JSX
    4. JSX và React-DOm

    5. Tại sao khi code thuần dùng map phải join ?

    - Vì
    6. gặp lỗi khi render từ mảng (prop 'key')

    - Mỗi thẻ children cần có 1 unique props

    7. Không render được 2 element cùng lúc

    - cần 1 thẻ wrap 2 element lại (ví dụ thẻ div) => Có thêm thẻ không mong muốn
    - dùng <React.Fragment></React.Fragment> => Không sinh ra thêm thẻ nào trong DOM thật

    8. React element

    - Sử dụng props giống như với attribute của thẻ HTML
    - 2 props, class, for => className, htmlFor
    => Phải tuân theo quy ước có sẵn

    9. React components

    - Sử dụng props giống như đối số cho Component
    - Tự do đặt tên props
    + Đặt theo camelCase
    + có thể bao gồm dấu gạch ngang
    - Chú ý:
    + Prop "key" là prop đặc biệt
    + Props cơ bản là đối số của Component
        => props có thể là bất cứ kiểu dữ liệu gì
    + Sử dụng destructuring

    Phần 1
    - Xử lý DOM events
    - Component do chúng ta định nghĩa cần viết hoa chữ cái đầu
    - Booleans, Null & Undefined không được render => kết hợp toán tử logic để render theo điều kiện

    10. Props trong JSX
    - <YourComponent"
        propName1="String literals"
        propName2={expression} //if else, switch case sẽ không truyền được 
    />

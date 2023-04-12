import React from "react";
import Box from "./Box";
import "./BoxList.css";
import PropTypes from "prop-types";


/**
 * @typedef BoxListProps
 *
 * @property {string[]} colors Danh sách các mã màu
 */

/**
 *  Render ra danh sách các boxes
 *
 *
 * @param {BoxListProps} props danh sách các màu
 * @returns
 */

export default function BoxList({ colors = [] }) {
  // Tạo mảng các component
  const items = colors.map((color, i) => <Box key={i} bg={color} />);
  return <div className="box-list">{items}</div>;
}

// Xác thực kiểu dữ liệu cho BoxList
BoxList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

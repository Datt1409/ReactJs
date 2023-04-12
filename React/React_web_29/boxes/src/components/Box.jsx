import React, { ReactNode } from "react";
import "./Box.css";
import PropTypes from "prop-types";
import randomHex from "../utils/randomHex";

/**
 * @typedef BoxProps
 *
 * @property {string} bg màu nền cho box
 *
 */

/**
 * Hiển thị 1 box hình vuông
 *
 * @param {BoxProps} props
 * @returns {ReactNode}
 */

export default function Box({ bg }) {
  const styleObj = {
    backgroundColor: bg,
  };

  return (
    <div className="box" style={styleObj}>
      {bg}
    </div>
  );
}

// Xác thực kiểu dữ liệu cho component Box
Box.propTypes = {
  bg: PropTypes.string.isRequired,
};

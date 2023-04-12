import React from "react";

/**
 * @typedef CardProps
 *
 * @property {string} title Tiêu đề của card
 * @property {string} text Nội dung
 * @property {string} thumbnail Hình ảnh
 * @property {number} view Số view
 * @property {string} publish Ngày đăng
 */

/**
 * Cái này để hiển thị 1 card sản phẩm
 *
 * @param {CardProps} props Thông tin sản phẩm
 *
 * @returns
 */
export default function Card({ title, text, thumbnail, view, publish }) {
    return (
        <div className="card">
            <img src={thumbnail} alt={title} className="card-thumbnail" />

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>

            <div className="card-meta">
                <div className="card-view">👁️ {view}</div>
                <time className="card-publish">{publish}</time>
            </div>
        </div>
    );
}

// PropTypes => Xác thực dữ liệu truyền vào components
// JSDoc

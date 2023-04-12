import React from "react";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

import "./Modal.css";

export default function Modal({ open, onClose }) {
    if (open)
        return (
            <div className="modal">
                <div className="modal-wrapper">
                    <ModalTitle onClose={onClose} />
                    <ModalContent />
                    <ModalFooter />
                </div>
            
            </div>
        );
}

// Tabs
// Toast
// Offcanvas

// Các cách CSS cho React
// Inline
// External
// CSS in JSX (stylejsx styled-component)
// CSS Module

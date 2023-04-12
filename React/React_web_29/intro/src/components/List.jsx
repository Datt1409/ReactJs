import React from "react";
import ListItem from "./ListItem";

export default function List({ items = [] }) {
    items = items.map((item, index) => <ListItem key={index}>{item}</ListItem>);

    return <ul className="list">{items}</ul>;
}

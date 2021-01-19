import React, { Component } from "react";
import Link from "next/link";

export function AccountOption({
  scriptID,
  link,
  image,
  type,
  name,
  price,
  onRemove,
}) {
  return (
    <div
      style={{
        display: "flex",
        border: "solid 1px #cacaca",
        padding: "8px 12px",
        marginBottom: "12px",
      }}
    >
      <Link href={`${link}`}>
        <img className="cart-item-image" src={image}></img>
      </Link>

      <Link href={`${link}`}>
        <a>
          <p className="cart-item-type">{type}</p>
          <p className="cart-item-name">{name}</p>
        </a>
      </Link>

      <p>{price ? price : "n/a"}</p>
      <a
        className="cart-item-remove"
        style={{ cursor: "pointer" }}
        onClick={() => onRemove(scriptID)}
      >
        ✕
      </a>
    </div>
  );
}

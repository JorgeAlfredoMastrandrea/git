import React from 'react'

export const Item = (listItem) => {
  return (
    <li>
      <div>
        <div>{listItem.id}</div>
        <div>{listItem.año}</div>
      </div>
    </li>
  );
}

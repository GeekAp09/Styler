import React from "react";


const FontResult = ({fontList}) => {
  if (!fontList.length) {
    return null;
  }
  return (
    <ul>
      {fontList.map((item) => {
        return  <li key={item.repository.node_id}><a href={item.html_url} target="_blank" download={item.name}> {item.name}</a> </li> ;
      })}
    </ul>
  );
};

export default FontResult;

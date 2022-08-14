import axios from "axios";
import { useEffect, useState } from "react";

export default function GalleryList() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setPictures(persons);
    });
  });

  return (
    <div>
      {pictures.map((pic: any) => (
        <div>{pic.name}</div>
      ))}
    </div>
  );
}

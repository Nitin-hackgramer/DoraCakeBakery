import { useEffect, useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

export function useMenu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/menu/")
        .then(res => res.json())
        .then(data => {
        console.log("Fetched menu:", data); // 👈 Debug
        setMenu(data);
        })
        .catch(err => console.error("Menu fetch error:", err));
    }, []);

  return menu;
}



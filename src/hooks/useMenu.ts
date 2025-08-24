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
    fetch("https://dora-cake-backend.onrender.com/api/menu/")
        .then(res => res.json())
        .then(data => {
        console.log("Fetched menu:", data); // 👈 Debug
        setMenu(data);
        })
        .catch(err => console.error("Menu fetch error:", err));
    }, []);

  return menu;
}




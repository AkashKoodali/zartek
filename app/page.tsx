"use client";

import Header from "@/components/Header";
import { fetchRestuarant } from "@/lib/fetchRestuarant";
import { useEffect, useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import CircularProgress from "@mui/material/CircularProgress";

export default function Home() {
  const [data, setData] = useState<Restuarant | null>(null);
  const [categories, setCategories] = useState<Category[] | null>([]);

  useEffect(() => {
    try {
      fetchRestuarant().then((items) => {
        setData(items[0]);
        setCategories(items[0]?.table_menu_list);
      });
    } catch (error) {
      return;
    }
  }, []);

  return (
    <main>
      {data ? (
        <>
          <Header data={data} />
          <div className="m-2">
            <CategoryTabs categories={categories} />
          </div>
        </>
      ) : (
        <div className="h-[100vh] flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </main>
  );
}

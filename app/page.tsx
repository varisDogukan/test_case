"use client";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Product from "./_components/Product";
import { getGrupList } from "@/lib/productSlice";
import { AppDispatch } from "@/lib/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getGrupList());
  });

  return (
    <main>
      <Product />
    </main>
  );
}

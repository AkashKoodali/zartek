"use client";

export const fetchRestuarant = async () => {
  const data = await fetch(
    "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099",
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  return data;
};

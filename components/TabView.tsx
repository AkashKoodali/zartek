import { Box } from "@mui/material";
import React from "react";
import Dish from "./Dish";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

interface Props {
  value: number;
  dir: string | undefined;
  categories: Category;
  index: number;
}

const TabView = ({ value, dir, categories, index }: Props) => {
  return (
    <TabPanel value={value} index={index} dir={dir}>
      {categories?.category_dishes?.map((dish: Dish) => (
        <Dish key={dish.dish_id} dish={dish} />
      ))}
    </TabPanel>
  );
};

export default TabView;

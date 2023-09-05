import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabView from "./TabView";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "red",
      height: 2.5,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "red",
    },
    "& .MuiTab-root": {
      fontSize: "14px",
      fontWeight: 600,
      borderBottom: "2.4px solid #e8e8e8",
    },
  },
});

interface Props {
  categories: Category[] | null;
}

export default function CategoryTabs({ categories }: Props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="w-[100%] pb-0">
        <Tabs
          className={`w-[100%] ${classes.tabs}`}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable auto wrapped label tabs example"
        >
          {categories?.map((cat: Category, index) => {
            return (
              <Tab
                key={index}
                className="w-[200px] md:w-[300px] min-w-[200px] md:min-w-[300px]"
                label={cat.menu_category}
                sx={{ textTransform: "none", color: "grey" }}
              />
            );
          })}
        </Tabs>
      </div>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {categories?.map((cat: Category, i: number) => (
          <TabView
            key={i}
            value={value}
            index={i}
            dir={theme.direction}
            categories={cat}
          />
        ))}
      </SwipeableViews>
    </Box>
  );
}

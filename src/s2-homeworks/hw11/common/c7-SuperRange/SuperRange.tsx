import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // Основные стили
        width: "300px",
        height: "4px",
        color: "#00CC22",
        padding: "13px 0",

        // Стили для трека
        "& .MuiSlider-track": {
          backgroundColor: "#00CC22",
          border: "none",
          height: "4px",
        },

        // Стили для рельсов (неактивная часть)
        "& .MuiSlider-rail": {
          backgroundColor: "#8B8B8B",
          opacity: 1,
          height: "4px",
        },

        // Стили для ползунка
        "& .MuiSlider-thumb": {
          width: "18px",
          height: "18px",
          backgroundColor: "#00CC22",
          border: "1px solid #00CC22",
          boxShadow: "0 0 0 5px rgba(0, 204, 34, 0.2)",

          "&:hover, &.Mui-focusVisible": {
            boxShadow: "0 0 0 8px rgba(0, 204, 34, 0.2)",
          },

          "&.Mui-active": {
            boxShadow: "0 0 0 11px rgba(0, 204, 34, 0.2)",
          },
        },

        // Для range слайдера (двойного)
        '& .MuiSlider-thumb[data-index="0"]': {
          // Левый ползунок - зеленый
          backgroundColor: "#00CC22",
          border: "1px solid #00CC22",
        },

        '& .MuiSlider-thumb[data-index="1"]': {
          // Правый ползунок - синий
          backgroundColor: "#00CC22",
          border: "1px solid #00CC22",
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;

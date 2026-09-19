

import { Box, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../../public/logo.svg"

const Loader = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(158,158,158,.3)",
      }}
    >
      <Fade in={checked} timeout={1200}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: 160 }}
        />
      </Fade>
    </Box>
  );
};

export default Loader;
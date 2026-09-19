import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, useScrollTrigger, Slide, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../../img/logo.jpeg";

const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/services" },
  { label: "Soluciones", to: "/solutions" },
  { label: "Contacto", to: "/GetKnow" },
];

// Oculta el AppBar al hacer scroll hacia abajo
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "background.paper",
            // borderBottom: "1px solid",
            borderColor: "divider",
            color: "text.primary",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            border: "solid 2px red"
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 1 }}>
            {/* Logo */}
            <Box component={NavLink} to="/" sx={{ display: "flex", alignItems: "start", textDecoration: "none" }}>
              {/* Reemplaza el Box de abajo con tu <img src={logo} /> cuando tengas el asset */}
              <Box
                  component="img"
                  src={logo}
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                />
            </Box>

            {/* Links — desktop */}
            <Box
              component="nav"
              sx={{ display: { xs: "none", md: "flex", }, gap: 1 }}
            >
              {NAV_LINKS.map(({ label, to }) => (
                <Button
                  key={to}
                  component={NavLink}
                  to={to}
                  end={to === "/"}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    fontWeight: isActive(to) ? 700 : 500,
                    color: isActive(to) ? "primary.main" : "text.secondary",
                    bgcolor: isActive(to) ? "primary.50" : "transparent",
                    "&:hover": {
                      bgcolor: "action.hover",
                      color: "text.primary",
                    },
                    transition: "all 0.2s",
                    textTransform: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>

            {/* Hamburger — móvil */}
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Espaciado para que el contenido no quede bajo el AppBar */}
      <Toolbar sx={{ py: 1 }} />

      {/* Drawer — móvil */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Cerrar menú">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List disablePadding>
          {NAV_LINKS.map(({ label, to }) => (
            <ListItem key={to} disablePadding>
              <ListItemButton
                component={NavLink}
                to={to}
                end={to === "/"}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: isActive(to) ? 700 : 400,
                  color: isActive(to) ? "primary.main" : "text.primary",
                  borderLeft: isActive(to) ? "3px solid" : "3px solid transparent",
                  borderColor: isActive(to) ? "primary.main" : "transparent",
                  bgcolor: isActive(to) ? "primary.50" : "transparent",
                  "&:hover": { bgcolor: "action.hover" },
                  transition: "all 0.2s",
                }}
              >
                <ListItemText
                  primary={label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: "1rem",
                        fontWeight: "inherit",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

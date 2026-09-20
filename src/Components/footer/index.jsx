import { NavLink } from "react-router-dom";
import { Box, Container, Grid, Typography, IconButton, Divider, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import logo from "../../../img/logo.jpeg";


const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/services" },
  { label: "Soluciones", to: "/solutions" },
  { label: "Contacto", to: "/GetKnow" },
];


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#000000",
        color: "#ffffff",
        // mt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo / descripción */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
            component="img"
            src={logo}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1,
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: -1,
                mb: 2,
              }}
            ></Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 320 }}>
              Soluciones avanzadas en videovigilancia, automatización de accesos y porteros digitales para proteger lo que más importa.
            </Typography>

            {/* Redes sociales */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "primary.main", bgcolor: "rgba(255,255,255,0.08)" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "primary.main", bgcolor: "rgba(255,255,255,0.08)" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/5210000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "primary.main", bgcolor: "rgba(255,255,255,0.08)" } }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#ffffff" }}>
              Navegación
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {NAV_LINKS.map(({ label, to }) => (
                <MuiLink
                  key={to}
                  component={NavLink}
                  to={to}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.95rem",
                    "&:hover": { color: "primary.main" },
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Servicios */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#ffffff" }}>
              Servicios
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Cámaras CCTV", "Portones automáticos", "Video porteros"].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#ffffff" }}>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon fontSize="small" sx={{ color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  +52 442 000 0000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon fontSize="small" sx={{ color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  contacto@tuempresa.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ color: "primary.main", mt: "2px" }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Lagunilla Hgo, México
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: "rgba(255,255,255,0.15)" }} />

        {/* Barra inferior */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
            © {year} Joshicamp. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink
              href="#"
              underline="none"
              sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", "&:hover": { color: "primary.main" } }}
            >
              Aviso de privacidad
            </MuiLink>
            <MuiLink
              href="#"
              underline="none"
              sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", "&:hover": { color: "primary.main" } }}
            >
              Términos y condiciones
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
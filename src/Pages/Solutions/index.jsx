import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ChatIcon from "@mui/icons-material/Chat";
import { motion } from "motion/react";

import condominio from "../../../img/condominio.jpg"
import logo from "../../../img/logo.jpeg"
import instalacion_3 from "../../../img/instalacion_3.WebP"
import instalcion_13 from "../../../img/instalacion_13.jpg"
import instalcion_6 from "../../../img/instalacion_6.WebP"
import instalacion_11 from "../../../img/instalacion_11.WebP"
import industria from "../../../img/industria.jpg"
 

import './solutions.css'

// Variants reutilizables para las animaciones
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Encabezado de sección reutilizable (título + descripción) con animación en cascada
const SectionHeader = ({ title, description }) => (
    <Grid container spacing={2} sx={{}}>
        <Grid size={12} sx={{ padding: "20px"}}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3">{title}</Typography>
            </motion.div>
        </Grid>
        <Grid size={12} sx={{ padding: "20px"}}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <Typography variant="h5" sx={{margin: 2, lineHeight: 1.5}} className="containeSpaceTypografySubtitle">
                    {description}
                </Typography>
            </motion.div>
        </Grid>
    </Grid>
);

const Solutions = () =>{
    return(
        <>
            <Grid container spacing={5} sx={{mb: 5}} className="containerSpace">
                <Grid size={{xs: 12, md: 8}} sx={{ padding: "20px"}}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="subtitle2" sx={{color: "blue", margin: 2}} className="containeSpaceTypografy">
                                Soluciones, Hogar, negocio y empresas.
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h3" sx={{margin: 2}} className="containeSpaceTypografy">
                                Paquetes armados según lo que proteges.
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h4" sx={{margin: 2, lineHeight: 1.5}} className="containeSpaceTypografySubtitle">
                                Diseñamos la solución completa para tu casa, tu local o tu planta, Elige tu perfil y cotiza en un clic.
                            </Typography>
                        </motion.div>
                    </motion.div>
                </Grid>
            </Grid>

            <SectionHeader
                title="Para tu hogar"
                description={<>Soluciones discretas, fáciles de usar y sin mensualidades forzadas. <br /> Toda la familia las controla desde el celular.</>}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
            >
                <Grid container spacing={2} sx={{mb: 5, mt: 5}}>
                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Casa protegida 360°"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instalacion_3}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Camáras perimetrales + videoportero + alarma interior para casas de 1 a 2 pisoss.
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1 }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            4 cámaras + videoportero.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Alarma con App.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Instalación en 1 día.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(10, 25, 49)",
                                            }}
                                        >Cotizar casa</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Condominio y privadas"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={condominio}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Acceso con tag, plumas y cámaras en áreas comunes con administración central.
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1 }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Control de acceso + tag.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Camáras comunes 4k.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Interfonia por app.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(10, 25, 49)",
                                            }}
                                        >Cotizar condominio</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Ranchos y terrenos "
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instalcion_13}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Cerco eléctrico perimetral + cámaras solares 4G donde no hay luz ni internet.
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1 }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Cerco + cámaras 4G.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Paneles solares.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.primary', margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            sirena de largo alacance.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(10, 25, 49)",
                                            }}
                                        >Cotizar condominio</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                </Grid>
            </motion.div>

            <SectionHeader
                title="Para negocios y empresas"
                description="Videovigilancia 4k, control de personal y pólizas con reporte mensual para auditoria."
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
            >
                <Grid container spacing={2} sx={{mb: 5, mt: 5}}>
                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card  sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    style={{ backgroundColor: 'rgb(10, 25, 49)', color: 'white' }}
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Local anti-robo"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instalcion_6}
                                    alt="Paella dish"
                                    sx={{ objectFit: 'cover', objectPosition: 'center 25%' }}

                                />
                                <CardContent className="containerSpace">
                                    <Typography variant="body2" className="containeSpaceTypografy">
                                        Camáras anti-vandalismo + alarma nocturna + caja con sensor para locales y restaurantes.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            6 cámaras 4k + audio.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Alarma nocturna.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Acceso desde 3 celulares.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing className="containerSpace">
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Cotizar casa</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card className="containerSpace" sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    style={{ backgroundColor: 'rgb(10, 25, 49)', color: 'white' }}
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Oficina y corpotativo"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instalacion_11}
                                    alt="Paella dish"
                                />
                                <CardContent className="containerSpace">
                                    <Typography variant="body2" className="containeSpaceTypografy">
                                        Control de acceso por huella, camáras discretas y registro de asistencia integrado.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Biométrico + torniquete.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Camáras discretas IP .
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Reporte de accesos.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing className="containerSpace">
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Cotizar condominio</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card className="containerSpace" sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    style={{ backgroundColor: 'rgb(10, 25, 49)', color: 'white' }}
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Planta e industria"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={industria}
                                    alt="Paella dish"
                                />
                                <CardContent className="containerSpace">
                                    <Typography variant="body2" className="containeSpaceTypografy">
                                        Perímetro electrificado, cámaras térmicas y monitoreo de andenes y almacén.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Cerco + cámaras térmicas.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Control de andenes.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} className="containeSpaceTypografy">
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Cámaras PTZ.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing className="containerSpace">
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Cotizar condominio</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                </Grid>
            </motion.div>

            <SectionHeader
                title="Precios claros, sin sorpresas"
                description="Todo incluyen visita técnica, intalación y capacitación de uso."
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
            >
                <Grid container  spacing={2} sx={{mb: 5, mt: 5}}>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Casas y departamentos"
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                       Hogar Total.
                                    </Typography>
                                    <Typography variant="body2">
                                       $8,990.
                                    </Typography>
                                    <Typography variant="body2">
                                        MXN - IVA incluido - instalación incluida.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            4 cámaras 5MP + DVR 1TB
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            App móvil + visión nocturna
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Alarma con 4 sensores
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }}>
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                                Instalación en 1 día.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Cotizar por WhatsApp</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card className="containerSpace" sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Locales, oficinas y bodegas"
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                       Negocio Pro.
                                    </Typography>
                                    <Typography variant="body2">
                                       $18,490.
                                    </Typography>
                                    <Typography variant="body2">
                                        MXN - IVA incluido - instalación incluida.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            8 cámaras 4k + NVR 2TB.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Control de acceso + chapa.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Sirena exterior + monitoreo.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Solicitar</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 4}} sx={{display: "flex",justifyContent: "center"}}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card className="containerSpace" sx={{ maxWidth: 345, borderRadius: '50px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt="Logo"
                                            src={logo}
                                            sx={{ bgcolor: 'white' }}
                                        />
                                    }
                                    title="Terrenos, ranchos e industria"
                                />
                                <CardContent>   
                                    <Typography variant="body2">
                                       Perimetral plus.
                                    </Typography>
                                    <Typography variant="body2">
                                       $14,290.
                                    </Typography>
                                    <Typography variant="body2">
                                        MXN - IVA incluido - instalación incluida.
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1 }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            120m cerco eléctrico.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Energizador + respaldo.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Portón automatico 800kg.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: 1  }} >
                                        <Box sx={{display: 'flex'}}>
                                            <CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />
                                            Señalización.
                                        </Box>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '90%' }}>
                                        <Button variant="contained"
                                            sx={{
                                                margin: 1,
                                                height: '50px',
                                                width: '100%',
                                                borderRadius: '50px',
                                                backgroundColor: "rgb(187, 103, 225)",
                                            }}
                                        >Solicitar</Button>
                                    </motion.div>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>

                </Grid>
            </motion.div>

            <Grid container spacing={2} className='containerSpace'>

                <Grid size={{xs: 12, md: 6}} sx={{ padding: "20px"}}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h4" sx={{margin: 2}} className="containeSpaceTypografy">
                            Cuéntanos qué proteges y te armamos la solucuón hoy.
                        </Typography>
                        <Typography variant="h5" sx={{margin: 2, lineHeight: 1.5}} className="containeSpaceTypografySubtitle">
                            Atención de 8am a 9pm - Intalación en 24 horas - garantía.
                        </Typography>
                    </motion.div>
                </Grid>

                <Grid size={{xs: 12, md: 6}} sx={{ padding: "20px", display: 'flex' , justifyContent: 'center', alignItems: "center"}} >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex' }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="contained"
                                startIcon={<ChatIcon />}
                                sx={{
                                    margin: 2,
                                    padding: "12px 30px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    backgroundColor: "#22C15E",
                                }} className="containeSpaceTypografySubtitle">
                                WhatsApp directo
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outlined"
                                sx={{
                                        margin: 2,
                                        padding: "12px 30px",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        borderRadius: "30px",
                                        textTransform: "none",
                                        color: 'white'
                                    }} className="containeSpaceTypografySubtitle">
                                Llamar ahora
                            </Button>
                        </motion.div>
                    </motion.div>
                </Grid>
                    
            </Grid>


        </>
    );
}

export default Solutions

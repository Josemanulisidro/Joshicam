import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import BoltIcon from "@mui/icons-material/Bolt";
import ComputerIcon from "@mui/icons-material/Computer";
import { motion } from "motion/react";

import instalacion_1 from "../../../img/instalacion_1.WebP"
import instalacion_12 from "../../../img/instalacion_12.WebP"
import instalacion_3 from "../../../img/instalacion_3.WebP"
import porton_1 from "../../../img/porton_1.WebP"
import videoPortero_2 from "../../../img/videoPortero_2.avif"


import './inicio.css'

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

const Home = () =>{
    return(
        <>
            <Grid container spacing={5} sx={{mb: {xs: 0, md: 3} }} className="containerSpace">

                <Grid size={{xs: 12, sm: 12, md: 6}} sx={{ padding: "20px"}}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        style={{ width: "100%" }}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="subtitle2" sx={{color: "blue", margin: 2, textAlign: { xs: "center", sm: 'start', md:'start'} }} className="containeSpaceTypografy">
                                SEGURIDAD INTELIGENTE
                            </Typography>
                        </motion.div>

                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h3" sx={{margin: 2, textAlign: { xs: "center",sm: 'start', md:'start' } }} className="containeSpaceTypografy">
                                Tu seguridad, Nuestra Prioridad.
                            </Typography>
                        </motion.div>

                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h4" sx={{margin: 2, lineHeight: 1.5, textAlign: { xs: "center",sm: 'start', md:'start' }, fontSize: { xs:25, sm: 32 } }} className="containeSpaceTypografySubtitle">
                                Soluciones avanzadas en camámaras de seguridad, cercas elécticas, portones automáticos y alarmas. Vedemos, instalamos y damos mantenimiento.
                            </Typography>
                        </motion.div>

                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Box style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="contained"
                                        startIcon={<SecurityIcon />}
                                        sx={{
                                            margin: 2,
                                            padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 30px", },
                                            fontSize: {xs:'0.8rem', sm: '0.9rem', md: '1rem' },
                                            fontWeight: 600,
                                            borderRadius: "30px",
                                            textTransform: "none",
                                        }} className="containeSpaceTypografy">
                                        Cotizar gratis
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="contained"
                                        startIcon={<ChatIcon />}
                                        sx={{
                                            margin: 2,
                                            padding: "12px 30px",
                                            padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 30px", },
                                            fontSize: {xs:'0.8rem', sm: '0.9rem', md: '1rem' },
                                            borderRadius: "30px",
                                            textTransform: "none",
                                            backgroundColor: "#22C15E",
                                        }} className="containeSpaceTypografySubtitle">
                                        WhatsApp directo
                                    </Button>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </motion.div>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 6}} sx={{ padding: "40px"}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Box component="img" src={instalacion_1} alt="Inicio" sx={{width: '100%',height: 'auto', display: 'block', borderRadius: '10px'}} ></Box>
                    </motion.div>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{mb: {xs: 0, md: 3}}}>

                <Grid size={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h3" sx={{textAlign: { xs: "center"}, fontSize: { xs:40, md: 48 } }}>Nuestros servicios</Typography>
                    </motion.div>
                </Grid>
                <Grid size={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography variant="h5" sx={{textAlign:{xs: "center"} }} className="containeSpaceTypografySubtitle">Tecnología de vanguardia para cada necesidad de protección.</Typography>
                    </motion.div>
                </Grid>

            </Grid>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <Grid container spacing={2} sx={{mb: 5, mt: 5}}>

                    <Grid size={{xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ width: "100%", minWidth: 300, maxWidth: 350 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={instalacion_12}
                                        alt="Cámara de seguidad"
                                        sx={{ height: {xs: 150, md: 190}, objectFit: 'cover', objectPosition: 'center 25%' }}
                                    />
                                    <CardContent>
                                    <Typography variant="subtitle2" sx={{color: "blue"}}>
                                        MONITOREO
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Cámara de Seguridad ((CCTV))
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Vigilancia 24/7 con acceso remoto desde tu smartphone. Resolución 4K y visión nocturna avanzada.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{width: "100%", minWidth: 300, maxWidth: 350 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={porton_1}
                                        alt="Portones"
                                        sx={{ height: {xs: 150, md: 190} }}
                                    />
                                    <CardContent>
                                    <Typography variant="subtitle2" sx={{color: "blue"}}>
                                        AUTOMATIZACIÓN
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Portones Automáticos.
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Motores de alto tráfico rápidos y seguros. Control via mando o aplicación para todo tipo de accesos.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid size={{xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{width: "100%", minWidth: 300, maxWidth: 350 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={videoPortero_2}
                                        alt="Video Portero"
                                        sx={{ height: {xs: 150, md: 190}, objectFit: 'cover', objectPosition: 'center 25%' }}
                                    />
                                    <CardContent>
                                    <Typography variant="subtitle2" sx={{color: "blue"}}>ACCESOS</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Video Porteros
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Control de acceso con video en tiempo real. Comunicación bidireccional y apertura remota segura.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>

            <Grid container spacing={2} sx={{ mt: {xs: 0, md: 3 }}} className="containerSpaceSecundary">

                <Grid size={{xs: 12, sm: 12, md: 5}} sx={{ padding: "40px" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box component="img" src={instalacion_3} alt="Inicio_img2" sx={{width: '100%',height: 'auto', display: 'block', borderRadius: '10px'}} ></Box>
                    </motion.div>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{ padding: "40px" }} >
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <Typography variant="h3" sx={{margin: 2, textAlign:{xs: "center", sm: 'start', md:'start'}, fontSize: { xs:40, md: 48 } }}>
                            Soluciones integrales para tu seguridad
                        </Typography>
                        <Typography variant="h4" sx={{ margin: 2, lineHeight: 1.5, textAlign:{xs: "center", sm: 'start', md:'start'}, fontSize: { xs:25, sm: 32 }}} className="containeSpaceTypografySubtitle">
                            Diseñamos ecosisitemas  de protección integrales, combinando cámaras de seguridad, portones automáticos y video porteros para una vigilancia completa y control de accesos eficiente.
                        </Typography>
                    </motion.div>
                </Grid>

            </Grid>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <Grid container spacing={2} className="containerSpaceSecundary" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ width: "100%", minWidth: 200, maxWidth: 300, }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<BuildIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">01</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Mantenimiento
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Limpieza, enfoque, revisión de disco y respaldos.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ width: "100%", minWidth: 200, maxWidth: 300 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<BoltIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">02</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Reparaciones
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Cámaras, DVR, cercas motores y alármas.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ width: "100%", minWidth: 200, maxWidth: 300 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<ComputerIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">03</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Ayuda remota
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Configuramos tu app por videollamada.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                 </Grid>
            </motion.div>

        </>
    );
}

export default Home
import { Box, Button, Card, CardActions, CardContent, Chip, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { motion } from "motion/react";

import './services.css'
import instalacion_9 from "../../../img/instalacion_9.WebP"
import instalacion_16 from "../../../img/instalacion_16.WebP"
import cercaElectrica_1 from "../../../img/cercaElectrica_1.jpg"
import alarmas_1 from "../../../img/alarmas_1.jpg"

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

const chipVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// Bloque reutilizable: imagen a la izquierda, texto a la derecha (o viceversa)
const ServiceRow = ({ image, alt, title, description, chips, imageFirst = true }) => {
    const ImageBlock = (
        <Grid size={{xs: 12, sm: 12, md: 6}} sx={{ padding: "40px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <motion.div
                initial={{ opacity: 0, x: imageFirst ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
                <Box component="img" src={image} alt={alt} sx={{width: '80%',height: 360, objectFit: 'cover', display: 'block', borderRadius: '10px'}}></Box>
            </motion.div>
        </Grid>
    );

    const TextBlock = (
        <Grid size={{xs: 12, sm: 12, md: 6}} sx={{ padding: "20px"}}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <Grid size={12} sx={{ padding: "20px"}}>
                    <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                        <Typography variant="h3" sx={{textAlign:{xs: "center",sm: 'start', md:'start'}, fontSize: { xs:40, md: 48 } }}>{title}</Typography>
                    </motion.div>
                </Grid>
                <Grid size={12} sx={{ padding: "20px"}}>
                    <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                        <Typography variant="h5" sx={{margin: 2, lineHeight: 1.5,textAlign:{xs: "center",sm: 'start', md:'start'}, fontSize: { xs:25, sm: 32 } }} className="containeSpaceTypografySubtitle">
                            {description}
                        </Typography>
                    </motion.div>
                </Grid>

                <Grid size={12} sx={{ padding: "20px"}}>
                    <Grid container spacing={1} >
                        <Grid size={{xs: 12, md:6}} sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: {  xs: "center",md: "flex-start"} }} >
                            <motion.div variants={chipVariant}>
                                <Chip icon={<CheckIcon sx={{ fontSize: 20,color: "#0055ff !important" }} />} label={chips[0]} sx={{height:40, padding: "10px", textAlign:{xs: "center",sm: 'start', md:'start'}}} />
                            </motion.div>
                            <motion.div variants={chipVariant}>
                                <Chip icon={<CheckIcon sx={{ fontSize: 20, color: "#0055ff !important" }} />} label={chips[1]} sx={{height:40, padding: "10px"}} />
                            </motion.div>
                        </Grid>
                        <Grid size={{xs: 12, md:6}} sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: {  xs: "center",md: "flex-start"}}}>
                            <motion.div variants={chipVariant}>
                                <Chip icon={<CheckIcon sx={{ fontSize: 20, color: "#0055ff !important" }} />} label={chips[2]} sx={{height:40, padding: "10px"}} />
                            </motion.div>
                            <motion.div variants={chipVariant}>
                                <Chip icon={<CheckIcon sx={{ fontSize: 20, color: "#0055ff !important" }} />} label={chips[3]} sx={{height:40, padding: "10px"}} />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>
        </Grid>
    );

    return (
        <Grid container spacing={2} sx={{mb: 5, mt: 5}}>
            {imageFirst ? <>{ImageBlock}{TextBlock}</> : <>{TextBlock}{ImageBlock}</>}
        </Grid>
    );
};

const Services = () =>{
    return(
        <>
            <Grid container spacing={5} sx={{mb: {xs: 0, md: 3} }} className="containerSpace">
                <Grid size={{xs: 12, md: 8}} sx={{ padding: "20px"}}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="subtitle2" sx={{color: "blue", margin: 2, textAlign:{xs: "center", sm: 'start', md:'start'}}} className="containeSpaceTypografy">
                                Servicios: venta, intalación y mantenimiento.
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h3" sx={{margin: 2, textAlign:{xs: "center",sm: 'start', md:'start'}}} className="containeSpaceTypografy">
                                Cuatro servicios, un solo proveedor de confianza.
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                            <Typography variant="h4" sx={{margin: 2, lineHeight: 1.5, textAlign:{xs: "center", sm: 'start', md:'start'}, fontSize: { xs:25, sm: 32 }}} className="containeSpaceTypografySubtitle">
                                Cámaras, cercas electricas, portones automáticos y alarmas para casas, negocios y empresas, Equipos originales,
                                instalación en 24 horas y garantia.
                            </Typography>
                        </motion.div>
                    </motion.div>
                </Grid>
            </Grid>

            <ServiceRow
                image={instalacion_9}
                alt="Servicios_camáras"
                title="Camáras de seguidad"
                description="Videovigilancia HD y 4k con visión nocturna a color, detección de personas y monitoreo desde tu celular.Kits para interior y exterior con grabación 24/7."
                chips={["4 a 34 cámaras por sistema.", " Visión nocturna a color.", "App móvil + alertas.", "Respaldo hasta 30 días."]}
                imageFirst={false}
            />

            <ServiceRow
                image={cercaElectrica_1}
                alt="Servicios_cercasElecticas"
                title="Cercas eléctricas"
                description="Cercos perimetrales electrificados con energizador certificado, respaldo de batería y señalización reglamentaria. Ideal para casas, bodegas y ranchos."
                chips={["Desde 30 hasta 500 m .", " 3 niveles de voltaje.", "Respaldo 12 h sin luz.", "Señalización incluida ."]}
                imageFirst={true}
            />

            <ServiceRow
                image={instalacion_16}
                alt="Servicios_portones"
                title="Portones automáticos"
                description="Motores para porteros corredizos, abatibles y seccionales con controles, tag y apertura desde app. Reparamos cualquier marca y automatizamos tu portón actual."
                chips={["Motores hasta 1,500 kg.", " Respaldo con batería.", "Control + tag + app.", "Videoportero opcional."]}
                imageFirst={false}
            />

            <ServiceRow
                image={alarmas_1}
                alt="Servicios_alarmas"
                title="Alarmas y sensores"
                description="Planes de alarma con sensores de movimiento, apertura de puertas, humo y sirena exterior de 120 dB. Aviso inmediato a tu celular y a contactos de emergencia."
                chips={["Sensores puerta + movimiento.", " Aviso a tu celular.", "Sirena exterior de 120 dB.", "Botón de pánico."]}
                imageFirst={true}
            />

            <Grid container spacing={2} sx={{mt: {xs: 0, md: 3} }} className="containerSpaceSecundary">
                <Grid size={12} sx={{ padding: "20px"}}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h3" sx={{textAlign:{xs: "center",sm: 'start', md:'start'}, fontSize: { xs:40, md: 48 } }}>Así de fácil es protegerte</Typography>
                    </motion.div>
                </Grid>
            </Grid>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <Grid container spacing={2} className="containerSpaceSecundary">

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<AssignmentIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">01</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Visita y diagnóstico
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Medimos, revisamos riesgos y <br /> te proponemos.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<AssignmentIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">02</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Cotización clara
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Precio cerrado con equipo <br /> y tiempos.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<AssignmentIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">03</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Intalación certificada
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Técnicos uniformados en 1 día.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid size={{xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div variants={cardVariant} whileHover={{ y: -8 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardActions sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "24px"}}>
                                    <Button variant="contained"
                                        sx={{
                                            margin: 1,
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '10%',
                                            backgroundColor: "rgb(10, 25, 49)",
                                        }}
                                    >{<AssignmentIcon />}</Button>
                                    <Typography variant="h3" className="containeSpaceTypografySubtitle" color="initial">04</Typography>
                                </CardActions>
                                <CardContent>
                                    <Typography variant="h5">
                                        Garantía y soporte
                                    </Typography>
                                    <Typography variant="body2" className="containeSpaceTypografySubtitle">
                                        Capacitación + póliza y 24/7.
                                    </Typography>
                                </CardContent>
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
                        <Typography variant="h4" sx={{margin: 2, textAlign:{xs: "center",sm: 'start', md:'start'} }} className="containeSpaceTypografy">
                            ¿No sabes qué necesitas? Te diagnosticamos.
                        </Typography>
                        <Typography variant="h5" sx={{margin: 2, lineHeight: 1.5, textAlign:{xs: "center",sm: 'start', md:'start'} }} className="containeSpaceTypografySubtitle">
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
                                    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 30px", },
                                    fontSize: {xs:'0.8rem', sm: '0.9rem', md: '1rem' },
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
                                        padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 30px", },
                                        fontSize: {xs:'0.8rem', sm: '0.9rem', md: '1rem' },
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
    )
}

export default Services

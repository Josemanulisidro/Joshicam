
import "./index.css";
import conocenos from "../../../img/conocenos.mp4"

const GetKnow = () =>{
    return(
        <>
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video-bg"
                >
                    <source src={conocenos} type="video/mp4" />
                        Tu navegador no soporta el video
                </video>

                <div className="content">
                    <h1>Conócenos</h1>
                    <p>Somos expertos en soluciones digitales</p>
                    <h2 className="conocenos-info-titulo">Servicio al cliente</h2>
                    <p className="conocenos-info-txt">cel: 7721433411</p>
                    <p className="conocenos-info-txt">cel: 7721504306</p>
                    <h2 className="conocenos-info-titulo">Horarios de atención</h2>
                    <p>Lunes a viernes de 9:00 a 18:00</p>
                    <p>Sabados de 9:00 a 14:00</p>
                </div>

            </div>
        </>
    );
}

export default GetKnow
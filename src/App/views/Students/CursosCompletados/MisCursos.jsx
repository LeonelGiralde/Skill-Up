import {
	Container,
	Row,
	Col,
	Card,
	ProgressBar,
	Button
} from "react-bootstrap";
import "./MisCursos.css";
import { Link } from "react-router-dom";
import { COURSE_DETAILS } from "../../../router/children.jsx";
import { formatDate } from "../../../../utils/formatDate.js";

const Cards = ({ allCourse }) => {
	if (!allCourse) return null;
	return (
		<Container fluid className="cardContainer" id="MisCursos">
			<Row>
				<Col>
					<h2>Mis Cursos</h2>
				</Col>
			</Row>
			<Row>
				{allCourse.map(card => (
					//  linkea al curso especifico segun id
					<Link key={card.id} to={COURSE_DETAILS.to + card.id}>
						<Col xs={12} md={6} lg={4}>
							<Card className="mb-4">
								{/* Imagen del curso */}
								<div className="cardImg">
									<Card.Img variant="top" src={card.cover_image} />
								</div>
								<Card.Body className="position-relative">
									{/* Etiqueta de horas */}

									{/* Título del curso */}
									<Card.Title>{card.title}</Card.Title>

									{/* Texto descriptivo */}
									<Card.Text>
										Fecha Inicio: {formatDate(card.date_created)}
									</Card.Text>

									{/* Costo */}
									{/* <Card.Text>Costo: {card.cost}</Card.Text> */}

									{/* Barra de progreso */}
									<ProgressBar
										now={card.progreso}
										label={`${1}%`}
										className="mb-3"
										variant="dark"
									/>

									{/* Si el progreso es del 100%, mostrar el botón de certificado */}
									{card.progreso === 100 && (
										<Button
											variant="dark"
											href={card.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Descargar certificado
										</Button>
									)}
								</Card.Body>
							</Card>
						</Col>
					</Link>
				))}
			</Row>
		</Container>
	);
};

export default Cards;

import {Card, Container, Row, Col}from "react-bootstrap"
import startupImage from "../assets/images/poster/startup.jpg"
import hometownImage from "../assets/images/poster/hometown.jpg"
import twentyImage from "../assets/images/poster/2521.jpg"
import sgImage from "../assets/images/poster/squid-game2.png"

const Drama = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">Latest</h1>
                <Row>
                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={startupImage} alt="Start Up" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Start Up</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={hometownImage} alt="Home Town" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Hometown <br></br>Cha Cha Cha</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={twentyImage} alt="Twenty Five Twenty One" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Twenty Five Twenty One</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={sgImage} alt="Start Up" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Squid Game</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={startupImage} alt="Start Up" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Start Up</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={hometownImage} alt="Home Town" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Hometown <br></br>Cha Cha Cha</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={twentyImage} alt="Twenty Five Twenty One" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Twenty Five Twenty One</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col className="movieImage">
                        <Card className=" bg-dark text-white mt-5 movieImage">
                            <Card.Img src={sgImage} alt="Start Up" />
                            <div className="p-1 m-1">
                                <Card.Title className="text-center">Squid Game</Card.Title>
                                <Card.Text className="text-center">
                                    <div className="IntroButton">
                                    <button variant="light">Nonton Sekarang</button>
                                    </div>
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Drama
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import blackpantherImage from "../assets/film super/blackpanther.jpg"
import avengersImage from "../assets/film super/avengers.jpg"
import spidermanImage from "../assets/film super/spiderman.jpg"
import TheMarvelsImage from "../assets/film super/TheMarvels.jpg"
import blackwidowImage from "../assets/film super/blackwidow.jpg"
import guardiansImage from "../assets/film super/guardians.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                         <Card className="movieImage">
                             <Image src={blackpantherImage} alt="Blackpanther Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">BLACKPANTHER</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Raja baru dari Wakanda, T’Chala masih berduka atas meninggalnya sang ayah, T’Chaka. Namun ia kemudian memutuskan untuk meneruskan perjuangan sang ayah.
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                         <Card className="movieImage">
                             <Image src={avengersImage} alt="Avengers Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">AVENGERS: INFINITY WAR</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     The Avengers harus bersedia mengorbankan segalanya untuk mengalahkan Thanos yang kuat sebelum ia berhasil menghancurkan alam semesta. 
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                         <Card className="movieImage">
                             <Image src={spidermanImage} alt="Spiderman Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">SPIDERMAN</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Peter Parker tidak menikmati liburan ke Eropa bersama teman-temanya. Selama di Eropa Peter harus menghadapi banyak musuh mulai dari Hydro Man dan Sandman
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                         <Card className="movieImage">
                             <Image src={TheMarvelsImage} alt="TheMarvels Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">THE MARVELS</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     The Marvels adalah film adiwira Amerika Serikat mendatang yang didasarkan dari Marvel Comics menampilkan watak Carol Danvers/Captain Marvel 
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                         <Card className="movieImage">
                             <Image src={blackwidowImage} alt="Blackwidow Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">BLACK WIDOW</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     film Black Widow menceritakan harus menghadapi sisi gelap hidupnya saat sebuah konspirasi berbahaya dikaitkan dengan masa lalunya.
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                         <Card className="movieImage">
                             <Image src={guardiansImage} alt="Guardians Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">GUARDIANS OF THE GALAXY</Card.Title>
                                     <Card.Text className="text-white text-left">
                                     Guardians of the Galaxy adalah film pahlawan super Amerika Serikat yang diadaptasi dari Guardians of the Galaxy terbitan Marvel Comics. 
                                     </Card.Text>
                                    <Card.Text className="text-white text-left">
                                     Last updated 1 mins ago
                                     </Card.Text>
                                 </div>
                             </div>
                         </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero
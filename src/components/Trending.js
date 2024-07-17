import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avatarImage from "../assets/film trending/Avatar _).jpg"
import disneyImage from "../assets/film trending/Disney Moana-Ocean Floor Wall Poster.jpg"
import beautifulImage from "../assets/film trending/Beautifulprettybreathtakingfunnyamazing_.jpg"
import cocoImage from "../assets/film trending/coco.jpg"
import ratatouilleImage from "../assets/film trending/Ratatouille 2007.jpg"
import maleficentImage from "../assets/film trending/-Rnj-ZJR.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                         <Card className="movieImage">
                             <Image src={avatarImage} alt="Avatar Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">AVATAR</Card.Title>
                                     <Card.Text className="text-white text-center">
                                      Film Avatar menceritakan Seorang Marinir lumpuh dikirim ke bulan Pandora untuk menjalani misi khusus namun, ia justru dilema antara mengikuti perintah atau melindungi dunia baru.
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
                             <Image src={disneyImage} alt="Disney Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">MOANA</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Moana adalah sebuah film petualangan fantasi musikal animasi komputer 3D Amerika 2016 yang diproduksi oleh Walt Disney Animation Studios dan film ke-56 dalam kanon fitur animasi Disney.
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
                             <Image src={beautifulImage} alt="Beautiful Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">TANGLED</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Tangled merupakan film animasi musikal tahun 2011 yang disutradarai oleh Nathan Greno dan Byron Howard dan diproduksi oleh Roy Conli, John Lasseter dan Glen Keane dari Walt Disney Animation Studios. 
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
                             <Image src={cocoImage} alt="Coco Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">COCO</Card.Title>
                                     <Card.Text className="text-white text-center">
                                      Miguel bermimpi dengan menakjubkan untuk menjadi musisi berprestasi seperti idolanya, Ernesto de la Cruz. 
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
                             <Image src={ratatouilleImage} alt="Trolls Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">RATATOUILLE</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Film ini mengenai seekor tikus yang bernama Rémy, yang ingin menjadi koki restoran terkenal di Paris.
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
                             <Image src={maleficentImage} alt="Maleficent Movies" className="images" />
                             <div className="bg-dark">
                                 <div className="p-2 m-1 text white">
                                     <Card.Title className="text-white text-center">MALEFICENT</Card.Title>
                                     <Card.Text className="text-white text-center">
                                     Film ini mengangkat sisi lain dari sang tokoh antagonis penyihir wanita bernama Maleficent.
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

export default Trending
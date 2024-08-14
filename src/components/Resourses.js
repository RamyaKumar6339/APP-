
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Styled Components
const Header = styled.header`
  background-color: black;
  padding: 10px 20px;
  color: white;
  text-align: center;
`;

const ResourcesContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ResourceLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  margin: 15px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const CarouselContainer = styled.div`
  margin-top: 40px;
`;

// Resources Component
function Resources() {
  return (
    <>
      <Header>
        <h1>Chess Academy Resources</h1>
      </Header>
      <ResourcesContainer>
        <SectionTitle>Online Resources</SectionTitle>
        <ResourceGrid>
          
          <Card> 
            <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUM_WomHyb0MO2cbf6lWEcCY87vLr_3kLxzQ&s" alt="Chess.com" />
            <ResourceLink href="https://www.chess.com" target="_blank" rel="noopener noreferrer">
              Chess.com
            </ResourceLink>
            <ResourceDescription>
              A popular platform for playing, learning, and analyzing chess games. Offers tutorials, puzzles, and online games.
            </ResourceDescription>
          </Card>
          <Card>
            <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBb-QUWx-B7SRE5rN2HmJTbNVBRWBls4Z-VF3SM7NMjE0_voI8zKqwtZUwfc1vGauKEU&usqp=CAU" alt="Lichess" />
            <ResourceLink href="https://lichess.org" target="_blank" rel="noopener noreferrer">
              Lichess
            </ResourceLink>
            <ResourceDescription>
              A free and open-source chess server with various features including online play, puzzles, and training.
            </ResourceDescription>
          </Card>
          <Card>
            <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgxYrGGw1cem1b4TKXmfVAZqASvYxhH7KltXzPEJc7Ib-AxIJetXBvjGT3ScbB-Xzv7c&usqp=CAU" alt="ChessBase" />
            <ResourceLink href="https://www.chessbase.com" target="_blank" rel="noopener noreferrer">
              ChessBase
            </ResourceLink>
            <ResourceDescription>
              Provides a comprehensive database of chess games and offers tools for game analysis and study.
            </ResourceDescription>
          </Card>
          {/* Add more cards as needed */}
        </ResourceGrid>

        <CarouselContainer>
          <SectionTitle>Chess Video Resources</SectionTitle>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/IU6k-4rKf-g?si=yZdorxBrZsgfSXnf"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/tkDgU74v1KE?si=4P0YXsFYcu1xSCQE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/tkDgU74v1KE?si=awhcoKRlQhK_b0g_"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel>
        </CarouselContainer>
      </ResourcesContainer>
    </>
  );
}

export default Resources;

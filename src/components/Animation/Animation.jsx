import { Container, DogHead, Img, Txt } from './Animation.styled';
import img from './img/dogHhead.png';

export const Animation = () => {
  return (
    <Container>
      <DogHead>
        <Img alt="doggy" src={img} />
        <Txt>I AM WAITING FOR YOU</Txt>
      </DogHead>
    </Container>
  );
};

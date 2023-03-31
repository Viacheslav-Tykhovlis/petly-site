import img from './img/dogHhead.png';
import { Container, DogHead, Txt, Img } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <DogHead>
        <Img alt="doggy" src={img} />
        <Txt>I AM WAITING FOR YOU</Txt>
      </DogHead>
    </Container>
  );
};

export default Loader;

import coverImage from 'img/group-animal.jpg';
import { Image, Text, Box } from './CoverPage.styled';

const CoverPage = () => {
  return (
    <Box>
      <Text>Not pets here</Text>
      <Image src={coverImage} alt={'not added pet'}></Image>
    </Box>
  );
};

export default CoverPage;

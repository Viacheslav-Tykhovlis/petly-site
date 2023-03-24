import React from 'react';

function StepOne() {
  return (<ImageWrap>
          <img src={defaultImg} alt="title" />
        </ImageWrap>

        <StyledTitle>{title}</StyledTitle>

        <StyledList>
          <Features>
            <Text>Name:</Text>
            <Text>Birthday:</Text>
            <Text>Breed:</Text>
            <Text>Place:</Text>
            <Text>The sex:</Text>
            {category === 'sell' && <Text>Price:</Text>}
            <Text>Email:</Text>
            <Text>Phone:</Text>
          </Features>
          <Features>
            <Descr>{name} </Descr>
            <Descr>{birthdate}</Descr>
            <Descr>{breed}</Descr>
            <Descr>{location}</Descr>
            <Descr>{sex[0]}</Descr>
            {category === 'sell' && <Descr>{price}</Descr>}
            <Descr>{owner?.email}</Descr>
            <Descr>{owner?.phone}</Descr>
          </Features>
        </StyledList>

        <Text>
          Comments: <DescrSpan>{comments}</DescrSpan>
        </Text>

        {/* кнопки возможно будут другие - type button, вместо навЛинк */}
        <ButtonBox>
          <StyledNavButton buttonName="Add to" />
          <StyledNavButton buttonName="Contact" />
        </ButtonBox>;)
}

export default StepOne;

import * as React from 'react';
import { Box, Card, CardBody, CardFooter, Text, Image, Paragraph } from 'grommet';

const PlatformCard = ({
  icon,
  title,
  description,
  backgroundColor,
}) => (
  <Card background={backgroundColor} style={{ maxWidth: 292, maxHeight: 326 }} >
    <Box
      elevation='medium'
      pad='large'
      height='160px'
    >
      <Image src={icon} />
    </Box>
    <Box 
      align='start' 
      gap='none' 
      direction='column' 
      background='#FFFFFF' 
      pad={{ horizontal: 'medium', vertical: 'medium' }}
      height='166px'
      >
      <Text weight='bold' size='large' >{title}</Text>
      <Paragraph size='small' margin={{ top: '0' }}>{description}</Paragraph>
    </Box>
  </Card>
)

export default PlatformCard;
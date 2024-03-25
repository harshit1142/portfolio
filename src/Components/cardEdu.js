import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function cardEdu({name,location,date,stream,cpi,img}) {
  return (
      <Card className='bg-dark text-light w-90 '
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
      >
          <Image className='p-3'
          style={{width:"130px",height:"130px"}}
              objectFit='fit'
              maxW={{ base: '50%', sm: '20px' }}
              src={img}
              alt='logo'
          />

          <Stack className='p-3'>
              <CardBody>
                  <Heading size='md'>{name}</Heading>

                  <Text py='2'>
                      {location}
                  </Text>
                  <Text py='2'>
                      {date}
                  </Text>
                  <Text py='2'>
                      {stream}
                  </Text>
              </CardBody>

              <CardFooter>
                  <Text py='2'>
                      {cpi}
                  </Text>
              </CardFooter>
          </Stack>
      </Card>
  )
}

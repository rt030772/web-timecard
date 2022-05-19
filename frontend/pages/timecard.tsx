import { Box, Button, Container, FormControl, FormLabel, Heading, IconButton, Input, MenuButton, Select, VStack } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'
import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'
import { WorkClassSelect } from '../components/atoms/WorkClassSelect';
import { WorkTimeSelect } from '../components/atoms/WorkTimeSelect';
import { WorkHourSelect } from '../components/atoms/WorkHourSelect';
import { WorkMinuteSelect } from '../components/atoms/WorkMinuteSelect';
import { WorkMinuteInput } from '../components/atoms/WorkMinuteInput';
import { TimecardTable } from '../components/layouts/TimecardTable';
function Timecard() {

  return (
    <>
      <Container mt={8} maxW={1280}>
        <TimecardTable></TimecardTable>
      </Container>
    </>

  )

}

export default Timecard;
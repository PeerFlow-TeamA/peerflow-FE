'use client';
import { Container, Box, Card, Typography, Avatar, TextField, Pagination } from "@mui/material";
import Header from "@/components/Header";
import React from 'react';

export default function detailPage() {
  return (
    <Container maxWidth="md">
      <Header head={'Peer flow'} />
      <Card variant="outlined" >
        <Typography sx={{ margin: '20px' }} variant="h6">Q. How</Typography>
        <Box style={{
          margin: '20px',
          display: 'flex',
        }}>
          <Avatar sx={{ width: 30, height: 30, marginRight: '10px' }}>N</Avatar>
          <Box>
            <Typography sx={{ fontSize: '15px' }} component="div">Nickname</Typography>
            <Typography sx={{ fontSize: '10px', lineHeight: 1.5 }} component="div">2021-10-10 10:10</Typography>
          </Box>
        </Box>
        <Typography sx={{ margin: "20px" }} my={1}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna aliquet, pretium nibh volutpat, pretium neque. Nulla facilisi. Sed eget suscipit mi. Sed finibus, nisi at pellentesque ultrices, elit orci ultricies nisl, a interdum risus elit vel eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget arcu suscipit, egestas nulla vel, auctor diam. Aenean bibendum laoreet urna, in tincidunt turpis commodo nec. Proin ultrices, sapien in consequat fermentum, neque odio volutpat urna, nec molestie felis ligula eget nisi. Ut sit amet velit luctus sapien blandit finibus. Aenean malesuada nisi a lectus posuere, aliquet ultrices tellus tristique. Maecenas metus dui, malesuada non nunc eu, vulputate convallis tellus. Praesent in vulputate sem, sit amet elementum leo. Nulla ac scelerisque arcu. Etiam efficitur est convallis, posuere erat id, elementum lorem.

          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin euismod dui ac molestie. Aenean lacus nulla, suscipit et eros id, ornare scelerisque lectus. In rutrum viverra massa, ut mattis sem lacinia a. Morbi sit amet nisi massa. Praesent at ligula facilisis, condimentum quam eu, iaculis nibh. Nulla ac laoreet neque. Duis quis tellus dapibus, mollis mi eu, posuere urna.

          In hac habitasse platea dictumst. Nullam est enim, vehicula non dignissim sed, accumsan at ex. Sed vulputate libero nibh, non suscipit odio finibus feugiat. Suspendisse posuere commodo elit sit amet elementum. Nullam eu tempor odio, vitae ultricies ante. Nam commodo lorem dictum, laoreet neque ac, dictum metus. Nam elit magna, congue eget lacus eget, malesuada volutpat urna. Praesent facilisis magna ac porttitor elementum. Quisque ut elit et urna tempor aliquet vitae sit amet diam. Proin hendrerit placerat rhoncus. Cras eros ipsum, pulvinar nec iaculis eu, sollicitudin id ex. Morbi tempor enim ante, et commodo mi imperdiet non.

          Maecenas lobortis bibendum quam vel euismod. Mauris quis scelerisque diam. Nam congue turpis nec sem varius, hendrerit sollicitudin est fringilla. Nullam non dui turpis. Sed rutrum varius accumsan. Integer molestie libero quis dignissim tempor. Proin et semper nunc. Donec elementum, sem a tempus tincidunt, eros sapien pretium risus, et vehicula justo ex vel nisl. Curabitur sagittis risus in erat iaculis consectetur. Praesent elementum libero ultrices, sollicitudin magna eget, bibendum nulla. Vivamus felis est, facilisis quis hendrerit eu, placerat non nunc. Aliquam sodales id mi sed finibus. Maecenas molestie enim ut bibendum accumsan. Fusce vitae rutrum enim, vel tempus purus.

          Ut ut sagittis odio. Nullam eu volutpat velit. Mauris dapibus tellus quam, nec interdum nunc tincidunt non. Vestibulum accumsan, neque vitae congue porta, magna purus pulvinar dui, vel elementum orci lorem in arcu. Praesent porta lacus in tempor rhoncus. Etiam porta rutrum commodo. Sed vel diam eu nisi pulvinar eleifend vel at leo. Nullam et elit quis diam gravida consequat gravida sed turpis. Sed vulputate tortor nulla, ac gravida felis vestibulum id. Quisque nec urna iaculis, placerat nibh nec, ultrices ipsum. Nullam interdum, purus et laoreet iaculis, ex nulla convallis arcu, non auctor nunc felis non quam.</Typography>
      </Card>
      <Box sx={{
        mt: '20px',
        mr: '20px',
        ml: '20px',
        display: 'flex',
      }}>
        <Card sx={{ width: '100%' }} variant="outlined">
          <Typography sx={{ fontSize: '15px', margin: '10px' }} component="div">댓글</Typography>
        </Card>
      </Box>
      <Box sx={{
        mt: '10px',
        mr: '20px',
        ml: '20px',
        display: 'flex',
      }}>
        <Card variant="outlined" >
          <Box style={{
            margin: '20px',
            display: 'flex',
          }}>
            <Avatar sx={{ width: 30, height: 30, marginRight: '10px' }}>N</Avatar>
            <Box>
              <Typography sx={{ fontSize: '15px' }} component="div">Nickname</Typography>
              <Typography sx={{ fontSize: '10px', lineHeight: 1.5 }} component="div">2021-10-10 10:10:10</Typography>
            </Box>
          </Box>
          <Typography sx={{ margin: "20px" }} my={1}>

            posuere erat id, elementum lorem.

            Vestibulum accumsan, neque vitae congue porta, magna purus pulvinar dui, vel elementum orci lorem in arcu. Praesent porta lacus in tempor rhoncus. Etiam porta rutrum commodo. Sed vel diam eu nisi pulvinar eleifend vel at leo. Nullam et elit quis diam gravida consequat gravida sed turpis. Sed vulputate tortor nulla, ac gravida felis vestibulum id. Quisque nec urna iaculis, placerat nibh nec, ultrices ipsum. Nullam interdum, purus et laoreet iaculis, ex nulla convallis arcu, non auctor nunc felis non quam.</Typography>
        </Card>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Pagination sx={{
        mt: '5px',
        fontSize: '10px',
      }} count={3} page={1} />
      </Box>
      <Box sx={{
        mt: '5px',
        mr: '20px',
        ml: '20px',
        mb: '20px',
      }}>
        <Card variant="outlined" >
      <TextField sx={{
        mt: '5px',
        mr: '20px',
        ml: '20px',
        }}></TextField>
        </Card>
        </Box>
    </Container >
  );
}

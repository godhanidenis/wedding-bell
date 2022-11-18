import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pngfind from "../../assets/pngfind.png"
// import color from "../../assets/color.png"
import whatsapp from "../../assets/whatsapp.png"
import facebook from "../../assets/facebook.png"
import linkliden from "../../assets/linkedin.png"
import youtube from "../../assets/youtube.png"
import instagram from "../../assets/instagram.png"
import img1 from '../../assets/img/img11.jpg';
import img2 from '../../assets/img/img12.jpg'
import img3 from '../../assets/img/img13.jpg'
import likeshare from '../../assets/likeshare.svg'
// import Shoplogo from "../../assets/shoplogo.png"
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Image from 'next/image';
import { Avatar, Button, Divider, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Rating, Select, Switch } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Stack } from '@mui/system';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../pages/index.module.css"
import ReactImageMagnify from 'react-image-magnify';

var photos = [
  pngfind,
  img1,
  img2,
  img3
]
var select = [
  pngfind,
  pngfind,
  pngfind,
  pngfind,
]
export default function ProductDetail() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false)
  const [images, setImages] = React.useState(photos[0])
  const newImg = images.src

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var settingss = {
    dots: true,
    infinite: true,
    // speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const handleChangee = (event) => {
    setAge(event.target.value);
  };
  const openCard = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  const selecImage = (img, i) => {
    setImages(img)
    refs.current[i].classList.add('active');
    for (var j = 0; i < photos.lenght; j++) {
      if (i !== j) {
        refs.current[j].classList.remove('active')
      }
    }
  }
  const refs = React.useRef([])
  refs.current = []
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }
  return (
    <>
      <Box sx={{ width: '100%', border: "2px solid yellow", margin: "0px", padding: "15px", flexWrap: "nowrap" }}>
        <Typography align='center' mb={6} sx={{ fontWeight: 600 }}>Home<span style={{ fontWeight: 600, color: "#95539B" }}>/ remaining essentially</span> </Typography>
        <Grid container spacing={2} p={2}  sx={{ bgcolor: "#F5F5F5", }}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Stack sx={{ py: 4 }}>
              {photos.map((img, i) => (
                <Stack onMouseOver={() => selecImage(img, i)} sx={{ cursor: "pointer" }} margin="10px" key={i} ref={addRefs}>
                  <Slider {...settings}>
                    <Box sx={{ width: "50%", bgcolor: "#FFFFFF" }}>
                      <Image src={img} alt="pngfind" height={400} />
                    </Box>
                  </Slider>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={11} sm={11} md={5} lg={5} sx={{ display: "flex", justifyContent: "center", border: "2px solid gray", bgcolor: "#FFFFFF" }}>
            <Stack sx={{ width: "40%", height: "50vh" }}>
              {/* <Image src={images} alt="pngfind" width="250px" height="500px" /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: newImg,
                  },
                  largeImage: {
                    src: newImg,
                    width: 1200,
                    height: 800,
                  },
                  enlargedImageContainerDimensions: {
                    width: '150%',
                    height: '100%',
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} px={6}>
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap={'nowrap'}
              // spacing={18}
              bgcolor="#FFFFFF"
              p={1}
            >
              <Avatar
                sx={{ bgcolor: '#95539B', height: '70px', width: '70px' }}
                alt="Remy Sharp"
                // src="/broken-image.jpg"
                sizes='40%'
              >
                Bx
              </Avatar>

              <Box sx={{ justifyContent: "center", }}>
                <Typography variant='h6'>Shop name xyz</Typography>
                <Typography>25 days ago</Typography>
              </Box>

              <Box sx={{ justifyContent: "center" }}>
                <Rating name="read-only" defaultValue={3} precision={0.5} readOnly />
                <Button variant="text" sx={{
                  width: "60%", color: "#888888", fontWeight: 600, "&.MuiButtonBase-root:hover": {
                  }
                }} startIcon={<RoomOutlinedIcon />}>Kamrej</Button>
              </Box>
              <Button variant="contained" sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#95539B"
                }
              }} endIcon={<PersonAddIcon sx={{ color: "black" }} />}>
                <Typography color="black"> Follow </Typography>
              </Button>
            </Stack>

            <Stack pt={4} px={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>Divided H&M - Muxi Dress</Typography>
                <FavoriteBorderOutlinedIcon />
              </Box>
              <Typography mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod.</Typography>
              <Typography variant='h6' mt={6}>Color :</Typography>
            </Stack>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", gap: "20px", mt: 5 }}>
              <Button variant="contained" sx={{
                width: "60%", height: "50px", bgcolor: "#FFFFFF", "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent"
                }
              }} startIcon={<Image src={whatsapp} alt="sheareicon" style={{ bgcolor: "#FFFFFF" }} />}>
                <Typography color="black" sx={{ fontWeight: 600, textTransform: "none" }}>
                  <a href="https://api.whatsapp.com/send?phone=7043602265">Contact on whatsapp</a> </Typography>
              </Button>
              or
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <FormGroup>
                <FormControlLabel control={<PersonOutlineIcon fontSize='large' />} label={<Typography sx={{ fontWeight: 600, color: "black" }}>Show contact info</Typography>} />
              </FormGroup>
              <Switch defaultValue={false} onClick={openCard} />
            </Box>
            {open &&
              <Box sx={{ display: "flex", justifyContent: "space-between", p: 2, px: 15, boxShadow: 3, mx: 19, borderRadius: 2, mt: 2, bgcolor: "#FFFFFF", width: "70%" }}>
                <Box sx={{ display: "flex", pl: 5, gap: 2 }}>
                  <Avatar></Avatar>
                  <Box>
                    <Typography>Xyz</Typography>
                    <Typography>D13 yogirush,</Typography>
                    <Typography>yogiChock surat-394210</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", pl: 5, gap: 2 }}>
                  <Avatar></Avatar>
                  <Box>
                    <Typography>Xyz</Typography>
                    <Typography>D13 yogirush,</Typography>
                    <Typography>yogiChock surat-394210</Typography>
                  </Box>
                </Box>
              </Box>
            }

            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, gap: "50px" }}>
              <Typography sx={{ fontWeight: 600, color: "black" }}>share</Typography>
              <Image src={facebook} alt="icon" />
              <Image src={linkliden} alt="icon" />
              <Image src={youtube} alt="icon" />
              <Image src={instagram} alt="icon" />
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} p={2}>
          <Typography variant='h5' fontWeight={600} color="#95539B">Description: <span style={{ color: "black" }}>ProductDetail</span></Typography>
          <Typography mt={2}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>
          <div style={{ width: "100%", height: "50%", marginTop: "10px", background: "#F5F5F5", padding: 10 }}>
            <Typography variant='h5' fontWeight={600}>Special Product</Typography>
            <Grid container p={2}>

              {select.map((img, i) => (
                // <Slider {...settings}>
                <Grid item key={i} bgcolor="#FFFFFF" lg={2.5} md={4} xs={12} mx={4} p={2} sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <Image src={img} alt="pngfind" width={300} height={420} />
                  <Image src={likeshare} alt="likeshare" />
                  <Button variant='contained' onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2}>
                        <Avatar
                          sx={{ bgcolor: '#95539B', height: '50px', width: '50px' }}
                          alt="Remy Sharp"
                          // src="/broken-image.jpg"
                          sizes='40%'
                        >
                          Sh
                        </Avatar>
                        <Box sx={{ justifyContent: "center", }}>
                          <Typography variant='h6' fontWeight="600">Shop name xyz</Typography>
                          <Typography>25 days ago</Typography>
                        </Box>
                      </Stack>
                      <Typography variant='h6' fontWeight="600" mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                    </>
                  }
                </Grid>
                // </Slider>
              ))}
            </Grid>
          </div>
        </Box>
      </Box >
    </>
  );
} 
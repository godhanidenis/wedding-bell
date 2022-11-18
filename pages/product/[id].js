import * as React from 'react';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
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
import { productdeatail } from '../../graphql/queries/productdeatils'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import Link from 'next/link';
var colores = [
  "black",
  "red-500",
  "lime-500",
]
var photos = [
  pngfind
]
const ProductDetail = ({ result }) => {
  const [open, setOpen] = React.useState(false)
  const [images, setImages] = React.useState(photos[0])
  const [colorselectedtag, setColorselectedtag] = React.useState(colores[0])
  const [like, setLike] = React.useState(false)
  console.log("<<<<<<<<<<", colorselectedtag)
  const newImg = images.src
  const shop = result.data.product.data.branchInfo
  const shopproduct = result.data.product.data
  const slider = React.useRef(null);
  // const 
  //  { productsData}
  //  = useSelector((state) => state.products);
  // console.log(">>>>>>>>",productsData)
  // console.log("?????????",result.data.product.data.id)
  const shopId = result.data.product.data.id
  // const shopId =productsData?.branchInfo?.shop_id 
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  var settingss = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  const openCard = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  const selectImage = (img, i) => {
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

  const items = photos.map((itm, i) => {
    return (
      <div className="w-[70%] mx-auto my-2" key={i} onClick={() => selectImage(itm, i)} ref={addRefs}>
        <Image src={itm} alt="vsfg" />
      </div>
    );
  })

  return (
    <>
      <Box sx={{ width: '100%', border: "2px solid yellow", margin: "0px", padding: "15px", flexWrap: "nowrap" }}>
        <Typography align='center' mb={6} sx={{ fontWeight: 600 }}>Home<span style={{ fontWeight: 600, color: "#95539B" }}>/ remaining essentially</span> </Typography>
        <Grid container spacing={2} p={2} sx={{ bgcolor: "#F5F5F5", }}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <div className='p-2 py-6  '>
              <ArrowBackIosIcon onClick={() => slider?.current?.slickNext()} sx={{ transform: "rotate(90deg)", display: "flex", margin: "auto", cursor: "pointer" }} />
              <Slider {...settingss} ref={slider}>
                <div className='bg-white cursor-pointer'>
                  {items}
                </div>
                <div className='bg-white'>
                  {items}
                </div>
                <div className='bg-white'>
                  {items}
                </div>
                <div className='bg-white'>
                  {items}
                </div>
              </Slider>
              <ArrowForwardIosIcon onClick={() => slider?.current?.slickPrev()} sx={{ transform: "rotate(90deg)", display: "flex", margin: "auto", cursor: "pointer" }} />
            </div>
          </Grid>
          <Grid item xs={11} sm={11} md={5} lg={5} sx={{ display: "flex", justifyContent: "center", border: "2px solid gray", bgcolor: "#FFFFFF" }}>
            <Stack sx={{ width: "40%", height: "65vh" }}>
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
                src={shop.shop_info.shop_logo}
                sizes='40%'
              />
              <Link href={`/shpodetails/${shopId}`}>
                <Box sx={{ justifyContent: "center" }}>
                  <Typography variant='h6'>{shop.branch_name}</Typography>
                  <Typography>25 days ago</Typography>
                </Box>
              </Link>
              <Box sx={{ justifyContent: "center" }}>
                <Rating name="read-only" defaultValue={3} precision={0.5} readOnly />
                <Button variant="text" sx={{
                  width: "60%", color: "#888888", fontWeight: 600, "&.MuiButtonBase-root:hover": {
                  }
                }} startIcon={<RoomOutlinedIcon />}>{shop.branch_address}</Button>
              </Box>
              <Button variant="contained" size='small' style={{
                borderRadius: 18,
                backgroundColor: "#000000",
                padding: "0px 20px",
                fontSize: "18px"
              }} endIcon={<PersonAddIcon />}>
                <Typography color="#FFFFFF"> Follow </Typography>
              </Button>
            </Stack>

            <Stack pt={4} px={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>{shopproduct.product_name}</Typography>
                <button onClick={() => setLike((prevLike) => !prevLike)}>{like ? <FavoriteBorderOutlinedIcon /> : "❤️"}</button>
              </Box>
              <Typography mt={2}>{shopproduct.product_description}</Typography>
              <div className='flex mt-6'>
                <Typography variant='h6'>Color :</Typography>
                {/* <button className='rounded-full m-1.5 w-5 h-5' style={{ backgroundColor: colorselectedtag }} onClick={() => setColorselectedtag(colorselectedtag)}>{color === colorselectedtag? <FaCheck className="checkStyle" /> : null}</button> */}
                {colores.map((curColor, index) => {
                  return (
                    <button
                      className={`rounded-full m-1.5 w-5 h-5  bg-${curColor} ${colorselectedtag === curColor ? "opacity-100" : "opacity-50"}`}
                      key={index}
                      // style={{ backgroundColor: curColor }}
                      onClick={() => setColorselectedtag(curColor)}>
                      {colorselectedtag === curColor ? <CheckIcon color="#fff" fontSize='1rem' /> : null}{console.log(":::::::::::::", curColor)}
                    </button>
                  );
                })}
              </div>
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
              <Switch onClick={openCard} />
            </Box>
            {open &&
              <Grid container direction="column" alignItems="center"  >
                <Grid lg={6} item sx={{ display: "flex", pl: 5, gap: 2, boxShadow: 3, p: 2, px: 5, borderRadius: 2, mt: 2, bgcolor: "#FFFFFF" }}>
                  <Avatar sx={{ height: '70px', width: '70px' }}></Avatar>
                  <Box>
                    <Typography>{shop.manager_name}</Typography>
                    <Typography><CallIcon fontSize='small'></CallIcon> +{shop.manager_contact}</Typography>
                    <Typography>YogiChock surat-394210</Typography>
                  </Box>
                </Grid>
              </Grid>
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
            {/* <Grid container p={2}>

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
            </Grid> */}
            <div className="w-[100%] my-8 px-8">
              <Slider {...settings}>
                <div className='border-2  bg-white'>
                  <div className='float-right m-2'>
                    <Image src={likeshare} alt="444" />
                  </div>
                  {items}
                  <Button variant='contained' mx="50px" onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2} px={2}>
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
                      <Typography variant='h6' fontWeight="600" px={2} mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888" px={2}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                      <div className='flex m-3'>
                      </div>
                    </>
                  }
                </div>
                <div className='border-2 mx-3  bg-white'>
                  <div className='float-right m-2'>
                    <Image src={likeshare} alt="444" />
                  </div>
                  {items}
                  <Button variant='contained' my="10px" mx="50px" onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2} px={2}>
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
                      <Typography variant='h6' fontWeight="600" px={2} mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888" px={2}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                    </>
                  }
                </div>
                <div className='border-2 mx-6 bg-white'>
                  <div className='float-right m-2'>
                    <Image src={likeshare} alt="444" />
                  </div>
                  {items}
                  <Button variant='contained' mx="50px" onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2} px={2}>
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
                      <Typography variant='h6' fontWeight="600" px={2} mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888" px={2}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                    </>
                  }
                </div>
                <div className='border-2 mx-9 bg-white'>
                  <div className='float-right m-2'>
                    <Image src={likeshare} alt="444" />
                  </div>
                  {items}
                  <Button variant='contained' mx="50px" onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2} px={2}>
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
                      <Typography variant='h6' fontWeight="600" px={2} mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888" px={2}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                    </>
                  }
                </div>
                <div className='border-2 mx-12 bg-white'>{items}
                  <Button variant='contained' mx="50px" onClick={openCard} sx={{
                    color: "black", fontWeight: 600, bgcolor: "#F5F5F5", "&.MuiButtonBase-root:hover": {
                      bgcolor: "#F5F5F5"
                    }, width: "50%", marginLeft: "80px"
                  }}>See Details</Button>
                  {open &&
                    <>
                      <Divider sx={{ mt: 2 }} />
                      <Stack mt={1} flexDirection="row" gap={2} px={2}>
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
                      <Typography variant='h6' fontWeight="600" px={2} mt={2}>Divided H&M - Muxi Dress</Typography>
                      <Typography color="#888888" px={2}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</Typography>
                    </>
                  }
                </div>
              </Slider>
            </div>
          </div>
        </Box>
      </Box >
    </>
  );
}


export async function getServerSideProps(context) {
  try {
    const productId = context.params.id
    const result = await productdeatail({ id: productId })
    // Pass data to the page via props 
    return { props: { result } }
  } catch (error) {
    console.log(error);
    throw error
  }
}
export default ProductDetail;
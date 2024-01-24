// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./Home.css";
import img from "../../components/Banners/SmallBanner/Images/QueensGambitHorizontal.jpg";
import img2 from "../../components/Banners/SmallBanner/Images/pulpFiction.jpg";
import { useEffect,useState } from "react";
import BannerNoImage from "../../components/Banners/BannerNoImage/BannerNoImage";
import ImageBanner from "../../components/Banners/ImageBanner/ImageBanner";
import SmallBanner from "../../components/Banners/SmallBanner/SmallBanner";
// import CarouselCard from "../../components/Card/CarouselCard/CarouselCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  const [carouselShows, setCarouselShows] = useState([]);
  useEffect(() => {
    async function getCarouselShows() {
      const response = await fetch(
        "https://api.themoviedb.org/3/list/8242996?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US"
      );
      if (response.status === 200) {
        const shows = await response.json();
        setCarouselShows(shows.items);
        console.log("esta es la respuesta de json", shows.items);
      } else {
        alert("There was an error when trying to display the shows");
      }
    }
    getCarouselShows();
  }, []);
  return (
    <>
      <div
        className="bannerContainerMain"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 40px",
        }}
      >
        <BannerNoImage
          bannerLabel="Latest Posts"
          bannerTitle={"ONE"}
          greenText={"PIECE"}
          userName={"WildRisk"}
          description={
            "This is an unique story, incredibly original and with a plot that can be understood by everyone. "
          }
          bannerTitle2={"A"}
          blueText={"WORK"}
          bannerTitle3={"OF ART"}
        />
        <ImageBanner
          to={"/moviedetails"}
          title={"Science-fiction"}
          className={"labelContainerColoured"}
          movieTitle={"Wednesday"}
          movieDescription={"1 Season"}
        />
      </div>
      <div className="bannerContainerSecondary">
        <div className="bannerContainerSecondaryLeft">
          <div className="bannerContainerSecondaryLeftTitle"></div>
          <div className="bannerSecondaryLeftSlider">
            {/* <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {carouselShows &&
                carouselShows.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CarouselCard
                      image={
                        "https://www.themoviedb.org/t/p/original/" +
                        item.backdrop_path
                      }
                      cardTitle={item.title ? item.title : item.name}
                      movieRating={item.vote_average}
                      to={
                        item.title ? `/movies/${item.id}` : `/series/${item.id}`
                      }
                      title={"View Details"}
                      starFill={"gold"}
                      key={item.id}
                      cardImgClassName={"carouselCardImageMovie"}
                    />
                  </SwiperSlide>
                ))}
            </Swiper> */}
          </div>
        </div>
        <div className="bannerContainerSecondaryRight">
          <SmallBanner
            imgLink={"/shows"}
            img={img}
            footerTitle={"Go to all shows"}
            to={"/shows"}
          />
          <SmallBanner
            imgLink={"/movies"}
            img={img2}
            footerTitle={"Go to all movies"}
            to={"/movies"}
          />
        </div>
      </div>
    </>
  );
}

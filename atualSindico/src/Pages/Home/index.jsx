import { CarouselStyled, MainStyle } from "./style";
import Banner1 from "../../Assets/banner 1.png";
import Banner2 from "../../Assets/banner 2.jpg";
import Banner3 from "../../Assets/banner 3.jpg";
import { useEffect, useState } from "react";
import { WppApelo } from "../../Components/WppChamada";



// eslint-disable-next-line react/prop-types
export const Home = ({ isMenuActive}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % slides.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Muda o slide a cada 5 segundos
    return () => clearInterval(timer);
  }, [currentSlideIndex, nextSlide]);

  const slides = [
    {
      image: Banner1,
      text: "Síndico profissional: Soluções eficientes para uma administração tranquila do seu condomínio",
    },
    {
      image: Banner2,
      text: "Confie seu condomínio a profissionais especializados em administração condominial.",
    },
    {
      image: Banner3,
      text: "A escolha certa para uma gestão transparente e profissional do seu condomínio.",
    },
  ];
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <CarouselStyled>
        <div className="carousel">
          <div className="slide-container">
            <img
              src={slides[currentSlideIndex].image}
              alt={slides[currentSlideIndex].text}
            />
            <div className="slide-text">{slides[currentSlideIndex].text}</div>
          </div>
        </div>
      </CarouselStyled>
      <WppApelo />
    </MainStyle>
  );
};


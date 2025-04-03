import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
@media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 576px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 360px) {
    padding: 0 1rem;
  }
      @media (max-width: 315px) {
    padding: 0 0.5rem !important ;
    font-size: 80% !important ;
  }
`
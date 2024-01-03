import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import ContentWrapper from "../contentWrapper/contentWrapper";

import "./style.scss";

const Footer = () => {
  const socialMediaLinks = {
    whatsapp: "https://wa.me/7263943302", // Replace with your WhatsApp number
    instagram: "https://www.instagram.com/_yasar_20_/",
    twitter: "https://twitter.com/@Yasar1121/",
    linkedin: "https://www.linkedin.com/in/yasar-shaikh-332595225/",
  };
  const handleSocialIconClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to FlickByYasar, your ultimate destination for the latest and
          greatest in cinema! Immerse yourself in a world of captivating
          stories, thrilling adventures, and unforgettable moments. From
          timeless classics to cutting-edge blockbusters, FlickByYasar brings
          you a curated collection of films that cater to every taste and genre.
          Explore the magic of the silver screen with our diverse selection of
          movies, ranging from heartwarming dramas and action-packed adventures
          to mind-bending sci-fi and laugh-out-loud comedies. Whether you're a
          cinephile seeking cinematic masterpieces or someone looking for a cozy
          movie night with family and friends, MovieHub has something special
          for everyone. At MovieHub, we believe in the power of storytelling to
          inspire, entertain, and connect people from all walks of life. Join
          our community of movie enthusiasts and embark on a cinematic journey
          filled with excitement, emotion, and pure entertainment. Lights,
          camera, action – let the movie magic begin!
        </div>
        <div className="socialIcons">
          <span
            onClick={() => handleSocialIconClick(socialMediaLinks.whatsapp)}
            className="icon"
          >
            <BsWhatsapp />
          </span>
          <span
            onClick={() => handleSocialIconClick(socialMediaLinks.instagram)}
            className="icon"
          >
            <FaInstagram />
          </span>
          <span
            onClick={() => handleSocialIconClick(socialMediaLinks.twitter)}
            className="icon"
          >
            <FaTwitter />
          </span>
          <span
            onClick={() => handleSocialIconClick(socialMediaLinks.linkedin)}
            className="icon"
          >
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

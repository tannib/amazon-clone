import React from "react";
import "./Banner.css";
import Card from "./Card";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__card-container">
        <Card
          title="Dispositivi Amazon a meno di 70€"
          src="https://images-eu.ssl-images-amazon.com/images/G/29/kindle/merch/2020/campaign/xcat/cards/desk-cardquad-mn-372x232._SY232_CB423037968_.jpg"
          caption="Fire TV Stick 4k"
          link="Scopri di più"
        />
        <Card
          title="Spedizione gratuita sul tuo primo ordine idoneo"
          src="https://images-eu.ssl-images-amazon.com/images/G/29/Events/2020/EducateCustomers/FDFO_CatCard_DT_X1_379X304._SY608_CB432652005_.jpg"
          caption=""
          link="Scopri le condizioni"
        />
        <Card
          title="Amazon Super - Più acquisti più risparmi"
          src="https://images-eu.ssl-images-amazon.com/images/G/29/ITES_Amazon_Super/XCM_Manual_1229035_1206048_it_it_amazon_super_traffic_drivers_758x608_it-it_74f63b8f-bef0-4da7-9a4f-fcb8e5f1e118._SY608_CB428325995_.jpg"
          caption=""
          link="Scopri di più"
        />
        <Card
          title="Iscriviti a Prime Video: è gratis per 30 giorni"
          src="https://m.media-amazon.com/images/G/29/shazam/EVREF-JUL20-OOHDisplayAdBanner-Desktop-FT-EVRGRN-XSite-300x250-PV-it-IT-Z5Nal._V409618386_.jpg"
          caption=""
          link="Scopri di più"
        />
      </div>
    </div>
  );
};

export default Banner;

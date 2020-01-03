import React, { useState, createContext } from "react";
import iris0 from "../common/images/Iris/Iris0.jpg";
import iris1 from "../common/images/Iris/Iris1.jpg";
import iris2 from "../common/images/Iris/Iris2.jpg";
import iris3 from "../common/images/Iris/Iris3.jpg";
import iris4 from "../common/images/Iris/Iris4.jpg";
import iris5 from "../common/images/Iris/Iris5.jpg";
import iris6 from "../common/images/Iris/Iris6.jpg";
import iris7 from "../common/images/Iris/Iris7.jpg";
import iris8 from "../common/images/Iris/Iris8.jpg";
import iris9 from "../common/images/Iris/Iris9.jpg";
import iris10 from "../common/images/Iris/Iris10.jpg";
import iris11 from "../common/images/Iris/Iris11.jpg";
import iris12 from "../common/images/Iris/Iris12.jpg";
import iris13 from "../common/images/Iris/Iris13.jpg";
import iris14 from "../common/images/Iris/Iris14.jpg";
import iris15 from "../common/images/Iris/Iris15.jpg";
import palisad0 from "../common/images/Palisad/Palisad.jpg";
import palisad1 from "../common/images/Palisad/29144953.jpg";
import palisad2 from "../common/images/Palisad/29145201.jpg";
import palisad3 from "../common/images/Palisad/29153784.jpg";
import palisad4 from "../common/images/Palisad/29158234.jpg";
import palisad5 from "../common/images/Palisad/174245368.jpg";
import palisad6 from "../common/images/Palisad/174245370.jpg";
import palisad7 from "../common/images/Palisad/174245481.jpg";
import palisad8 from "../common/images/Palisad/210680838.jpg";
import palisad9 from "../common/images/Palisad/210690774.jpg";
import palisad10 from "../common/images/Palisad/210690777.jpg";
import palisad11 from "../common/images/Palisad/214788664.jpg";

export const HotelContext = createContext();

const HotelContextProvider = props => {
  const [hotels, setHotel] = useState([
    {
      id: 1,
      type: "Hotel",
      name: "Hotel Palisad",
      place: "Zlatibor",
      stars: 4,
      shortDescription:
        "Otvoren tokom cele godine, hotel Palisad je smešten u Zlatiboru i nudi školu skijanja u zimskom periodu. Gostima su na raspolaganju usluga iznajmljivanja ski opreme i usluge masaže",
      reviews: {
        count: 6,
        revs: {
          Sadržaji: [9, 10, 10, 10, 10, 8],
          Cistoća: [9, 8, 10, 9, 10, 8],
          Udobnost: [9, 8, 6, 10, 10, 8],
          "Odnos Cene I Kvaliteta": [9, 9, 10, 8, 10, 10],
          Lokacija: [9, 8, 10, 8, 10, 10],
          "Besplatan Wifi": [9, 8, 10, 10, 10, 10]
        }
      },
      description:
        "<p>Klub Satelit se nalazi na Zlatiboru i nudi prijatan boravak u elegantnom okruženju. Raspolaže izvanredno opremljenim smeštajem i modernim spa centrom. Posluga u sobi dostupna je 24 sata dnevno.</p> <p>Sadržaji za opuštanje uključuju saunu i natkriveni bazen sa hidromasažnom kadom za 6 osoba. Profesionalna usluga masaže takođe je u ponudi. Možete uživati u fitnes kutku SOFO, koji pripada objektu, i opustitise u sobi nameštenoj sa ukusom i smirujućem okruženju.</p><p> Probajte izvrsna lokalna i internacionalna jela u a-la-carte restoranu objekta Club Satelite ili isprobajte funkcionalnu banket salu.Objekat poseduje bazen sa slanom vodom temperature od oko 31-32 stepena celzijusa.</p><p>Prema nezavisnim recenzijama, naši gosti obožavaju ovaj deo destinacije Zlatibor.</p><p> Parovima se posebno svidela lokacija - ocenili su je sa 8,2 za boravak udvoje. Govorimo vaš jezik!</p><p><b>Hotel Iris toplo dočekuje Booking.com goste od 11 Jan 2016.</b></p>",
      mostPopular: [
        "spa i velnes centar",
        "besplatan parking",
        "bazen",
        "zatvoreni bazen",
        "besplatan WiFi",
        "porodicne sobe",
        "bar"
      ],
      guestsLove: {
        location:
          "Smešten u jednoj od najbolje ocenjenih oblasti na Zlatiboru, ovaj hotel ima odličnu ocenu lokacije: 9,3",
        comfort:
          "Želite dobro da se naspavate? Kreveti u ovom hotelu su ocenjeni kao izuzetno udobni."
      },
      breakfastInfo: "Kontinentalni, na bazi samoposluzivanja",
      twoFavs: {
        wifi:
          "Besplatan bežični internet. Gosti konstantno ocenjuju Wi-Fi kao odličan",
        parking: "Besplatan privatni parking u okviru objekta"
      },
      address: "Zlatibor, 31315 Zlatibor, Srbija",
      distFromCenter: 500,
      "reserve_W/O_card": false,
      img: [
        palisad0,
        palisad1,
        palisad2,
        palisad3,
        palisad4,
        palisad5,
        palisad6,
        palisad7,
        palisad8,
        palisad9,
        palisad10,
        palisad11
      ],
      comments: [
        {
          id: 1,
          author: "bogdan",
          text: "Predivan ambijent, ciste sobe, ljubazno osoblje. Sve pohvale!",
          country: "Srbija"
        },
        {
          id: 2,
          author: "zoran",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku.",
          country: "Srbija"
        },
        {
          id: 3,
          author: "marko",
          text:
            "Sve je ok. Sa zadovoljstvom rado bi bili opet gosti ovog Hotela.",
          country: "Srbija"
        }
      ],
      mapsLink:
        "https://www.google.com/maps/place/Hotel+Palisad/@43.72823,19.6980802,17z/data=!3m1!4b1!4m8!3m7!1s0x47582f8f6beb488f:0xf9af569d242463a4!5m2!4m1!1i2!8m2!3d43.72823!4d19.7002689"
    },
    {
      id: 2,
      type: "Hotel",
      name: "Hotel Iris",
      place: "Zlatibor",
      stars: 3,
      shortDescription:
        "Otvoren tokom cele godine, hotel Palisad je smešten u Zlatiboru i nudi školu skijanja u zimskom periodu. Gostima su na raspolaganju usluga iznajmljivanja ski opreme i usluge masaže",
      reviews: {
        count: 6,
        revs: {
          Sadržaji: [9, 8, 10, 10, 10, 8],
          Cistoća: [9, 10, 10, 10, 7, 6],
          Udobnost: [9, 10, 10, 10, 9, 9],
          "Odnos Cene I Kvaliteta": [6, 8, 8, 7, 8, 8],
          Lokacija: [9, 10, 9, 10, 9, 8],
          "Besplatan Wifi": [9, 9, 10, 9, 9, 10]
        }
      },
      description:
        "<p>Klub Satelit se nalazi na Zlatiboru i nudi prijatan boravak u elegantnom okruženju. Raspolaže izvanredno opremljenim smeštajem i modernim spa centrom. Posluga u sobi dostupna je 24 sata dnevno.</p> <p>Sadržaji za opuštanje uključuju saunu i natkriveni bazen sa hidromasažnom kadom za 6 osoba. Profesionalna usluga masaže takođe je u ponudi. Možete uživati u fitnes kutku SOFO, koji pripada objektu, i opustitise u sobi nameštenoj sa ukusom i smirujućem okruženju.</p><p> Probajte izvrsna lokalna i internacionalna jela u a-la-carte restoranu objekta Club Satelite ili isprobajte funkcionalnu banket salu.Objekat poseduje bazen sa slanom vodom temperature od oko 31-32 stepena celzijusa.</p><p>Prema nezavisnim recenzijama, naši gosti obožavaju ovaj deo destinacije Zlatibor.</p><p> Parovima se posebno svidela lokacija - ocenili su je sa 8,2 za boravak udvoje. Govorimo vaš jezik!</p><p><b>Hotel Palisad toplo dočekuje Booking.com goste od 2. dec. 2010.</b></p>",
      mostPopular: [
        "spa i velnes centar",
        "besplatan parking",
        "bazen",
        "zatvoreni bazen",
        "besplatan WiFi",
        "porodicne sobe",
        "bar"
      ],
      guestsLove: {
        location:
          "Smešten u jednoj od najbolje ocenjenih oblasti na Zlatiboru, ovaj hotel ima odličnu ocenu lokacije: 9,3",
        comfort:
          "Želite dobro da se naspavate? Kreveti u ovom hotelu su ocenjeni kao izuzetno udobni."
      },
      breakfastInfo: "Kontinentalni, na bazi samoposluzivanja",
      twoFavs: {
        wifi:
          "Besplatan bežični internet Gosti konstantno ocenjuju Wi-Fi kao odličan",
        parking: "Besplatan privatni parking u okviru objekta"
      },
      address: "Zlatibor, 31315 Zlatibor, Srbija",
      distFromCenter: 750,
      "reserve_W/O_card": true,
      img: [
        iris0,
        iris1,
        iris2,
        iris3,
        iris4,
        iris5,
        iris6,
        iris7,
        iris8,
        iris9,
        iris10,
        iris11,
        iris12,
        iris13,
        iris14,
        iris15
      ],
      comments: [
        {
          id: 1,
          author: "bogdan",
          text: "Predivan ambijent, ciste sobe, ljubazno osoblje. Sve pohvale!",
          country: "Srbija"
        },
        {
          id: 2,
          author: "zoran",
          text:
            "Sve je ok. Sa zadovoljstvom rado bi bili opet gosti ovog Hotela.",
          country: "Srbija"
        },
        {
          id: 3,
          author: "marko",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        },
        {
          id: 4,
          author: "mark",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        },
        {
          id: 5,
          author: "kzia",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        }
      ],
      mapsLink:
        "https://www.google.com/maps/place/Hotel+Iris/@43.7297693,19.7027984,17z/data=!3m1!4b1!4m8!3m7!1s0x47582f8495555551:0x3feed7f5fb7b7b59!5m2!4m1!1i2!8m2!3d43.7297693!4d19.7049871"
    },
    {
      id: 3,
      type: "Apartmani",
      name: "Apartman Tina Zlatibor",
      place: "Zlatibor",
      stars: 3,
      shortDescription:
        "Objekat Apartman Tina Zlatibor nudi bar, vrt i terasu, a nalazi se na Zlatiboru. Smeštaj je udaljen 45 km od Mitrovca, a gostima su na raspolaganju besplatan WiFi i privatni parking u okviru objekta.",
      reviews: {
        count: 8,
        revs: {
          Sadržaji: [9, 8, 10, 10, 10, 8, 5, 2],
          Cistoća: [9, 10, 10, 10, 8, 8, 3, 3],
          Udobnost: [9, 10, 10, 10, 9, 9, 1, 1],
          "Odnos Cene I Kvaliteta": [9, 6, 8, 9, 8, 8, 2, 1],
          Lokacija: [9, 10, 10, 10, 9, 10, 8, 7],
          "Besplatan Wifi": [9, 9, 10, 10, 9, 10, 5, 4]
        }
      },
      description:
        "<p>Klub Satelit se nalazi na Zlatiboru i nudi prijatan boravak u elegantnom okruženju. Raspolaže izvanredno opremljenim smeštajem i modernim spa centrom. Posluga u sobi dostupna je 24 sata dnevno.</p> <p>Sadržaji za opuštanje uključuju saunu i natkriveni bazen sa hidromasažnom kadom za 6 osoba. Profesionalna usluga masaže takođe je u ponudi. Možete uživati u fitnes kutku SOFO, koji pripada objektu, i opustitise u sobi nameštenoj sa ukusom i smirujućem okruženju.</p><p> Probajte izvrsna lokalna i internacionalna jela u a-la-carte restoranu objekta Club Satelite ili isprobajte funkcionalnu banket salu.Objekat poseduje bazen sa slanom vodom temperature od oko 31-32 stepena celzijusa.</p><p>Prema nezavisnim recenzijama, naši gosti obožavaju ovaj deo destinacije Zlatibor.</p><p> Parovima se posebno svidela lokacija - ocenili su je sa 8,2 za boravak udvoje. Govorimo vaš jezik!</p><p><b>Hotel Palisad toplo dočekuje Booking.com goste od 2. dec. 2010.</b></p>",
      mostPopular: [
        "spa i velnes centar",
        "besplatan parking",
        "bazen",
        "zatvoreni bazen",
        "besplatan WiFi",
        "porodicne sobe",
        "bar"
      ],
      guestsLove: {
        location:
          "Smešten u jednoj od najbolje ocenjenih oblasti na Zlatiboru, ovaj hotel ima odličnu ocenu lokacije: 9,3",
        comfort:
          "Želite dobro da se naspavate? Kreveti u ovom hotelu su ocenjeni kao izuzetno udobni."
      },
      breakfastInfo: "Kontinentalni, na bazi samoposluzivanja",
      twoFavs: {
        wifi:
          "Besplatan bežični internet Gosti konstantno ocenjuju Wi-Fi kao odličan",
        parking: "Besplatan privatni parking u okviru objekta"
      },
      address: "Zlatibor, 31315 Zlatibor, Srbija",
      distFromCenter: 750,
      "reserve_W/O_card": true,
      img: [
        iris0,
        iris1,
        iris2,
        iris3,
        iris4,
        iris5,
        iris6,
        iris7,
        iris8,
        iris9,
        iris10,
        iris11,
        iris12,
        iris13,
        iris14,
        iris15
      ],
      comments: [
        {
          id: 1,
          author: "bogdan",
          text: "Predivan ambijent, ciste sobe, ljubazno osoblje. Sve pohvale!",
          country: "Srbija"
        },
        {
          id: 2,
          author: "zoran",
          text:
            "Sve je ok. Sa zadovoljstvom rado bi bili opet gosti ovog Hotela.",
          country: "Srbija"
        },
        {
          id: 3,
          author: "marko",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        },
        {
          id: 4,
          author: "mark",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        },
        {
          id: 5,
          author: "kzia",
          text:
            "Dopao nam se apartman, doručak i pogled sa terase. Osoblje je bilo na visini zadatka u svakom trenutku. ",
          country: "Srbija"
        }
      ],
      mapsLink:
        "https://www.google.com/maps/place/Hotel+Iris/@43.7297693,19.7027984,17z/data=!3m1!4b1!4m8!3m7!1s0x47582f8495555551:0x3feed7f5fb7b7b59!5m2!4m1!1i2!8m2!3d43.7297693!4d19.7049871"
    }
  ]);
  const [showHotels, setShowHotels] = useState(true);

  //get the average grade for every item and total average
  const getAverageReview = hotel => {
    var sum = 0;
    var sumAvg = 0;
    var objAvg = {};
    for (let x in hotel.reviews.revs) {
      // sum every grade, store it in new object, and add that sum to sumAvg
      for (let y of hotel.reviews.revs[x]) {
        sum += y;
      }
      let avg = sum / hotel.reviews.count;
      objAvg[x] = avg;
      sum = 0;
      sumAvg += avg;
    }
    // console.log(sumAvg / 6);
    let totalAverage = sumAvg / 6;
    return { totalAverage, objAvg };
  };

  const toggleShowHotels = () => {
    setShowHotels(!showHotels);
  };
  return (
    <HotelContext.Provider
      value={{
        hotels,
        setHotel,
        getAverageReview,
        toggleShowHotels,
        showHotels
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;

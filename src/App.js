import React from "react";
import "./App.css";
import Premiers from "./Premiers";
import RecomendedMovies from "./RecomendedMovies";
import TheBestOfLiveevEvents from "./TheBestOfLiveevEvents";
import OnlineStreemingEvents from "./OnlineStreemingEvents";
import OutdoorEvents from "./OutdoorEvents";
import LaughterTherapy from "./LaughterTherapy";
import PopularEvents from "./PopularEvents";
// Recomendedmovies================================================
const Recomendedmovies = [
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDcuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    RmName: "Jailor",
    RmType: "Action/Drama/Thriller",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDUuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    RmName: "Gadar 2:The Katha..",
    RmType: "Action/Drama/Period",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-hadftxleau-portrait.jpg",
    RmName: "Gandheevadhari Arjuna",
    RmType: "Action/Thriller",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTA1LjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
    RmName: "Kings of Kotha",
    RmType: "Action/Crime/Drama",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI1LjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
    RmName: "Dream Girl2",
    RmType: "Comedy/Drama/Romantic",
  },
];
// TheBestOfLiveEvents ===========================================

const TheBestOfLiveEvents = [
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
  },
];
// Premiers========================================================
const Premier = [
  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365921-qzzpdqegwp-portrait.jpg",
    PremierH3: "Return to Seoul",
    PremierH4: "French",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365828-pthvdgzjgl-portrait.jpg",
    PremierH3: "Follow Me",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365169-uwpcjaxjmd-portrait.jpg",
    PremierH3: "The Only Way Out",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366830-mmrpktqpfa-portrait.jpg",
    PremierH3: "Somewhere",
    PremierH4: "English",
  },

  {
    PremiersImg:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366377-zbugdhlpnr-portrait.jpg",
    PremierH3: "Welcome To Demon",
    PremierH4: "Japanese",
  },
];
//OnlineStreemingEvents===========================================
const OnlineStreemingevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg",
    h3: "WeMET Speed",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355836-trhqeqvuta-portrait.jpg",
    h3: "Blind Dating 30+-...",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362649-zdwdlgftyn-portrait.jpg",
    h3: "Talk Session in English",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362333-gkullrbvzg-portrait.jpg",
    h3: "Talk Session in English",
    h4: "Watch on Zoom",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366284-hfppaydegr-portrait.jpg",
    h3: "NCPA-HSBC",
    h4: "Watch on Zoom",
  },
];
//OutdoorEvents===================================================
const Outdoorevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313711-yycgpuayzk-portrait.jpg",
    h3: "Gainfully Employed By Punith Panaia",
    p: "Offbeat Music Ventures: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366675-qxtkjtbqpy-portrait.jpg",
    h3: "When Chai Met Toast-Love You The Same",
    p: "The Music Academy: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366777-rddtcpvqlw-portrait.jpg",
    h3: "MusiCuento-Classicult The Band",
    p: "IDAM - The Art & Cultural Space: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-dtrsnjaphf-portrait.jpg",
    h3: "Novlik 3- Hour Set In Chennai",
    p: "winchester, Radisson Blu Hostel: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-zwtappgwtr-portrait.jpg",
    h3: "Naan Sanikelama Live",
    p: "Media - The State, Alwarpet: Chennai",
  },
];

//LaughterTherapy====================================
const Laughtertherapy = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366286-aaeympfgmu-portrait.jpg",
    h3: "AnnaMala VandhuttaDa! ByTanglish Comedy",
    p: "Backyard:Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    h3: "Ramkumar Paathi Annachi Meethi",
    p: "The Music: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-qugtqdasys-portrait.jpg",
    h3: "Thandhiram-standup Comedy",
    p: "Academy: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365053-ynfctexhhj-portrait.jpg",
    h3: "MindFool India Tour - Vir Das",
    p: "Sir Mutha Venkatasubba Rao Concert Hall: Chennai",
  },

  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    h3: "AANSPLAINING by Karthik Kumar - TOUR.. ",
    p: "IDAM - The Art & Cultural Spacce: Chennai  ",
  },
];
//Popular events==================================================
const Popularevents = [
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366286-aaeympfgmu-portrait.jpg",
    h3: "AnnaMala VandhuttaanDa!!! by TanglishComedy",
    p: "Backyard: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313711-yycgpuayzk-portrait.jpg",
    h3: "Gainfully Employed by Punith Paina",
    p: "Offbeat Music Ventures: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365904-wwmrqzjpyx-portrait.jpg",
    h3: "When Chai Met Toast-Love You The Same |...",
    p: "The Music Academy: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366093-wrtjatechr-portrait.jpg",
    h3: "Novik - 3 Hours Set in Chennai",
    p: "Winchester, Radission Blu Hotel: Chennai",
  },
  {
    imgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365332-cecqxcwrrj-portrait.jpg",
    h3: "MusiCuento - Classicult The band",
    p: "IDAM - The Art & Cultural Space: Chennai",
  },
];
function App() {
  return (
    <div>
      {/* ICC MEN'S CRICKET WORLD CUP INDIA 2023  */}
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "5%",
        }}
      ></img>
      {/* Recomended Movies */}
      <div className="movies">
        <div className="Movies">
          <h2>Recomended Movies</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Recomendedmovies.map((item) => {
            return (
              <RecomendedMovies
                RmImgLink={item.RmImgLink}
                RmName={item.RmName}
                RmType={item.RmType}
              ></RecomendedMovies>
            );
          })}
        </div>
      </div>
      {/* Endless entertainment image */}
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "5%",
        }}
      ></img>
      {/* The Best Of Live Events</h2>
        <p>See All */}
      <div className="movies">
        <div className="Movies">
          <h2>The Best Of Live Events</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {TheBestOfLiveEvents.map((item) => {
            return (
              <TheBestOfLiveevEvents
                TheBestOfLiveevEventsimg={item.TheBestOfLiveevEventsImg}
              ></TheBestOfLiveevEvents>
            );
          })}
        </div>
      </div>
      {/* Premiers */}
      <div className="Movies-in" style={{ marginBottom: "5%" }}>
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
          style={{ width: "90%", margin: " 0 5% 0 5%" }}
        ></img>
        <div className="Movies">
          <h2>Premieres</h2>
          <p>See All</p>
        </div>
        <p style={{ marginBottom: "20px", marginLeft: "5%" }}>
          Brand new releases every Friday
        </p>
        <div className="Movies">
          {Premier.map((item) => {
            return (
              <Premiers
                PremiersImg={item.PremiersImg}
                PremierH3={item.PremierH3}
                PremierH4={item.PremierH4}
              ></Premiers>
            );
          })}
        </div>
      </div>
      {/* Online Streeming Events */}
      <div className="movies">
        <div className="Movies">
          <h2>Online Streeming Events</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {OnlineStreemingevents.map((item) => {
            return (
              <OnlineStreemingEvents
                imgLink={item.imgLink}
                h3={item.h3}
                h4={item.h4}
              ></OnlineStreemingEvents>
            );
          })}
        </div>
      </div>
      {/* Outdoor Events */}
      <div className="movies">
        <div className="Movies">
          <h2>Outdoor Events</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Outdoorevents.map((item) => {
            return (
              <OutdoorEvents
                imgLink={item.imgLink}
                h3={item.h3}
                p={item.p}
              ></OutdoorEvents>
            );
          })}
        </div>
      </div>
      {/* Laughter Therapy */}
      <div className="movies">
        <div className="Movies">
          <h2>Laughter Therapy</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Laughtertherapy.map((item) => {
            return (
              <LaughterTherapy
                imgLink={item.imgLink}
                h3={item.h3}
                p={item.p}
              ></LaughterTherapy>
            );
          })}
        </div>
      </div>
      {/* Popular Events */}
      <div className="movies">
        <div className="Movies">
          <h2>Popular Events</h2>
          <p>See All</p>
        </div>
        <div className="Movies">
          {Popularevents.map((item) => {
            return (
              <PopularEvents
                imgLink={item.imgLink}
                h3={item.h3}
                p={item.p}
              ></PopularEvents>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

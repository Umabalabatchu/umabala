import React from "react";
const PhysicalGiftCardImages = {
  PhysicalGiftCardImages1: [
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/1.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/2.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/my_jio_store_logo_unit.jpg",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/5.png",
    },
    {
      imglink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row1/6.png",
    },
  ],

  PhysicalGiftCardImages2: [
    {
      imgLink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row2/1.png",
    },
    {
      imgLink:
        "https://assets-in.bmscdn.com/webin/giftcards/available/row2/2.png",
    },
  ],
};

const PhysicalGiftCardInformation = [
  { heading3: "INTRODUCTION PHYSICAL GIFT CARDS" },
  {
    para1:
      "Gift your loved ones a range of experiences from movies to events plays, concerts and sports with a BookMyShow gift card Now pick oneup at a store near you!!",
  },
  {
    para2:
      "BookMyShow Gift Cards are now available at thousands of stores at all major towns across India.",
  },
  { bold: "Avalible at stores near you" },
  { optionalpara: "Or order online form" },
  { p1: "As easy as playing Cash" },
  {
    p2: "Use it anytime, anywhere through the BookMyShow Mobile app or onour website",
  },
];

function Giftcards2() {
  return (
    <div>
      <div className="offers">
        {PhysicalGiftCardImages.map((item) => {
          return (
            <div className="offer-details">
              <img src={item.PhysicalGiftCardImages1.imgLink}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Giftcards2;

import React from "react";
import imageproductMobile from "./images/image-product-mobile.jpg";
import imageproductDesktop from "./images/image-product-desktop.jpg";
import iconCart from "./images/icon-cart.svg";

const App = () => {
  return (
    <div className="bg-Cream min-h-screen p-8 flex items-center justify-center">
      <div className="rounded-lg flex md:max-w-[600px] max-w-[400px] items-center flex-col md:flex-row bg-White overflow-hidden">
        <img
          className="w-full block md:hidden"
          src={imageproductMobile}
          alt="image-product-mobile"
        />

        <img
          className="hidden md:block w-[50%]"
          src={imageproductDesktop}
          alt="image-product-desktop"
        />

        <div className="p-5">
          <p className="font-Montserrat uppercase tracking-[5px] text-Dark-grayish-blue text-sm">
            perfume
          </p>

          <h1 className="font-Fraunces text-3xl mt-2 text-Very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="font-Montserrat text-base mt-5 text-Dark-grayish-blue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="mt-7 flex items-center gap-5">
            <p className="text-3xl font-Fraunces text-Dark-cyan">$149.99</p>
            <p className="font-Montserrat text-base text-Dark-grayish-blue line-through">
              $169.99
            </p>
          </div>

          <button className="w-full hover:bg-Dark-cyan-hover transition-all flex items-center justify-center gap-3 mt-5 px-3 py-3 bg-Dark-cyan rounded-lg">
            <img src={iconCart} alt="icon-cart" />
            <p className="font-Montserrat tracking-[1px] text-base font-semibold text-White">
              Add to Cart
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

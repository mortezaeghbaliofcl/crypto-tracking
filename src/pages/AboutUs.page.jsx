import React from 'react';
import meImg from '../assets/images/me.svg';

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12  p-3 rounded ">
          <h3>About us</h3>

        </div>
      </div>
      <div className="row align-items-center  ">
        <div className="col-md-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus debitis repellat maxime minima eaque unde eum blanditiis ducimus consectetur culpa cupiditate minus, vitae, quod placeat, magnam aperiam accusamus voluptas dicta suscipit officia animi? Beatae nam porro vero reprehenderit necessitatibus nemo atque ea aperiam et totam non suscipit officiis enim eligendi sint minima earum dicta dolor numquam dolore illum sapiente velit, ab eius! Sed odit sequi quod quidem quaerat quae culpa molestias mollitia voluptatum, laborum autem dolor maiores. Accusantium aspernatur laudantium saepe porro ullam est dicta a laborum impedit. Veritatis rem voluptatum dicta, beatae maiores dolore suscipit a architecto esse?

        </div>
        <div className="col-md-5 text-center ">
          <img src={meImg} alt="meImg" className="img-fluid about-img" />

        </div>

      </div>

    </div>
  )
}

export default AboutUsPage

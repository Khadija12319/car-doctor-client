import img1 from "../../../assets/asset/images/banner/1.jpg";
import img2 from "../../../assets/asset/images/banner/2.jpg";
import img3 from "../../../assets/asset/images/banner/3.jpg";
import img4 from "../../../assets/asset/images/banner/4.jpg";
import img5 from "../../../assets/asset/images/banner/5.jpg";
import img6 from "../../../assets/asset/images/banner/6.jpg";
const Banner = () => {
    return (
    <div className="container mx-auto lg:w-[1140px]">
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full h-[600px] rounded-2xl" />
          <div className="absolute h-full items-center flex rounded-2xl bg-gradient-to-r from-gray-900 via-gray-900 to-transparent">
            <div className="space-y-7 pl-[100px]">
            <h1 className="text-white text-7xl font-bold">Affordable <br/>Price For Car <br/>Servicing</h1>
            <p className="text-white text-xl">There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
            <div className="flex gap-5">
                <button className="text-lg px-[22px] btn border-none text-white bg-[#FF3811] hover:border-[#FF3811] hover:bg-white hover:text-[#FF3811]">Discover More</button>
                <button className="btn text-lg btn-outline text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
    </div>
    </div>
    );
};

export default Banner;
import Icon from "../../assets/img/icon.png";
const SmallScreen = () => {
  return (
    <div className="lg:hidden text-center h-full w-full flex justify-center items-center flex-col">
      <img src={Icon} alt="EthnologyIcon" className="w-20 mb-5" />

      <h1 className="text-orange-light text-3xl font-extrabold font-main">
        Ukuran Layar Anda tidak Mendukung Aplikasi ini
      </h1>
      <p className="text-pastel-dark font-bolt font-main">
        Minimum Lebar Layar 1024px
      </p>
    </div>
  );
};

export default SmallScreen;

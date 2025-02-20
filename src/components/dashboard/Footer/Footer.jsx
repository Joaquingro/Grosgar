import logo from "../../../assets/logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-primary-50 text-white w-full px-4">
      <div className="max-w-[1350px] w-full m-auto">
        <div className="flex items-center w-full justify-center border-b border-b-white py-3 flex-wrap sm:justify-between">
          <div>
            <img src={logo} alt="logo" className="w-[250px]" />
          </div>

          <div>
            <p className="text-sm sm:text-base">Síguenos en nuestras redes sociales</p>

            <div className="flex items-center mt-3 gap-2 w-full justify-center sm:justify-normal">
              <a
                href="https://www.facebook.com/profile.php?id=100084660501983"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://twitter.com/ContaGrosGar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="py-2 text-center sm:text-left text-sm sm:text-base">
          <p>® 2025 Consultoria y Gestión Empresarial CAIM</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

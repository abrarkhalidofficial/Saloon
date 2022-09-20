import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function changeNavState() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1000
          ? { backgroundColor: "#fffff" }
          : null
      }
    >
      <div className="header__content">
        <NavLink to="/" className="header__content__logo">
          <svg
            width="206"
            height="18"
            viewBox="0 0 206 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1935 5.46209C10.1303 4.82417 9.85876 4.32859 9.379 3.97536C8.89925 3.62214 8.24815 3.44552 7.4257 3.44552C6.86686 3.44552 6.39501 3.5246 6.01015 3.68276C5.62529 3.83565 5.33006 4.04917 5.12445 4.32332C4.92411 4.59747 4.82394 4.90852 4.82394 5.25648C4.8134 5.54644 4.87402 5.7995 5.00583 6.01565C5.1429 6.23181 5.33006 6.41897 5.5673 6.57713C5.80454 6.73002 6.07869 6.86446 6.38974 6.98044C6.70079 7.09115 7.03293 7.18605 7.38616 7.26513L8.84125 7.61309C9.54771 7.77125 10.1962 7.98213 10.7866 8.24574C11.3771 8.50934 11.8885 8.83357 12.3208 9.21843C12.7531 9.60329 13.0879 10.0567 13.3251 10.5786C13.5677 11.1006 13.6916 11.6989 13.6968 12.3738C13.6916 13.3649 13.4385 14.2243 12.9376 14.9518C12.4421 15.6741 11.7251 16.2356 10.7866 16.6362C9.85349 17.0316 8.7279 17.2293 7.40989 17.2293C6.10242 17.2293 4.96365 17.029 3.99359 16.6283C3.0288 16.2276 2.2749 15.6345 1.73187 14.849C1.19412 14.0582 0.912067 13.0802 0.885707 11.9151H4.1992C4.2361 12.4581 4.39163 12.9115 4.66578 13.2753C4.9452 13.6338 5.31688 13.9053 5.78082 14.0898C6.25003 14.2691 6.77988 14.3587 7.37035 14.3587C7.95027 14.3587 8.45376 14.2743 8.88079 14.1056C9.3131 13.9369 9.64788 13.7023 9.88512 13.4018C10.1224 13.1013 10.241 12.756 10.241 12.3659C10.241 12.0021 10.1329 11.6963 9.91675 11.4485C9.70587 11.2007 9.39482 10.9898 8.9836 10.8159C8.57765 10.6419 8.07944 10.4837 7.48897 10.3414L5.72546 9.89853C4.36 9.56639 3.28186 9.04709 2.49105 8.34063C1.70024 7.63418 1.30747 6.68257 1.31274 5.48581C1.30747 4.50521 1.56844 3.6485 2.09565 2.91568C2.62812 2.18286 3.35831 1.61084 4.28619 1.19962C5.21407 0.788401 6.26849 0.58279 7.44943 0.58279C8.65146 0.58279 9.7006 0.788401 10.5969 1.19962C11.4984 1.61084 12.1996 2.18286 12.7004 2.91568C13.2013 3.6485 13.4596 4.4973 13.4754 5.46209H10.1935ZM18.4219 17H14.7526L20.3436 0.804217H24.7563L30.3394 17H26.6701L22.6132 4.50521H22.4867L18.4219 17ZM18.1926 10.634H26.8599V13.3069H18.1926V10.634ZM32.2888 17V0.804217H35.713V14.1768H42.6563V17H32.2888ZM59.1763 8.90211C59.1763 10.6683 58.8415 12.1708 58.172 13.4097C57.5077 14.6487 56.6009 15.595 55.4516 16.2487C54.3075 16.8972 53.0212 17.2214 51.5924 17.2214C50.1532 17.2214 48.8615 16.8946 47.7175 16.2408C46.5734 15.5871 45.6693 14.6408 45.005 13.4018C44.3407 12.1629 44.0086 10.663 44.0086 8.90211C44.0086 7.13597 44.3407 5.63343 45.005 4.39449C45.6693 3.15556 46.5734 2.21186 47.7175 1.56339C48.8615 0.909658 50.1532 0.58279 51.5924 0.58279C53.0212 0.58279 54.3075 0.909658 55.4516 1.56339C56.6009 2.21186 57.5077 3.15556 58.172 4.39449C58.8415 5.63343 59.1763 7.13597 59.1763 8.90211ZM55.7046 8.90211C55.7046 7.75807 55.5333 6.79328 55.1906 6.00774C54.8532 5.22221 54.3761 4.62646 53.7592 4.22052C53.1424 3.81457 52.4201 3.61159 51.5924 3.61159C50.7647 3.61159 50.0424 3.81457 49.4256 4.22052C48.8088 4.62646 48.329 5.22221 47.9863 6.00774C47.6489 6.79328 47.4802 7.75807 47.4802 8.90211C47.4802 10.0461 47.6489 11.0109 47.9863 11.7965C48.329 12.582 48.8088 13.1778 49.4256 13.5837C50.0424 13.9897 50.7647 14.1926 51.5924 14.1926C52.4201 14.1926 53.1424 13.9897 53.7592 13.5837C54.3761 13.1778 54.8532 12.582 55.1906 11.7965C55.5333 11.0109 55.7046 10.0461 55.7046 8.90211ZM76.5959 8.90211C76.5959 10.6683 76.2611 12.1708 75.5915 13.4097C74.9272 14.6487 74.0204 15.595 72.8711 16.2487C71.7271 16.8972 70.4407 17.2214 69.012 17.2214C67.5727 17.2214 66.2811 16.8946 65.137 16.2408C63.993 15.5871 63.0888 14.6408 62.4245 13.4018C61.7603 12.1629 61.4281 10.663 61.4281 8.90211C61.4281 7.13597 61.7603 5.63343 62.4245 4.39449C63.0888 3.15556 63.993 2.21186 65.137 1.56339C66.2811 0.909658 67.5727 0.58279 69.012 0.58279C70.4407 0.58279 71.7271 0.909658 72.8711 1.56339C74.0204 2.21186 74.9272 3.15556 75.5915 4.39449C76.2611 5.63343 76.5959 7.13597 76.5959 8.90211ZM73.1242 8.90211C73.1242 7.75807 72.9529 6.79328 72.6102 6.00774C72.2728 5.22221 71.7956 4.62646 71.1788 4.22052C70.562 3.81457 69.8397 3.61159 69.012 3.61159C68.1843 3.61159 67.462 3.81457 66.8452 4.22052C66.2283 4.62646 65.7486 5.22221 65.4059 6.00774C65.0685 6.79328 64.8998 7.75807 64.8998 8.90211C64.8998 10.0461 65.0685 11.0109 65.4059 11.7965C65.7486 12.582 66.2283 13.1778 66.8452 13.5837C67.462 13.9897 68.1843 14.1926 69.012 14.1926C69.8397 14.1926 70.562 13.9897 71.1788 13.5837C71.7956 13.1778 72.2728 12.582 72.6102 11.7965C72.9529 11.0109 73.1242 10.0461 73.1242 8.90211ZM92.6789 0.804217V17H89.7213L82.6752 6.80646H82.5566V17H79.1324V0.804217H82.1374L89.1282 10.9898H89.2706V0.804217H92.6789ZM111.182 4.85316C111.087 4.05181 110.702 3.42971 110.027 2.98685C109.353 2.544 108.525 2.32257 107.544 2.32257C106.827 2.32257 106.2 2.43856 105.662 2.67053C105.13 2.9025 104.713 3.22146 104.413 3.62741C104.117 4.03336 103.97 4.49466 103.97 5.01132C103.97 5.44363 104.073 5.81531 104.278 6.12637C104.489 6.43215 104.758 6.68784 105.085 6.89345C105.412 7.09379 105.754 7.25986 106.113 7.39166C106.471 7.51819 106.801 7.621 107.101 7.70008L108.746 8.14293C109.168 8.25364 109.637 8.40653 110.154 8.6016C110.676 8.79667 111.174 9.06291 111.648 9.40032C112.128 9.73246 112.524 10.1595 112.835 10.6814C113.146 11.2034 113.301 11.8439 113.301 12.6031C113.301 13.4783 113.072 14.2691 112.613 14.9755C112.16 15.682 111.496 16.2435 110.62 16.66C109.751 17.0764 108.694 17.2847 107.449 17.2847C106.289 17.2847 105.285 17.0975 104.436 16.7232C103.593 16.3489 102.928 15.827 102.443 15.1574C101.964 14.4879 101.692 13.7102 101.629 12.8245H103.653C103.706 13.4361 103.912 13.9422 104.27 14.3429C104.634 14.7383 105.093 15.0335 105.646 15.2286C106.205 15.4184 106.806 15.5133 107.449 15.5133C108.198 15.5133 108.87 15.392 109.466 15.1495C110.062 14.9017 110.533 14.559 110.881 14.1215C111.229 13.6786 111.403 13.1619 111.403 12.5715C111.403 12.0337 111.253 11.5961 110.953 11.2587C110.652 10.9213 110.257 10.6472 109.766 10.4363C109.276 10.2254 108.746 10.0409 108.177 9.88271L106.184 9.31333C104.919 8.94956 103.917 8.43026 103.179 7.75543C102.441 7.08061 102.072 6.19754 102.072 5.10622C102.072 4.19943 102.317 3.40862 102.807 2.73379C103.303 2.0537 103.967 1.52649 104.8 1.15217C105.638 0.772584 106.574 0.58279 107.607 0.58279C108.651 0.58279 109.579 0.769948 110.391 1.14426C111.203 1.51331 111.846 2.01943 112.321 2.66262C112.8 3.30581 113.054 4.03599 113.08 4.85316H111.182ZM116.526 17V0.804217H126.3V2.544H118.487V8.0164H125.794V9.75618H118.487V15.2602H126.427V17H116.526ZM129.835 17V0.804217H135.308C136.573 0.804217 137.611 1.02037 138.423 1.45268C139.235 1.87972 139.836 2.46755 140.226 3.21619C140.617 3.96482 140.812 4.81626 140.812 5.7705C140.812 6.72475 140.617 7.57091 140.226 8.309C139.836 9.04709 139.238 9.62702 138.431 10.0488C137.625 10.4653 136.594 10.6735 135.339 10.6735H130.911V8.90211H135.276C136.141 8.90211 136.836 8.77558 137.364 8.52252C137.896 8.26946 138.281 7.91096 138.518 7.44702C138.761 6.9778 138.882 6.41897 138.882 5.7705C138.882 5.12204 138.761 4.55529 138.518 4.07026C138.276 3.58523 137.888 3.21091 137.356 2.94731C136.823 2.67844 136.119 2.544 135.244 2.544H131.796V17H129.835ZM137.459 9.72455L141.444 17H139.167L135.244 9.72455H137.459ZM144.374 0.804217L149.182 14.4378H149.372L154.18 0.804217H156.236L150.289 17H148.265L142.318 0.804217H144.374ZM160.72 0.804217V17H158.759V0.804217H160.72ZM177.685 5.8654H175.724C175.608 5.30129 175.405 4.80571 175.115 4.37868C174.83 3.95164 174.482 3.59314 174.071 3.30318C173.665 3.00794 173.214 2.78651 172.719 2.6389C172.223 2.49128 171.707 2.41747 171.169 2.41747C170.188 2.41747 169.3 2.66526 168.504 3.16083C167.713 3.6564 167.083 4.38659 166.614 5.35137C166.15 6.31616 165.918 7.49974 165.918 8.90211C165.918 10.3045 166.15 11.4881 166.614 12.4528C167.083 13.4176 167.713 14.1478 168.504 14.6434C169.3 15.139 170.188 15.3867 171.169 15.3867C171.707 15.3867 172.223 15.3129 172.719 15.1653C173.214 15.0177 173.665 14.7989 174.071 14.5089C174.482 14.2137 174.83 13.8526 175.115 13.4255C175.405 12.9932 175.608 12.4977 175.724 11.9388H177.685C177.537 12.7665 177.269 13.5073 176.878 14.161C176.488 14.8147 176.003 15.3709 175.423 15.8296C174.843 16.283 174.192 16.6283 173.47 16.8656C172.753 17.1028 171.986 17.2214 171.169 17.2214C169.787 17.2214 168.559 16.884 167.484 16.2092C166.408 15.5344 165.562 14.5749 164.945 13.3306C164.328 12.0864 164.02 10.6103 164.02 8.90211C164.02 7.19396 164.328 5.71778 164.945 4.47357C165.562 3.22937 166.408 2.26985 167.484 1.59503C168.559 0.920202 169.787 0.58279 171.169 0.58279C171.986 0.58279 172.753 0.701411 173.47 0.938655C174.192 1.1759 174.843 1.52385 175.423 1.98252C176.003 2.43592 176.488 2.98949 176.878 3.64322C177.269 4.29169 177.537 5.03241 177.685 5.8654ZM180.854 17V0.804217H190.629V2.544H182.815V8.0164H190.123V9.75618H182.815V15.2602H190.755V17H180.854ZM203.021 4.85316C202.926 4.05181 202.541 3.42971 201.866 2.98685C201.191 2.544 200.364 2.32257 199.383 2.32257C198.666 2.32257 198.039 2.43856 197.501 2.67053C196.968 2.9025 196.552 3.22146 196.251 3.62741C195.956 4.03336 195.808 4.49466 195.808 5.01132C195.808 5.44363 195.911 5.81531 196.117 6.12637C196.328 6.43215 196.597 6.68784 196.923 6.89345C197.25 7.09379 197.593 7.25986 197.952 7.39166C198.31 7.51819 198.64 7.621 198.94 7.70008L200.585 8.14293C201.007 8.25364 201.476 8.40653 201.993 8.6016C202.515 8.79667 203.013 9.06291 203.487 9.40032C203.967 9.73246 204.362 10.1595 204.673 10.6814C204.984 11.2034 205.14 11.8439 205.14 12.6031C205.14 13.4783 204.911 14.2691 204.452 14.9755C203.999 15.682 203.334 16.2435 202.459 16.66C201.589 17.0764 200.532 17.2847 199.288 17.2847C198.128 17.2847 197.124 17.0975 196.275 16.7232C195.431 16.3489 194.767 15.827 194.282 15.1574C193.802 14.4879 193.531 13.7102 193.468 12.8245H195.492C195.545 13.4361 195.75 13.9422 196.109 14.3429C196.473 14.7383 196.931 15.0335 197.485 15.2286C198.044 15.4184 198.645 15.5133 199.288 15.5133C200.037 15.5133 200.709 15.392 201.305 15.1495C201.9 14.9017 202.372 14.559 202.72 14.1215C203.068 13.6786 203.242 13.1619 203.242 12.5715C203.242 12.0337 203.092 11.5961 202.791 11.2587C202.491 10.9213 202.095 10.6472 201.605 10.4363C201.115 10.2254 200.585 10.0409 200.016 9.88271L198.023 9.31333C196.757 8.94956 195.756 8.43026 195.018 7.75543C194.28 7.08061 193.91 6.19754 193.91 5.10622C193.91 4.19943 194.156 3.40862 194.646 2.73379C195.142 2.0537 195.806 1.52649 196.639 1.15217C197.477 0.772584 198.413 0.58279 199.446 0.58279C200.49 0.58279 201.418 0.769948 202.23 1.14426C203.042 1.51331 203.685 2.01943 204.159 2.66262C204.639 3.30581 204.892 4.03599 204.919 4.85316H203.021Z"
              fill="black"
            />
          </svg>
        </NavLink>

        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <NavLink
                to="/#"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/#"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Reviews
              </NavLink>

              <NavLink
                to="/#"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Contact us
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__cta__button"
              >
                Join Now
              </NavLink>
            </div>
          </ClickAwayListener>
        ) : null}

        <div className="header__content__cta">
          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Close" : "Open"}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
          <NavLink
            to="/Login"
            title="Join Now"
            className="header__content__cta__button"
          >
            Join Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

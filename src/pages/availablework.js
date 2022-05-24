import { useNavigate } from "react-router-dom";
import  NavigationBar from "../components/navigationbar";
import "../App.css";
import Skateboard from "../assets/skateboard.svg"
import YellowFlower from "../assets/yellowflower.svg";
import Formula1 from "../assets/f1.svg";
import Dog from "../assets/dog.svg";
import Sauna from "../assets/sauna.svg";
import BlackFlower from "../assets/blackflower.svg";

export default function AvailableWork() {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  return ( 
    <div className="availableworkBody">
        <NavigationBar />
        <img className="yellowflower1" src={YellowFlower} />
        <img className="blackflower1" src={BlackFlower} />
        <img className="yellowflower3" src={YellowFlower} />
        <img className="blackflower2" src={BlackFlower} />
        <img className="yellowflower2" src={YellowFlower} />
        <div className="sneak" onClick={() => routeChange("/sneak")}>
            <h1>sneak</h1>
            <svg className="skateboard" width="182" height="288" viewBox="0 0 182 288" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="skateboard">
<g id="rightskateboard">
<path id="rightskateboard_2" d="M44.3821 163.638L122.382 264.638C122.382 264.638 138.382 294.638 163.382 285.638C188.382 276.638 150.382 249.638 150.382 249.638L74.3821 148.638C74.3821 148.638 64.3821 121.496 44.3821 127.067C24.3821 132.638 44.3821 163.638 44.3821 163.638Z" fill="#FFE403"/>
<g id="rightwheels">
<path id="Vector" d="M68.8821 209.138C73.8531 209.138 77.8821 205.108 77.8821 200.138C77.8821 195.167 73.8531 191.138 68.8821 191.138C63.9121 191.138 59.8821 195.167 59.8821 200.138C59.8821 205.108 63.9121 209.138 68.8821 209.138Z" fill="#3F3D56"/>
<path id="Vector_2" d="M136.882 287.138C141.853 287.138 145.882 283.108 145.882 278.138C145.882 273.167 141.853 269.138 136.882 269.138C131.912 269.138 127.882 273.167 127.882 278.138C127.882 283.108 131.912 287.138 136.882 287.138Z" fill="#3F3D56"/>
<path id="Vector_3" d="M45.8821 189.138C50.8531 189.138 54.8821 185.108 54.8821 180.138C54.8821 175.167 50.8531 171.138 45.8821 171.138C40.9121 171.138 36.8821 175.167 36.8821 180.138C36.8821 185.108 40.9121 189.138 45.8821 189.138Z" fill="#3F3D56"/>
<path id="Vector_4" d="M113.382 275.638C118.353 275.638 122.382 271.608 122.382 266.638C122.382 261.667 118.353 257.638 113.382 257.638C108.412 257.638 104.382 261.667 104.382 266.638C104.382 271.608 108.412 275.638 113.382 275.638Z" fill="#3F3D56"/>
</g>
</g>
<g id="Group">
<path id="Vector_5" d="M176.229 234.598L163.051 241.573L129.876 194.063L149.325 183.769L176.229 234.598Z" fill="#A0616A"/>
<path id="Vector_6" d="M130.923 258.199C130.879 259.107 131.843 261.452 132.268 262.256C133.576 264.726 136.638 265.668 139.108 264.361L179.918 242.758C181.603 241.866 182.246 239.777 181.354 238.091L180.454 236.392C180.454 236.392 179.77 230.217 172.282 226.124C172.282 226.124 169.725 233.786 157.92 230.154L153.461 227.235L143.363 248.008L134.825 253.967C132.957 255.27 131.035 255.924 130.923 258.199Z" fill="#2F2E41"/>
</g>
<g id="Group_2">
<path id="Vector_7" d="M111.229 149.598L98.051 156.573L64.876 109.063L84.325 98.769L111.229 149.598Z" fill="#A0616A"/>
<path id="Vector_8" d="M65.9228 173.199C65.8788 174.107 66.8428 176.452 67.2678 177.256C68.5758 179.726 71.6378 180.668 74.1078 179.361L114.918 157.758C116.603 156.866 117.246 154.777 116.354 153.091L115.454 151.392C115.454 151.392 114.77 145.217 107.282 141.124C107.282 141.124 104.725 148.786 92.9188 145.154L88.4598 142.235L78.3618 163.008L69.8249 168.967C67.9569 170.27 66.0348 170.924 65.9228 173.199Z" fill="#2F2E41"/>
</g>
<path id="Vector_9" d="M158.382 48.638L109.382 127.638L160.382 199.638L140.382 209.638C140.382 209.638 75.382 140.638 73.382 131.638C71.382 122.638 93.382 59.638 93.382 59.638H51.614L91.382 109.638L72.382 121.638L4.38197 55.638C4.38197 55.638 -3.61803 42.346 4.38197 37.492C12.382 32.638 84.118 0.638 84.118 0.638L158.382 48.638Z" fill="#2F2E41"/>
</g>
</svg>
        </div>
        <div className="f1grandstands" onClick={() => routeChange("/f1grandstands")}>
            <h1>f1 grandstands</h1>
            <img className="formula2" src={Formula1} />
        </div>
        <div className="agentk9" onClick={() => routeChange("/agentk9")}>
            <h1>agent k9</h1>
            <img className="dog" src={Dog} />
        </div>
        <div className="saunakoning" onClick={() => routeChange("/saunakoning")}>
            <h1>sauna koning</h1>
            <svg className="sauna" width="80" height="111" viewBox="0 0 240 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="sauna">
<g id="rocks">
<path id="Vector" d="M105 204H51.0001C50.6601 204 50.3301 204.01 50.0001 204.04C46.472 204.292 43.1701 205.87 40.7584 208.457C38.3466 211.045 37.0038 214.449 37 217.986C36.9962 221.523 38.3317 224.93 40.7379 227.523C43.1441 230.115 46.4425 231.701 49.97 231.96C50.31 231.99 50.6501 232 51.0001 232H105C108.713 232 112.274 230.525 114.9 227.9C117.525 225.274 119 221.713 119 218C119 214.287 117.525 210.726 114.9 208.1C112.274 205.475 108.713 204 105 204V204Z" fill="black"/>
<path id="Vector_2" d="M185 204H131C130.66 204 130.33 204.01 130 204.04C126.472 204.292 123.17 205.87 120.758 208.457C118.347 211.045 117.004 214.449 117 217.986C116.996 221.523 118.332 224.93 120.738 227.523C123.144 230.115 126.443 231.701 129.97 231.96C130.31 231.99 130.65 232 131 232H185C188.713 232 192.274 230.525 194.9 227.9C197.525 225.274 199 221.713 199 218C199 214.287 197.525 210.726 194.9 208.1C192.274 205.475 188.713 204 185 204V204Z" fill="black"/>
<path id="Vector_3" d="M147 175H93.0001C92.6601 175 92.3301 175.01 92.0001 175.04C88.472 175.292 85.1701 176.87 82.7584 179.457C80.3466 182.045 79.0038 185.449 79 188.986C78.9962 192.523 80.3317 195.93 82.7379 198.523C85.1441 201.115 88.4425 202.701 91.97 202.96C92.31 202.99 92.6501 203 93.0001 203H147C150.713 203 154.274 201.525 156.9 198.9C159.525 196.274 161 192.713 161 189C161 185.287 159.525 181.726 156.9 179.1C154.274 176.475 150.713 175 147 175V175Z" fill="black"/>
<path id="Vector_4" d="M147 233H93.0001C92.6601 233 92.3301 233.01 92.0001 233.04C88.472 233.292 85.1701 234.87 82.7584 237.457C80.3466 240.045 79.0038 243.449 79 246.986C78.9962 250.523 80.3317 253.93 82.7379 256.523C85.1441 259.115 88.4425 260.701 91.97 260.96C92.31 260.99 92.6501 261 93.0001 261H147C150.713 261 154.274 259.525 156.9 256.9C159.525 254.274 161 250.713 161 247C161 243.287 159.525 239.726 156.9 237.1C154.274 234.475 150.713 233 147 233V233Z" fill="black"/>
<path id="Vector_5" d="M226 233H172C171.66 233 171.33 233.01 171 233.04C167.472 233.292 164.17 234.87 161.758 237.457C159.347 240.045 158.004 243.449 158 246.986C157.996 250.523 159.332 253.93 161.738 256.523C164.144 259.115 167.443 260.701 170.97 260.96C171.31 260.99 171.65 261 172 261H226C229.713 261 233.274 259.525 235.9 256.9C238.525 254.274 240 250.713 240 247C240 243.287 238.525 239.726 235.9 237.1C233.274 234.475 229.713 233 226 233V233Z" fill="black"/>
<path id="Vector_6" opacity="0.2" d="M45.56 230.89C54.76 229.71 62 218.1 62 204H60C60 217.79 52.82 229 44 229V230.12L45.56 230.89Z" fill="white"/>
<path id="Vector_7" opacity="0.2" d="M125.56 229.89C134.76 228.71 142 217.1 142 203H140C140 216.79 132.82 228 124 228V229.12L125.56 229.89Z" fill="white"/>
<path id="Vector_8" opacity="0.2" d="M87.56 201.89C96.76 200.71 104 189.1 104 175H102C102 188.79 94.82 200 86 200V201.12L87.56 201.89Z" fill="white"/>
<path id="Vector_9" opacity="0.2" d="M45.56 230.89C54.76 229.71 62 218.1 62 204H60C60 217.79 52.82 229 44 229V230.12L45.56 230.89Z" fill="white"/>
<path id="Vector_10" opacity="0.2" d="M125.56 230.89C134.76 229.71 142 218.1 142 204H140C140 217.79 132.82 229 124 229V230.12L125.56 230.89Z" fill="white"/>
<path id="Vector_11" opacity="0.2" d="M87.56 201.89C96.76 200.71 104 189.1 104 175H102C102 188.79 94.82 200 86 200V201.12L87.56 201.89Z" fill="white"/>
<path id="Vector_12" opacity="0.2" d="M87.56 259.89C96.76 258.71 104 247.1 104 233H102C102 246.79 94.82 258 86 258V259.12L87.56 259.89Z" fill="white"/>
<path id="Vector_13" opacity="0.2" d="M166.56 259.89C175.76 258.71 183 247.1 183 233H181C181 246.79 173.82 258 165 258V259.12L166.56 259.89Z" fill="white"/>
<path id="Vector_14" opacity="0.2" d="M65 231V229C73.8223 229 81 217.785 81 204H83C83 218.888 74.9253 231 65 231Z" fill="white"/>
<path id="Vector_15" opacity="0.2" d="M145 230V228C153.822 228 161 216.785 161 203H163C163 217.888 154.925 230 145 230Z" fill="white"/>
<path id="Vector_16" opacity="0.2" d="M107 202V200C115.822 200 123 188.785 123 175H125C125 189.888 116.925 202 107 202Z" fill="white"/>
<path id="Vector_17" opacity="0.2" d="M65 231V229C73.8223 229 81 217.785 81 204H83C83 218.888 74.9253 231 65 231Z" fill="white"/>
<path id="Vector_18" opacity="0.2" d="M145 231V229C153.822 229 161 217.785 161 204H163C163 218.888 154.925 231 145 231Z" fill="white"/>
<path id="Vector_19" opacity="0.2" d="M107 202V200C115.822 200 123 188.785 123 175H125C125 189.888 116.925 202 107 202Z" fill="white"/>
<path id="Vector_20" opacity="0.2" d="M107 260V258C115.822 258 123 246.785 123 233H125C125 247.888 116.925 260 107 260Z" fill="white"/>
<path id="Vector_21" opacity="0.2" d="M186 260V258C194.822 258 202 246.785 202 233H204C204 247.888 195.925 260 186 260Z" fill="white"/>
<path id="Vector_22" opacity="0.2" d="M86 231V229C94.8223 229 102 217.785 102 204H104C104 218.888 95.9253 231 86 231Z" fill="white"/>
<path id="Vector_23" opacity="0.2" d="M166 230V228C174.822 228 182 216.785 182 203H184C184 217.888 175.925 230 166 230Z" fill="white"/>
<path id="Vector_24" opacity="0.2" d="M128 202V200C136.822 200 144 188.785 144 175H146C146 189.888 137.925 202 128 202Z" fill="white"/>
<path id="Vector_25" opacity="0.2" d="M86 231V229C94.8223 229 102 217.785 102 204H104C104 218.888 95.9253 231 86 231Z" fill="white"/>
<path id="Vector_26" opacity="0.2" d="M166 231V229C174.822 229 182 217.785 182 204H184C184 218.888 175.925 231 166 231Z" fill="white"/>
<path id="Vector_27" opacity="0.2" d="M128 202V200C136.822 200 144 188.785 144 175H146C146 189.888 137.925 202 128 202Z" fill="white"/>
<path id="Vector_28" opacity="0.2" d="M128 260V258C136.822 258 144 246.785 144 233H146C146 247.888 137.925 260 128 260Z" fill="white"/>
<path id="Vector_29" opacity="0.2" d="M207 260V258C215.822 258 223 246.785 223 233H225C225 247.888 216.925 260 207 260Z" fill="white"/>
<path id="Vector_30" d="M68.0001 233H14.0001C13.6601 233 13.3301 233.01 13.0001 233.04C9.47202 233.292 6.17013 234.87 3.75837 237.457C1.34661 240.045 0.00380861 243.449 8.08957e-06 246.986C-0.00379244 250.523 1.33167 253.93 3.73786 256.523C6.14406 259.115 9.44254 260.701 12.97 260.96C13.31 260.99 13.6501 261 14.0001 261H68.0001C71.7131 261 75.274 259.525 77.8995 256.9C80.5251 254.274 82.0001 250.713 82.0001 247C82.0001 243.287 80.5251 239.726 77.8995 237.1C75.274 234.475 71.7131 233 68.0001 233V233Z" fill="black"/>
<path id="Vector_31" opacity="0.2" d="M8.56 259.89C17.76 258.71 25 247.1 25 233H23C23 246.79 15.82 258 7 258V259.12L8.56 259.89Z" fill="white"/>
<path id="Vector_32" opacity="0.2" d="M28 260V258C36.8223 258 44 246.785 44 233H46C46 247.888 37.9253 260 28 260Z" fill="white"/>
<path id="Vector_33" opacity="0.2" d="M49 260V258C57.8223 258 65 246.785 65 233H67C67 247.888 58.9253 260 49 260Z" fill="white"/>
</g>
<g id="steam">
<path id="Vector_34" d="M80.2714 51.5182C73.1944 47.6948 64.445 51.8646 60.9184 58.6322C56.6288 66.8642 60.1843 76.7606 65.1864 83.7966C70.3843 91.1081 77.439 97.1431 80.9088 105.592C84.2282 113.544 84.6218 122.414 82.0197 130.629C79.4176 138.843 73.9883 145.869 66.6961 150.459C63.4414 152.518 66.4484 157.712 69.7244 155.64C76.8764 151.172 82.5346 144.674 85.9768 136.976C89.4189 129.277 90.4887 120.728 89.0497 112.419C88.3194 108.11 86.9268 103.939 84.9212 100.056C82.7466 96.0931 80.1271 92.3909 77.1134 89.0215C71.908 82.861 65.3553 76.0695 65.0287 67.4983C64.9689 66.3865 65.0465 65.2715 65.2595 64.1786C65.4155 63.4151 65.6475 62.6692 65.9521 61.9519C66.6797 60.4119 67.7594 59.0647 69.104 58.0191C70.3506 57.0248 71.8255 56.357 73.3952 56.0762C74.7113 55.881 76.0557 56.0985 77.2431 56.699C80.6406 58.5345 83.6735 53.3561 80.2714 51.5182V51.5182Z" fill="#FFE403"/>
<path id="Vector_35" d="M170.555 87.812C167.541 86.8436 164.322 86.7106 161.239 87.4271C158.156 88.1437 155.324 89.683 153.047 91.8811C151.87 93.0916 150.998 94.5651 150.503 96.1795C150.009 97.794 149.906 99.503 150.203 101.165C150.775 104.801 153.071 108.03 155.561 110.633C160.434 115.725 167.254 119.018 171.34 124.864C173.152 127.355 174.289 130.272 174.641 133.332C174.851 136.082 174.347 138.839 173.177 141.336C170.129 147.532 164.078 151.746 157.696 154.459C156.205 155.093 155.876 157.292 156.62 158.564C157.036 159.235 157.693 159.721 158.457 159.921C159.221 160.122 160.033 160.021 160.724 159.64C172.468 154.648 183.334 143.466 180.094 129.728C178.391 122.501 173.168 117.401 167.544 112.967C164.751 110.919 162.114 108.668 159.652 106.232C157.708 104.166 155.687 101.346 156.044 98.5472C156.188 97.5738 156.664 96.6803 157.392 96.0188C158.276 95.2114 159.278 94.5451 160.365 94.0435C161.697 93.4051 163.142 93.0369 164.618 92.9604C166.093 92.8838 167.569 93.1005 168.96 93.5977C169.727 93.8017 170.543 93.6964 171.233 93.3046C171.924 92.9127 172.432 92.2655 172.65 91.5023C172.845 90.7357 172.736 89.9232 172.346 89.2352C171.955 88.5472 171.313 88.0372 170.555 87.812V87.812Z" fill="#FFE403"/>
<path id="Vector_36" d="M124.879 2.46262C123.091 0.935336 120.834 0.0662636 118.483 0C116.254 0.0418102 114.087 0.742489 112.255 2.01373C108.118 5.01916 105.191 9.40433 104.003 14.378C100.971 25.9914 104.926 38.5087 110.421 48.7366C113.198 53.9073 116.434 58.8151 119.23 63.9752C121.926 68.9107 123.996 74.1631 125.392 79.6109C128.239 90.7814 128.493 102.455 126.135 113.739C123.733 124.97 118.682 136.091 110.089 143.84C109.526 144.403 109.21 145.166 109.21 145.962C109.21 146.757 109.526 147.52 110.089 148.083C110.652 148.645 111.415 148.962 112.21 148.962C113.006 148.962 113.769 148.645 114.332 148.083C121.959 141.205 127.059 131.77 130.139 122.069C133.536 111.111 134.529 99.5501 133.052 88.1738C132.384 82.5087 131.094 76.9343 129.205 71.5516C127.159 66.1292 124.604 60.9129 121.573 55.9726C115.934 46.4377 109.931 36.7941 109.114 25.4409C108.713 19.858 109.411 14.0385 112.865 9.54886C112.676 9.79454 113.017 9.37015 113.018 9.36838C113.227 9.11764 113.444 8.8736 113.669 8.63629C114.098 8.17636 114.558 7.74749 115.048 7.35287C114.944 7.43542 114.678 7.61273 115.162 7.27759C115.402 7.1109 115.647 6.95111 115.899 6.80283C116.105 6.68224 116.315 6.57528 116.525 6.4639C116.65 6.40026 116.776 6.34031 116.905 6.28406C116.613 6.40988 116.629 6.4111 116.954 6.28769C117.189 6.21413 118.351 5.963 117.706 6.04449C117.921 6.01883 118.137 6.00478 118.354 6.00238C118.446 6.00073 119.255 6.04216 118.86 5.9989C118.397 5.94831 119.225 6.08107 119.231 6.08255C119.49 6.14578 119.745 6.22639 119.993 6.32382C119.369 6.07434 121.016 7.00093 120.636 6.70523C121.211 7.2447 121.969 7.54498 122.757 7.54498C123.546 7.54498 124.304 7.2447 124.879 6.70523C125.914 5.67009 126.165 3.46264 124.879 2.46259L124.879 2.46262Z" fill="#FFE403"/>
</g>
</g>
</svg>

        </div>
    </div>
  );
}
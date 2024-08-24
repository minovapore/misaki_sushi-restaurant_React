import logo from '../assets/img/logo.png';
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.png';
import youtube from '../assets/img/youtube.png'

export default function Footer(){
    return(
        <footer class="footer footer-center bg-black text-white p-10">
            <aside>
                <img src={logo} alt="" />
                <p>Copyright © {new Date().getFullYear()} - Misaki sushi&restaurant</p>
            </aside>
            <nav>
                <div class="grid grid-flow-col gap-4">
                    <a>
                       <img src={instagram} alt="instagram" />
                    </a>
                    <a>
                        <img src={facebook} alt="" />
                    </a>
                    <a>
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </nav>
        </footer>
    );
}
import { useEffect } from "react";
import { MENULINKS } from "../../constants";
import gsap from "gsap";

const Menu = () => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');
    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox: HTMLInputElement =
          document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
        gsap.fromTo(".credits", { autoAlpha: 0 }, { autoAlpha: 1, duration: 6 });
      });
    });  
  }, []);

  return (
    <div
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto flex flex-col justify-center items-center max-h-screen">
            
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {MENULINKS.map((el) => (
              <li className="p-0 m-6 text-2xl block" key={el.name}>
                <a
                  className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                  href={`${el.ref}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-col credits gap-10 opacity-70 hover:opacity-100 mt-20">
            <h2 className="text-xl credits mb-4">Credits</h2>
            <span>
            Video: Taryn Elliott via Pexels |</span> <span> BBC Life | </span> <span> Sound: <a className="white no-underline" href="https://www.cinjee.com/">Marijn Cinjee</a> </span></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

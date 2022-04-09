import { ReactComponent as ReactLogo } from "@assets/icons/logo.svg";
// 1. 导入图片
import logoSrc from "@assets/bg.jpg";
import { version } from "../package.json";
import SvgIcon from "./components/SvgIcon";

// 方式一
export function Header() {
  const icons = import.meta.globEager("./assets/icons/logo-*.svg");
  const iconUrls = Object.values(icons).map((mod) => {
    // 如 ../../assets/icons/logo-1.svg -> logo-1
    const fileName = mod.default.split("/").pop();
    const [svgName] = fileName.split(".");
    return svgName;
  });

  console.log(iconUrls);

  return (
    <div className={`p-20px text-center`}>
      <div>version: {version}</div>
      <ReactLogo />
      <img className="m-auto mb-4" src={logoSrc} alt="" />
      {iconUrls.map((item) => (
        <SvgIcon name={"logo-vite"} key={item} width="50" height="50" />
      ))}
    </div>
  );
}

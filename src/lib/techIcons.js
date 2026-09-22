import { FaAws } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const icons = {
  html: SiHtml5,
  css: SiCss,
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  aws: FaAws,
  vercel: SiVercel,
  github: SiGithub,
};

export function getTechIcon(id) {
  return icons[id] || SiReact;
}

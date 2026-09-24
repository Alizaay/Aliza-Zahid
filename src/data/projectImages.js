import allianceSoft from "../assets/images/projects/AllianceSoft.png";
import agesTech from "../assets/images/projects/Ages-tech.png";
import cart360 from "../assets/images/projects/Cart360.png";
import delekys from "../assets/images/projects/Deleky's.png";
import dietPlan30 from "../assets/images/projects/Dietplan30.jpeg";
import forceApparel from "../assets/images/projects/Force-Apparel.png";
import nursingInsights from "../assets/images/projects/NursingInsights.png";
import radc from "../assets/images/projects/RADC website.png";

export const projectImages = {
  "alliance-soft": allianceSoft,
  "ages-tech": agesTech,
  cart360,
  delekys,
  "diet-plan-30": dietPlan30,
  "force-apparel": forceApparel,
  "nursing-insights": nursingInsights,
  radc,
};

export function getProjectImage(project) {
  if (!project) return "";
  return projectImages[project.id] || projectImages[project.slug] || project.thumbnail || project.hero || "";
}

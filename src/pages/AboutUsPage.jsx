import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
import TeamMembers from "../components/TeamMembers";
import Video from "../components/Video";

export default function AboutUsPage() {
  return (
    <>
      <AboutUs />
      <Stats/>
      <Video/>
      <TeamMembers />
      <Clients />
      <Contact />
    </>
  );
}

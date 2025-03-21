import SideBar from "../../components/SideBar";
import MainContainer from "../../components/MainContainer";

export default function Home() {
  return (
    <>
      <div
        className="h-[100%] relative flex gap-2 lg:flex-row flex-col p-2 font-poppins"
      >
        <SideBar />
        <MainContainer />
      </div>
    </>
  );
}

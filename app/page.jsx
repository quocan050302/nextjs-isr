import Image from "next/image";
import Link from "next/link";
import { TabGroup } from "./TabGroup/tab-group";
import Banner from "./components/Banner.jsx";

export default function Home() {
  const ids = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return (
    <div>
      <Banner />
    </div>
  );
}

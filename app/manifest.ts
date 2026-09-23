import { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S Kaushall | Developer Portfolio",
    short_name: "S Kaushall",
    description:
      "Portfolio of S Kaushall - 3rd-year CSE student passionate about Web, Software, Game Dev & 3D Creator.",
    start_url: "/",
    display: "standalone",
    background_color: "#06070a",
    theme_color: "#ffe880",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

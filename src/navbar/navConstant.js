import HomeContainer from "../home/homeContainer";

export const NAVIGATION_CONSTANT= [
    {
        path: "/",
        exact: true,
        key: 'NAV_HOME',
        label: "Home",
        sidebar: () => <HomeContainer/>
      },
      {
        path: "/projects",
        label: "Projects",
        key: "NAV_PROJECTS",
        sidebar: ()=> <div> Projects </div>

      },
      {
        path: "/skills",
        label: "About",
        key: 'NAV_ABOUT',
        sidebar: () => <div>Sbout!</div>
      }
]
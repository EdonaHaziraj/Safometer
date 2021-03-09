import Loadable from "react-loadable";

class ReactRouter {
  constructor(opts) {
    this.options = opts;
    this.routes = [];
    this.importComponents();
  }

  importComponents = () => {
    this.routes = this.getOptionRoutes().map((route, i) => {
      return {
        ...route,
        component: Loadable({
          loader: () => route.component,
          loading: !this.options.loading
            ? this.LoadingComponent
            : this.options.loading,
          timeout: route.delay ? route.delay : 0,
        }),
      };
    });
  };

  getOptionRoutes = () => {
    if (
      typeof this.options !== "undefined" &&
      typeof this.options.routes !== "undefined"
    ) {
      return this.options.routes;
    }
    return [];
  };

  getRoutes = () => {
    return this.routes;
  };

  LoadingComponent = () => {
    return "Loading...";
  };

  isAuthenticated = () => {
    if (typeof this.options.authenticate !== "undefined") {
      return this.options.authenticate();
    }
  };

  loginUrl = () => {
    if (typeof this.options.loginUrl !== "undefined") {
      return this.options.loginUrl();
    }
    return "/login";
  };
}

export default ReactRouter;

import { subclass, property } from "@arcgis/core/core/accessorSupport/decorators";

import { tsx, messageBundle } from "@arcgis/core/widgets/support/widget";
import Widget from "@arcgis/core/widgets/Widget";
@subclass("esri.widgets.HelloWorld")
class HelloWorld extends Widget {
  render() {
    return (
      <div>John Smith</div>
    );
  }
}

export default HelloWorld;

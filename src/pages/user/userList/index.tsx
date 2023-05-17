import React, { memo } from "react";
import classes from "./index.module.less";
function Page() {
  return (
    <div className={classes.page}>
      <h1>role list</h1>
    </div>
  );
}

export default memo(Page);

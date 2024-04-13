import React from "react";
import { TailSpin } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = ({ width, height }) => {
  return (
    <div className={style.loader_cont}>
      <TailSpin width={width} height={height} color="#61FF00" />
    </div>
  );
};

export default Loader;

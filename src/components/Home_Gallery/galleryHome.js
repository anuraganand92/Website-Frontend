import "./css/galleryHome.css";
import illu from "./illu.jpeg";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import * as React from "react";
import Grid from "@mui/material/Grid";

function galleryHome() {
  return (
    <div className="gallery-out-box">
      <div className="galler-box">
        <div className="gallery-left">
          <h2>Gallery</h2>
          <div className="content">
            <img src={illu} alt="img" />
            <label>ILLUMINATION | 2016</label>
            <div className="quote">
              <h4>Festival for you,</h4>
              <h4>Tradition for us.</h4>
            </div>
            <div className="text">
              The Illuminatinon (or ‘illu’) is the IIT Kharagpur way of
              celebrating Diwali. This unique culture is celebrated by students
              from different halls of residence, alumni, faculty, and even
              guests of honor from outside the institute. RK Hall has a glorious
              history of winning Gold in both, the Illu and the Rangoli for the
              past few years.
            </div>
            <button>
              <div className="text">Read More {" >"}</div>
            </button>
          </div>
        </div>
        <div className="gallery-right">
          <div className="right-top">
            <h2>Featured Photos </h2>
            <div className="text">View All</div>
          </div>
          <div className="content">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
          </div>
        </div>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item xs={8} container>
          <Grid item xs={6}>
            dddddddddddddddd
          </Grid>
          <Grid item xs={6}>
            dffddddddddddssssssssss
          </Grid>
        </Grid>
        <Grid item xs={4}>
          ddddddddddddd
        </Grid>
        <Grid item xs={4}>
          dddddddddddddddd
        </Grid>
        <Grid item xs={8}>
          dffddddddddddssssssssss
        </Grid>
      </Grid> */}
    </div>
  );
}

export default galleryHome;

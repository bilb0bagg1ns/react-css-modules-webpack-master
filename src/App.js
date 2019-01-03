import React, { Component } from "react";
import styles from "./app.css";

class App extends Component {
  constructor() {
    super();
    this.w3Open = this.w3Open.bind(this);
    this.w3Close = this.w3Close.bind(this);
    this.id02SearchOne = this.id02SearchOne.bind(this);
    this.id02SearchTwo = this.id02SearchTwo.bind(this);
    this.id01SearchOne = this.id01SearchOne.bind(this);
    this.id01SearchTwo = this.id01SearchTwo.bind(this);
  }

  id01SearchOne() {
    document.getElementById("id01search").style.display = "block";
  }

  id01SearchTwo() {
    document.getElementById("id01search").style.display = "none";
  }

  id02SearchOne() {
    document.getElementById("id02search").style.display = "block";
  }

  id02SearchTwo() {
    document.getElementById("id02search").style.display = "none";
  }

  w3Open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  w3Close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div className={styles.app}>
        <div id="dedsecContainer">
          {/* MEDIUM & LARGE BANNER */}
          <header
            className={[styles["w3-row"], styles["w3-hide-small"]].join(" ")}
            style={{ height: "100px" }}>
            <div
              className={[styles["w3-container2"], styles["toplinks2"]].join(
                " "
              )}>
              <div
                className={[styles["w3-btn-group"]].join(" ")}
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "1px",
                  height: "14px",
                  zIndex: "1"
                }}>
                <a href="#body">
                  <button
                    className={[
                      styles["w3-btn"],
                      styles["w3-garrus"],
                      styles["w3-hover-light-grey"],
                      styles["w3-border-garrus"],
                      styles["w3-hover-border-garrus"],
                      styles["w3-ripple"]
                    ].join(" ")}
                    style={{
                      opacity: "0.9",
                      textDecoration: "underline!important",
                      paddingLeft: "10px",
                      paddingRight: "7px"
                    }}>
                    Skip to content
                  </button>{" "}
                </a>
                <a href="https://www.sos.state.co.us/pubs/info_center/biography.html">
                  <button
                    className={[
                      styles["w3-btn"],
                      styles["w3-garrus"],
                      styles["w3-hover-light-grey"],
                      styles["w3-border-garrus"],
                      styles["w3-hover-border-garrus"],
                      styles["w3-ripple"]
                    ].join(" ")}
                    style={{
                      opacity: "0.9",
                      textDecoration: "underline!important",
                      paddingLeft: "7px",
                      paddingRight: "7px"
                    }}>
                    About Wayne
                  </button>{" "}
                </a>
                <a href="https://www.sos.state.co.us/pubs/spanish/spanishHome.html">
                  <button
                    className={[
                      styles["w3-btn"],
                      styles["w3-garrus"],
                      styles["w3-hover-light-grey"],
                      styles["w3-border-garrus"],
                      styles["w3-hover-border-garrus"],
                      styles["w3-ripple"]
                    ].join(" ")}
                    style={{
                      opacity: "0.9",
                      textDecoration: "underline!important",
                      paddingLeft: "7px",
                      paddingRight: "10px"
                    }}>
                    Espa&#241;ol
                  </button>{" "}
                </a>
              </div>
            </div>

            <div
              className={[styles["w3-container"], styles["w3-half"]].join(" ")}
              style={{ backgroundColor: "#5f8fd7", height: "100px" }}>
              <a href="https://www.sos.state.co.us">
                {" "}
                <img
                  alt="Colorado Secretary of State logo - cube with a C in it"
                  height="95"
                  src="https://www.sos.state.co.us/pubs/images/general/logo.png"
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "3px",
                    zIndex: "1",
                    border: "0",
                    borderWidth: "0px"
                  }}
                />{" "}
              </a>
              <p
                class={[styles["w3-text-white"]].join(" ")}
                style={{
                  fontFamily: "Arial, sans-serif",
                  position: "absolute",
                  top: "-8px",
                  left: "110px",
                  zIndex: "1"
                }}>
                <span style={{ fontSize: "28px!important", lineHeight: "1.2" }}>
                  Colorado
                </span>{" "}
                <br />
                <span style={{ fontSize: "20px!important", lineHeight: "1.2" }}>
                  Secretary of State
                </span>{" "}
                <br />
                <span style={{ fontSize: "22px!important", lineHeight: "1.3" }}>
                  Wayne W. Williams
                </span>
              </p>
            </div>
            <div
              className={[styles["w3-container"], styles["w3-half"]].join(" ")}
              style={{ backgroundColor: "#5f8fd7", height: "100px" }}>
              <h2>
                <img
                  alt=""
                  className={[styles["w3-hide-medium"]].join(" ")}
                  height="100"
                  src="https://www.sos.state.co.us/pubs/images/Banner/mountainGoGresp.png"
                  style={{ position: "absolute", top: "0px", right: "0px" }}
                />
                <img
                  alt=""
                  className={[styles["w3-hide-large"]].join(" ")}
                  height="100"
                  src="https://www.sos.state.co.us/pubs/images/Banner/mountainGoGresp.png"
                  style={{
                    opacity: "0.7",
                    position: "absolute",
                    top: "0px",
                    right: "0px"
                  }}
                />
                <img
                  alt="Picture of Secretary of State Wayne W. Williams"
                  className={[styles["w3-hide-medium"]].join(" ")}
                  height="100"
                  src="https://www.sos.state.co.us/pubs/images/Banner/headResp.png"
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "425px",
                    width: "131"
                  }}
                />
              </h2>
            </div>
            {/* SEARCH MODAL */}
            <div style={{ position: "absolute", top: "67px", right: "0px" }}>
              <button
                className={[styles["w3-btn-search"]].join(" ")}
                onClick={this.id01SearchOne}
                style={{ padding: "6px" }}>
                {" "}
                <img
                  alt=""
                  height="20"
                  src="https://www.sos.state.co.us/pubs/images/general/magniGlassWhite150.png"
                  width="20"
                />{" "}
                Search{" "}
              </button>
              <div className={[styles["w3-modal"]].join(" ")} id="id01search">
                <div
                  className={[styles["w3-modal-content"]].join(" ")}
                  style={{ padding: "10px 0px !important" }}>
                  <div className={[styles["w3-container"]].join(" ")}>
                    <span
                      className={[styles["w3-closebtn"]].join(" ")}
                      onClick={this.id01SearchTwo}
                      style={{ marginBottom: "10px" }}
                      title="Close">
                      &#215;
                    </span>
                    {/*  SEARCH */}
                    {/* <script>// <![CDATA[
(function() {
    var cx = '005331801672446424340:e-a4pqdp5em';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
// ]]></script> */}
                    <div className={[styles["gcse-search"]].join(" ")} />
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* SMALL BANNER */}
          <header
            className={[
              styles["w3-row"],
              styles["w3-hide-medium"],
              styles["w3-hide-large"]
            ].join(" ")}
            style={{ height: "50px", width: "100%" }}>
            <div className="ADAhidden">
              <a href="#body">Skip to content</a>
            </div>
            <div style={{ clear: "both" }}>
              <div
                className={[styles["w3-container"]].join(" ")}
                style={{ backgroundColor: "#5f8fd7", height: "50px" }}>
                <a href="https://www.sos.state.co.us">
                  {" "}
                  <img
                    alt="Colorado Secretary of State logo - cube with a C in it"
                    height="50"
                    src="https://www.sos.state.co.us/pubs/images/general/logo.png"
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "0px",
                      zIndex: "1",
                      border: "0",
                      borderWidth: "0px",
                      width: "44"
                    }}
                  />{" "}
                </a>
                <p
                  className={[
                    styles["w3-text-white"],
                    styles["w3-medium"]
                  ].join(" ")}
                  style={{
                    position: "absolute",
                    top: "-14px !important",
                    left: "55px",
                    zIndex: "1",
                    lineHeight: "1 !important"
                  }}>
                  Colorado <br />
                  Secretary of State <br />
                  Wayne W. Williams
                </p>
              </div>
            </div>
            {/* SEARCH MODAL */}
            <div style={{ position: "absolute", top: "5px", right: "5px" }}>
              <button
                className={[styles["w3-btn"], styles["w3-plum"]].join(" ")}
                onClick={this.id02SearchOne}
                style={{ padding: "10px" }}>
                {" "}
                <img
                  alt="Magnifying glass - click to search"
                  height="21"
                  src="https://www.sos.state.co.us/pubs/images/general/magniGlassWhite150.png"
                  width="21"
                />{" "}
              </button>
              <div className={[styles["w3-modal"]].join(" ")} id="id02search">
                <div
                  className={[styles["w3-modal-content"]].join(" ")}
                  style={{ padding: "10px 0px !important" }}>
                  <div className={[styles["w3-container"]].join(" ")}>
                    <span
                      className={[styles["w3-closebtn"]].join(" ")}
                      onClick={this.id02SearchTwo}
                      style={{ marginBottom: "10px" }}>
                      &#215;
                    </span>
                    {/* SEARCH */}
                    <div className={[styles["gcse-search"]].join(" ")} />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* SideNav */}
          <nav
            className={[
              styles["w3-sidenav"],
              styles["w3-border"],
              styles["w3-fog"],
              styles["w3-card-2"]
            ].join(" ")}
            id="mySidenav"
            style={{
              display: "none",
              width: "75%",
              height: "auto",
              paddingBottom: "30px",
              position: "absolute !important",
              zIndex: "5"
            }}>
            <a
              className={[
                styles["w3-closenav"],
                styles["w3-large"],
                styles["w3-text-black"]
              ].join(" ")}
              href="javascript:void(0)"
              onClick={this.w3Close}
              style={{
                textAlign: "right",
                paddingBottom: "15px",
                paddingRight: "15px",
                paddingTop: "10px"
              }}>
              &#215; Close
            </a>
            <div className="arrowsidemenu" style={{ width: "99%" }}>
              <div>
                <a
                  className={[
                    styles["w3-card-2"],
                    styles["w3-padding-medium"],
                    styles["w3-border-bottom"],
                    styles["w3-white"],
                    styles["w3-hover-plum"],
                    styles["w3-left-align"]
                  ].join(" ")}
                  href="https://www.sos.state.co.us/pubs/business/businessHome.html"
                  style={{ marginLeft: "10px" }}
                  title="Business home">
                  {" "}
                  <span style={{ fontSize: "1em" }}>Business home</span>{" "}
                </a>
              </div>
              <div>
                <a
                  className={[
                    styles["w3-card-2"],
                    styles["w3-padding-medium"],
                    styles["w3-border-bottom"],
                    styles["w3-white"],
                    styles["w3-hover-plum"],
                    styles["w3-left-align"]
                  ].join(" ")}
                  href="#"
                  style={{ marginLeft: "10px" }}
                  title="Search">
                  {" "}
                  <span style={{ fontSize: "1em" }}>
                    Search business database
                  </span>{" "}
                </a>
              </div>
              <div>
                <a
                  className={[
                    styles["w3-card-2"],
                    styles["w3-padding-medium"],
                    styles["w3-border-bottom"],
                    styles["w3-white"],
                    styles["w3-hover-plum"],
                    styles["w3-left-align"]
                  ].join(" ")}
                  href="https://www.sos.state.co.us/pubs/business/search_tips.html"
                  style={{ marginLeft: "10px" }}
                  title="Tips for searching">
                  {" "}
                  <span style={{ fontSize: "1em" }}>
                    Tips for searching
                  </span>{" "}
                </a>
              </div>
              <div>
                <a
                  className={[
                    styles["w3-card-2"],
                    styles["w3-padding-medium"],
                    styles["w3-border-bottom"],
                    styles["w3-white"],
                    styles["w3-hover-plum"],
                    styles["w3-left-align"]
                  ].join(" ")}
                  href="https://www.sos.state.co.us/pubs/business/FAQ.html"
                  style={{ marginLeft: "10px" }}
                  title="FAQs">
                  {" "}
                  <span style={{ fontSize: "1em" }}>FAQs</span>{" "}
                </a>
              </div>
            </div>
          </nav>

          {/* Overlay */}
          <div
            className={[
              styles["w3-overlay"],
              styles["w3-animate-opacity"]
            ].join(" ")}
            id="myOverlay"
            onClick={this.w3Close}
            style={{ cursor: "pointer", zIndex: "4" }}
          />
          <span className={styles["w3opennav"]} onClick={this.w3Open}>
            <button
              className={[
                styles["w3-btn"],
                styles["w3-text-white"],
                styles["w3-plum"]
              ].join(" ")}
              style={{ padding: "8px 16px 10px 16px !important" }}>
              <img
                alt="Menu button"
                height="20px"
                src="https://www.sos.state.co.us/pubs/images/general/whtHamMenu.png"
                style={{ verticalAlign: "text-top" }}
                width="20px"
              />
              <span style={{ fontSize: "1.03em" }}> Business menu</span>
            </button>
          </span>
          {/* <script type="text/javascript">// <![CDATA[
      function w3_open() {
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
      }
      function w3_close() {
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
      }
      // ]]></script>  */}
          {/* Body */}
          <div id="dedsecBody">
            <a id="body" name="body" />
            <p
              className={styles["pageTitle"]}
              style={{ marginLeft: "20px", paddingBottom: "10px" }}>
              {" "}
              Business Search{" "}
            </p>

            <div
              className="mainContent"
              style={{
                minHeight: "100%",
                marginLeft: "36px",
                marginRight: "20px",
                paddingBottom: "40px",
                wordWrap: "break-word"
              }}>
              <p>Business paper documents processed through: date</p>
              <div style={{ marginLeft: "30px" }}>
                <p className={styles["w3-toppad"]}>
                  Search by business name, trademark, trade name, ID or document
                  number.
                </p>
                <p>
                  <input
                    className={[
                      styles["w3-input"],
                      styles["w3-border"],
                      styles["w3-round"]
                    ].join(" ")}
                    type="text"
                  />
                </p>
                <p>
                  <input
                    className={[
                      styles.w3input,
                      styles.w3border,
                      styles.w3round
                    ].join(" ")}
                    type="text"
                  />
                </p>
                <p>
                  <button className={styles["w3-btn-done"]}>Search</button>
                </p>
              </div>
            </div>
            <div className={styles["w3-toppad"]}>
              <p className={styles["w3-toppad"]}>
                <strong>More search options:</strong>
              </p>
              <ul className={styles["w3-ul"]}>
                <li>
                  <a href="https://www.sos.state.co.us/biz/NameCriteria.do">
                    Name availability search
                  </a>
                </li>
                <li>
                  <a href="https://www.sos.state.co.us/biz/AdvancedSearchCriteria.do">
                    Advanced search
                  </a>
                </li>
                <li>
                  <a href="https://www.sos.state.co.us/biz/bizSurveySearch.do">
                    Business survey information search
                  </a>
                </li>
                <li>
                  <a href="https://www.sos.state.co.us/biz/AdvancedTrademarkSearchCriteria.do">
                    Trademark advanced search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer */}
          <div id="dedsecFooter">
            <div
              className={[styles["topFixed"], styles["w3-hide-small"]].join(
                " "
              )}
              style={{ bottom: "20px" }}>
              <a href="#top">
                <button
                  className={[
                    styles["w3-btn"],
                    styles["w3-medium"],
                    styles["w3-wheatley"],
                    styles["w3-hover-theSage"]
                  ].join(" ")}>
                  ^ Top
                </button>
              </a>
            </div>
            <div
              className={[
                styles["topFixed"],
                styles["w3-hide-medium"],
                styles["w3-hide-large"]
              ].join(" ")}
              style={{ bottom: "1px" }}>
              <a href="#top">
                <button
                  className={[
                    styles["w3-btn"],
                    styles["w3-medium"],
                    styles["w3-padding-large"],
                    styles["w3-light-grey"],
                    styles["w3-opacity"]
                  ].join(" ")}
                  style={{ opacity: "0.8" }}>
                  ^ Top
                </button>
              </a>
            </div>

            <footer id="myFooter" style={{ position: "relative", zIndex: "0" }}>
              <div
                className={[styles["w3-row"], styles["w3-padding-12"]].join(
                  " "
                )}>
                <div
                  className={[styles["w3-container"], styles["w3-garrus"]].join(
                    " "
                  )}>
                  <p className={[styles["w3-text-white"]]}>
                    Colorado Secretary of State | 1700 Broadway, Suite 200,
                    Denver CO 80290 |{" "}
                    <a href="tel:303-894-2200" style={{ color: "#fff" }}>
                      303-894-2200
                    </a>
                  </p>
                </div>
                <div
                  className={[
                    styles["w3-container"],
                    styles["w3-black"],
                    styles["w3-hide-small"]
                  ].join(" ")}>
                  <p className={[styles["w3-medium"]]}>
                    <a
                      className={[
                        styles["w3-text-white"],
                        styles["w3-hover-text-wheatley"]
                      ].join(" ")}
                      href="  https://www.sos.state.co.us/pubs/info_center/terms.html">
                      Terms &amp; conditions
                    </a>{" "}
                    |
                    <a
                      className={[
                        styles["w3-text-white"],
                        styles["w3-hover-text-wheatley"]
                      ].join(" ")}
                      href="https://www.sos.state.co.us/pubs/info_center/compatibility.html">
                      Browser compatibility
                    </a>
                  </p>
                </div>
              </div>
            </footer>
            {/* <script charset="utf-8" src="https://cdn3.userzoom.com/uz.js?cuid=E53487C043F6DF1188490022196C4538" type="text/javascript"></script>
<script type="text/javascript">// <![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71878912-1', 'auto');
  ga('send', 'pageview');
// ]]></script>           */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

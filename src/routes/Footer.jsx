import Grid from "@mui/material/Grid";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <h4 className="lets-connect"> Let's Connect!</h4>
      <Grid
        container
        className="grid-container"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <div className="contact-item">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/colleen-murray-161314230/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa-solid fa-people-arrows-left-right fa-2x"></i>
              LinkedIn
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <a className="contact-link" href="mailto:colleenkhm@gmail.com">
              <i className="fa-solid fa-envelope fa-2x"></i>
              Email
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <a className="contact-link" href="tel:5034139680">
              <i className="fa-solid fa-phone fa-2x"></i>
              Phone
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <a
              className="contact-link"
              href="https://github.com/colleenkhm"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <i className="fa-solid fa-desktop fa-2x"></i>
              GitHub
            </a>
          </div>
        </Grid>
      </Grid>
      <div className="built-using">built using React.js and MUI</div>
    </footer>
  );
}

export default Footer;


const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <Link to={"/"}><img src="../assets/img/logo.png" alt="logo1" border="0"/></Link>
        <div className="redes">
        <a><img src="../assets/img/Fb.png" alt="facebook" border="0"/></a>
          <a><img src="../assets/img/Ig.png" alt="instagram" border="0"/></a>
          <a><img src="../assets/img/WA.png" alt="whatsapp" border="0"/></a>
          <a><img src="../assets/img/YT.png" alt="youtube" border="0"/></a>
          <a><img src="../assets/img/TK.png" alt="tiktok" border="0"/></a>
      </div>
      <br></br>
      <div className="copyright">
          <hr></hr>
          <p className="text-body">©2023 Jimena Simanca</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} UniReg Student Grade Portal</p>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
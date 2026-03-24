function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        marginTop: "20px",
        borderTop: "1px solid #ddd",
        color: "#777",
        fontSize: "14px",
      }}
    >
      <p>© {ano} — Feito com React</p>
    </footer>
  );
}

export default Footer;

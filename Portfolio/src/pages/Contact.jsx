function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-secondary text-gray-300"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me for collaborations or just to say hello!
          😊
        </p>
        <a
          href="mailto:your-email@example.com"
          className="text-primary text-xl underline"
        >
          your-email@example.com
        </a>
      </div>
    </div>
  );
}

export default Contact;

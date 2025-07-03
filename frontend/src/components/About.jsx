const About = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-6 text-center">
        About PassOp
      </h1>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
        <strong>PassOp</strong> is a modern and secure password manager web app
        designed to help users store, manage, and protect their login
        credentials with ease. Whether you're managing a few passwords or
        hundreds, PassOp ensures that your data stays safe, encrypted, and
        accessible only to you.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
        With features like password visibility toggle, encrypted storage, and
        easy-to-use interface, PassOp helps users take control of their digital
        identity. The app is lightweight, fast, and responsive across all
        devices — from mobile phones to desktops.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
        Our Mission
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        Our mission is to make password management simple, secure, and
        accessible for everyone. In a world where cyber threats are increasing,
        we believe that strong password hygiene should be easy to practice.
        PassOp empowers users to store credentials safely without relying on
        memory or risky practices like writing passwords down.
      </p>
    </div>
  );
};

export default About;

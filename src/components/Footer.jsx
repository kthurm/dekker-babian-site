const Footer = () => {
  return (
    <div className="footer">
      <div className="w-full z-50">
        <div className="max-w-screen-xl mx-auto pt-4 pb-8 px-5 lg:px-2.5 grid md:grid-cols-4">
          <div className="flex flex-col space-y-4 text-primary font-light text-sm">
            <p>
              <a class="underline " href="/Privacy">
                Privacy Policy
              </a>
            </p>
            <p> ©Dekker Babian Ltd, 1988 - {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-bord-100 mt-24 py-6">
      <div className="flex items-center justify-center gap-2 text-secondary-200 font-mullish text-center font-bold text-sm pb-3">
        <a href="mailto:ivnriizky@gmail.com">Mail</a>
        <a href="https://wa.me/6285702330305">Phone</a>
      </div>
      <h5 className="text-center font-bold font-mullish text-secondary-300 text-base">
        © Copyright {dayjs().format("YYYY")} Ivan Rizky Saputra.
      </h5>
    </footer>
  );
};

export default Footer;

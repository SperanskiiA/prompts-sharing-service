import React from 'react';

const Footer = () => {
  return (
    <section className="w-full items-center flex-col gap-4 self-end">
      <h3 className=" my-4 font-semibold text-center blue_gradient py-4">
        Developed by{' '}
        <a
          href="https://sp-aron-webdev.vercel.app/"
          target="_blank"
          className="font-bold orange_gradient"
        >
          sp_aron
        </a>
      </h3>
      <div></div>
    </section>
  );
};

export default Footer;

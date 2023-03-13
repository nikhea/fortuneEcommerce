import style from "../style/information.module.scss";

const Information = () => {
  return (
    <div className={style.info}>
      <h1>information about us </h1>
      <p>
        We are dedicated to enhancing your personal style and instilling
        confidence in you. Hekto Furniture is all about empowering you to look
        and feel your best.
      </p>
      <p className="mt-2">
        We are committed to providing exceptional customer service and creating
        a seamless shopping experience for our customers. Our team of experts is
        always available to assist you with any questions or concerns you may
        have, and we strive to make every interaction with our brand a positive
        one.
      </p>
    </div>
  );
};

export default Information;

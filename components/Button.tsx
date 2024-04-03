const Button = ({ styles }: { styles?: string }) => (
  <button
    type="button"
    className={`${styles} text-primary outline-none rounded-xl font-poppins font-medium text-[18px]  py-4 px-6 bg-blue-gradient`}
  >
    Get Started
  </button>
);

export default Button;

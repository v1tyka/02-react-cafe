import css from "./cafeInfo.module.css";

const CafeInfo = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default CafeInfo;

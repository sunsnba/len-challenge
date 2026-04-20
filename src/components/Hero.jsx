import './Hero.css';
import illustration from '../assets/hero-illustration.svg';
import chevron from '../assets/icon-chevron-right.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__pill">
          <span className="hero__badge">WE&apos;RE HIRING</span>
          <a href="#" className="hero__pill-link">
            Visit our careers page
            <img src={chevron} alt="" />
          </a>
        </div>

        <h1 className="hero__heading">
          A better way to <span>ship web apps</span>
        </h1>

        <p className="hero__body">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>

        <form className="hero__form">
          <input
            type="email"
            placeholder="Enter your email"
            className="hero__input"
          />
          <button type="submit" className="hero__submit">
            Start free trial
          </button>
        </form>

        <p className="hero__helper">
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our <a href="#">terms of service</a>.
        </p>
      </div>

      <div className="hero__image-wrap">
        <img
          src={illustration}
          alt="Hero illustration"
          className="hero__image"
        />
      </div>
    </section>
  );
};

export default Hero;
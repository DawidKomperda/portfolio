import styles, {layout } from '../style';
import { dog } from '../assets';


const About = () => {
  return (
    <section id="about" className={`${styles.boxWidth} ${styles.padding} flex-col sm:flex-row md:w-10/12 md:mx-auto`}>
      <div className={`${styles.flexCenter} flex-col md:flex-row w-full`}>
        <img src={dog} alt="dog" className={` w-[350px] h-auto p-4 xs:w-[550px] xs:h-[350px]`} />
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.title}`}> Hello! my name is Dawid, <br className='sm:block hidden'/> I'm a software developer </h2>
          <p className="font-poppins font-normal text-lg xs:text-2xl">
          I have always been fascinated by the power of technology to solve problems and make our lives easier.
          I love the challenge of building software and seeing it come to
          life, and I'm always looking for new ways
          to improve my skills and stay up-to-date with the latest technologies
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
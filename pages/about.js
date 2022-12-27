import styles from "../styles/about.module.scss"
import dynamic from 'next/dynamic';
import OptionGenrator from "../components/radialOption"
const About = ({skill}) => {
    const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });



return (<>
    <div className={`${styles.container} grid grid-cols-3 gap-4`}>

{skill.map((item,index)=>(
   

    <div className={`${styles.CardLang} bg-slate-100`} key={index}>
    <h1 className={styles.textSkill}>{item.title}</h1>
    <img className={styles.imgPr} src={item.imgSrc} alt={item.title} />
<ApexCharts options={OptionGenrator(item)} series={[parseInt(item.progressSkill)]} type="radialBar" width={292} height={171} />
 
    </div>
))}

    </div>
    </>  );
}
export async function getStaticProps(context) {
    const res= await fetch('http://localhost:3000/api/listSkill')
    const skill = await res.json()
  return {
    props:{skill :skill.data}
  }
}
export default About;
import styles from "../styles/about.module.scss"
import dynamic from 'next/dynamic';
import OptionGenrator from "../components/radialOption"
import {SkillList} from '../data/listSkill'
import Image from "next/image";
const About = ({}) => {
    const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


return (<>
    <div className={`${styles.container} grid grid-cols-3 gap-4`}>

{SkillList.data.map((item,index)=>(
   

    <div className={`${styles.CardLang} bg-slate-100`} key={index}>
    <h1 className={styles.textSkill}>{item.title}</h1>
    <img className={styles.imgPr} src={item.imgSrc} alt={item.title} />
<ApexCharts options={OptionGenrator(item)} series={[parseInt(item.progressSkill)]} type="radialBar" width={292} height={171} />
 
    </div>
))}

    </div>
    </>  );
}

export default About;
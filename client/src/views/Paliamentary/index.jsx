import InfoCard from '../../components/InfoCard'
import CardComponent from '../../components/CardComponent'

const Paliamentary = () => {
  return (
    <div style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 30}}>
      <div className="" style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <InfoCard />
      </div>
      <div className="">
        <div style={{height: 30, width: '100%', background: '#022C06', marginBottom: 5}}></div>
        <div className="" style={{display: 'flex', flexWrap: "wrap", flexDirection: 'row', gap: 30, justifyContent: 'center'}}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
      
    </div>
  )
}

export default Paliamentary

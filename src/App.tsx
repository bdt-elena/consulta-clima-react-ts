import styles from './App.module.css'
import Form from './components/From/Form'
import useWeather from './hooks/useWeather'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import Spinner from './components/Spinner/Spinner'
import Alert from './components/Alert/Alert'

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}></Form>
        { loading && <Spinner></Spinner>}
        { hasWeatherData &&  <WeatherDetail weather={weather}></WeatherDetail> }
        { notFound && <Alert>Ciudad no encontrada</Alert> }
      </div>
    </>
  )
}

export default App

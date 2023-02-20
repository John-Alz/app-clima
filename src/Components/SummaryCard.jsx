import moment from 'moment'

export default function SummaryCard({day}) {

    const REACT_APP_ICON_URL = 'http://openweathermap.org/img/wn/'

    let day_icon = `${REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`

  return (
    <li className="container p-2 flex items-center justify-center bg-white rounded-lg my-auto mr-1">
            <div className="my-auto">
                <p className="font-bold text-lg text-slate-900 ">{Math.round(day.main.temp)}&deg;C</p>
                <p className="text-sm text-gray-800 tracking-widest">{day.weather[0].main}
                    <img src={day_icon} className="w-1/4 inline" />
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{day.weather[0].description}</p>
                <p className="tracking-wider">{moment(day.dt_txt).format("dddd hh:mm")}am</p>
            </div>
        </li>
  )
}

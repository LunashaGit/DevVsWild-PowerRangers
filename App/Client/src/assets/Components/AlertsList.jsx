import AlertCancel from './AlertCancel'
import axios from 'axios'

function AlertsList(props) {
    const Signals = [
        {
            id: 1,
            title: 'Poisonous plant',
            description:
                'At this location, there are poisonous or irritating plants.',
            url: '../src/assets/images/poison.png',
        },
        {
            id: 2,
            title: 'Slippery Path',
            description:
                'At this location, the path can be slippery or dangerous to walk on.',
            url: '../src/assets/images/slippery.png',
        },
        {
            id: 3,
            title: 'Blocked Path',
            description:
                'At this location, the path stop and leads nowhere or might be a cliffs.',
            url: '../src/assets/images/blocked.png',
        },
        {
            id: 4,
            title: 'Challenging Path',
            description:
                'At this location, the path requires a climbing equipment (shoes spikes, climbing gears) ',
            url: '../src/assets/images/challenging.png',
        },
        {
            id: 5,
            title: 'Dangerous Animals',
            description:
                'At this location, you might encounter a wild animal. (black bear, mountain lions and rattlesnakes,… )',
            url: '../src/assets/images/bear.png',
        },
        {
            id: 6,
            title: 'Dangerous Insects',
            description:
                'At this location, you might encounter infectious insects. (hornet, mosquitos, wasp nest) ',
            url: '../src/assets/images/wasp.png',
        },
    ]

    const Alerts = [
        {
            id: 1,
            title: 'Wild fires',
            description:
                'ALERT: Severe wildfires in your area. We will send updates as conditions develop, please evacuate immediately. Please call the emergency number for assistance or check local media.',
            url: '../src/assets/images/fire.png',
        },
        {
            id: 2,
            title: 'Zombie invasion  ',
            description:
                'ALERT: Civil authorities in your area have reported that the bodies of the dead are returning to life and attacking your area. Follow the message on screen that will be updated as more information becomes available. Do not attempt to approach or apprehend these bodies, as they are considered extremely dangerous and life-threatening.',
            url: '../src/assets/images/zombi.png',
        },
    ]

    const SignalsAPI = async (e) => {
        const response = await axios
            .post('http://127.0.0.1:8080/api/signals', {
                type: e.title,
                lon: props.startCoords.lon,
                lat: props.startCoords.lat,
            })
            .then((res) => {
                props.handleAlertId(res.data._id)
                props.setUnShowAlert(!props.unShowAlert)
            })
    }
    const AlertAPI = async (e) => {
        console.log(e)
        const response = await axios
            .post('http://127.0.0.1:8080/api/alerts', {
                title: e.title,
                description: e.description,
                lon: props.startCoords.lon,
                lat: props.startCoords.lat,
            })
            .then((res) => {
                props.handleAlertId(res.data._id)
                props.setUnShowAlert(!props.unShowAlert)
            })
    }
    return (
        <div
            className="alert alert-danger w-screen h-screen bg-white dark:bg-greyNight z-[1] flex flex-col justify-items-center fixed inset-0"
            role="alert"
        >
            <h2 className="text-blackNero dark:text-white text-xl font-thin text-center m-14">
                Send your alert
            </h2>
            <div className="flex flex-col gap-16 px-5">
                <ul className="list-group flex flex-wrap gap-x-4 gap-y-16 justify-center">
                    {Signals.map((Signal) => (
                        <li
                            className="list-group-item w-20 h-20 text-center text-white bg-black rounded-full"
                            key={Signal.id}
                            onClick={() => {
                                SignalsAPI(Signal)
                            }}
                        >
                            <img src={Signal.url} />
                            <p className="text-[10px] pt-2">{Signal.title}</p>
                        </li>
                    ))}
                </ul>
                <ul className="list-group flex flex-wrap gap-x-4 gap-y-16 justify-center left-1/4 right-1/4">
                    {Alerts.map((alert) => (
                        <li
                            className="list-group-item w-20 h-20 text-center text-white bg-black rounded-full"
                            key={alert.id}
                            onClick={() => {
                                AlertAPI(alert)
                            }}
                        >
                            <img src={alert.url} />
                            <p className="text-[10px] pt-2">{alert.title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <AlertCancel onClick={props.onClick} />
        </div>
    )
}

export default AlertsList

import AlertCancel from './AlertCancel'
import axios from 'axios'
function AlertsList(props) {
    const Signals = [
        {
            id: 1,
            title: 'Poisonous plant',
            description:
                'At this location, there are poisonous or irritating plants.',
        },
        {
            id: 2,
            title: 'Slippery Path',
            description:
                'At this location, the path can be slippery or dangerous to walk on.',
        },
        {
            id: 3,
            title: 'Blocked Path',
            description:
                'At this location, the path stop and leads nowhere or might be a cliffs.',
        },
        {
            id: 4,
            title: 'Challenging Path',
            description:
                'At this location, the path requires a climbing equipment (shoes spikes, climbing gears) ',
        },
        {
            id: 5,
            title: 'Dangerous Animals',
            description:
                'At this location, you might encounter a wild animal. (black bear, mountain lions and rattlesnakes,… )',
        },
        {
            id: 6,
            title: 'Dangerous Insects',
            description:
                'At this location, you might encounter infectious insects. (hornet, mosquitos, wasp nest) ',
        },
    ]

    const Alerts = [
        {
            id: 1,
            title: 'Wild fires',
            description:
                'ALERT: Severe wildfires in your area. We will send updates as conditions develop, please evacuate immediately. Please call the emergency number for assistance or check local media.',
        },
        {
            id: 2,
            title: 'Zombie invasion  ',
            description:
                'ALERT: Civil authorities in your area have reported that the bodies of the dead are returning to life and attacking your area. Follow the message on screen that will be updated as more information becomes available. Do not attempt to approach or apprehend these bodies, as they are considered extremely dangerous and life-threatening.',
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
                console.log(res)
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
                console.log(res)
            })
    }
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
            }}
            className="alert alert-danger"
            role="alert"
        >
            <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[100px]">
                {Alerts.map((alert) => (
                    <li
                        className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
                        key={alert.id}
                        onClick={() => AlertAPI(alert)}
                    >
                        <h3>{alert.title}</h3>
                    </li>
                ))}
            </ul>

            <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[250px]">
                {Signals.map((Signal) => (
                    <li
                        className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
                        key={Signal.id}
                        onClick={() => SignalsAPI(Signal)}
                    >
                        <h3>{Signal.title}</h3>
                    </li>
                ))}
            </ul>

            <AlertCancel onClick={props.onClick} />
        </div>
    )
}

export default AlertsList

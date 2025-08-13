import {CalendarIcon, MapPinIcon} from '@heroicons/react/20/solid'

const positions = [
    {
        id: 1,
        title: 'Backend Developer',
        type: 'Full-time',
        location: 'Hybrid',
        department: 'Engineering',
        closeDate: '2023-04-01',
        closeDateFull: 'April 1, 2023',
    },
    {
        id: 2,
        title: 'Fullstack Developer',
        type: 'Full-time',
        location: 'Hybrid',
        department: 'Engineering',
        closeDate: '2023-04-01',
        closeDateFull: 'April 1, 2023',
    },
    {
        id: 3,
        title: 'Devops Engineer',
        type: 'Full-time',
        location: 'Hybrid',
        department: 'Design',
        closeDate: '2023-04-01',
        closeDateFull: 'April 1, 2023',
    },
]

export default function Jobb() {
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {positions.map((position) => (
                    <li key={position.id}>
                        <a href={`mailto:application@codelabs.se?subject=${position.title}`}
                           className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="truncate text-sm font-medium text-indigo-600">{position.title}</p>
                                    <div className="ml-2 flex shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                            {position.type}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        {/*<p className="flex items-center text-sm text-gray-500">*/}
                                        {/*    <UsersIcon className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />*/}
                                        {/*    {position.department}*/}
                                        {/*</p>*/}
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0">
                                            <MapPinIcon className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                                                        aria-hidden="true"/>
                                            {position.location}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <CalendarIcon className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                                                      aria-hidden="true"/>
                                        <p>
                                            <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

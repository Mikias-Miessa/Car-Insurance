import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import user from "../../../public/assets/user.png"
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice'
import { useRouter } from 'next/navigation';
const ProfileIcon = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logout())
        router.push('/home')
    }
  return (
    <Menu as="div" className="relative">
    <div>
        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">Open user menu</span>
            <Image src={user} alt='user' height={28} width={32} className="rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" />
        </Menu.Button>
    </div>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link href='/profile' >
                <Menu.Item>
                    {({ active }) => (
                        <div className={`${active ? 'bg-gray-200' : "" } rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}>
                                Your Profile
                        </div>
                    )}
                </Menu.Item>
            </Link>
            <Link href='/change-password' >
                <Menu.Item>
                    {({ active }) => (
                        <div className={`${active ? 'bg-gray-200' : "" } rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}>
                                change Password
                        </div>
                    )}
                </Menu.Item>
            </Link>
            <Menu.Item>
                {({ active }) => (
                    <div
                        onClick={logoutUser}
                        className={`${active ? 'bg-gray-200' : ""} rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}
                    >
                        Sign Out
                    </div>
                )}
            </Menu.Item>
        </Menu.Items>
    </Transition>
</Menu>
  )
}

export default ProfileIcon

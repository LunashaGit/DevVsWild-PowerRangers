import {useState} from "react";

export default function AlertPopUp(props) {

    return (
        <section className="flex fixed w-screen h-screen bg-blackNero bg-opacity-80 inset-0 z-[7000]">
            <div className="flex flex-col px-16 items-center justify-center">
                <div className="z-[6000]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-[#E65728]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <div className="flex flex-col items-center text-white">
                    <h1 className="pt-5 pb-5 text-2xl font-bold">{props.alert.title}</h1>
                    <p className="text-center pb-8">{props.alert.description}</p>
                </div>
                <button
                    className="bg-[#E65728] px-8 py-3 rounded-3xl font-bold text-white"
                    onClick={() => props.setShowAlertPopUp(false)}
                >
                    RUN RIGHT NOW
                </button>
            </div>
        </section>
    )
}
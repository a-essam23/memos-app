import { useState } from "react";

export default function Task({ name, value }) {
    const [previousValue, getPreviousValue] = useState(null);
    return (
        <div className="w-72 h-52 rounded-xl shadow-xl bg-white items-center">
            <div className="font-bold rounded-xl border-b-4 text-center text-3xl p-4 bg-amber-500 text-white">
                Cardio
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(11);
                }}
                className="p-4 gap-4 flex flex-col justify-center items-center"
            >
                <input
                    name="cardio"
                    type={"number"}
                    className="bg-gray-600 shadow-md w-full h-8 rounded-2xl text-white text-center"
                ></input>
                <button
                    type="submit"
                    className="shadow-md border-b-2 w-max bg-amber-500 p-2 rounded-xl text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

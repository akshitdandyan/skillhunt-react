import { usePopupStore } from "../store";

export default function Popup() {
    const popupStore = usePopupStore();
    return (
        <div
            className={`${
                popupStore.popup.type === "success"
                    ? "bg-green-600"
                    : "bg-red-800"
            } text-white rounded-md duration-200 fixed ${
                popupStore.popup.show ? "bottom-7" : "-bottom-32"
            }  right-7 py-1 px-4`}
        >
            {popupStore.popup.message}
        </div>
    );
}

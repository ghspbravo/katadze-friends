import React from 'react'
import ReactDOM from 'react-dom'

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
        || key === 189 || key === 32
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

export const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event) || (event.shiftKey === true && (event.keyCode !== 57 && event.keyCode !== 48 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 187))) {
        event.preventDefault();
    }
};

export const formatToPhone = (event) => {
    if (isModifierKey(event)) return

    return event.target.value
    // const input = event.target.value.replace(/\D/g, '').substring(1, 12); // First ten digits of input only
    // const zip = input.substring(0, 3);
    // const middle1 = input.substring(3, 5);
    // const middle2 = input.substring(5, 7);
    // const last = input.substring(7, 10);

    // if (input.length > 7) { return `+7 (${zip}) ${middle1} ${middle2} ${last}`; }
    // else if (input.length > 5) { return `+7 (${zip}) ${middle1} ${middle2}`; }
    // else if (input.length > 3) { return `+7 (${zip}) ${middle1}`; }
    // else if (input.length > 0) { return `+7 (${zip}`; }
};

export const formatToDate = (event) => {
    if (isModifierKey(event)) return

    const input = event.target.value.replace(/\D/g, '').substring(0, 8); // First ten digits of input only
    const day = input.substring(0, 2);
    const mounth = input.substring(2, 4);
    const year = input.substring(4, 8);

    if (input.length > 4) { return `${day}.${mounth}.${year}`; }
    else if (input.length > 2) { return `${day}.${mounth}`; }
    else if (input.length > 0) { return `${day}` }
};

export const showPopup = inner => {

    let popup = <div onClick={(e) => {
        if (e.target === document.querySelector(".popup-wrapper")) hidePopup();
    }} className='popup-wrapper'>
        <div className="popup container">
            <div onClick={hidePopup} className="close-popup">X</div>
            {inner}
        </div>
    </div>

    // let inner = document.querySelector(`#${innerId}`);
    // let popupWindow = document.createElement("div");
    // let popup = document.createElement("div");
    // let closePopup = document.createElement("div");

    // popupWindow.className = "popup-wrapper";
    // popup.className = "popup container";
    // closePopup.className = "close-popup";

    // popup.innerHTML = inner.innerHTML
    // closePopup.innerHTML = 'X'

    // popupWindow.onclick = e => {
    //     if (e.target === popupWindow) hidePopup();
    // }

    // closePopup.onclick = () => hidePopup();

    // popup.appendChild(closePopup)
    // popupWindow.appendChild(popup)

    // document.querySelector("body").appendChild(popup);

    ReactDOM.render(popup, document.querySelector(".popupMessage"));
    document.querySelector("body").style.overflow = "hidden";
};

const hidePopup = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('.popupMessage'))
    // let popupWindow = document.querySelector(".popup-wrapper");
    // popupWindow.parentNode.removeChild(popupWindow)
    document.querySelector("body").style.overflow = "auto";
};

export const showSuccess = (message = '', callback = null) => {
    if (callback !== null) setTimeout(callback, 3000)
    return <div style={{ textAlign: 'center' }}>
        <h1>Успех!</h1>
        <p>{message}</p>
    </div>
}

export const showError = (message = '', callback = null) => {
    if (callback !== null) setTimeout(callback, 3000)
    return <div style={{ textAlign: 'center' }}>
        <h1>Упс, что-то пошло не по плану...</h1>
        <p>{message}</p>
    </div>
}

export const showLoading = (message = 'Магия случится через 3..2..1...', callback = null) => {
    if (callback !== null) setTimeout(callback, 3000)
    return <div style={{ textAlign: 'center' }}>
        <h1>Подождите...</h1>
        <p>{message}</p>
    </div>
}
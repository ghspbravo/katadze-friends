import React from 'react'

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
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
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};

export const formatToPhone = (event) => {
    if (isModifierKey(event)) return

    const input = event.target.value.replace(/\D/g, '').substring(1, 12); // First ten digits of input only
    const zip = input.substring(0, 3);
    const middle1 = input.substring(3, 5);
    const middle2 = input.substring(5, 7);
    const last = input.substring(7, 10);

    if (input.length > 7) { return `+7 (${zip}) ${middle1} ${middle2} ${last}`; }
    else if (input.length > 5) { return `+7 (${zip}) ${middle1} ${middle2}`; }
    else if (input.length > 3) { return `+7 (${zip}) ${middle1}`; }
    else if (input.length > 0) { return `+7 (${zip}`; }
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

export const showPopup = innerId => {
    let inner = document.querySelector(`#${innerId}`);
    let popupWindow = document.createElement("div");
    let popup = document.createElement("div");
    let closePopup = document.createElement("div");

    popupWindow.className = "popup-wrapper";
    popup.className = "popup";
    closePopup.className = "close-popup";

    popup.innerHTML = inner.innerHTML
    closePopup.innerHTML = 'X'

    popupWindow.onclick = e => {
        if (e.target === popupWindow || window.innerWidth < 992) hidePopup();
    };
    closePopup.onclick = () => hidePopup();

    popup.appendChild(closePopup)
    popupWindow.appendChild(popup)

    document.querySelector("body").appendChild(popupWindow);
    document.querySelector("body").style.overflow = "hidden";
};

const hidePopup = () => {
    let popupWindow = document.querySelector(".popup-wrapper");
    popupWindow.parentNode.removeChild(popupWindow)
    document.querySelector("body").style.overflow = "auto";
};

export const showSuccess = (message = '', callback = null) => {
    if (callback !== null) setTimeout(callback, 3000)
    return <div style={{ textAlign: 'center' }}>
        <h1>Успех!</h1>
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